import { configureStore } from "@reduxjs/toolkit";
import { noteSlice } from "./slice";
export const store = configureStore({
  reducer: {
    Note: noteSlice.reducer,
  },
});
