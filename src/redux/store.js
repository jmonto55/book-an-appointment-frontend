import { configureStore } from '@reduxjs/toolkit';
import housesReducer from './houses/housesSlice';
import reservationsReducer from './reservations/reservationsSlice';
import loginReducer from './login/loginSlice';

const store = configureStore({
  reducer: {
    houses: housesReducer,
    reservations: reservationsReducer,
    login: loginReducer,
  },
});

export default store;
