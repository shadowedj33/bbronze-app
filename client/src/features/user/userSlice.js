import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getUserData = createAsyncThunk(
    'user/getUserData',
    async () => {
        const response = await fetch('/api/v1/user/getUserData');
        const data = await response.json();
        return data;
    }
);

const initialState = {
    user: null,
    token: null,
    reviews: [],
    authenticated: false,
    name: null,
    email: null,
    phone: null,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            state.user = action.payload.data;
            state.token = action.payload.token;
            state.authenticated = true;
            state.name = action.payload.data.name;
            state.email = action.payload.data.email;
            state.phone = action.payload.data.phone;
            state.reviews = action.payload.reviews;
        },
        logout: (state) => {
            state.user = null;
            state.token = null;
            state.authenticated = false;
        },
        getUserDataSuccess: (state, action) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.phone = action.payload;
        },
        setToken: (state, action) => {
            state.token = action.payload;
        }
    }
});

export const { loginSuccess, getUserDataSuccess, logout, setToken } = userSlice.actions;

export const selectToken = (state) => state.user.token;
export default userSlice.reducer;