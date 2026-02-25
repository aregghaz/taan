import { configureStore } from "@reduxjs/toolkit";
import heroSliderReducer from "./heroSliderSlice";
import ourProjectsReducer from "./ourProjectsSlice";

export const store = configureStore({
  reducer: {
    heroSlider: heroSliderReducer,
    ourProjects: ourProjectsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
