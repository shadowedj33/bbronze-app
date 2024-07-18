import { createSlice } from '@reduxjs/toolkit';

export const loadSlice = createSlice({
    name: 'load',
    initialState: {
        loading: false,
    },
    reducers: {
        showLoading: (state) => {
            state.loading = true;
        },
        hideLoading: (state) => {
            state.loading = false;
        },
    },
});

export const { showLoading, hideLoading } = loadSlice.actions;