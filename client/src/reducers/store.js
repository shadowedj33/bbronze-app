import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice";
import loadReducer from "./features/loadSlice";

const store = configureStore({
    reducer: {
        user: userReducer,
        load: loadReducer,
    },
});

export default store;