import { configureStore } from '@reduxjs/toolkit';
import housesReducer from './houses/housesSlice';

const store = configureStore({
  reducer: {
    houses: housesReducer,
  },
});

export default store;
