import { GraduationCap } from "lucide-react";
import { educationData } from "@/data/education";

const Education = () => {

  return (
    <section id="education" className="pt-24 pb-16 bg-secondary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <GraduationCap className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              My Educational Journey
            </h2>
            <p className="text-lg text-muted-foreground">
              Academic background and qualifications
            </p>
          </div>

          {/* Alternating Timeline */}
          <div className="relative">
            {/* Vertical Center Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 transform -translate-x-1/2" />
            {/* Mobile Vertical Line */}
            <div className="md:hidden absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30" />

            <div className="space-y-12">
              {educationData.map((edu, index) => {
                const isLeft = index % 2 === 0;
                
                return (
                  <div 
                    key={edu.id} 
                    className={`relative flex ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  >
                    {/* Timeline Dot - centered on desktop, left on mobile */}
                    <div className="absolute left-4 md:left-1/2 top-6 w-8 h-8 rounded-full bg-primary border-4 border-background shadow-lg z-10 transform md:-translate-x-1/2" />

                    {/* Content - takes half width on desktop, full on mobile */}
                    <div className={`w-full md:w-1/2 pl-20 md:pl-0 ${isLeft ? 'md:pr-8' : 'md:pl-8'} mt-8`}>
                      <div className="bg-card border-2 border-border rounded-xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                        <div className="mb-3">
                          <span className="inline-block text-sm font-bold text-primary uppercase tracking-wider bg-primary/10 px-3 py-1 rounded-full">
                            {edu.period}
                          </span>
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                          {edu.degree}
                        </h3>
                        <p className="text-base md:text-lg text-muted-foreground mb-3 font-medium">
                          {edu.institution}
                        </p>
                        <div className="flex flex-wrap items-center gap-2 mb-3">
                          <span className="inline-block text-sm font-bold text-primary uppercase tracking-wider bg-primary/10 px-3 py-1 rounded-full">
                            GPA: {edu.gpa} / {edu.total_gpa}
                          </span>
                        </div>
                        <p className="text-base text-muted-foreground leading-relaxed">
                          {edu.description}
                        </p>
                      </div>
                    </div>
                    
                    {/* Empty space on the other side (desktop only) */}
                    <div className="hidden md:block w-1/2" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
