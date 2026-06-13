"use client";

import Image from "next/image";
import { Linkedin, Github, Instagram, Codepen } from "@/components/ui/Icons";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import { motion, useReducedMotion } from "framer-motion";

export default function Footer() {
  const prefersReduced = useReducedMotion();

  const footerAnim = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" },
    transition: { duration: 0.8, ease: "easeOut" as const }
  };

  const nameStagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.05 } }
  };

  const nameChar = {
    hidden: { y: "100%", opacity: 0 },
    visible: { y: "0%", opacity: 0.2, transition: { duration: 0.6, ease: "easeOut" as const } }
  };

  return (
    <motion.footer 
      className="bg-caro-dark text-white relative overflow-hidden flex flex-col justify-between pt-20"
      {...(prefersReduced ? {} : footerAnim)}
    >
      
      {/* "MADE WITH INTENT" Image Grid Area */}
      <div className="w-full px-6 md:px-12 xl:px-24 mb-32 relative">
        <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-bricolage text-4xl md:text-6xl lg:text-8xl font-bold tracking-tighter uppercase z-10 mix-blend-difference pointer-events-none text-center w-full">
          Made With Intent
        </h2>
        
        {/* Placeholder for the masonry grid from the image */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 opacity-50 pointer-events-none">
          {projects.slice(0, 4).map((project, i) => (
            <motion.div 
              key={project.id} 
              className={`relative overflow-hidden bg-white/5 ${i === 1 || i === 3 ? "aspect-[3/4]" : "aspect-[4/3] mt-8"}`}
              initial={prefersReduced ? {} : { opacity: 0, y: 30 }}
              whileInView={prefersReduced ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: "easeOut" }}
            >
              <Image
                src={project.image.replace("112240", "222222").replace("C9A84C", "FC7200")}
                alt={project.title}
                fill
                className="object-cover grayscale mix-blend-luminosity"
              />
            </motion.div>
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
            <a href="https://www.linkedin.com/in/girish-lade-075bba201/" target="_blank" rel="noopener noreferrer" className="flex justify-between items-center text-white/60 hover:text-caro-orange transition-colors text-sm font-sans" data-cursor="link">
              LinkedIn <ArrowUpRight size={14} />
            </a>
            <a href="https://www.instagram.com/girish_lade_/" target="_blank" rel="noopener noreferrer" className="flex justify-between items-center text-white/60 hover:text-caro-orange transition-colors text-sm font-sans border-t border-white/10 pt-4" data-cursor="link">
              Instagram <ArrowUpRight size={14} />
            </a>
            <a href="https://github.com/girishlade111" target="_blank" rel="noopener noreferrer" className="flex justify-between items-center text-white/60 hover:text-caro-orange transition-colors text-sm font-sans border-t border-white/10 pt-4" data-cursor="link">
              GitHub <ArrowUpRight size={14} />
            </a>
            <a href="https://codepen.io/Girish-Lade-the-looper" target="_blank" rel="noopener noreferrer" className="flex justify-between items-center text-white/60 hover:text-caro-orange transition-colors text-sm font-sans border-t border-white/10 pt-4" data-cursor="link">
              CodePen <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        {/* RIGHT: Page Links */}
        <div>
          <div className="flex flex-col gap-4 max-w-[200px] md:ml-auto">
            <a href="/" className="flex justify-between items-center text-white hover:text-caro-orange transition-colors text-sm font-sans font-bold" data-cursor="link">
              HOME <span className="text-white/40 font-normal">01</span>
            </a>
            <a href="/#about" className="flex justify-between items-center text-white hover:text-caro-orange transition-colors text-sm font-sans font-bold border-t border-white/10 pt-4" data-cursor="link">
              ABOUT <span className="text-white/40 font-normal">02</span>
            </a>
            <a href="/#projects" className="flex justify-between items-center text-white hover:text-caro-orange transition-colors text-sm font-sans font-bold border-t border-white/10 pt-4" data-cursor="link">
              PROJECTS <span className="text-white/40 font-normal">03</span>
            </a>
            <a href="/contact" className="flex justify-between items-center text-white hover:text-caro-orange transition-colors text-sm font-sans font-bold border-t border-white/10 pt-4" data-cursor="link">
              CONTACT <span className="text-white/40 font-normal">04</span>
            </a>
          </div>
        </div>

      </div>

      {/* HUGE BOTTOM TEXT */}
      <div className="w-full px-6 md:px-12 xl:px-24 mb-8 overflow-hidden">
        <motion.h1 
          className="font-bricolage font-extrabold leading-none text-white tracking-tighter flex justify-between uppercase text-[12vw] sm:text-[14vw] md:text-[clamp(4.5rem,16vw,18rem)] mx-0 md:-mx-[1%]"
          variants={prefersReduced ? {} : nameStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-20px" }}
        >
          {"GIRISH".split("").map((char, index) => (
            <span key={index} className="inline-block overflow-hidden">
              <motion.span 
                className="inline-block hover:opacity-100 transition-opacity duration-300"
                variants={prefersReduced ? {} : nameChar}
              >
                {char}
              </motion.span>
            </span>
          ))}
        </motion.h1>
      </div>

    </motion.footer>
  );
}
