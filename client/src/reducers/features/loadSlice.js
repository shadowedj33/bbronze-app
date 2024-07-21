import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    loading: false,
};

const loadSlice = createSlice({
    name: 'load',
    initialState,
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
export default loadSlice.reducer;
