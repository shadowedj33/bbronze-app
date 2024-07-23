import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { selectToken } from './userSlice';

export const getUserReviews = createAsyncThunk(
    'review/getUserReviews',
    async (_, { getState }) => {
        const token = getState(selectToken);
        const res = await fetch('/api/v1/review/reviews', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });
        const data = await res.json();
        return data;
    }
);

export const submitReview = createAsyncThunk(
    'reviews/submitReview',
    async (review, { rejectWithValue }) => {
        try {
            const res = await fetch('/api/v1/review/submitReview', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(review),
            });
            if (!res.ok) {
                throw new Error('Server error');
            }
            const data = await res.json();
            return data;
        } catch (err) {
            return rejectWithValue({ error: err.message });
        }
    }
);

const initialState = {
    reviews: [],
    status: null,
    error: null,
}

const reviewSlice = createSlice({
    name: "review",
    initialState,
    reducers: {
        addReview: (state, action) => {
            state.reviews.push(action.payload);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getUserReviews.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getUserReviews.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.reviews = action.payload;
            })
            .addCase(getUserReviews.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export const { addReview } = reviewSlice.actions;
export default reviewSlice.reducer;