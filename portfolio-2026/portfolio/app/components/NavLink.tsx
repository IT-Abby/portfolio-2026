"use client";

import { useCallback } from "react";
import { useActiveSection } from "./ActiveSectionContext";

interface NavLinkProps {
  targetId: string;
  children: React.ReactNode;
  className?: string;
  activeClassName?: string;
  inactiveClassName?: string;
  /** Alternative section IDs that should also count as "active" for this link */
  alsoMatchIds?: string[];
}

export default function NavLink({
  targetId,
  children,
  className,
  activeClassName,
  inactiveClassName,
  alsoMatchIds,
}: NavLinkProps) {
  const activeSection = useActiveSection();

  const isActive =
    activeSection === targetId ||
    (alsoMatchIds ? alsoMatchIds.includes(activeSection) : false);

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

  const resolvedClassName = [
    className,
    isActive ? activeClassName : inactiveClassName,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <a href={`#${targetId}`} onClick={handleClick} className={resolvedClassName}>
      {children}
    </a>
  );
}
