"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.015 }}
      transition={{ duration: 0.4 }}
      className="relative w-full h-full overflow-hidden cursor-pointer group bg-navy-900"
      data-cursor="view"
    >
      <Image
        src={project.image}
        alt={project.title}
        fill
        className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/96 via-navy-950/35 to-transparent z-10 pointer-events-none" />

      <div className="absolute inset-0 border border-gold/0 group-hover:border-gold/40 transition-all duration-300 z-20 pointer-events-none" />

      {/* TOP-RIGHT TAGS */}
      <div className="absolute top-4 right-4 flex gap-2 flex-wrap justify-end z-20">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="font-mono text-[9px] uppercase tracking-widest bg-navy-900/80 border border-gold/25 text-gold-600 px-2 py-0.5 backdrop-blur-sm"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* BOTTOM CONTENT */}
      <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 flex flex-row justify-between items-end z-20 pointer-events-none">
        <div>
          <h3 className="font-bricolage font-bold text-xl md:text-2xl text-cream-50 group-hover:mb-1 transition-all">
            {project.title}
          </h3>
          <div className="overflow-hidden h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-300">
            <p className="font-mono text-[10px] text-gold-600/70 underline underline-offset-2">
              {project.url}
            </p>
          </div>
        </div>

        <ArrowUpRight
          size={20}
          className="text-gold-600 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
        />
      </div>
    </motion.div>
  );
}
