'use client';

import { useMemo } from "react";
import { AnimatePresence, motion, type Variants } from "motion/react";
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

const SLIDES = [OurProjectsSlide, AboutUsSlide, ContactUsSlide, CVslide];
const SCROLL_EASE = [0.16, 1, 0.3, 1] as const;

const slideVariants: Variants = {
  enter: {
    zIndex: 2,
    y: "118%",
    scale: 1.01,
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: SCROLL_EASE,
    },
  },
  center: {
    zIndex: 2,
    y: "0%",
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: SCROLL_EASE,
    },
  },
  exit: {
    zIndex: 1,
    y: "-24%",
    scale: 0.995,
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: SCROLL_EASE,
    },
  },
};

export default function HeroFullscreenSlide() {
  const isOpen = useAppSelector(selectIsHeroSlideOpen);
  const activeIndex = useAppSelector(selectActiveSlideIndex);

  const ActiveSlide = useMemo(() => {
    if (activeIndex === null) return null;
    return SLIDES[activeIndex] ?? null;
  }, [activeIndex]);

  return (
    <div
      className={`${styles.overlay} ${isOpen ? styles.overlayOpen : ""}`}
      aria-hidden={!isOpen}
    >
      <div className={styles.panel}>
        <div className={styles.content}>
          <AnimatePresence initial={false}>
            {ActiveSlide ? (
              <motion.div
                key={activeIndex ?? "empty"}
                className={styles.slideLayer}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
              >
                <ActiveSlide />
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
