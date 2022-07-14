import { combineReducers } from 'redux';

import { userReducer } from './user/user.reducer';
import { categoriesReducer } from './categories/category.reducer';
import { cartReducer } from './cart/cart.reducer';

// Combine all reducers
export const rootReducer = combineReducers({
  // Add reducers here
  user: userReducer,
  categories: categoriesReducer,
  cart: cartReducer,
});
