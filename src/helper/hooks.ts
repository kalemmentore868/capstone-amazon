import { apiClient, queryClient } from "./api";
import { useMutation, useQuery, UseQueryResult } from "react-query";
import { CategoryType, ProductType } from "./types";
import { useSearchParams } from "react-router-dom";
import { errorToast, successfulToast } from "./toasties";

export function useProducts(): UseQueryResult<ProductType[]> {
  const [search] = useSearchParams();
  return useQuery(
    ["products", search.toString()],
    () =>
      apiClient
        .get("products", {
          params: search,
        })
        .then((res: any) => res.data.data),
    {
      staleTime: 120000,
    }
  );
}

export function useHeaderProducts(): UseQueryResult<ProductType[]> {
  return useQuery(
    ["headerProducts"],
    () => apiClient.get("products").then((res: any) => res.data.data),
    {
      staleTime: 120000,
    }
  );
}

export function useNewProducts(): UseQueryResult<ProductType[]> {
  const [search] = useSearchParams();
  return useQuery(
    ["newProducts", search.toString()],
    () =>
      apiClient
        .get("products?sort=newest+arrivals", {
          params: search,
        })
        .then((res: any) => res.data.data),
    {
      staleTime: 120000,
    }
  );
}

export function useBestSellers(): UseQueryResult<ProductType[]> {
  const [search] = useSearchParams();
  return useQuery(
    ["bestSellers"],
    () =>
      apiClient
        .get("products?sort=popularity", {
          params: search,
        })
        .then((res: any) => res.data.data),
    {
      staleTime: 120000,
    }
  );
}

export function useSingleProduct(id: number): UseQueryResult<ProductType> {
  return useQuery(["product"], () =>
    apiClient.get(`products/${id}`).then((res: any) => res.data.data)
  );
}

export const useDeleteProduct = () => {
  const deleteProductMutation = useMutation(
    (productId: number) => apiClient.delete(`/products/${productId}`),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("products");
        successfulToast(`Product was deleted`);
      },
      onError: () => {
        errorToast("Something went wrong");
      },
    }
  );

  const handleDelete = async (productId: number) => {
    await deleteProductMutation.mutateAsync(productId);
  };

  return { handleDelete, isLoading: deleteProductMutation.isLoading };
};

export function useCategories(): UseQueryResult<CategoryType[]> {
  return useQuery(["categories"], () =>
    apiClient.get("categories").then((res: any) => res.data.data)
  );
}

export function useSingleCategory(id: number): UseQueryResult<CategoryType> {
  return useQuery(["category"], () =>
    apiClient.get(`categories/${id}`).then((res: any) => res.data.data)
  );
}
