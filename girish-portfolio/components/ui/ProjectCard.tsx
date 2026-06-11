"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  aspectClass?: string;
}

export default function ProjectCard({ project, aspectClass = "aspect-[4/3]" }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col group cursor-pointer"
      data-cursor="view"
    >
      <div className={`relative w-full ${aspectClass} overflow-hidden bg-[#222]`}>
        <Image
          src={project.image.replace("112240", "222222").replace("C9A84C", "FC7200")} // Quick hack for placeholder colors
          alt={project.title}
          fill
          className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      <div className="flex justify-between items-center mt-4">
        <h3 className="font-sans text-xl font-medium text-white group-hover:text-caro-orange transition-colors">
          {project.title}
        </h3>
        <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-caro-orange font-semibold">
          {project.tags[0]}
        </span>
      </div>
    </motion.div>
  );
}
