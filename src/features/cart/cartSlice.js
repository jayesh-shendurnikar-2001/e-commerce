import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  search: "",
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Add product to cart
    addToCart: (state, action) => {
      const product = action.payload;

      const existingItem = state.items.find(
        (item) => item.id === product.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          ...product,
          quantity: 1,
        });
      }
    },

    // Remove product from cart
    removeFromCart: (state, action) => {
      state.items = state.items.filter(
        (item) => item.id !== action.payload
      );
    },

    increaseQty: (state, action) => {
      const item = state.items.find(
        (item) => item.id === action.payload
      );
      if (item) {
        item.quantity += 1;
      }
    },
    decreaseQty: (state, action) => {
      const item = state.items.find(
        (item) => item.id === action.payload
      );
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },

    // Clear cart after order placed
    clearCart: (state) => {
      state.items = [];
    },

  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQty,
  decreaseQty,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
