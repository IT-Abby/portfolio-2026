"use client";

import Image from "next/image";
import { useState, useCallback, useEffect, useRef } from "react";

interface SlideshowImage {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

interface ImageSlideshowProps {
  images: SlideshowImage[];
  width?: number;
  height?: number;
}

export default function ImageSlideshow({
  images,
  width = 700,
  height = 700,
}: ImageSlideshowProps) {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
  }, [images.length]);

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [resetTimer]);

  const goNext = useCallback(() => {
    setCurrent((prev) => (prev + 1) % images.length);
    resetTimer();
  }, [images.length, resetTimer]);

  const goPrev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
    resetTimer();
  }, [images.length, resetTimer]);

  if (!images.length) return null;

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      {/* Image display — one at a time */}
      <div className="relative w-full flex items-center justify-center">
        {images.map((img, i) => (
          <div
            key={i}
            className="transition-opacity duration-500 ease-in-out"
            style={{
              opacity: i === current ? 1 : 0,
              position: i === current ? "relative" : "absolute",
              pointerEvents: i === current ? "auto" : "none",
            }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={img.width || width}
              height={img.height || height}
              draggable={false}
              className="select-none"
            />
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="flex items-center gap-4">
        {/* Prev arrow */}
        <button
          onClick={goPrev}
          className="w-9 h-9 rounded-full flex items-center justify-center text-[#55CDED] hover:bg-[#55CDED]/10 transition-colors duration-200 cursor-pointer"
          aria-label="Previous slide"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        {/* Dots */}
        <div className="flex gap-2.5">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${i === current
                  ? "bg-[#55CDED] scale-110"
                  : "bg-gray-300 hover:bg-gray-400"
                }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Next arrow */}
        <button
          onClick={goNext}
          className="w-9 h-9 rounded-full flex items-center justify-center text-[#55CDED] hover:bg-[#55CDED]/10 transition-colors duration-200 cursor-pointer"
          aria-label="Next slide"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>
    </div>
  );
}
