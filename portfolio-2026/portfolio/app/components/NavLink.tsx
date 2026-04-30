"use client";

import { useCallback } from "react";

interface NavLinkProps {
  targetId: string;
  children: React.ReactNode;
  className?: string;
}

export default function NavLink({ targetId, children, className }: NavLinkProps) {
  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
      // Keep the URL clean — no hash
      window.history.replaceState(null, "", window.location.pathname);
    },
    [targetId]
  );

  return (
    <a href={`#${targetId}`} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
