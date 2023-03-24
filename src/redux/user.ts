import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { UserState, UserType } from "../helper/types";
import axios from "axios";

interface LoginType {
  email: string;
  password: string;
}

const initialState: UserState = {
  user: null,
  status: "idle",
  error: null,
};

export const signUpUser = createAsyncThunk(
  "user/signUpUser",
  async (userData: UserType) => {
    const response = await axios.post(
      `${process.env.REACT_APP_API_ENDPOINT}/auth/register`,
      userData
    );

    localStorage.setItem("user", JSON.stringify(response.data.data));
    return response.data.data;
  }
);

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (userCred: LoginType) => {
    const response = await axios.post(
      `${process.env.REACT_APP_API_ENDPOINT}/auth/login`,
      userCred
    );
    localStorage.setItem("user", JSON.stringify(response.data.data));
    return response.data.data;
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserType>) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUpUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(signUpUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
        state.error = null;
      })
      .addCase(signUpUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || null;
      })
      .addCase(loginUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || null;
        state.user = null;
      });
  },
});

export const { setUser, logout } = userSlice.actions;

export default userSlice.reducer;
