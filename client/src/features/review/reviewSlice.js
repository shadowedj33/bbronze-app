import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define the initial state
const initialState = {
  reviews: [],
  status: 'idle',
  error: null,
};

// Define the thunk to fetch reviews
export const getUserReviews = createAsyncThunk('reviews/getUserReviews', async (userId) => {
  try {
    const response = await axios.get(`/api/reviews?owner=${userId}`);
    return response.data;
  } catch (error) {
    return error;
  }
});

// Define the slice
const reviewSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserReviews.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getUserReviews.fulfilled, (state, action) => {
        state.reviews = action.payload;
        state.status = 'succeeded';
      })
      .addCase(getUserReviews.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default reviewSlice.reducer;