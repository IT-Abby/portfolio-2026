"use client";

import Image from "next/image";
import { useState, useCallback, useEffect, useRef } from "react";
import ImageSlideshow from "./ImageSlideshow";
import LinkIcon from "./LinkIcon";
import { Marquee } from "@/components/ui/marquee";

interface Project {
  title: string;
  link: string;
  description: string;
  images: { src: string; alt: string }[];
  techIcons: { src: string; alt: string }[];
}

interface ProjectShowcaseProps {
  projects: Project[];
}

export default function ProjectShowcase({ projects }: ProjectShowcaseProps) {
  const [activeProject, setActiveProject] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const pendingIndex = useRef<number | null>(null);

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
      // Small delay before fading back in
      requestAnimationFrame(() => setIsAnimating(false));
    }, 300);
    return () => clearTimeout(timer);
  }, [isAnimating]);

  const goNext = useCallback(() => {
    const next = (activeProject + 1) % projects.length;
    switchProject(next, "right");
  }, [activeProject, projects.length, switchProject]);

  const goPrev = useCallback(() => {
    const prev = (activeProject - 1 + projects.length) % projects.length;
    switchProject(prev, "left");
  }, [activeProject, projects.length, switchProject]);

  const project = projects[activeProject];

  return (
    <div className="flex flex-col gap-4 w-full">
      {/* Preload all project images so switching is instant */}
      <div className="hidden">
        {projects.map((p, pi) =>
          p.images.map((img, ii) => (
            <Image key={`preload-${pi}-${ii}`} src={img.src} alt="" width={1} height={1} priority />
          ))
        )}
      </div>
      {/* Slideshow with side arrows */}
      <div className="relative flex items-center w-full gap-4">
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
          <h1 className="text-5xl md:text-6xl font-semibold leading-tight text-gray-900">
            {project.title}
          </h1>
          <LinkIcon href={project.link} />
        </div>

        <p className="text-lg text-justify leading-relaxed text-gray-500 pt-2 max-w-full">
          {project.description}
        </p>

        <Marquee className="max-w-md [--duration:20s]">
          {project.techIcons.map((icon, i) => (
            <Image key={i} src={icon.src} alt={icon.alt} width={30} height={30} />
          ))}
        </Marquee>
      </div>

      {/* Project dots (mobile-friendly navigation) */}
      {projects.length > 1 && (
        <div className="flex gap-2.5 justify-center pt-2 md:hidden">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveProject(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                i === activeProject
                  ? "bg-[#55CDED] scale-110"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to project ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
