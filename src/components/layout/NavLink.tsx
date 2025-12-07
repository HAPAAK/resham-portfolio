"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type NavLinkProps = {
  to: string;
  children: React.ReactNode;
};

export function NavLink({ to, children }: NavLinkProps) {
  const pathname = usePathname();
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    // Set initial hash
    setActiveHash(window.location.hash);

    // Update hash on hash change
    const handleHashChange = () => {
      setActiveHash(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);
    
    // Scroll spy - detect which section is in view
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      
      // If at the very top (within 200px), set About as active
      if (scrollPos < 200) {
        setActiveHash("#about");
        return;
      }

      const sections = document.querySelectorAll("section[id]");
      let currentSection = "";

      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionHeight = section.clientHeight;
        
        // Check if section is in viewport
        if (sectionTop <= 100 && sectionTop + sectionHeight > 100) {
          currentSection = `#${section.id}`;
        }
      });

      if (currentSection) {
        setActiveHash(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on mount

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Check if this link is active
  const isActive = to.includes("#")
    ? to.endsWith(activeHash) || (to === "/#about" && (activeHash === "" || activeHash === "#about"))
    : pathname === to && activeHash === "";

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Special handling for About link - scroll to top
    if (to === "/#about") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      window.history.pushState(null, "", "/#about");
    }
  };

  return (
    <Link
      href={to}
      onClick={handleClick}
      className={`text-xs md:text-sm font-medium transition-all duration-300 px-2 py-1.5 md:px-4 md:py-2 rounded-full ${
        isActive 
          ? "bg-background/70 text-foreground font-semibold shadow-sm backdrop-blur-sm" 
          : "text-primary-foreground/80 hover:bg-primary/20 hover:text-primary-foreground"
      }`}
    >
      {children}
    </Link>
  );
}
