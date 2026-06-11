"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { testimonials } from "@/data/testimonials";
import { sectionEntry } from "@/lib/animations";

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const prefersReduced = useReducedMotion();
  const animProps = prefersReduced ? {} : sectionEntry;

  return (
    <motion.section id="testimonials" className="bg-navy-900 section-padding" {...animProps}>
      <div className="content-max">
        {/* SECTION HEADER */}
        <h2 className="section-title mb-16">TESTIMONIALS</h2>

        {/* MAIN LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* LEFT SIDE: Text */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={prefersReduced ? { opacity: 0 } : { opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={prefersReduced ? { opacity: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.45 }}
                className="relative z-10"
              >
                <div className="font-bricolage text-[7rem] leading-none text-gold-600/20 select-none -mb-10">
                  "
                </div>
                <p className="font-bricolage text-xl md:text-2xl text-cream-100 leading-relaxed font-medium">
                  {testimonials[active].quote}
                </p>

                {/* ATTRIBUTION */}
                <div className="mt-8 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden relative">
                    <Image
                      src={testimonials[active].image}
                      alt={testimonials[active].name}
                      fill
                      className="object-cover"
                      sizes="48px"
                    />
                  </div>
                  <div>
                    <h4 className="font-bricolage font-semibold text-cream-100 text-base">
                      {testimonials[active].name}
                    </h4>
                    <p className="font-mono text-[10px] text-gold-600 uppercase tracking-widest mt-0.5">
                      {testimonials[active].role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* NAVIGATION DOTS */}
            <div className="mt-10 flex gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActive(index)}
                  className={`w-10 h-[2px] transition-all duration-300 ${
                    active === index ? "bg-gold-600" : "bg-navy-600 hover:bg-navy-500"
                  }`}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* RIGHT SIDE: Image */}
          <div className="relative h-[400px] md:h-[520px] overflow-hidden bg-navy-800">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={prefersReduced ? { opacity: 0 } : { opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <Image
                  src={testimonials[active].image}
                  alt={testimonials[active].name}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 to-transparent" />
                <div className="absolute inset-0 border border-gold/10" />
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </motion.section>
  );
}
