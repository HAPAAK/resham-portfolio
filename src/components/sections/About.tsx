"use client";
import { userData } from "@/data/user";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { parseTextWithHTMLTags } from "@/lib/textUtils";

const About = () => {
  const [isDark, setIsDark] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [clipPath, setClipPath] = useState("circle(0% at 50% 50%)");
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check initial state
    if (document.documentElement.classList.contains("dark")) {
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    if (isAnimating || !imageRef.current) return;
    
    setIsAnimating(true);
    const rect = imageRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Calculate distance to furthest corner to ensure full coverage
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const maxDist = Math.max(
      Math.hypot(centerX, centerY),
      Math.hypot(viewportWidth - centerX, centerY),
      Math.hypot(centerX, viewportHeight - centerY),
      Math.hypot(viewportWidth - centerX, viewportHeight - centerY)
    );
    
    // Determine direction
    const goingDark = !isDark;
    
    if (goingDark) {
      // Light -> Dark: Expand dark circle
      setClipPath(`circle(0px at ${centerX}px ${centerY}px)`);
      
      // Force reflow
      requestAnimationFrame(() => {
        setClipPath(`circle(${maxDist * 1.5}px at ${centerX}px ${centerY}px)`);
        
        setTimeout(() => {
          document.documentElement.classList.add("dark");
          setIsDark(true);
          setIsAnimating(false);
        }, 1000); // Match transition duration
      });
    } else {
      // Dark -> Light: Shrink dark circle
      // First, ensure the overlay covers the screen (it's dark because we are in dark mode)
      setClipPath(`circle(${maxDist * 1.5}px at ${centerX}px ${centerY}px)`);
      
      // Switch underlying theme to light immediately behind the overlay
      document.documentElement.classList.remove("dark");
      
      // Force reflow then shrink
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            setClipPath(`circle(0px at ${centerX}px ${centerY}px)`);
            
            setTimeout(() => {
              setIsDark(false);
              setIsAnimating(false);
            }, 1000);
        });
      });
    }
  };

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Resham_Sapkota_Resume.pdf";
    link.click();
  };

  return (
    <section id="about" className="flex items-center justify-center bg-gradient-to-br from-background via-secondary/20 to-background pt-24">
      {/* Dark Mode Transition Overlay */}
      <div 
        className="fixed inset-0 z-[100] pointer-events-none"
        style={{
          backgroundColor: "#21262c", // The dark theme background color
          clipPath: clipPath,
          transition: "clip-path 1s ease-in-out",
          opacity: isAnimating || (isDark && !isAnimating) ? 1 : 0, // Hide when light and not animating
          display: isAnimating ? 'block' : 'none'
        }}
      />

      <div className="w-full">
        {/* Heading Section - Completely Separate */}
        <div className="text-center py-4 md:py-8 px-4">
          <h2 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-black tracking-tight" style={{ 
            color: 'hsl(75, 25%, 35%)',
            fontFamily: "'Brush Script MT', 'Segoe Script', 'Comic Sans MS', cursive",
            WebkitTextStroke: '1px hsl(75, 25%, 35%)',
            textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
          }}>
            {userData.description}
          </h2>
        </div>

        {/* Photo and Text Section - Completely Separate */}
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-6xl mx-auto grid md:grid-cols-[300px,1fr] gap-6 md:gap-10">
            {/* Photo Side */}
            <div className="flex justify-center md:justify-start">
              <div 
                ref={imageRef}
                onClick={toggleTheme}
                className="relative w-48 h-60 md:w-72 md:h-96 overflow-hidden shadow-2xl border-4 border-primary/20 rounded-3xl cursor-pointer hover:scale-[1.02] active:scale-95 transition-transform duration-300"
                title="Click to toggle theme"
              >
                <Image
                  src="/profile.jpg"
                  alt="Resham Sapkota"
                  fill
                  sizes="(max-width: 768px) 192px, 288px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Text Side */}
            <div className="space-y-4 md:space-y-6">
              <div className="prose prose-lg text-justify text-muted-foreground space-y-3 md:space-y-4">
                {userData.about.description.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-base md:text-base lg:text-lg leading-relaxed">{parseTextWithHTMLTags(paragraph)}</p>
                ))}
              </div>

            <Button 
              onClick={handleDownloadResume} 
              size="lg" 
              className="w-fit text-sm md:text-base self-center"
            >
              <Download className="h-4 w-4 md:h-5 md:w-5 mr-2" />
              Download the Resume
            </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

