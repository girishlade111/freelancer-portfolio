"use client";

import { motion, AnimatePresence } from "framer-motion";

interface Skill {
  id: string;
  title: string;
  description: string;
  tags: string[];
}

interface SkillAccordionItemProps {
  skill: Skill;
  isOpen: boolean;
  onToggle: () => void;
  isFirst: boolean;
}

export default function SkillAccordionItem({
  skill,
  isOpen,
  onToggle,
  isFirst,
}: SkillAccordionItemProps) {
  return (
    <div
      className={`py-6 md:py-8 cursor-pointer select-none border-b border-gold/15 ${
        isFirst ? "border-t border-gold/15" : ""
      }`}
      onClick={onToggle}
      data-cursor="link"
    >
      {/* TRIGGER ROW */}
      <div className="flex justify-between items-center gap-4 md:gap-7">
        <div className="flex items-center gap-4 md:gap-7 flex-1">
          <span className="font-mono text-xs text-cream-700 w-8">{skill.id}</span>
          <h3
            className="font-bricolage font-semibold text-cream-100"
            style={{ fontSize: "clamp(1.3rem, 2.5vw, 2.2rem)" }}
          >
            {skill.title}
          </h3>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="text-gold-600 text-2xl font-light leading-none"
        >
          +
        </motion.div>
      </div>

      {/* EXPANDED CONTENT */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.38, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden"
          >
            <div className="pt-4 pl-12 md:pl-[4.5rem] flex flex-col lg:flex-row gap-6 justify-between items-start">
              <p className="font-inter text-sm text-cream-500 leading-relaxed max-w-lg">
                {skill.description}
              </p>
              <div className="flex flex-wrap gap-2 justify-start md:justify-end">
                {skill.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[10px] border border-gold/25 text-gold-600 px-2.5 py-1.5 uppercase tracking-widest"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
