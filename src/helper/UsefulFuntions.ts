import { useEffect, useState } from "react";
import axios from "axios";
import { addItemToCart, postAddToCart, setBill } from "../redux/cart";
import { useAppDispatch, useAppSelector } from "../redux/redux-hooks";
import { successfulToast } from "./toasties";
import { ProductType } from "./types";

export const useAddToCart = (product: ProductType | undefined) => {
  const user = useAppSelector((state) => state.user.user);

  const dispatch = useAppDispatch();
  let cartItem: any;
  if (product) {
    cartItem = {
      productId: product.id,
      name: product.title,
      quantity: 1,
      price: product.price,
      img_url: product.img_url,
    };
  }

  const addToCart = () => {
    if (user && user.token && product) {
      const cartData = {
        productId: product.id,
        userId: user.id,
        quantity: 1,
        token: user.token,
      };
      dispatch(postAddToCart(cartData));
    } else {
      dispatch(addItemToCart(cartItem));
      dispatch(setBill());
    }
    successfulToast("Added To Cart");
  };

  return { addToCart };
};

export const useFetchSingleProduct = (
  method: string,
  url: string,
  body: Object
) => {
  const [isLoading, setIsLoading] = useState(true);
  const [apiData, setApiData] = useState<ProductType>();
  const [apiError, setApiError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios({
          method: method,
          url: url,
          data: body,
        });
        const data: ProductType = await response?.data.data;

        setApiData(data);
        setIsLoading(false);
      } catch (error) {
        // @ts-ignore
        setApiError(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url, method, body]);

  return { isLoading, apiData, apiError };
};
