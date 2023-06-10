import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  housesList: [],
  isLoading: false,
};

export const fetchHouses = createAsyncThunk('houses/fetchHouses',
  async () => {
    const response = await axios('http://localhost:3000/houses');
    return response.data;
  });

const housesSlice = createSlice({
  name: 'houses',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchHouses.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(fetchHouses.fulfilled, (state, action) => ({
        ...state,
        housesList: action.payload,
        status: 'succeeded',
      }))
      .addCase(fetchHouses.rejected, (state) => ({
        ...state,
        status: 'error',
      }));
  },
});

export default housesSlice.reducer;
