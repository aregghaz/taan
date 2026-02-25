import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export const HERO_MENU_ITEMS = ["Home", "Our Projects", "About Us", "Contact Us",  "CV"] as const;

type HeroSliderState = {
  menuItems: string[];
  activeMenuIndex: number;
  activeIndex: number | null;
  isOpen: boolean;
};

const initialState: HeroSliderState = {
  menuItems: [...HERO_MENU_ITEMS],
  activeMenuIndex: 0,
  activeIndex: null,
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

      if (nextMenuIndex === 0) {
        state.activeIndex = null;
        state.isOpen = false;
        return;
      }

      state.activeIndex = nextMenuIndex - 1;
      state.isOpen = true;
    },
    closeSlide(state) {
      state.activeMenuIndex = 0;
      state.activeIndex = null;
      state.isOpen = false;
    },
  },
});

export const { setActiveMenu, closeSlide } = heroSliderSlice.actions;
export default heroSliderSlice.reducer;
