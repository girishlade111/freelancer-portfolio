"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import ScrollIndicator from "@/components/ui/ScrollIndicator";
import { heroLetterReveal } from "@/lib/animations";

export default function HeroSection() {
  const prefersReduced = useReducedMotion();
  const name = "GIRISH LADE";

  return (
    <section id="hero" className="min-h-screen relative flex flex-col bg-navy-900 pt-28">
      {/* Noise Texture */}
      <div 
        className="absolute inset-0 opacity-[0.025] pointer-events-none z-0"
        style={{ backgroundImage: "url('data:image/svg+xml;utf8,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }}
      />

      {/* TOP AREA */}
      <div className="relative z-10 px-6 md:px-12 lg:px-20 xl:px-28 flex flex-col sm:flex-row justify-between items-start gap-12">
        {/* LEFT: Profile photo */}
        <motion.div 
          className="w-44 h-60 md:w-52 md:h-72 relative overflow-hidden border border-gold/10"
          initial={prefersReduced ? { opacity: 1, x: 0 } : { opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <Image
            src="https://placehold.co/400x600/112240/C9A84C?text=Girish"
            alt="Girish Lade"
            fill
            priority
            className="object-cover object-top"
          />
          <div className="absolute inset-0 bg-navy-600/20 mix-blend-multiply pointer-events-none" />
        </motion.div>

        {/* RIGHT: Bio */}
        <motion.div 
          className="max-w-xs sm:text-right"
          initial={prefersReduced ? { opacity: 1, x: 0 } : { opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <p className="font-inter text-sm text-cream-500 leading-relaxed">
            The engineer behind the products — driven by curiosity, built with intent.
          </p>
          <div className="font-mono text-[10px] uppercase tracking-widest border border-gold/30 text-gold-600 px-3 py-1.5 mt-4 inline-block">
            Available for Hire
          </div>
        </motion.div>
      </div>

      {/* HERO NAME */}
      <div className="relative z-10 flex-1 flex items-end pb-4 overflow-hidden px-4 md:px-8 lg:px-16">
        <h1 
          className="font-bricolage font-extrabold leading-none tracking-tight text-cream-50 whitespace-nowrap overflow-x-auto"
          style={{ fontSize: "clamp(4.5rem, 13vw, 16rem)" }}
        >
          {name.split("").map((char, index) => (
            <span key={index} className="inline-block overflow-hidden pb-4 -mb-4">
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
      <div className="relative z-10 flex justify-between items-center px-6 md:px-12 lg:px-20 pb-8">
        <motion.span 
          className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold-600 hidden sm:block"
          initial={prefersReduced ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
        >
          Full-Stack + AI Product Builder
        </motion.span>
        
        <motion.div
          initial={prefersReduced ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
        >
          <ScrollIndicator />
        </motion.div>
      </div>

      {/* THIN GOLD LINE */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-600/30 to-transparent z-10" />
    </section>
  );
}
