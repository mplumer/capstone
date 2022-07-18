//import { compose, applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { rootReducer } from './root-reducer';

// Configure the logger to log only when the state changes
const loggerMiddleware = (store) => (next) => (action) => {
  if (!action.type) {
    return next(action);
  }

  console.log('type: ', action.type);
  console.log('payload: ', action.payload);
  console.log('currentState: ', store.getState());

  next(action);

  console.log('next state: ', store.getState());
};

// Configure how the store should be persisted
const persistConfig = {
  key: 'root',
  storage, // Use local storage as the storage medium
  blacklist: ['user'], // Blacklist the user reducer from being persisted
};

// Define the reducer that will be persisted
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Constant for logger configuration
const middleWares = [loggerMiddleware];

// Create the store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: middleWares,
});

// Create the persistor
export const persistor = persistStore(store);
