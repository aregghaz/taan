import type { ComponentType } from "react";
import AboutUsSlide from "@/app/components/AboutUsSlide/AboutUsSlide";
import ContactUsSlide from "@/app/components/ContactUsSlide/ContactUsSlide";
import CVslide from "@/app/components/CVSlide/CVslide";
import OurProjectsSlide from "@/app/components/OurProjectsSlide/OurProjectsSlide";
import type { HeroSlideId } from "@/app/config/heroMenuConfig";

// Each fullscreen menu item has its own component.
// Edit the component file below to change that item's unique layout/content.
export const HERO_SLIDE_REGISTRY: Record<HeroSlideId, ComponentType> = {
  "our-projects": OurProjectsSlide,
  "about-us": AboutUsSlide,
  "contact-us": ContactUsSlide,
  cv: CVslide,
};
