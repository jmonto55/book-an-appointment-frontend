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

export const reserve = createAsyncThunk('reservations/reserve', async (credentials) => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.post('http://127.0.0.1:3000/reservations', {
      reservation: {
        house_id: credentials.houseId,
        check_in: credentials.checkIn,
        check_out: credentials.checkOut,
      },
    },
    {
      headers: {
        Authorization: token,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error('reservation failed');
  }
});

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
