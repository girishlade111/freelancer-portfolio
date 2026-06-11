"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { skills } from "@/data/skills";
import SkillAccordionItem from "@/components/ui/SkillAccordionItem";
import { sectionEntry } from "@/lib/animations";

export default function SkillsSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default
  const prefersReduced = useReducedMotion();
  const animProps = prefersReduced ? {} : sectionEntry;

  return (
    <motion.section id="skills" className="bg-navy-900 section-padding" {...animProps}>
      <div className="content-max">
        {/* SECTION HEADER ROW */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-0">
          <h2 className="section-title">SKILLS</h2>
          <p className="max-w-sm text-sm text-cream-500 leading-relaxed md:text-right">
            The stack I've used to ship 10+ products from idea to production.
          </p>
        </div>

        {/* ACCORDION LIST */}
        <div className="mt-12 space-y-0">
          {skills.map((skill, index) => (
            <SkillAccordionItem
              key={skill.id}
              skill={skill}
              isOpen={openIndex === index}
              isFirst={index === 0}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
