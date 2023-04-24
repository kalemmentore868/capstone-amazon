import { useEffect, useState } from "react";
import axios from "axios";
import { addItemToCart, postAddToCart, setBill } from "../redux/cart";
import { useAppDispatch, useAppSelector } from "../redux/redux-hooks";
import { errorToast, successfulToast } from "./toasties";
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

export const formatTime = (isoString: string) => {
  const date = new Date(isoString);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  const hours = date.getHours() % 12 || 12;
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const ampm = date.getHours() >= 12 ? "pm" : "am";

  const formattedDate = `${year}-${month}-${day}`;
  const formattedTime = `${hours}:${minutes}${ampm}`;

  return {
    formattedDate,
    formattedTime,
  };
};
