"use client";

import Image from "next/image";
import { Linkedin, Twitter, Github } from "@/components/ui/Icons";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";

export default function Footer() {
  return (
    <footer className="bg-caro-dark text-white relative overflow-hidden flex flex-col justify-between pt-20">
      
      {/* "MADE WITH INTENT" Image Grid Area */}
      <div className="w-full px-6 md:px-12 xl:px-24 mb-32 relative">
        <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-bricolage text-4xl md:text-6xl lg:text-8xl font-bold tracking-tighter uppercase z-10 mix-blend-difference pointer-events-none text-center w-full">
          Made With Intent
        </h2>
        
        {/* Placeholder for the masonry grid from the image */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 opacity-50 pointer-events-none">
          {projects.slice(0, 4).map((project, i) => (
            <div key={project.id} className={`relative overflow-hidden bg-white/5 ${i === 1 || i === 3 ? "aspect-[3/4]" : "aspect-[4/3] mt-8"}`}>
              <Image
                src={project.image.replace("112240", "222222").replace("C9A84C", "FC7200")}
                alt={project.title}
                fill
                className="object-cover grayscale mix-blend-luminosity"
              />
            </div>
          ))}
        </div>
      </div>

      {/* MARQUEE TEXT */}
      <div className="relative flex overflow-x-hidden w-full border-y border-white/10 py-6 mb-20">
        <div className="animate-marquee flex shrink-0 whitespace-nowrap gap-8 items-center font-bricolage text-5xl md:text-7xl font-bold tracking-tighter text-white pr-8">
          <span>GET IN TOUCH</span>
          <span className="text-caro-orange">•</span>
          <span>GET IN TOUCH</span>
          <span className="text-caro-orange">•</span>
          <span>GET IN TOUCH</span>
          <span className="text-caro-orange">•</span>
          <span>GET IN TOUCH</span>
          <span className="text-caro-orange">•</span>
          <span>GET IN TOUCH</span>
          <span className="text-caro-orange">•</span>
        </div>
        {/* Duplicate for seamless loop */}
        <div className="animate-marquee flex shrink-0 whitespace-nowrap gap-8 items-center font-bricolage text-5xl md:text-7xl font-bold tracking-tighter text-white pr-8">
          <span>GET IN TOUCH</span>
          <span className="text-caro-orange">•</span>
          <span>GET IN TOUCH</span>
          <span className="text-caro-orange">•</span>
          <span>GET IN TOUCH</span>
          <span className="text-caro-orange">•</span>
          <span>GET IN TOUCH</span>
          <span className="text-caro-orange">•</span>
          <span>GET IN TOUCH</span>
          <span className="text-caro-orange">•</span>
        </div>
      </div>

      {/* BOTTOM LINKS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 px-6 md:px-12 xl:px-24 mb-32">
        
        {/* LEFT: Follow Me */}
        <div>
          <h4 className="font-sans text-sm font-bold tracking-widest uppercase mb-8">Follow Me</h4>
          <div className="flex flex-col gap-4 max-w-[200px]">
            <a href="#" className="flex justify-between items-center text-white/60 hover:text-white transition-colors text-sm font-sans" data-cursor="link">
              LinkedIn <ArrowUpRight size={14} />
            </a>
            <a href="#" className="flex justify-between items-center text-white/60 hover:text-white transition-colors text-sm font-sans border-t border-white/10 pt-4" data-cursor="link">
              Instagram <ArrowUpRight size={14} />
            </a>
            <a href="#" className="flex justify-between items-center text-white/60 hover:text-white transition-colors text-sm font-sans border-t border-white/10 pt-4" data-cursor="link">
              Dribbble <ArrowUpRight size={14} />
            </a>
            <a href="#" className="flex justify-between items-center text-white/60 hover:text-white transition-colors text-sm font-sans border-t border-white/10 pt-4" data-cursor="link">
              YouTube <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        {/* RIGHT: Page Links */}
        <div>
          <div className="flex flex-col gap-4 max-w-[200px] md:ml-auto">
            <a href="#hero" className="flex justify-between items-center text-white hover:text-caro-orange transition-colors text-sm font-sans font-bold" data-cursor="link">
              HOME <span className="text-white/40 font-normal">01</span>
            </a>
            <a href="#about" className="flex justify-between items-center text-white hover:text-caro-orange transition-colors text-sm font-sans font-bold border-t border-white/10 pt-4" data-cursor="link">
              ABOUT <span className="text-white/40 font-normal">02</span>
            </a>
            <a href="#projects" className="flex justify-between items-center text-white hover:text-caro-orange transition-colors text-sm font-sans font-bold border-t border-white/10 pt-4" data-cursor="link">
              PROJECTS <span className="text-white/40 font-normal">03</span>
            </a>
            <a href="#contact" className="flex justify-between items-center text-white hover:text-caro-orange transition-colors text-sm font-sans font-bold border-t border-white/10 pt-4" data-cursor="link">
              CONTACT <span className="text-white/40 font-normal">04</span>
            </a>
          </div>
        </div>

      </div>

      {/* HUGE BOTTOM TEXT */}
      <div className="w-full px-6 md:px-12 xl:px-24 mb-8 overflow-hidden">
        <h1 
          className="font-bricolage font-extrabold leading-none text-white tracking-tighter flex justify-between uppercase text-[12vw] sm:text-[14vw] md:text-[clamp(4.5rem,16vw,18rem)] mx-0 md:-mx-[1%]"
        >
          {"GIRISH".split("").map((char, index) => (
            <span key={index} className="inline-block opacity-20 hover:opacity-100 transition-opacity duration-300">
              {char}
            </span>
          ))}
        </h1>
      </div>

    </footer>
  );
}
