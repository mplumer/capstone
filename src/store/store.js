//import { compose, applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

//import logger from 'redux-logger';
import monitorReducerEnhancer from './enhancers/monitorReducers';
import logger from './middleware/logger';

import { rootReducer } from './root-reducer';

// const composedEnhancers = compose(
//   applyMiddleware(...middlewares),
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: [logger],
  enhancers: [monitorReducerEnhancer],
});
