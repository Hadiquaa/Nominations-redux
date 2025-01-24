import { configureStore } from "@reduxjs/toolkit";
import NominationSlice from "./Slices/NominationSlice";

export const Store = configureStore({
    reducer: {
        nominations: NominationSlice.reducer
    }
});