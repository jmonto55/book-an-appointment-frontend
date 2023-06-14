import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  housesList: [],
  isLoading: false,
  status: null,
};

export const fetchHouses = createAsyncThunk(
  'houses/fetchHouses',
  async () => {
    const response = await axios.get('http://localhost:3000/houses');
    return response.data;
  },
);

export const createHouse = createAsyncThunk(
  'houses/createHouse',
  async (houseData) => {
    try {
      const response = await axios.post('http://localhost:3000/houses', houseData);
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  },
);

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
      }))
      .addCase(createHouse.pending, (state) => ({
        ...state,
        status: 'pending',
      }))
      .addCase(createHouse.fulfilled, (state, action) => ({
        ...state,
        housesList: [...state.housesList, action.payload],
        status: 'succeeded',
      }))
      .addCase(createHouse.rejected, (state) => ({
        ...state,
        status: 'error',
      }));
  },
});

export default housesSlice.reducer;
