'use client';

import { useMemo } from "react";
import styles from "./heroFullscreenSlide.module.scss";
import AboutUsSlide from "@/app/components/AboutUsSlide/AboutUsSlide";
import ContactUsSlide from "@/app/components/ContactUsSlide/ContactUsSlide";
import OurProjectsSlide from "@/app/components/OurProjectsSlide/OurProjectsSlide";
import CVslide from "@/app/components/CVSlide/CVslide";
import { useAppSelector } from "@/app/store/hooks";
import {
  selectActiveSlideIndex,
  selectIsHeroSlideOpen,
} from "@/app/store/heroSliderSelectors";

const SLIDES = [AboutUsSlide, ContactUsSlide, OurProjectsSlide, CVslide];

export default function HeroFullscreenSlide() {
  const isOpen = useAppSelector(selectIsHeroSlideOpen);
  const activeIndex = useAppSelector(selectActiveSlideIndex);

  const ActiveSlide = useMemo(() => {
    if (activeIndex === null) return null;
    return SLIDES[activeIndex] ?? null;
  }, [activeIndex]);

  const directionClass = useMemo(() => {
    switch (activeIndex) {
      case 0:
        return styles.fromLeft;
      case 1:
        return styles.fromTop;
      case 2:
        return styles.fromBottom;
      case 3:
        return styles.fromRight;
      default:
        return "";
    }
  }, [activeIndex]);

  return (
    <div
      className={`${styles.overlay} ${isOpen ? styles.overlayOpen : ""}`}
      aria-hidden={!isOpen}
    >
      <div className={styles.panel}>
        <div className={`${styles.content} ${directionClass}`} key={activeIndex ?? "empty"}>
          {ActiveSlide ? <ActiveSlide /> : null}
        </div>
      </div>
    </div>
  );
}
