import type { RootState } from "./store";

export const selectHomeFeatureCards = (state: RootState) =>
  state.homeFeatures.cards;
