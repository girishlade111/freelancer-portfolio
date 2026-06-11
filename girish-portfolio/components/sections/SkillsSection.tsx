"use client";

import { motion, useReducedMotion } from "framer-motion";
import { skills } from "@/data/skills";
import { sectionEntry } from "@/lib/animations";

export default function SkillsSection() {
  const prefersReduced = useReducedMotion();
  const animProps = prefersReduced ? {} : sectionEntry;

  return (
    <motion.section id="skills" className="bg-caro-light text-black px-6 md:px-12 xl:px-24 py-24 md:py-32" {...animProps}>
      
      {/* HEADER SECTION */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8 border-b border-black/10 pb-16">
        
        {/* LEFT: Title */}
        <div className="flex items-start gap-4">
          <span className="font-sans font-bold text-caro-orange text-sm mt-4 md:mt-8">// 03</span>
          <h2 className="font-bricolage text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter uppercase leading-none">
            SKILLS
          </h2>
        </div>

        {/* RIGHT: Description */}
        <div className="max-w-xs md:max-w-sm">
          <p className="font-sans text-sm text-black/60 leading-relaxed md:text-right font-medium">
            Every great product starts with the right skills applied in the right order. Here's what's in the arsenal.
          </p>
        </div>
      </div>

      {/* SKILLS LIST */}
      <div className="flex flex-col">
        {skills.map((skill, index) => (
          <div 
            key={skill.id} 
            className={`grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 py-12 ${index !== skills.length - 1 ? 'border-b border-black/10' : ''}`}
          >
            
            {/* LEFT: Title */}
            <div className="md:col-span-5 lg:col-span-6 flex items-start">
              <h3 className="font-bricolage text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight uppercase">
                {skill.title}
              </h3>
            </div>

            {/* RIGHT: Description & Tags */}
            <div className="md:col-span-7 lg:col-span-6 flex flex-col gap-6">
              <p className="font-sans text-sm text-black/70 leading-relaxed max-w-lg font-medium">
                {skill.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {skill.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex} 
                    className={`font-sans text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full ${
                      tagIndex === skill.tags.length - 1 
                        ? "bg-black text-white" 
                        : "border border-black/20 text-black/60"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

          </div>
        ))}
      </div>

    </motion.section>
  );
}
