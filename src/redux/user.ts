import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

export interface User {
  first_name: string;
  last_name: string;
  is_admin?: boolean;
  email: string;
  _id?: string;
  token?: string;
}

const initialState: User = {
  first_name: "",
  last_name: "",
  is_admin: false,
  email: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      return action.payload;
    },
    logout: (state) => {
      return {
        first_name: "",
        last_name: "",
        is_admin: false,
        email: "",
      };
    },
  },
});

export const { setUser, logout } = userSlice.actions;

export default userSlice.reducer;
