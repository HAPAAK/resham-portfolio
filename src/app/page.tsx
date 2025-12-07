import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Education from "@/components/sections/Education";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      {/* <Hero /> */}
      <About />
      
      {/* All sections after About in a single card container */}
      <div className="relative z-10 bg-background rounded-t-[60px]">
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  );
}
