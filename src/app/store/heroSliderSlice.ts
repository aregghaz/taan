import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import {
  HERO_MENU_ITEMS,
  getHeroMenuItemByIndex,
  type HeroSlideId,
} from "@/app/config/heroMenuConfig";

type HeroSliderState = {
  menuItems: string[];
  activeMenuIndex: number;
  activeSlideId: HeroSlideId | null;
  isOpen: boolean;
};

const initialState: HeroSliderState = {
  menuItems: [...HERO_MENU_ITEMS],
  activeMenuIndex: 0,
  activeSlideId: null,
  isOpen: false,
};

const heroSliderSlice = createSlice({
  name: "heroSlider",
  initialState,
  reducers: {
    setActiveMenu(state, action: PayloadAction<number>) {
      const nextMenuIndex = action.payload;
      if (nextMenuIndex < 0 || nextMenuIndex >= state.menuItems.length) return;

      state.activeMenuIndex = nextMenuIndex;
      const nextMenuItem = getHeroMenuItemByIndex(nextMenuIndex);
      const nextSlideId = nextMenuItem?.slideId ?? null;

      if (!nextSlideId) {
        state.activeSlideId = null;
        state.isOpen = false;
        return;
      }

      state.activeSlideId = nextSlideId;
      state.isOpen = true;
    },
    closeSlide(state) {
      state.activeMenuIndex = 0;
      state.activeSlideId = null;
      state.isOpen = false;
    },
  },
});

export const { setActiveMenu, closeSlide } = heroSliderSlice.actions;
export default heroSliderSlice.reducer;
