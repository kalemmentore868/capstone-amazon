import { apiClient } from "./api";
import { useQuery, UseQueryResult } from "react-query";
import { CategoryType, ProductType } from "./types";
import { useSearchParams } from "react-router-dom";

export function useProducts(): UseQueryResult<ProductType[]> {
  const [search] = useSearchParams();
  return useQuery(
    ["products", search.toString()],
    () =>
      apiClient
        .get("products", {
          params: search,
        })
        .then((res) => res.data.data),
    {
      staleTime: 120000,
    }
  );
}

export function useCategories(): UseQueryResult<CategoryType[]> {
  return useQuery(["categories"], () =>
    apiClient.get("categories").then((res) => res.data.data)
  );
}
