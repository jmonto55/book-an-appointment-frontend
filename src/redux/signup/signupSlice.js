import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define the async thunk for logging in
export const signup = createAsyncThunk('auth/signup', async (credentials) => {
  try {
    const response = await axios.post('http://127.0.0.1:3000/signup', { user: { name: credentials.name, email: credentials.email, password: credentials.password, password_confirmation: credentials.password_confirmation } });
    console.log(response.headers.authorization);
    return response.headers.authorization; // Assuming the loginToken is returned in the 'authorization'
  } catch (error) {
    throw new Error('Login failed');
  }
});

// Create the login slice
const signupSlice = createSlice({
  name: 'auth',
  initialState: {
    signupToken: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signup.pending, (state) => ({
        ...state,
        isLoading: true,
        error: null,
      }))
      .addCase(signup.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        loginToken: action.payload,
      }))
      .addCase(signup.rejected, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.error.message,
      }));
  },
});

// Export the async thunk and the slice reducer
export default signupSlice.reducer;
