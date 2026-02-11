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

      const existingItem = state.items.find((item) => item.id === product.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          ...product,
          quantity: 1,
        });
      }
    },
  },
});

export const {
  addToCart,
} = cartSlice.actions;

export default cartSlice.reducer;
