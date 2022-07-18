import { createSelector } from 'reselect';

/*
Creating cart selectors for the cart reducer
- selector functions allow components to access the store and get the data we need
- createSelector is used to create a selector function
*/

const selectCartReducer = (state) => state.cart;

// Selector function for is cart open
export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  (cart) => cart.isCartOpen
);

// Selector function for the cart items
export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
);

// Selector function for the cart price total
export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (total, cartItem) => total + cartItem.quantity * cartItem.price,
    0
  )
);

// Selector function for the cart count
export const selectCartCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
);
