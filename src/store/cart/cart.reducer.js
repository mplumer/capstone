import { CART_ACTION_TYPES } from './cart.types';

// Define the initial cart state
const CART_INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
};

/*
Create the cart reducer
- cartItems is the current state
- action is the action to be performed
- switch statement is used to determine the action type
- return the new state
*/

export const cartReducer = (state = CART_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  /*
  Switch on the action type
  - if the action type is SET_CART_ITEMS, return the payload
  - if the action type is SET_IS_CART_OPEN, return the payload
  - otherwise, return the current state
  */

  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        cartItems: payload,
      };
    case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };
    default:
      return state;
  }
};
