"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";

interface Slide {
  id: number;
  src: string;
  alt: string;
}

const slides: Slide[] = [
  {
    id: 1,
    src: "/images/carousel/overview-banner.jpg",
    alt: "FLY AIR LOGISTICS - Complete International Freight Forwarding Services Pakistan",
  },
  {
    id: 2,
    src: "/images/carousel/air-freight.jpg",
    alt: "FLY AIR LOGISTICS - Dedicated Air Cargo Freighter Aircraft Operations",
  },
  {
    id: 3,
    src: "/images/carousel/sea-freight.jpg",
    alt: "FLY AIR LOGISTICS - Karachi Port Trust (KPT) Ocean Freight & Container Operations",
  },
  {
    id: 4,
    src: "/images/carousel/land-freight.jpg",
    alt: "FLY AIR LOGISTICS - Nationwide Land Drayage & Motorway Transport Fleet",
  },
];

export const HomeCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const totalSlides = slides.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // 4-second automated timer
  useEffect(() => {
    timerRef.current = setInterval(() => {
      nextSlide();
    }, 4000); // 4 seconds timer

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [nextSlide]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  return (
    <div
      className="relative w-full overflow-hidden bg-brand-black select-none p-0 m-0 border-0"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-roledescription="carousel"
      aria-label="Fly Air Logistics Fleet and Operations"
    >
      {/* 
        Fully Visible Container:
        Strictly preserves 16:9 widescreen ratio matching the 1024x571 uploaded images.
        Zero vertical clipping, zero side margins, no obscuring dark gradient.
      */}
      <div className="relative w-full aspect-[16/9] bg-brand-black">
        {slides.map((slide, index) => {
          const isActive = index === currentIndex;

          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
              aria-hidden={!isActive}
            >
              <img
                src={slide.src}
                alt={slide.alt}
                className="w-full h-full object-contain sm:object-cover object-center"
                loading={index === 0 ? "eager" : "lazy"}
              />
            </div>
          );
        })}

        {/* Minimal Bottom Rectangle Progress Indicators */}
        <div className="absolute bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => goToSlide(idx)}
              className={`h-1.5 sm:h-2 transition-all duration-300 rounded-none focus:outline-none ${
                idx === currentIndex
                  ? "w-8 sm:w-12 bg-[#FF3B53] shadow-md"
                  : "w-4 sm:w-6 bg-white/60 hover:bg-white"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeCarousel;
