import type { RootState } from "./store";

export const selectHeroMenuItems = (state: RootState) => state.heroSlider.menuItems;
export const selectActiveMenuIndex = (state: RootState) => state.heroSlider.activeMenuIndex;
export const selectActiveSlideId = (state: RootState) => state.heroSlider.activeSlideId;
export const selectIsHeroSlideOpen = (state: RootState) => state.heroSlider.isOpen;
