import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItemType, CartType } from "../helper/types";

const initialState: CartType = {
  userId: "",
  items: [],
  bill: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<CartItemType>) => {
      //checks to see if the item is in the cart
      const itemInCart = state.items.some(
        (item) => item.productId == action.payload.productId
      );
      itemInCart
        ? (state.items = state.items.map((item) => {
            if (item.productId == action.payload.productId) {
              item.quantity++;
            }
            return item;
          }))
        : (state.items = [...state.items, action.payload]);

      localStorage.setItem("cart", JSON.stringify(state));
    },

    removeItemFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(
        (item) => item.productId != action.payload
      );
      localStorage.setItem("cart", JSON.stringify(state));
    },
    reduceItemQuantity: (state, action: PayloadAction<number>) => {
      state.items = state.items.map((item) => {
        if (item.productId == action.payload) {
          item.quantity--;
        }
        return item;
      });
      localStorage.setItem("cart", JSON.stringify(state));
    },
    setBill: (state) => {
      const totals = state.items.map((item) => {
        return item.price * item.quantity;
      });
      let numOr0 = (n: any) => (isNaN(n) ? 0 : n);
      state.bill = totals.reduce((a, b) => numOr0(a) + numOr0(b), 0);
    },
    setCart: (state, action: PayloadAction<CartType>) => {
      localStorage.setItem("cart", JSON.stringify(action.payload));
      return action.payload;
    },
  },
});

export const {
  addItemToCart,
  removeItemFromCart,
  reduceItemQuantity,
  setBill,
  setCart,
} = cartSlice.actions;

export default cartSlice.reducer;
