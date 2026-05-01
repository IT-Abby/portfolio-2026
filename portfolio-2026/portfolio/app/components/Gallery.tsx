"use client";

import Image from "next/image";
import { useRef, useState, useCallback, useEffect } from "react";

interface GalleryImage {
  src: string;
  alt: string;
}

interface GalleryProps {
  images: GalleryImage[];
}

export default function Gallery({ images }: GalleryProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Drag state
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const hasDragged = useRef(false);

  const updateScrollButtons = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 5);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 5);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    updateScrollButtons();
    el.addEventListener("scroll", updateScrollButtons, { passive: true });
    window.addEventListener("resize", updateScrollButtons);
    return () => {
      el.removeEventListener("scroll", updateScrollButtons);
      window.removeEventListener("resize", updateScrollButtons);
    };
  }, [updateScrollButtons]);

  const scroll = useCallback((direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.querySelector("div")?.offsetWidth || 280;
    const scrollAmount = cardWidth + 16; // card width + gap
    el.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  }, []);

  // Mouse drag handlers
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    const el = scrollRef.current;
    if (!el) return;
    isDragging.current = true;
    hasDragged.current = false;
    startX.current = e.pageX - el.offsetLeft;
    scrollLeft.current = el.scrollLeft;
    el.style.cursor = "grabbing";
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging.current) return;
    const el = scrollRef.current;
    if (!el) return;
    e.preventDefault();
    const x = e.pageX - el.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    if (Math.abs(walk) > 5) hasDragged.current = true;
    el.scrollLeft = scrollLeft.current - walk;
  }, []);

  const handleMouseUp = useCallback(() => {
    isDragging.current = false;
    const el = scrollRef.current;
    if (el) el.style.cursor = "grab";
  }, []);

  const handleMouseLeave = useCallback(() => {
    isDragging.current = false;
    const el = scrollRef.current;
    if (el) el.style.cursor = "grab";
  }, []);

  // Close lightbox on escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedImage(null);
      if (selectedImage !== null) {
        if (e.key === "ArrowRight") setSelectedImage((prev) => prev !== null ? Math.min(prev + 1, images.length - 1) : null);
        if (e.key === "ArrowLeft") setSelectedImage((prev) => prev !== null ? Math.max(prev - 1, 0) : null);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedImage, images.length]);

  return (
    <>
      <div className="relative w-full group">
        {/* Left arrow */}
        {canScrollLeft && (
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 cursor-pointer transition-all duration-300 hover:scale-110  group-hover:opacity-100 -ml-2"
            aria-label="Scroll left"
          >
            <Image src="/prevbutton.svg" alt="prev" width={40} height={40} />
          </button>
        )}

        {/* Right arrow */}
        {canScrollRight && (
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 cursor-pointer transition-all duration-300 hover:scale-110  group-hover:opacity-100 -mr-2"
            aria-label="Scroll right"
          >
            <Image src="/next button.svg" alt="next" width={40} height={40} />
          </button>
        )}

        {/* Fade edges */}
        {canScrollLeft && (
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        )}
        {canScrollRight && (
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        )}

        {/* Scrollable gallery */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide cursor-grab select-none py-2"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[220px] h-[220px] md:w-[280px] md:h-[280px] overflow-hidden bg-gray-100 relative group/card transition-all duration-300 hover:shadow-xl hover:shadow-[#55CDED]/10 hover:scale-[1.02]"
              onClick={() => {
                if (!hasDragged.current) setSelectedImage(index);
              }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover/card:scale-110"
                sizes="(max-width: 768px) 220px, 280px"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white text-sm font-medium truncate">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-[2000] bg-black/80 backdrop-blur-md flex items-center justify-center p-4 md:p-10 animate-[fadeIn_0.2s_ease-out]"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close button */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-all duration-200 cursor-pointer z-10"
            aria-label="Close"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {/* Prev button */}
          {selectedImage > 0 && (
            <button
              onClick={(e) => { e.stopPropagation(); setSelectedImage(selectedImage - 1); }}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2  flex items-center justify-center transition-all duration-200 cursor-pointer"
              aria-label="Previous image"
            >
              <Image src="/prevbutton.svg" alt="prev" width={50} height={50} />
            </button>
          )}

          {/* Image */}
          <div
            className="relative max-w-[90vw] max-h-[85vh] rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              width={1200}
              height={900}
              className="object-contain max-h-[85vh] w-auto rounded-2xl"
            />
          </div>

          {/* Next button */}
          {selectedImage < images.length - 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); setSelectedImage(selectedImage + 1); }}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2  flex items-center justify-center transition-all duration-200 cursor-pointer"
              aria-label="Next image"
            >
              <Image src="/next button.svg" alt="next" width={50} height={50}  />
            </button>
          )}

          {/* Image counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-sm font-medium">
            {selectedImage + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}
