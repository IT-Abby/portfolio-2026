"use client";

import NavLink from "./NavLink";
import MobileNavIcon from "./MobileNavIcon";
import ActiveSectionProvider from "./ActiveSectionContext";

const SECTION_IDS = ["home", "about", "projects", "ui/ux", "journey", "testimonials"];

interface NavigationWrapperProps {
  children: React.ReactNode;
}

export default function NavigationWrapper({ children }: NavigationWrapperProps) {
  return (
    <ActiveSectionProvider sectionIds={SECTION_IDS}>
      {/* Desktop Nav Bar */}
      <nav className="hidden md:flex fixed top-0 w-full px-8 py-4 justify-center items-center bg-white/10 backdrop-blur-md backdrop-saturate-1 border-b border-white/20 shadow-[0_4px_30px_rgba(0,0,0,0.05)] z-[1000]">
        <ul className="flex gap-8 text-sm font-medium items-center text-[#ABE2F1]">
          <li><NavLink targetId="home" className="nav-link transition-all" activeClassName="nav-link-active">HOME</NavLink></li>
          <li><NavLink targetId="about" className="nav-link transition-all" activeClassName="nav-link-active">ABOUT</NavLink></li>
          <li><NavLink targetId="projects" className="nav-link transition-all" activeClassName="nav-link-active">PROJECTS</NavLink></li>
          <li><NavLink targetId="ui/ux" className="nav-link transition-all" activeClassName="nav-link-active">UI/UX</NavLink></li>
          <li><NavLink targetId="journey" className="nav-link transition-all" activeClassName="nav-link-active">JOURNEY</NavLink></li>
          <li><NavLink targetId="testimonials" className="nav-link transition-all" activeClassName="nav-link-active">TESTIMONIALS</NavLink></li>
        </ul>
      </nav>

      {/* Mobile Nav Bar — Circular pill with frosted glass */}
      <nav className="flex md:hidden fixed bottom-5 left-1/2 -translate-x-1/2 z-[1000]">
        <div className="flex items-center gap-1 px-4 py-3 rounded-full bg-white/20 backdrop-blur-2xl backdrop-saturate-150 border border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.08),_inset_0_1px_0_rgba(255,255,255,0.4)]">
          <NavLink
            targetId="home"
            className="flex flex-col items-center gap-1 text-[10px] font-semibold px-3 py-1.5 rounded-full transition-all duration-300"
            activeClassName="text-[#55CDED] bg-white/30"
            inactiveClassName="text-gray-400"
          >
            <MobileNavIcon icon="home" size={18} />
            <span>HOME</span>
          </NavLink>
          <NavLink
            targetId="about"
            className="flex flex-col items-center gap-1 text-[10px] font-semibold px-3 py-1.5 rounded-full transition-all duration-300"
            activeClassName="text-[#55CDED] bg-white/30"
            inactiveClassName="text-gray-400"
          >
            <MobileNavIcon icon="about" size={18} />
            <span>ABOUT</span>
          </NavLink>
          <NavLink
            targetId="projects"
            className="flex flex-col items-center gap-1 text-[10px] font-semibold px-3 py-1.5 rounded-full transition-all duration-300"
            activeClassName="text-[#55CDED] bg-white/30"
            inactiveClassName="text-gray-400"
          >
            <MobileNavIcon icon="projects" size={18} />
            <span>PROJECTS</span>
          </NavLink>
          <NavLink
            targetId="ui/ux"
            className="flex flex-col items-center gap-1 text-[10px] font-semibold px-3 py-1.5 rounded-full transition-all duration-300"
            activeClassName="text-[#55CDED] bg-white/30"
            inactiveClassName="text-gray-400"
          >
            <MobileNavIcon icon="uiux" size={18} />
            <span>UI/UX</span>
          </NavLink>
          <NavLink
            targetId="journey"
            className="flex flex-col items-center gap-1 text-[10px] font-semibold px-3 py-1.5 rounded-full transition-all duration-300"
            activeClassName="text-[#55CDED] bg-white/30"
            inactiveClassName="text-gray-400"
          >
            <MobileNavIcon icon="journey" size={18} />
            <span>JOURNEY</span>
          </NavLink>
          <NavLink
            targetId="testimonials"
            className="flex flex-col items-center gap-1 text-[10px] font-semibold px-3 py-1.5 rounded-full transition-all duration-300"
            activeClassName="text-[#55CDED] bg-white/30"
            inactiveClassName="text-gray-400"
          >
            <MobileNavIcon icon="testimonials" size={18} />
            <span>TESTIMONIALS</span>
          </NavLink>
        </div>
      </nav>

      {children}
    </ActiveSectionProvider>
  );
}
