"use client";

import { useState } from "react";

interface ExperienceItem {
  period: string;
  title: string;
  organization: string;
  location: string;
  isCurrent?: boolean;
}

const experiences: ExperienceItem[] = [
  {
    period: "Present",
    title: "UI/UX & Mobile App Developer",
    organization: "OkieDoc+ (Voluntary Intern)",
    location: "Remote",
    isCurrent: true,
  },
  {
    period: "Jan - Apr 2026",
    title: "UI/UX & Mobile App Developer",
    organization: "Bald Puppies Solutions Inc (Intern)",
    location: "On-Site",
  },
  {
    period: "May - Dec 2025",
    title: "Frontend Developer (Capstone Project)",
    organization: "Ateneo de Naga University",
    location: "Remote",
  },
  {
    period: "Aug 2022 - May 2026",
    title: "BS Information Technology (Education)",
    organization: "Ateneo de Naga University",
    location: "On-Site",
  },
  {
    period: "June 2016 - May 2022",
    title: "JHS & SHS TVL Strand (Education)",
    organization: "Naga College Foundation Inc.",
    location: "On-Site",
  },
];

export default function ExperienceTimeline() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col gap-0 relative">


      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-[9px] top-[6px] bottom-[50px] w-[2px] bg-[#55CDED]/20" />

        <div className="flex flex-col gap-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="flex items-start gap-4 group cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Dot */}
              <div className="relative flex-shrink-0 mt-[6px]">
                {exp.isCurrent ? (
                  /* Current: animated pulse dot */
                  <div className="relative flex items-center justify-center">
                    <span className="absolute inline-flex h-5 w-5 rounded-full bg-[#55CDED]/30 animate-[experience-ping_1.5s_cubic-bezier(0,0,0.2,1)_infinite]" />
                    <span className="absolute inline-flex h-3 w-3 rounded-full bg-[#55CDED]/40 animate-[experience-ping_1.5s_cubic-bezier(0,0,0.2,1)_infinite_0.3s]" />
                    <span className="relative inline-flex h-[20px] w-[20px] rounded-full bg-[#55CDED] shadow-[0_0_12px_rgba(85,205,237,0.5)]" />
                  </div>
                ) : (
                  /* Past: color on hover */
                  <div
                    className="relative flex items-center justify-center transition-all duration-300"
                  >
                    <span
                      className={`
                        relative inline-flex h-[20px] w-[20px] rounded-full border-[2.5px] transition-all duration-300
                        ${hoveredIndex === index
                          ? "bg-[#55CDED] border-[#55CDED] shadow-[0_0_10px_rgba(85,205,237,0.4)] scale-110"
                          : "bg-white border-gray-300"
                        }
                      `}
                    />
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="flex flex-col pb-0 transition-all duration-300">
                <span
                  className={`text-sm font-semibold tracking-wide transition-colors duration-300 ${exp.isCurrent
                    ? "text-[#55CDED]"
                    : hoveredIndex === index
                      ? "text-[#55CDED]"
                      : "text-gray-400"
                    }`}
                >
                  {exp.period}
                </span>
                <h3
                  className={`text-lg font-bold transition-colors duration-300 ${hoveredIndex === index && !exp.isCurrent
                    ? "text-gray-900"
                    : "text-gray-800"
                    }`}
                >
                  {exp.title}
                </h3>
                <p className="text-sm text-gray-500">
                  {exp.organization} · {exp.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
