"use client";

import { useState, useCallback } from "react";

interface Skill {
  name: string;
  level: number;
}

const categories: { title: string; skills: Skill[] }[] = [

  {
    title: "Frontend",
    skills: [
      { name: "React Native", level: 60 },
      { name: "Next.js", level: 50 },
      { name: "React", level: 50 },
      { name: "CSS", level: 70 },
      { name: "Tailwind CSS", level: 40 },
      { name: "JavaScript", level: 60 },
      { name: "TypeScript", level: 60 },
      { name: "Prettier", level: 60 },
      { name: "Zustand", level: 30 },


    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "RESTful API", level: 30 },
      { name: "Express.js", level: 10 },
      { name: "Node.js", level: 40 },
      { name: "Supabase", level: 65 },
      { name: "PostgreSQL", level: 40 },
      { name: "Firebase", level: 40 },
      { name: "MongoDB", level: 40 }
    ],
  },
  {
    title: "Deployment",
    skills: [
      { name: "Vercel", level: 80 },
      { name: "Expo go", level: 70 },
      { name: "Android Gradlew", level: 60 },
    ],
  },
  {
    title: "AI Tools",
    skills: [
      { name: "Antigravity", level: 50 },
      { name: "Cursor", level: 50 },
      { name: "Claude Code", level: 50 },
      { name: "ChatGPT", level: 50 },
    ],
  },
  {
    title: "Developer Tools",
    skills: [
      { name: "GitHub", level: 70 },
      { name: "Git", level: 50 },
      { name: "VS Code", level: 90 },
      { name: "Bitbucket", level: 40 },
      { name: "Linear", level: 50 },
      { name: "Notion", level: 50 },
      { name: "Jira", level: 50 },
      { name: "Figma", level: 70 },
      { name: "Slack", level: 40 },
    ],
  },
  {
    title: "Soft Skills",
    skills: [
      { name: "Adaptability", level: 80 },
      { name: "Teamwork", level: 80 },
      { name: "Problem Solving", level: 70 },
      { name: "Time Management", level: 90 },
      { name: "Communication", level: 50 },
    ],
  },

];

export default function SkillBars() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hasInteracted, setHasInteracted] = useState(false);

  const dismiss = useCallback(() => setHasInteracted(true), []);

  const handleNext = useCallback(() => {
    dismiss();
    setActiveIndex((prev) => (prev + 1) % categories.length);
  }, [dismiss]);

  const handlePrev = useCallback(() => {
    dismiss();
    setActiveIndex((prev) => (prev - 1 + categories.length) % categories.length);
  }, [dismiss]);

  const { title, skills } = categories[activeIndex];

  return (
    <div className="flex flex-col gap-6 w-full">
      {/* Header row */}
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
        <div className="flex gap-2">
          {activeIndex > 0 && (
            <button
              onClick={handlePrev}
              className="w-9 h-9 rounded-full border-2 border-[#55CDED] text-[#55CDED] flex items-center justify-center hover:bg-[#55CDED] hover:text-white transition-colors duration-200 cursor-pointer"
              aria-label="Previous category"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
          )}
          {activeIndex < categories.length - 1 && (
            <div className="relative flex items-center justify-center">
              {!hasInteracted && (
                <span className="absolute inset-0 rounded-full border-2 border-[#55CDED] animate-[ping_1.5s_cubic-bezier(0,0,0.2,1)_infinite] opacity-60" />
              )}
              <button
                onClick={handleNext}
                className="relative w-9 h-9 rounded-full border-2 border-[#55CDED] text-[#55CDED] flex items-center justify-center hover:bg-[#55CDED] hover:text-white transition-colors duration-200 cursor-pointer"
                aria-label="Next category"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Skill bars */}
      <div className="flex flex-col gap-5">
        {skills.map((skill) => (
          <div key={`${title}-${skill.name}`} className="flex flex-col gap-1.5">
            <span className="text-base font-semibold text-gray-800">{skill.name}</span>
            <div className="w-full h-2.5 rounded-full bg-[#55CDED]/10 overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-700 ease-out"
                style={{
                  width: `${skill.level}%`,
                  background: "linear-gradient(90deg, #55CDED, #89DBEF)",
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Dots indicator */}
      <div className="flex gap-2 justify-center pt-2">
        {categories.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${i === activeIndex
              ? "bg-[#55CDED] scale-110"
              : "bg-gray-300 hover:bg-gray-400"
              }`}
            aria-label={`Go to ${categories[i].title}`}
          />
        ))}
      </div>
    </div>
  );
}
