"use client";

import Image from "next/image";
import { useRef, useState, useCallback } from "react";

export default function MockupCard() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<React.CSSProperties>({});
  const [expanded, setExpanded] = useState(false);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const el = cardRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const ratioX = (e.clientX - rect.left) / rect.width - 0.5;
      const ratioY = (e.clientY - rect.top) / rect.height - 0.5;

      setStyle({
        transform: `perspective(800px) rotateY(${-20 * ratioX}deg) rotateX(${20 * ratioY}deg)`,
        transition: "transform 0.1s ease-out",
      });
    },
    []
  );

  const handleMouseLeave = useCallback(() => {
    setStyle({
      transform: "perspective(800px) rotateY(0deg) rotateX(0deg)",
      transition: "transform 0.4s ease-out",
    });
  }, []);

  const handleClick = useCallback(() => {
    setExpanded((prev) => !prev);
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      style={{ ...style, transformStyle: "preserve-3d" }}
      className="relative z-10 cursor-pointer select-none"
    >
      {/* Left mockup — pops out behind to the left */}
      <div
        className="absolute inset-0 z-[-1] transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
        style={{
          transform: expanded
            ? "translateX(-23%) scale(0.95) rotate(0deg)"
            : "translateX(0%) scale(0.95) rotate(0deg)",
          opacity: expanded ? 1 : 0,
        }}
      >
        {/* PLACEHOLDER — replace src with your image */}
        <div className="w-full h-full flex items-center justify-center">
          <Image
            src="mockup3.svg"
            alt="mockup-left"
            width={600}
            height={600}
            draggable={false}
            className="opacity-90"
          />
        </div>
      </div>

      {/* Right mockup — pops out behind to the right */}
      <div
        className="absolute inset-0 z-[-1] transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
        style={{
          transform: expanded
            ? "translateX(18%) scale(0.85) rotate(0deg)"
            : "translateX(0%) scale(0.95) rotate(0deg)",
          opacity: expanded ? 1 : 0,
          transitionDelay: expanded ? "0.05s" : "0s",
        }}
      >
        {/* PLACEHOLDER — replace src with your image */}
        <div className="w-full h-full flex items-center justify-center">
          <Image
            src="mockup2.svg"
            alt="mockup-right"
            width={600}
            height={600}
            draggable={false}
            className="opacity-90"
          />
        </div>
      </div>

      {/* Main center mockup */}
      <Image
        src="mockup.svg"
        alt="mockup"
        width={600}
        height={600}
        draggable={false}
        priority
      />
    </div>
  );
}
