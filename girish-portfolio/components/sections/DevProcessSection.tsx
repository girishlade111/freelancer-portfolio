"use client";

import { motion, useReducedMotion } from "framer-motion";
import { processSteps } from "@/data/process";
import ProcessCard from "@/components/ui/ProcessCard";
import { sectionEntry, staggerContainer, staggerChild } from "@/lib/animations";

export default function DevProcessSection() {
  const prefersReduced = useReducedMotion();
  const animProps = prefersReduced ? {} : sectionEntry;
  const containerProps = prefersReduced ? {} : staggerContainer;

  return (
    <motion.section id="process" className="bg-caro-light text-black px-6 md:px-12 xl:px-24 py-24 md:py-32" {...animProps}>
      
      {/* HEADER SECTION */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
        
        {/* LEFT: Title */}
        <div className="flex items-start gap-4">
          <span className="font-sans font-bold text-caro-orange text-sm mt-4 md:mt-8">// 04</span>
          <h2 className="font-bricolage text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter uppercase leading-none">
            DESIGN PROCESS
          </h2>
        </div>

        {/* RIGHT: Description */}
        <div className="max-w-xs">
          <p className="font-sans text-sm text-black/60 leading-relaxed md:text-right font-medium">
            Good design isn't accidental. Every project follows a clear process — so nothing is guesswork, and nothing gets missed.
          </p>
        </div>
      </div>

      {/* PROCESS CARDS GRID */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
        variants={containerProps}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        {processSteps.map((step) => (
          <motion.div key={step.id} variants={prefersReduced ? {} : staggerChild} className="h-full">
            <ProcessCard step={step} />
          </motion.div>
        ))}
      </motion.div>

    </motion.section>
  );
}
