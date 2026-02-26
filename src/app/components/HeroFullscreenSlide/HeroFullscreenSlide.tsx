'use client';

import { useMemo } from "react";
import { AnimatePresence, motion, type Variants } from "motion/react";
import { useAppSelector } from "@/app/store/hooks";
import {
  selectActiveSlideId,
  selectIsHeroSlideOpen,
} from "@/app/store/heroSliderSelectors";
import { HERO_SLIDE_REGISTRY } from "@/app/components/HeroFullscreenSlide/heroSlideRegistry";

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
  const activeSlideId = useAppSelector(selectActiveSlideId);

  const ActiveSlide = useMemo(() => {
    if (!activeSlideId) return null;
    return HERO_SLIDE_REGISTRY[activeSlideId] ?? null;
  }, [activeSlideId]);

  return (
    <div
      className={`heroSlideOverlay ${isOpen ? "heroSlideOverlayOpen" : ""}`}
      aria-hidden={!isOpen}
    >
      <div className="heroSlidePanel">
        <div className="heroSlideContent">
          <AnimatePresence initial={false}>
            {ActiveSlide ? (
              <motion.div
                key={activeSlideId ?? "empty"}
                className="heroSlideLayer"
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
