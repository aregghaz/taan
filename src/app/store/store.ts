import { configureStore } from "@reduxjs/toolkit";
import heroSliderReducer from "./heroSliderSlice";

export const store = configureStore({
  reducer: {
    heroSlider: heroSliderReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
