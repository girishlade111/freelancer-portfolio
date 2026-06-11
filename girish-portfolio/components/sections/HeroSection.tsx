"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { heroLetterReveal } from "@/lib/animations";

export default function HeroSection() {
  const prefersReduced = useReducedMotion();
  const name = "GIRISH";

  return (
    <section id="hero" className="min-h-screen relative flex flex-col bg-caro-dark pt-20 overflow-hidden">
      
      {/* BACKGROUND IMAGE / CENTER IMAGE */}
      <div className="relative md:absolute md:inset-0 z-0 flex justify-center lg:justify-end items-center pr-0 lg:pr-32 opacity-100 md:opacity-60 lg:opacity-100 py-6 md:py-0 mt-4 md:mt-0">
        <motion.div 
          className="relative w-[85vw] max-w-[320px] aspect-[3/4] md:w-[600px] xl:w-[700px] md:h-[70vh]"
          initial={prefersReduced ? { opacity: 1 } : { opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <Image
            src="https://placehold.co/800x1200/222222/FC7200?text=Portrait"
            alt="Portrait"
            fill
            priority
            className="object-cover"
          />
        </motion.div>
      </div>

      {/* LEFT BIO TEXT */}
      <div className="relative z-10 flex-none md:flex-1 flex items-center justify-center md:justify-start px-6 md:px-12 xl:px-24 pb-8 md:pb-0">
        <motion.div 
          className="max-w-sm text-center md:text-left"
          initial={prefersReduced ? { opacity: 1, x: 0 } : { opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <p className="font-sans text-sm md:text-base text-white/80 leading-relaxed font-medium">
            Hi I'm — a Product Designer from Chicago, looking for my next opportunity. I turn complex problems into experiences that are simple, useful, and hard to forget.
          </p>
        </motion.div>
      </div>

      {/* HERO NAME */}
      <div className="relative z-10 w-full px-6 md:px-12 xl:px-24 overflow-hidden mt-auto md:mt-0">
        <h1 
          className="font-bricolage font-extrabold leading-none text-white tracking-tighter flex justify-between uppercase text-[13vw] sm:text-[15vw] md:text-[clamp(6rem,20vw,22rem)] mx-0 md:-mx-[2%]"
        >
          {name.split("").map((char, index) => (
            <span key={index} className="inline-block overflow-hidden">
              <motion.span
                className="inline-block"
                {...(prefersReduced ? { initial: { y: 0, opacity: 1 }, animate: { y: 0, opacity: 1 } } : heroLetterReveal(index))}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            </span>
          ))}
        </h1>
      </div>

      {/* BOTTOM STRIP */}
      <div className="relative z-10 flex justify-between items-center px-6 md:px-12 xl:px-24 pb-8 pt-4 border-t border-white/10 mt-2">
        <motion.span 
          className="font-sans text-[10px] md:text-xs uppercase tracking-[0.2em] text-white/60 font-semibold"
          initial={prefersReduced ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          CHICAGO
        </motion.span>
        
        <motion.span 
          className="font-sans text-[10px] md:text-xs uppercase tracking-[0.2em] text-white/60 font-semibold hidden md:block"
          initial={prefersReduced ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
        >
          PRODUCT DESIGNER
        </motion.span>

        <motion.span 
          className="font-sans text-[10px] md:text-xs uppercase tracking-[0.2em] text-white/60 font-semibold"
          initial={prefersReduced ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
        >
          AVAILABLE FOR WORK
        </motion.span>
      </div>
    </section>
  );
}
