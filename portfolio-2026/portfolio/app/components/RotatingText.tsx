"use client";

import { useState, useEffect, useCallback } from "react";

interface RotatingTextProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  className?: string;
}

export default function RotatingText({
  texts,
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseDuration = 1500,
  className = "",
}: RotatingTextProps) {
  const [textIndex, setTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const currentFullText = texts[textIndex];

  const tick = useCallback(() => {
    if (!isDeleting) {
      // Typing
      if (displayedText.length < currentFullText.length) {
        setDisplayedText(currentFullText.slice(0, displayedText.length + 1));
      } else {
        // Finished typing — pause, then start deleting
        setTimeout(() => setIsDeleting(true), pauseDuration);
        return;
      }
    } else {
      // Deleting
      if (displayedText.length > 0) {
        setDisplayedText(currentFullText.slice(0, displayedText.length - 1));
      } else {
        // Finished deleting — move to next text
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
        return;
      }
    }
  }, [displayedText, isDeleting, currentFullText, texts.length, pauseDuration]);

  useEffect(() => {
    const speed = isDeleting ? deletingSpeed : typingSpeed;
    const timer = setTimeout(tick, speed);
    return () => clearTimeout(timer);
  }, [tick, isDeleting, deletingSpeed, typingSpeed]);

  return (
    <span className={className}>
      {displayedText}
      <span className="animate-pulse">|</span>
    </span>
  );
}
