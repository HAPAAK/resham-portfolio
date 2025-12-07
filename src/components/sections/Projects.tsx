"use client";

import { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState<boolean[]>(projects.map(() => false));
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = projectRefs.current.indexOf(entry.target as HTMLDivElement);
            if (index !== -1) {
              setVisibleProjects((prev) => {
                const newVisible = [...prev];
                newVisible[index] = true;
                return newVisible;
              });
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      projectRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section id="projects" className="pt-24 pb-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
        <h2 className="font-bold text-foreground mb-12 text-center"> My Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) {
                  projectRefs.current[index] = el;
                }
              }}
              className={`transition-all duration-1000 ${
                visibleProjects[index]
                  ? "opacity-100 translate-x-0"
                  : `opacity-0 ${index % 2 === 0 ? "-translate-x-20" : "translate-x-20"}`
              }`}
            >
              <Card className="group hover:shadow-lg transition-shadow border-border h-full">
                <CardHeader>
                  <CardTitle className="text-foreground text-2xl">{project.title}</CardTitle>
                  <CardDescription className="text-muted-foreground text-base">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 text-sm bg-secondary text-secondary-foreground rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Button
                    className="w-full"
                    onClick={() => window.open(project.url, "_blank")}
                  >
                    View More <ExternalLink className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
