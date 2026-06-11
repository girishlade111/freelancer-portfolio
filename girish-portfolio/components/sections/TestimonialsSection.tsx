"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { sectionEntry } from "@/lib/animations";

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const prefersReduced = useReducedMotion();
  const animProps = prefersReduced ? {} : sectionEntry;

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <motion.section id="testimonials" className="bg-caro-dark text-white px-6 md:px-12 xl:px-24 py-24 md:py-32" {...animProps}>
      
      {/* HEADER SECTION */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8 border-b border-white/10 pb-16">
        
        {/* LEFT: Title */}
        <div className="flex items-start gap-4">
          <span className="font-sans font-bold text-caro-orange text-sm mt-4 md:mt-8">// 06</span>
          <h2 className="font-bricolage text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter uppercase leading-none">
            TESTIMONIALS
          </h2>
        </div>

        {/* RIGHT: Description */}
        <div className="max-w-xs md:max-w-sm">
          <p className="font-sans text-sm text-white/60 leading-relaxed md:text-right font-medium">
            The best validation comes from the people you've actually worked with. Here's what they had to say.
          </p>
        </div>
      </div>

      {/* MAIN LAYOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* LEFT SIDE: Text & Nav */}
        <div className="flex flex-col h-full justify-between">
          
          <div className="relative min-h-[220px] md:min-h-[300px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={prefersReduced ? { opacity: 0 } : { opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col gap-12"
              >
                
                {/* ATTRIBUTION */}
                <div>
                  <h4 className="font-bricolage font-bold text-2xl md:text-3xl text-white mb-2">
                    {testimonials[active].name}
                  </h4>
                  <p className="font-sans text-xs text-white/50 uppercase tracking-widest font-semibold">
                    {testimonials[active].role}
                  </p>
                </div>

                {/* QUOTE */}
                <p className="font-bricolage text-2xl sm:text-3xl md:text-4xl text-white leading-snug tracking-tight font-medium">
                  "{testimonials[active].quote}"
                </p>

              </motion.div>
            </AnimatePresence>
          </div>

          {/* NAVIGATION ARROWS */}
          <div className="flex gap-4 mt-12">
            <button
              onClick={handlePrev}
              className="w-12 h-12 bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
              aria-label="Previous testimonial"
              data-cursor="link"
            >
              <ChevronLeft size={20} className="text-white/60" />
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
              aria-label="Next testimonial"
              data-cursor="link"
            >
              <ChevronRight size={20} className="text-white/60" />
            </button>
          </div>

        </div>

        {/* RIGHT SIDE: Image */}
        <div className="relative aspect-square md:aspect-[4/5] w-full overflow-hidden bg-[#111]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={prefersReduced ? { opacity: 0 } : { opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0"
            >
              <Image
                src={testimonials[active].image.replace("112240", "222222").replace("C9A84C", "FC7200")}
                alt={testimonials[active].name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
          </AnimatePresence>
        </div>

      </div>

    </motion.section>
  );
}
