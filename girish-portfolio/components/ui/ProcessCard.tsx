"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface Step {
  id: string;
  step: string;
  icon: LucideIcon;
  description: string;
}

interface ProcessCardProps {
  step: Step;
}

export default function ProcessCard({ step: { id, step, icon: Icon, description } }: ProcessCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      className="bg-white p-6 sm:p-10 md:p-12 flex flex-col gap-8 sm:gap-12 h-full shadow-sm"
      data-cursor="view"
    >
      {/* TOP ICON */}
      <div>
        <Icon size={32} strokeWidth={1} className="text-black" />
      </div>

      {/* CONTENT */}
      <div>
        <h3 className="font-bricolage font-bold text-2xl md:text-3xl uppercase text-black mb-4 tracking-tight">
          {step}
        </h3>
        <p className="font-sans text-sm text-black/60 leading-relaxed font-medium">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
