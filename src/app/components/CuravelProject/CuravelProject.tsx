'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import CuravelSlide1 from '@/app/assets/images/CuravelSlide1.png';
import CuravelSlide2 from '@/app/assets/images/CuravelSlide2.png';
import CuravelSlide3 from '@/app/assets/images/CuravelSlide3.png';
import CuravelSlide4 from '@/app/assets/images/CuravelSlide4.png';

const CURAVEL_SLIDER_TILES = [
  {
    id: 1,
    imageSrc: CuravelSlide1,
  },
  {
    id: 2,
    imageSrc: CuravelSlide2,
  },
  {
    id: 3,
    imageSrc: CuravelSlide3,
  },
  {
    id: 4,
    imageSrc: CuravelSlide4,
  },
];

const SLIDE_SPACING = 260;

const SIDE_ROTATION = 18;
const CENTER_LAYOUT = { translateX: 0, rotateY: 0, scale: 1, opacity: 1, zIndex: 40 };
const SIDE_LAYOUT = { scale: 0.86, opacity: 1, zIndex: 30 };
const HIDDEN_LAYOUT = { scale: 0.74, opacity: 0, zIndex: 10 };

function getSlideLayout(
  index: number,
  activeIndex: number,
  total: number,
  direction: 1 | -1
) {
  if (total <= 1 || index === activeIndex) {
    return CENTER_LAYOUT;
  }

  const raw = (index - activeIndex + total) % total;
  const opposite = total / 2;
  const isExactOpposite = total % 2 === 0 && raw === opposite;

  let side: 1 | -1;
  let distance: number;

  if (isExactOpposite) {
    // For even counts, place the exact opposite card on the entering side.
    side = direction;
    distance = raw;
  } else if (raw < opposite) {
    side = 1;
    distance = raw;
  } else {
    side = -1;
    distance = total - raw;
  }

  if (distance === 1) {
    return {
      translateX: side * SLIDE_SPACING,
      rotateY: -side * SIDE_ROTATION,
      scale: SIDE_LAYOUT.scale,
      opacity: SIDE_LAYOUT.opacity,
      zIndex: SIDE_LAYOUT.zIndex,
    };
  }

  return {
    translateX: side * SLIDE_SPACING * 2,
    rotateY: -side * (SIDE_ROTATION + 10),
    scale: HIDDEN_LAYOUT.scale,
    opacity: HIDDEN_LAYOUT.opacity,
    zIndex: HIDDEN_LAYOUT.zIndex,
  };
}

export default function CuravelProject() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState<1 | -1>(1);
  const totalSlides = CURAVEL_SLIDER_TILES.length;

  const handlePrev = () => {
    setSlideDirection(-1);
    setActiveIndex((current) => (current - 1 + totalSlides) % totalSlides);
  };

  const handleNext = () => {
    setSlideDirection(1);
    setActiveIndex((current) => (current + 1) % totalSlides);
  };

  return (
    <section className="curavelSlide">
      <div className="curavelInfoSide">
        <h1>Curavel</h1>
        <span> Modern Medical Transportation Platform </span>
        <p>
          Curavel.com is a modern web platform focused on medical transportation
          and ride coordination. The website is designed to provide a clean user
          experience, intuitive navigation, and structured information flow for
          healthcare-related services.
        </p>
        <h3>Smart & Structured Architecture</h3>
        <p>
          Curavel is built with a scalable and well-organized frontend
          structure, ensuring maintainability and future expansion. The layout
          is modular and optimized for performance.
        </p>
        <h3>Responsive & User-Focused Design</h3>
        <p>
          The interface is fully responsive across desktop, tablet, and mobile
          devices. Special attention was given to accessibility, clarity, and
          smooth user interaction.
        </p>
        <h3>Performance & Clean UI Implementation</h3>
        <p>
          The project emphasizes optimized rendering, structured styling, and
          smooth animations to deliver a fast and professional user experience.
        </p>
        <button
          type="button"
          onClick={() =>
            window.open(
              'https://www.curavel.com',
              '_blank',
              'noopener,noreferrer'
            )
          }
        >
          Go to Curavel
        </button>
      </div>
      <div className="curavelPicturesSide">
        <div className="curavelPicturesSideWrapper">
          <button
            type="button"
            className="curavelSliderArrow curavelSliderArrowPrev"
            onClick={handlePrev}
            aria-label="Previous slide"
          >
            ‹
          </button>
          <div className="curavelManualSlider" aria-live="polite">
            {CURAVEL_SLIDER_TILES.map((tile, index) => {
              const layout = getSlideLayout(
                index,
                activeIndex,
                totalSlides,
                slideDirection
              );

              return (
                <motion.article
                  key={tile.id}
                  className="curavelManualSlide"
                  style={{
                    zIndex: layout.zIndex,
                    pointerEvents: layout.opacity === 0 ? 'none' : 'auto',
                  }}
                  initial={false}
                  animate={{
                    x: layout.translateX,
                    rotateY: layout.rotateY,
                    scale: layout.scale,
                    opacity: layout.opacity,
                  }}
                  transition={{
                    type: 'tween',
                    duration: 0.62,
                    ease: [0.22, 0.9, 0.2, 1],
                  }}
                >
                  {tile.imageSrc ? (
                    <Image
                      src={tile.imageSrc}
                      alt={`Curavel slide ${tile.id}`}
                      fill
                      className="curavelManualSlideImage"
                      sizes="(max-width: 900px) 170px, (max-width: 1200px) 280px, 330px"
                    />
                  ) : null}
                </motion.article>
              );
            })}
          </div>
          <button
            type="button"
            className="curavelSliderArrow curavelSliderArrowNext"
            onClick={handleNext}
            aria-label="Next slide"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
