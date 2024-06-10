// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import contactReducer from './Reducers/contactReducer';

const store = configureStore({
  reducer: {
    contact: contactReducer,
  },
});

export default store;
