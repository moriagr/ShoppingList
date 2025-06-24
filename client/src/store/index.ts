import { configureStore } from '@reduxjs/toolkit';
import shoppingSlice from './shoppingSlice';
import categoriesSlice from './categoriesSlice';

export const store = configureStore({
  reducer: {
    shopping: shoppingSlice,
    categories: categoriesSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
