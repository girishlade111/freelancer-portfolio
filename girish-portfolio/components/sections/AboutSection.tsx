"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { sectionEntry } from "@/lib/animations";

export default function AboutSection() {
  const prefersReduced = useReducedMotion();
  const animProps = prefersReduced ? {} : sectionEntry;

  return (
    <motion.section id="about" className="bg-caro-light text-black px-6 md:px-12 xl:px-24 py-24 md:py-32" {...animProps}>
      
      {/* SECTION HEADER */}
      <div className="flex items-center gap-2 mb-16">
        <span className="font-sans font-bold text-caro-orange text-sm">// 01</span>
        <span className="font-sans font-bold text-sm tracking-widest uppercase">About Me</span>
      </div>

      {/* TOP CONTENT */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
        <div>
          <h2 className="font-bricolage text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-tight">
            The person behind the pixels — driven by curiosity, shaped by craft.
          </h2>
        </div>
        <div className="flex flex-col items-start lg:pl-12">
          <p className="font-sans text-black/70 leading-relaxed mb-6">
            Grounded in user research, product thinking, and interface design — built through academic work, hands-on internships, and real projects that shipped to real users.
          </p>
          <p className="font-sans text-black/70 leading-relaxed mb-10">
            Currently open to full-time roles, internships, and freelance projects.
          </p>
          <a
            href="#background"
            className="flex items-center gap-4 bg-black text-white px-8 py-4 text-xs font-bold tracking-widest uppercase hover:bg-caro-orange transition-colors"
            data-cursor="link"
          >
            More about me
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>

      {/* BOTTOM CONTENT (IMAGE + STATS) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* IMAGE */}
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          <Image
            src="https://placehold.co/800x600/3A4F3A/ffffff?text=About+Image"
            alt="About"
            fill
            className="object-cover"
          />
        </div>

        {/* STATS */}
        <div className="grid grid-cols-2 gap-x-12 gap-y-16">
          
          <div className="border-b border-black/10 pb-6">
            <h3 className="font-bricolage text-6xl md:text-7xl font-bold tracking-tighter mb-4">81+</h3>
            <p className="font-sans text-xs text-black/60 font-semibold">Projects Designed & Delivered</p>
          </div>

          <div className="border-b border-black/10 pb-6">
            <h3 className="font-bricolage text-6xl md:text-7xl font-bold tracking-tighter mb-4">12+</h3>
            <p className="font-sans text-xs text-black/60 font-semibold">Tools & Platforms Worked With</p>
          </div>

          <div className="border-b border-black/10 pb-6">
            <h3 className="font-bricolage text-6xl md:text-7xl font-bold tracking-tighter mb-4">2+</h3>
            <p className="font-sans text-xs text-black/60 font-semibold">Years of Expertise</p>
          </div>

          <div className="border-b border-black/10 pb-6">
            <h3 className="font-bricolage text-6xl md:text-7xl font-bold tracking-tighter mb-4">24+</h3>
            <p className="font-sans text-xs text-black/60 font-semibold">Worldwide Clients</p>
          </div>

        </div>

      </div>

    </motion.section>
  );
}
