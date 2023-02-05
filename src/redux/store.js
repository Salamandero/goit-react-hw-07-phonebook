import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contatcsSlice';
import filterSlice from './filterSlice';

export const store = configureStore({
  preloadedState: {},
  reducer: {
    contacts: contactsReducer,
    filter: filterSlice,
  },
});
