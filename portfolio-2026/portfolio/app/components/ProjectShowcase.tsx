"use client";

import Image from "next/image";
import { useState, useCallback } from "react";
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

  const goNext = useCallback(() => {
    setActiveProject((prev) => (prev + 1) % projects.length);
  }, [projects.length]);

  const goPrev = useCallback(() => {
    setActiveProject((prev) => (prev - 1 + projects.length) % projects.length);
  }, [projects.length]);

  const project = projects[activeProject];

  return (
    <div className="flex flex-col gap-4 w-full">
      {/* Slideshow with side arrows */}
      <div className="relative flex items-center w-full gap-4">
        {/* Left arrow */}
        {activeProject > 0 && (
          <button
            onClick={goPrev}
            className="hidden md:flex shrink-0 w-14 h-14 rounded-full bg-[#55CDED]/10 items-center justify-center hover:bg-[#55CDED]/20 transition-colors duration-200 cursor-pointer"
            aria-label="Previous project"
          >
            <Image src="/arrow.svg" alt="prev" width={24} height={24} className="rotate-180" />
          </button>
        )}

        {/* Slideshow */}
        <div className="flex-1 min-w-0">
          <ImageSlideshow images={project.images} />
        </div>

        {/* Right arrow */}
        {activeProject < projects.length - 1 && (
          <button
            onClick={goNext}
            className="hidden md:flex shrink-0 w-14 h-14 rounded-full bg-[#55CDED]/10 items-center justify-center hover:bg-[#55CDED]/20 transition-colors duration-200 cursor-pointer"
            aria-label="Next project"
          >
            <Image src="/arrow.svg" alt="next" width={24} height={24} />
          </button>
        )}
      </div>

      {/* Project info */}
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
