import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  reservationsList: [],
  isLoading: false,
};

export const fetchReservations = createAsyncThunk('reservations/fetchReservations',
  async () => {
    const token = localStorage.getItem('token');
    const response = await axios('http://localhost:3000/reservations', {
      headers: {
        authorization: token, // Include the token in the Authorization header
      },
    });
    return response.data;
  });

export const deleteReservation = createAsyncThunk(
  'reservations/deleteReservation',
  async (reservationId) => {
    const token = localStorage.getItem('token');

    await axios.delete(`http://localhost:3000/reservations/${reservationId}`, {
      headers: {
        Authorization: token,
      },
    });
    return reservationId;
  },
);

const reservationsSlice = createSlice({
  name: 'reservations',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchReservations.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(fetchReservations.fulfilled, (state, action) => ({
        ...state,
        reservationsList: action.payload,
        status: 'succeeded',
      }))
      .addCase(fetchReservations.rejected, (state) => ({
        ...state,
        status: 'error',
      }));
  },
});

export default reservationsSlice.reducer;
