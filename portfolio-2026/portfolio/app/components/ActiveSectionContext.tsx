"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

const ActiveSectionContext = createContext<string>("home");

export function useActiveSection() {
  return useContext(ActiveSectionContext);
}

interface ActiveSectionProviderProps {
  children: ReactNode;
  sectionIds: string[];
}

export default function ActiveSectionProvider({ children, sectionIds }: ActiveSectionProviderProps) {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const visibleSections = new Map<string, number>();

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              visibleSections.set(id, entry.intersectionRatio);
            } else {
              visibleSections.delete(id);
            }

            // Pick the section with the highest visibility ratio
            let bestSection = "home";
            let bestRatio = 0;
            visibleSections.forEach((ratio, sectionId) => {
              if (ratio > bestRatio) {
                bestRatio = ratio;
                bestSection = sectionId;
              }
            });
            setActiveSection(bestSection);
          });
        },
        {
          threshold: [0, 0.1, 0.2, 0.3, 0.5],
          rootMargin: "-10% 0px -10% 0px",
        }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, [sectionIds]);

  return (
    <ActiveSectionContext.Provider value={activeSection}>
      {children}
    </ActiveSectionContext.Provider>
  );
}
