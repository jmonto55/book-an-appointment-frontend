import { configureStore } from '@reduxjs/toolkit';
import housesReducer from './houses/housesSlice';
import reservationsReducer from './reservations/reservationsSlice';
import loginReducer from './login/loginSlice';
import logoutReducer from './logout/logoutSlice';
import signupReducer from './signup/signupSlice';

const store = configureStore({
  reducer: {
    houses: housesReducer,
    reservations: reservationsReducer,
    login: loginReducer,
    logout: logoutReducer,
    signup: signupReducer
  },
});

export default store;
