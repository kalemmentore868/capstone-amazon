import { Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
import { UserType } from "../helper/types";
import { setCart } from "./cart";

export const fetchCart = async (user: UserType) => {
  const { id, token } = user;
  const headers = { Authorization: `Bearer ${token}` };
  const response = await axios.get(
    `${process.env.REACT_APP_API_ENDPOINT}/cart/${id}`,
    { headers }
  );
  return response.data.data;
};

export const saveToLocalStorage = async (
  user: UserType,
  dispatch: Dispatch
) => {
  localStorage.setItem("user", JSON.stringify(user));

  const cart = await fetchCart(user);
  if (cart) {
    dispatch(setCart(cart));
    localStorage.setItem("cart", JSON.stringify(cart));
  }
};
