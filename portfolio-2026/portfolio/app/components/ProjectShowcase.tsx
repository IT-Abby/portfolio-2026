"use client";

import Image from "next/image";
import { useState, useCallback, useEffect, useRef } from "react";
import ImageSlideshow from "./ImageSlideshow";
import LinkIcon from "./LinkIcon";
import { Marquee } from "@/components/ui/marquee";

interface ProjectImage {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

interface Project {
  title: string;
  link: string;
  description: string;
  images: ProjectImage[];
  techIcons: { src: string; alt: string }[];
}

interface ProjectShowcaseProps {
  projects: Project[];
  maxWidth?: string;
  titleSize?: string;
  descriptionMaxWidth?: string;
}

export default function ProjectShowcase({
  projects,
  maxWidth,
  titleSize = "text-5xl md:text-6xl",
  descriptionMaxWidth = "max-w-full",
}: ProjectShowcaseProps) {
  const [activeProject, setActiveProject] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const pendingIndex = useRef<number | null>(null);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const [swipeOffset, setSwipeOffset] = useState(0);
  const isDragging = useRef(false);

  const SWIPE_THRESHOLD = 50;

  const switchProject = useCallback((nextIndex: number, dir: "left" | "right") => {
    if (isAnimating) return;
    setDirection(dir);
    setIsAnimating(true);
    pendingIndex.current = nextIndex;
  }, [isAnimating]);

  useEffect(() => {
    if (!isAnimating) return;
    const timer = setTimeout(() => {
      if (pendingIndex.current !== null) {
        setActiveProject(pendingIndex.current);
        pendingIndex.current = null;
      }
      requestAnimationFrame(() => setIsAnimating(false));
    }, 300);
    return () => clearTimeout(timer);
  }, [isAnimating]);

  const goNext = useCallback(() => {
    if (activeProject >= projects.length - 1) return;
    const next = activeProject + 1;
    switchProject(next, "right");
  }, [activeProject, projects.length, switchProject]);

  const goPrev = useCallback(() => {
    if (activeProject <= 0) return;
    const prev = activeProject - 1;
    switchProject(prev, "left");
  }, [activeProject, switchProject]);

  // Shared swipe logic
  const applySwipeOffset = useCallback((startX: number, currentX: number) => {
    const diff = currentX - startX;
    const atStart = activeProject === 0 && diff > 0;
    const atEnd = activeProject === projects.length - 1 && diff < 0;
    if (atStart || atEnd) {
      setSwipeOffset(diff * 0.2);
    } else {
      setSwipeOffset(diff * 0.4);
    }
  }, [activeProject, projects.length]);

  const resolveSwipe = useCallback(() => {
    if (touchStartX.current === null || touchEndX.current === null) {
      setSwipeOffset(0);
      touchStartX.current = null;
      isDragging.current = false;
      return;
    }
    const diff = touchStartX.current - touchEndX.current;
    setSwipeOffset(0);
    touchStartX.current = null;
    touchEndX.current = null;
    isDragging.current = false;

    if (Math.abs(diff) >= SWIPE_THRESHOLD) {
      if (diff > 0) goNext();
      else goPrev();
    }
  }, [goNext, goPrev]);

  // Touch handlers
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = null;
    setSwipeOffset(0);
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const currentX = e.touches[0].clientX;
    touchEndX.current = currentX;
    applySwipeOffset(touchStartX.current, currentX);
  }, [applySwipeOffset]);

  const handleTouchEnd = useCallback(() => {
    resolveSwipe();
  }, [resolveSwipe]);

  // Mouse handlers (cursor drag)
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    isDragging.current = true;
    touchStartX.current = e.clientX;
    touchEndX.current = null;
    setSwipeOffset(0);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging.current || touchStartX.current === null) return;
    touchEndX.current = e.clientX;
    applySwipeOffset(touchStartX.current, e.clientX);
  }, [applySwipeOffset]);

  const handleMouseUp = useCallback(() => {
    if (!isDragging.current) return;
    resolveSwipe();
  }, [resolveSwipe]);

  const handleMouseLeave = useCallback(() => {
    if (!isDragging.current) return;
    resolveSwipe();
  }, [resolveSwipe]);

  const project = projects[activeProject];

  return (
    <div
      className="flex flex-col gap-4 w-full select-none cursor-grab active:cursor-grabbing"
      style={{ maxWidth: maxWidth || undefined }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
    >
      {/* Preload all project images so switching is instant */}
      <div className="hidden">
        {projects.map((p, pi) =>
          p.images.map((img, ii) => (
            <Image key={`preload-${pi}-${ii}`} src={img.src} alt="" width={1} height={1} priority />
          ))
        )}
      </div>
      {/* Slideshow with side arrows */}
      <div
        className="relative flex items-center w-full gap-4 transition-transform duration-150 ease-out md:!transform-none"
        style={{
          transform: swipeOffset ? `translateX(${swipeOffset}px)` : undefined,
        }}
      >
        {/* Left arrow */}
        {activeProject > 0 && (
          <div className="hidden md:flex shrink-0 relative items-center justify-center">
            <div className="absolute w-20 h-20 rounded-full bg-[#55CDED]/[0.06]" />
            <div className="absolute w-16 h-16 rounded-full bg-[#55CDED]/[0.08]" />
            <div className="absolute w-12 h-12 rounded-full bg-[#55CDED]/[0.10]" />
            <button
              onClick={goPrev}
              className="relative w-14 h-14 rounded-full bg-white/80 backdrop-blur-sm border border-[#55CDED]/20 flex items-center justify-center hover:bg-[#55CDED]/10 hover:scale-110 transition-all duration-300 cursor-pointer shadow-sm"
              aria-label="Previous project"
            >
              <Image src="/arrow.svg" alt="prev" width={24} height={24} className="rotate-180" />
            </button>
          </div>
        )}

        {/* Slideshow */}
        <div className="flex-1 min-w-0">
          <ImageSlideshow key={activeProject} images={project.images} />
        </div>

        {/* Right arrow */}
        {activeProject < projects.length - 1 && (
          <div className="hidden md:flex shrink-0 relative items-center justify-center">
            {/* Concentric rings background */}
            <div className="absolute w-20 h-20 rounded-full bg-[#55CDED]/[0.06]" />
            <div className="absolute w-16 h-16 rounded-full bg-[#55CDED]/[0.08]" />
            <div className="absolute w-12 h-12 rounded-full bg-[#55CDED]/[0.10]" />
            <button
              onClick={goNext}
              className="relative w-14 h-14 rounded-full bg-white/80 backdrop-blur-sm border border-[#55CDED]/20 flex items-center justify-center hover:bg-[#55CDED]/10 hover:scale-110 transition-all duration-300 cursor-pointer shadow-sm"
              aria-label="Next project"
            >
              <Image src="/arrow.svg" alt="next" width={24} height={24} />
            </button>
          </div>
        )}
      </div>

      {/* Project info — animated */}
      <div
        className="transition-all duration-300 ease-in-out"
        style={{
          opacity: isAnimating ? 0 : 1,
          transform: isAnimating
            ? `translateX(${direction === "right" ? "-30px" : "30px"})`
            : "translateX(0)",
        }}
      >
        <div className="flex flex-row gap-5 items-center">
          <h1 className={`${titleSize} font-semibold leading-tight text-gray-900`}>
            {project.title}
          </h1>
          <LinkIcon href={project.link} />
        </div>

        <p className={`text-lg text-justify leading-relaxed text-gray-500 pt-2 ${descriptionMaxWidth}`}>
          {project.description}
        </p>

        <Marquee className="max-w-md [--duration:20s]">
          {project.techIcons.map((icon, i) => (
            <Image key={i} src={icon.src} alt={icon.alt} width={30} height={30} />
          ))}
        </Marquee>
      </div>

      {/* Swipe indicator dots (mobile only — shows position, not clickable paginator) */}
      {projects.length > 1 && (
        <div className="flex gap-2 justify-center pt-1 md:hidden">
          {projects.map((_, i) => (
            <div
              key={i}
              className={`h-1 rounded-full transition-all duration-300 ${
                i === activeProject
                  ? "w-6 bg-[#55CDED]"
                  : "w-2 bg-gray-300"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
