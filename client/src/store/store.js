import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import loadReducer from "../features/loadSlice";
import reviewReducer from "../features/review/reviewSlice";

const store = configureStore({
    reducer: {
        user: userReducer,
        load: loadReducer,
        review: reviewReducer,
    },
});

export default store;