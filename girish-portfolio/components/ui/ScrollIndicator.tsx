"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function ScrollIndicator() {
  const handleScroll = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="flex flex-col items-center gap-2 cursor-pointer group"
      onClick={handleScroll}
      data-cursor="link"
    >
      <span className="font-mono text-[9px] text-cream-700 tracking-widest style-[writing-mode:vertical-rl] rotate-180 mb-2 group-hover:text-gold-600 transition-colors">
        SCROLL
      </span>
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 1.4 }}
      >
        <ChevronDown size={18} className="text-gold-600 opacity-80 group-hover:opacity-100" />
      </motion.div>
    </div>
  );
}
