import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define the async thunk for logging in
export const login = createAsyncThunk('auth/login', async (credentials) => {
  try {
    const response = await axios.post('http://127.0.0.1:3000/login', { user: { email: credentials.email, password: credentials.password } });
    console.log(response.headers.authorization);
    return response.headers.authorization; // Assuming the token is returned in the 'authorization'
  } catch (error) {
    throw new Error('Login failed');
  }
});

// Create the login slice
const loginSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => ({
        ...state,
        isLoading: true,
        error: null,
      }))
      .addCase(login.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        token: action.payload,
      }))
      .addCase(login.rejected, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.error.message,
      }));
  },
});

// Export the async thunk and the slice reducer
export default loginSlice.reducer;
