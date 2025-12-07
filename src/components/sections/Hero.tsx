"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import profileImage from "../../../public/profile.jpg";
import { userData } from "@/data/user";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const messages = userData.hero.messages;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % messages.length);
    }, 5000); // Switch every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={profileImage}
          alt={userData.name}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col">
        {/* Software Engineer Text - Right Aligned on Desktop, Hidden on Mobile */}
        <div className="hidden lg:flex flex-1 items-center justify-end px-8">
          <div className="flex items-center gap-3">
            <ArrowRight className="h-8 w-8 text-white" />
            <p className="text-2xl lg:text-3xl text-white">
              {userData.title}
            </p>
          </div>
        </div>

        {/* Mobile Spacer */}
        <div className="flex-1 lg:hidden"></div>

        {/* Typewriter Messages - Cycling */}
        <div className="pb-40 px-8">
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-white">
            <span 
              key={currentIndex}
              className="inline-block overflow-hidden whitespace-nowrap animate-typewriter"
            >
              {messages[currentIndex]}
            </span>
          </h1>
          
          {/* Software Engineer - Mobile Only (Below Typewriter) */}
          <div className="lg:hidden mt-6">
            <div className="flex items-center gap-3">
              <ArrowRight className="h-6 w-6 text-white"/>
              <p className="text-2xl lg:text-3xl text-bold text-white">
              {userData.title}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
