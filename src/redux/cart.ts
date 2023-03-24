import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { CartItemType, CartState, CartType, UserType } from "../helper/types";
import axios from "axios";

interface postCartType {
  quantity: number;
  productId: number;
  userId: number;
  token: string;
}

const cart: CartType = {
  bill: 0,
  userId: "",
  items: [],
};

const initialState: CartState = {
  cart,
  status: "idle",
  error: null,
};

export const postAddToCart = createAsyncThunk(
  "cart/postAddToCart",
  async (cartData: postCartType) => {
    const { productId, userId, quantity, token } = cartData;
    const headers = { Authorization: `Bearer ${token}` };
    const response = await axios.post(
      `${process.env.REACT_APP_API_ENDPOINT}/cart/${userId}`,
      { quantity, productId },
      { headers }
    );

    localStorage.setItem("cart", JSON.stringify(response.data.data));
    return response.data.data;
  }
);

export const postUpdateCart = createAsyncThunk(
  "cart/postUpdateCart",
  async (cartData: postCartType) => {
    const { productId, userId, quantity, token } = cartData;
    const headers = { Authorization: `Bearer ${token}` };
    const response = await axios.put(
      `${process.env.REACT_APP_API_ENDPOINT}/cart/${userId}`,
      { quantity, productId },
      { headers }
    );

    localStorage.setItem("cart", JSON.stringify(response.data.data));
    return response.data.data;
  }
);

export const postDeleteCartItem = createAsyncThunk(
  "cart/postDeleteCartItem",
  async (cartData: postCartType) => {
    const { productId, userId, token } = cartData;
    const headers = { Authorization: `Bearer ${token}` };
    const response = await axios.delete(
      `${process.env.REACT_APP_API_ENDPOINT}/cart/${userId}/${productId}`,
      { headers }
    );

    localStorage.setItem("cart", JSON.stringify(response.data.data));
    return response.data.data;
  }
);

export const fetchCartItems = createAsyncThunk(
  "cart/fetchCartItems",
  async (user: UserType) => {
    const { id, token } = user;
    const headers = { Authorization: `Bearer ${token}` };
    const response = await axios.get(
      `${process.env.REACT_APP_API_ENDPOINT}/cart/${id}`,
      { headers }
    );

    localStorage.setItem("cart", JSON.stringify(response.data.data));
    return response.data.data;
  }
);

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<CartItemType>) => {
      //checks to see if the item is in the cart
      const itemInCart = state.cart?.items.some(
        (item) => item.productId == action.payload.productId
      );
      itemInCart
        ? (state.cart.items = state.cart.items.map((item) => {
            if (item.productId == action.payload.productId) {
              item.quantity++;
            }
            return item;
          }))
        : (state.cart.items = [...state.cart.items, action.payload]);
    },

    removeItemFromCart: (state, action: PayloadAction<number>) => {
      state.cart.items = state.cart.items.filter(
        (item) => item.productId != action.payload
      );
    },
    reduceItemQuantity: (state, action: PayloadAction<number>) => {
      state.cart.items = state.cart.items.map((item) => {
        if (item.productId == action.payload) {
          item.quantity--;
        }
        return item;
      });
    },
    setBill: (state) => {
      const totals = state.cart.items.map((item) => {
        return item.price * item.quantity;
      });
      let numOr0 = (n: any) => (isNaN(n) ? 0 : n);
      state.cart.bill = totals.reduce((a, b) => numOr0(a) + numOr0(b), 0);
    },
    setCart: (state, action: PayloadAction<CartType>) => {
      state.cart = action.payload;
    },
    resetCart: (state) => {
      state.cart = {
        bill: 0,
        userId: "",
        items: [],
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(postAddToCart.pending, (state) => {
        state.status = "loading";
      })
      .addCase(postAddToCart.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.cart = action.payload;
        state.error = null;
      })
      .addCase(postAddToCart.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || null;
      });
    builder
      .addCase(postUpdateCart.pending, (state) => {
        state.status = "loading";
      })
      .addCase(postUpdateCart.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.cart = action.payload;
        state.error = null;
      })
      .addCase(postUpdateCart.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || null;
      });

    builder
      .addCase(postDeleteCartItem.pending, (state) => {
        state.status = "loading";
      })
      .addCase(postDeleteCartItem.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.cart = action.payload;
        state.error = null;
      })
      .addCase(postDeleteCartItem.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || null;
      });
    builder
      .addCase(fetchCartItems.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCartItems.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.cart = action.payload;
        state.error = null;
      })
      .addCase(fetchCartItems.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || null;
      });
  },
});

export const {
  addItemToCart,
  removeItemFromCart,
  reduceItemQuantity,
  setBill,
  setCart,
  resetCart,
} = cartSlice.actions;

export default cartSlice.reducer;
