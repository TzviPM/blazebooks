import {configureStore} from '@reduxjs/toolkit';

import booksReducer from './features/booksSlice';

// We define a function to make a store, rather than a store itself,
// so that we can have multiple instances of the store per request.
export const makeStore = () => {
  return configureStore({
    reducer: {
      books: booksReducer,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
