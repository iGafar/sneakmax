import { configureStore } from "@reduxjs/toolkit";
import teamSlice from "./slices/teamSlice";
import sneakersSlice from "./slices/sneakersSlice";
import basketSlice from "./slices/basketSlice";
import dataSlice from "./slices/dataSlice.ts";

export const store = configureStore({
  reducer: {
    data: dataSlice,
    team: teamSlice,
    sneakers: sneakersSlice,
    basket: basketSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
