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
      whileHover={{ y: -4, borderColor: "rgba(201,168,76,0.45)" }}
      transition={{ duration: 0.25 }}
      className="bg-navy-700 border border-gold/10 p-6 md:p-8 flex flex-col gap-6 h-full group"
      data-cursor="view"
    >
      {/* TOP ROW */}
      <div className="flex justify-between items-center">
        <span className="font-mono text-xs text-gold-600/50">{id}</span>
        <div className="w-11 h-11 rounded-full border border-gold/25 flex items-center justify-center group-hover:bg-gold-600/10 transition-colors">
          <Icon size={18} className="text-gold-600" />
        </div>
      </div>

      {/* CONTENT */}
      <div>
        <h3 className="font-bricolage font-bold text-xl md:text-2xl text-cream-100 mb-2">
          {step}
        </h3>
        <p className="font-inter text-sm text-cream-500 leading-relaxed flex-1">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
