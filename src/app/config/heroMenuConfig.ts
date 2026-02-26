export const HERO_MENU_CONFIG = [
  {
    id: "home",
    label: "Home",
    path: "/home",
    slideId: null,
  },
  {
    id: "our-projects",
    label: "Our Projects",
    path: "/our-projects",
    slideId: "our-projects",
  },
  {
    id: "about-us",
    label: "About Us",
    path: "/about-us",
    slideId: "about-us",
  },
  {
    id: "contact-us",
    label: "Contact Us",
    path: "/contact-us",
    slideId: "contact-us",
  },
  {
    id: "cv",
    label: "CV",
    path: "/cv",
    slideId: "cv",
  },
] as const;

export type HeroMenuItem = (typeof HERO_MENU_CONFIG)[number];
export type HeroMenuId = HeroMenuItem["id"];
export type HeroSlideId = Exclude<HeroMenuItem["slideId"], null>;

export const HERO_MENU_ITEMS = HERO_MENU_CONFIG.map((item) => item.label);

export function getHeroMenuItemByIndex(index: number): HeroMenuItem | undefined {
  return HERO_MENU_CONFIG[index];
}
