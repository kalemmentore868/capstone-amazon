import { createSlice } from "@reduxjs/toolkit";

interface User {
  first_name: string;
  last_name: string;
  is_admin: boolean;
  email: string;
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
  reducers: {},
});

export default userSlice.reducer;
