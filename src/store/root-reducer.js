import { combineReducers } from 'redux';

import { userReducer } from './user/user.reducer';

// Combine all reducers
export const rootReducer = combineReducers({
  // Add reducers here
  user: userReducer,
});
