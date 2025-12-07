"use client";
"use client";
import { useState, useRef, useEffect } from "react";
import { skillCategories, skillDescription } from "@/data/skills";
import styles from "@/styles/components/Skills.module.css";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].category);
  
  // Mobile Carousel Logic
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setShowLeftArrow(scrollLeft > 0);
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
  };

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const scrollAmount = container.clientWidth;
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
      // Initial check
      handleScroll();
      // Add listener for window resize
      window.addEventListener('resize', handleScroll);
      return () => window.removeEventListener('resize', handleScroll);
  }, []);


  return (
    <section 
      id="skills" 
      className="pt-24 pb-20 relative bg-secondary/10"
      style={{
        backgroundImage: "url('/shapelined.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-background/90" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {skillDescription}
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          {/* Mobile Carousel View */}
          <div className="md:hidden relative group">
              {/* Left Arrow */}
              <button 
                  onClick={() => scroll('left')}
                  className={cn(
                      "absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-background/80 p-2 rounded-full shadow-lg border border-border backdrop-blur-sm transition-opacity duration-300",
                      showLeftArrow ? "opacity-100" : "opacity-0 pointer-events-none"
                  )}
                  aria-label="Previous category"
              >
                  <ChevronLeft className="h-6 w-6 text-foreground" />
              </button>

              {/* Scroll Container */}
              <div 
                  ref={scrollContainerRef}
                  onScroll={handleScroll}
                  className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-4 pb-4"
                  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                  {skillCategories.map((category) => (
                      <div 
                          key={category.category}
                          className="min-w-full snap-center flex flex-col items-center"
                      >
                          <div className={styles.mobileSkillCard}>
                              <h3 className="text-xl font-bold text-foreground mb-6 text-center">
                                  {category.category}
                              </h3>
                              <div className="flex flex-wrap justify-center gap-3">
                                  {category.skills.map((skill) => (
                                      <div
                                          key={skill.name}
                                          className={cn(styles.skillItem)}
                                      >
                                          {skill.name}
                                      </div>
                                  ))}
                              </div>
                          </div>
                      </div>
                  ))}
              </div>

              {/* Right Arrow */}
              <button 
                  onClick={() => scroll('right')}
                  className={cn(
                      "absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-background/80 p-2 rounded-full shadow-lg border border-border backdrop-blur-sm transition-opacity duration-300",
                      showRightArrow ? "opacity-100" : "opacity-0 pointer-events-none"
                  )}
                  aria-label="Next category"
              >
                  <ChevronRight className="h-6 w-6 text-foreground" />
              </button>
          </div>

          {/* Desktop Category Tabs */}
          <div className={cn(styles.tabsContainer, "hidden md:flex")}>
            {skillCategories.map((category) => (
              <button
                key={category.category}
                onClick={() => setActiveCategory(category.category)}
                className={cn(
                  styles.tabButton,
                  activeCategory === category.category && styles.tabButtonActive
                )}
              >
                {category.category}
              </button>
            ))}
          </div>

          {/* Desktop Skills Grid */}
          <div className={cn(styles.skillsGrid, "hidden md:flex")}>
            {skillCategories
              .find((c) => c.category === activeCategory)
              ?.skills.map((skill, index) => (
                <div
                  key={`${activeCategory}-${skill.name}`}
                  className={cn(styles.skillItem, styles.animateSkill)}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {skill.name}
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
