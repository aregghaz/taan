import type { RootState } from "./store";

export const selectHeroMenuItems = (state: RootState) => state.heroSlider.menuItems;
export const selectActiveMenuIndex = (state: RootState) => state.heroSlider.activeMenuIndex;
export const selectActiveSlideIndex = (state: RootState) => state.heroSlider.activeIndex;
export const selectIsHeroSlideOpen = (state: RootState) => state.heroSlider.isOpen;
