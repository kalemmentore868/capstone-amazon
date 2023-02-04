import axios from "axios";
import {
  GET_ITEMS,
  ADD_ITEM,
  DELETE_ITEM,
  UPDATE_ITEM,
  ITEMS_LOADING,
} from "./types";
import { returnErrors } from "./errorActions";
import { Dispatch } from "redux";
import { Product } from "../../components/HomePageComponents/DisplayProducts";

export const getItems = () => (dispatch: Dispatch) => {
  dispatch(setItemsLoading());
  axios
    .get("/api/items")
    .then((res) =>
      dispatch({
        type: GET_ITEMS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const addItem = (item: Product) => (dispatch: Dispatch) => {
  axios
    .post("/api/items", item)
    .then((res) =>
      dispatch({
        type: ADD_ITEM,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const deleteItem = (id: string) => (dispatch: Dispatch) => {
  axios
    .delete(`/api/items/${id}`)
    .then((res) =>
      dispatch({
        type: DELETE_ITEM,
        payload: id,
      })
    )
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const updateItem =
  (id: string, item: Product) => (dispatch: Dispatch) => {
    axios
      .put(`/api/items/${id}`, item)
      .then((res) =>
        dispatch({
          type: UPDATE_ITEM,
          payload: Promise.all([id, res.data]),
        })
      )
      .catch((err) =>
        dispatch(returnErrors(err.response.data, err.response.status))
      );
  };

export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING,
  };
};
