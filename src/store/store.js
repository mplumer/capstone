import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';

import { rootReducer } from './root-reducer';

// Configure how the store should be persisted
const persistConfig = {
  key: 'root',
  storage, // Use local storage as the storage medium
  blacklist: ['user'], // Blacklist the user reducer from being persisted
};

// Define the reducer that will be persisted
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Constant for logger configuration
const middleWares = [process.env.NODE_ENV === 'development' && logger].filter(
  Boolean
);

// Create the store
export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV === 'development',
  middleware: middleWares,
});

// Create the persistor
export const persistor = persistStore(store);
