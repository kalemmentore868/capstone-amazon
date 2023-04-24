import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { UserState, UserType } from "../helper/types";
import axios from "axios";
import { saveToLocalStorage } from "./helpers";

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
  async (userData: UserType, { dispatch }) => {
    const response = await axios.post(
      `${process.env.REACT_APP_API_ENDPOINT}/auth/register`,
      userData
    );

    let user = response.data.data;
    if (user) {
      await saveToLocalStorage(user, dispatch);
    }
    return response.data.data;
  }
);

export const signUpAdmin = createAsyncThunk(
  "user/signUpAdmin",
  async (userData: UserType, { dispatch }) => {
    const response = await axios.post(
      `${process.env.REACT_APP_API_ENDPOINT}/auth/register-admin`,
      userData
    );

    let user = response.data.data;
    if (user) {
      await saveToLocalStorage(user, dispatch);
    }
    return response.data.data;
  }
);

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (userCred: LoginType, { dispatch }) => {
    const response = await axios.post(
      `${process.env.REACT_APP_API_ENDPOINT}/auth/login`,
      userCred
    );
    let user = response.data.data;

    if (user) {
      await saveToLocalStorage(user, dispatch);
    }
    return response.data.data;
  }
);

export const editUser = createAsyncThunk(
  "user/editUser",
  async (userData: UserType, { dispatch }) => {
    const headers = { Authorization: `Bearer ${userData.token}` };
    const response = await axios.put(
      `${process.env.REACT_APP_API_ENDPOINT}/users/${userData.id}`,
      userData,
      { headers }
    );
    let user = response.data.data;
    if (user) {
      user.token = userData.token;
      await saveToLocalStorage(user, dispatch);
    }
    return user;
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
      })
      .addCase(editUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(editUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
        state.error = null;
      })
      .addCase(editUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || null;
      })
      .addCase(signUpAdmin.pending, (state) => {
        state.status = "loading";
      })
      .addCase(signUpAdmin.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
        state.error = null;
      })
      .addCase(signUpAdmin.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || null;
      });
  },
});

export const { setUser, logout } = userSlice.actions;

export default userSlice.reducer;
