import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";

// redux config store
export const store = configureStore({
  // reducers
  reducer: {
    cart: cartReducer,
  },
});
