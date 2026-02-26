import { configureStore } from "@reduxjs/toolkit";
import heroSliderReducer from "./heroSliderSlice";
import ourProjectsReducer from "./ourProjectsSlice";
import homeFeaturesReducer from "./homeFeaturesSlice";

export const store = configureStore({
  reducer: {
    heroSlider: heroSliderReducer,
    ourProjects: ourProjectsReducer,
    homeFeatures: homeFeaturesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
