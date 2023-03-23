import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { UserType } from "../helper/types";
import axios from "axios";

const initialState: UserType = {
  first_name: "",
  last_name: "",
  is_admin: false,
  email: "",
  phone_number: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserType>) => {
      return action.payload;
    },
    logout: (state) => {
      return {
        first_name: "",
        last_name: "",
        is_admin: false,
        email: "",
        phone_number: "",
      };
    },
  },
});

export const { setUser, logout } = userSlice.actions;

export default userSlice.reducer;
