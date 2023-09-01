// store.ts
import { configureStore } from '@reduxjs/toolkit';
import contactReducer from '../features/contactSlice';

export const store = configureStore({
  reducer: {
    contact: contactReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
