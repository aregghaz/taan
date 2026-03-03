'use client';

import { useState } from 'react';

type AuxiliumHighlightsSliderProps = {
  items: string[];
  className?: string;
};

export default function AuxiliumHighlightsSlider({
  items,
  className,
}: AuxiliumHighlightsSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (items.length === 0) {
    return null;
  }

  const handlePrev = () => {
    setActiveIndex((current) => (current === 0 ? items.length - 1 : current - 1));
  };

  const handleNext = () => {
    setActiveIndex((current) => (current + 1) % items.length);
  };

  return (
    <section className={`auxiliumBottomSlider ${className ?? ''}`.trim()}>
      <p className="auxiliumBottomTitle">Operations Highlights</p>

      <div className="auxiliumBottomViewport">
        <div
          className="auxiliumBottomTrack"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {items.map((text, index) => (
            <p className="auxiliumBottomSlide" key={`auxilium-highlight-${index}`}>
              {text}
            </p>
          ))}
        </div>
      </div>

      <div className="auxiliumBottomControls">
        <button
          type="button"
          className="auxiliumBottomButton"
          onClick={handlePrev}
          aria-label="Previous highlight"
        >
          Prev
        </button>

        <div className="auxiliumBottomDots">
          {items.map((_, index) => (
            <button
              type="button"
              key={`auxilium-highlight-dot-${index}`}
              className={`auxiliumBottomDot ${index === activeIndex ? 'isActive' : ''}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Show highlight ${index + 1}`}
            />
          ))}
        </div>

        <button
          type="button"
          className="auxiliumBottomButton"
          onClick={handleNext}
          aria-label="Next highlight"
        >
          Next
        </button>
      </div>
    </section>
  );
}
