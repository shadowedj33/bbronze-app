import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./features/userSlice";
import { loadSlice } from "./features/loadSlice";

export default configureStore({
    reducer: {
        user: userSlice.reducer,
        load: loadSlice.reducer,
    },
});