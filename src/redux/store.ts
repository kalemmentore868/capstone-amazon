import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user";
import cartReducer from "./cart";

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
