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

function getEntryOffset(index: number | null): { x: string | number; y: string | number } {
  switch (index) {
    case 0:
      return { x: "-110%", y: "0%" };
    case 1:
      return { x: "0%", y: "-110%" };
    case 2:
      return { x: "0%", y: "110%" };
    case 3:
      return { x: "110%", y: "0%" };
    default:
      return { x: "0%", y: "0%" };
  }
}

const slideVariants: Variants = {
  enter: (index: number | null) => {
    const offset = getEntryOffset(index);
    return {
      x: offset.x,
      y: offset.y,
      opacity: 1,
    };
  },
  center: {
    x: "0%",
    y: "0%",
    opacity: 1,
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.01,
      ease: "linear",
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
          <AnimatePresence initial={false} mode="wait">
            {ActiveSlide ? (
              <motion.div
                key={activeIndex ?? "empty"}
                className={styles.slideLayer}
                custom={activeIndex}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "tween", duration: 1, ease: [0.22, 1, 0.36, 1] },
                  y: { type: "tween", duration: 1, ease: [0.22, 1, 0.36, 1] },
                }}
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
