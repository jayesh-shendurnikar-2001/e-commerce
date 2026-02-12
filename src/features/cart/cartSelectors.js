// Select all cart items
export const selectCartItems = (state) => state.cart.items;

// Total number of items in cart (for header badge)
export const selectCartCount = (state) =>
  state.cart.items.reduce((total, item) => total + item.quantity, 0);

// Total cart price
export const selectCartTotal = (state) =>
  state.cart.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

// Search text
export const selectSearchText = (state) => state.cart.search;
