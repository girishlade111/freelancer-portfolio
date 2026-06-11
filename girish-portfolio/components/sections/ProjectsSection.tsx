"use client";

import { motion, useReducedMotion } from "framer-motion";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ui/ProjectCard";
import { ArrowUpRight } from "lucide-react";
import { sectionEntry } from "@/lib/animations";

export default function ProjectsSection() {
  const prefersReduced = useReducedMotion();
  const animProps = prefersReduced ? {} : sectionEntry;

  return (
    <motion.section id="projects" className="bg-caro-dark text-white px-6 md:px-12 xl:px-24 py-24 md:py-32" {...animProps}>
      
      {/* HEADER SECTION */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
        
        {/* LEFT: Title */}
        <div className="flex items-start gap-4">
          <span className="font-sans font-bold text-caro-orange text-sm mt-4 md:mt-8">// 02</span>
          <h2 className="font-bricolage text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter uppercase leading-none">
            PROJECTS
          </h2>
        </div>

        {/* RIGHT: View all link & desc */}
        <div className="flex flex-col items-start md:items-end max-w-sm gap-8 pb-2">
          <a
            href="#"
            className="flex items-center gap-2 font-sans text-xs font-bold tracking-widest text-white hover:text-caro-orange transition-colors uppercase border-b border-white/20 pb-1"
            data-cursor="link"
          >
            View all projects
            <ArrowUpRight size={14} />
          </a>
          <p className="font-sans text-sm text-white/60 leading-relaxed md:text-right">
            A curated selection of projects across product design, branding, and web — each one built with intention, from research to final delivery.
          </p>
        </div>
      </div>

      {/* GRID LAYOUT */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-24 gap-y-16 md:gap-y-32">
        {projects.map((project, index) => {
          
          let spanClass = "col-span-1";
          let aspectClass = "aspect-square";
          let mtClass = "";

          // Rows: 
          // Index 0: Full width
          // Index 1: Left square
          // Index 2: Right square (staggered)
          // Index 3: Full width
          // Index 4: Left square
          // Index 5: Right square (staggered)

          if (index === 0 || index === 3) {
            spanClass = "col-span-1 md:col-span-2";
            aspectClass = "aspect-[16/9] lg:aspect-[21/9]"; // Wide panorama
          } else if (index === 2 || index === 5) {
            mtClass = "md:mt-32";
          }

          return (
            <div key={project.id} className={`${spanClass} ${mtClass}`}>
              <ProjectCard project={project} aspectClass={aspectClass} />
            </div>
          );
        })}
      </div>

    </motion.section>
  );
}
