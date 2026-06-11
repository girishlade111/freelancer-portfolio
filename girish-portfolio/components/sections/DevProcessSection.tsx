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
    <motion.section id="process" className="bg-navy-800 section-padding" {...animProps}>
      <div className="content-max">
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-16">
          <h2 className="section-title">DEV PROCESS</h2>
          <p className="max-w-sm text-sm text-cream-500 leading-relaxed md:text-right">
            Every project follows the same disciplined workflow — so nothing falls through the cracks.
          </p>
        </div>

        {/* PROCESS CARDS GRID */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
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
      </div>
    </motion.section>
  );
}
