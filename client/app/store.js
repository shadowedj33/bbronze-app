import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../src/reducers/features/userSlice";
import loadReducer from "../src/reducers/features/loadSlice";
import reviewReducer from "../src/reducers/features/reviewSlice";

const store = configureStore({
    reducer: {
        user: userReducer,
        load: loadReducer,
        review: reviewReducer,
    },
});

export default store;