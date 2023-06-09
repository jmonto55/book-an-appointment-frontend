import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
  housesList: [],
  isLoading: false,
};

export const fetchHouses = createAsyncThunk('houses/fetchHouses',
  async (house) => {
    const response = await axios('http://localhost:3000/houses');
    return response.data;
});

const housesSlice = createSlice({
  name: 'houses',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchHouses.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchHouses.fulfilled, (state, action) => {
        state.isLoading = false;
        state.housesList = action.payload;
      })
      .addCase(fetchHouses.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default housesSlice.reducer;