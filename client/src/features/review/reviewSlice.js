import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getUserReviews = createAsyncThunk(
  'reviews/getUserReviews',
  async (userId, thunkAPI) => {
    try { 
      const res = await axios.get(`/api/review/reviews/${userId}`);
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue({ error: err.message });
    }
  }
);

const reviewSlice = createSlice({
  name: 'reviews',
  initialState: {
    reviews: [],
    isLoading: null,
    error: null,
  },
  reducers: {
    addReview: (state, action) => {
      state.reviews.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserReviews.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserReviews.fulfilled, (state, action) => {
        state.isLoading = false;
        state.reviews = action.payload;
      })
      .addCase(getUserReviews.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload ? action.payload.message : 'Could not fetch reviews';
      });
  },
});

export const { addReview } = reviewSlice.actions;
export default reviewSlice.reducer;