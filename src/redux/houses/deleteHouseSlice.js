import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  house: null,
  isLoading: false,
};

export const deleteHouse = createAsyncThunk(
  'houses/deleteHouse',
  async (houseId) => {
    await axios.delete(`http://localhost:3000/houses/${houseId}`);
    return houseId;
  },
);

const deleteHouseSlice = createSlice({
  name: 'deleteHouse',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(deleteHouse.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(deleteHouse.fulfilled, (state, action) => ({
        ...state,
        house: action.payload,
        isLoading: false,
      }))
      .addCase(deleteHouse.rejected, (state) => ({
        ...state,
        isLoading: false,
      }));
  },
});

export default deleteHouseSlice.reducer;