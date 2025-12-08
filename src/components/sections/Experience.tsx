"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ExternalLink } from "lucide-react";
import { parseTextWithHTMLTags } from "@/lib/textUtils";
import { experiences } from "@/data/experience";

const Experience = () => {
  return (
    <section id="experience" className="pt-24 pb-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
          Experiences
        </h2>
        <p className="text-lg text-muted-foreground">
          My Professional Journey
        </p>
        <Accordion 
          type="multiple" 
          defaultValue={experiences.map(exp => exp.id)} 
          className="space-y-4 mt-8"
        >
          {experiences.map((exp) => (
            <AccordionItem 
              key={exp.id} 
              value={exp.id} 
              className="border border-border rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-secondary/50 transition-colors">
                  <div className="flex flex-col items-start text-left w-full">
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1">
                        {exp.title}
                    </h3>
                    <p className="text-sm font-bold text-muted-foreground mt-1 flex items-center flex-wrap gap-2">
                      <span className="inline-flex items-center gap-1">
                        {exp.company}
                        <a
                          href={exp.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex text-primary hover:text-primary/70 transition-colors"
                          aria-label={`Visit ${exp.company} website`}
                        >
                          <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      </span>
                      <span className="inline-block text-sm text-primary tracking-wider bg-primary/10 px-3 py-1 rounded-full">
                        {exp.period}
                      </span>
                    </p>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <ul className="space-y-2 mt-2">
                    {exp.responsibilities.map((resp, idx) => (
                      <li 
                        key={idx} 
                        className="flex items-start gap-2 text-base text-muted-foreground leading-relaxed"
                      >
                        <span className="text-base mt-0.5">•</span>
                        <span>{parseTextWithHTMLTags(resp)}</span>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
        </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Experience;
