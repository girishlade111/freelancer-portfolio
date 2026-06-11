"use client";

import { motion, useReducedMotion } from "framer-motion";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ui/ProjectCard";
import { sectionEntry, staggerContainer, staggerChild } from "@/lib/animations";

export default function ProjectsSection() {
  const prefersReduced = useReducedMotion();
  const animProps = prefersReduced ? {} : sectionEntry;
  const containerProps = prefersReduced ? {} : staggerContainer;

  return (
    <motion.section id="projects" className="bg-navy-800 section-padding" {...animProps}>
      <div className="content-max">
        {/* SECTION HEADER */}
        <div className="flex flex-row justify-between items-end mb-14">
          <h2 className="section-title">PROJECTS</h2>
          <a
            href="#"
            className="font-mono text-xs text-gold-600 tracking-widest hover:underline underline-offset-4 transition-all"
            data-cursor="link"
          >
            View All →
          </a>
        </div>

        {/* GRID LAYOUT */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-1"
          variants={containerProps}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {projects.map((project, index) => {
            // Determine zigzag spans based on index (Row 1: 2-1, Row 2: 1-2, Row 3: 2-1)
            let spanClass = "col-span-1 md:col-span-1";
            if (index === 0 || index === 3 || index === 4) {
              spanClass = "col-span-1 md:col-span-2";
            }

            return (
              <motion.div
                key={project.id}
                className={`h-[260px] md:h-[420px] lg:h-[480px] ${spanClass}`}
                variants={prefersReduced ? {} : staggerChild}
              >
                <ProjectCard project={project} />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
}
