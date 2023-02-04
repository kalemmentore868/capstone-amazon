import axios from "axios";
import { Dispatch } from "redux";
import { returnErrors } from "./errorActions";
import { GET_ORDERS, CHECKOUT, ORDERS_LOADING } from "./types";

export const getOrders = (id: string) => (dispatch: Dispatch) => {
  dispatch(setOrdersLoading());
  axios
    .get(`/api/order/${id}`)
    .then((res) =>
      dispatch({
        type: GET_ORDERS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const checkout =
  (id: string, source: string) => (dispatch: Dispatch) => {
    axios
      .post(`/api/order/${id}`, { source })
      .then((res) =>
        dispatch({
          type: CHECKOUT,
          payload: res.data,
        })
      )
      .catch((err) =>
        dispatch(returnErrors(err.response.data, err.response.status))
      );
  };

export const setOrdersLoading = () => {
  return {
    type: ORDERS_LOADING,
  };
};
