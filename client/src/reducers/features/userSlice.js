import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null,
    token: null,
    authenticated: false,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            state.user = action.payload.data;
            state.token = action.payload.token;
            state.authenticated = true;
        },
        logout: (state) => {
            state.user = null;
            state.token = null;
            state.authenticated = false;
        },
    },
});

export const { loginSuccess, logout } = userSlice.actions;
export default userSlice.reducer;