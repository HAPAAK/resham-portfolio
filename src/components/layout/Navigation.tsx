"use client";
import { NavLink } from "./NavLink";

export default function Navigation() {
  return (
    <nav className="fixed top-2 md:top-4 left-0 right-0 z-50 flex justify-center px-2">
      <div className="max-w-fit rounded-full bg-primary/95 backdrop-blur-sm shadow-lg px-2 py-2 md:px-6 md:py-3">
        <div className="flex items-center gap-1 md:gap-2">
          <NavLink to="/#about">About</NavLink>
          <NavLink to="/#education">Education</NavLink>
          <NavLink to="/#experience">Experience</NavLink>
          <NavLink to="/#skills">Skills</NavLink>
          <NavLink to="/#projects">Projects</NavLink>
        </div>
      </div>
    </nav>
  );
};
