"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { sectionEntry } from "@/lib/animations";

export default function AboutSection() {
  const prefersReduced = useReducedMotion();
  const animProps = prefersReduced ? {} : sectionEntry;

  const statsContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
  };

  const statItem = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
  };

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" },
    transition: { duration: 0.6, ease: "easeOut" as const },
  };

  return (
    <motion.section id="about" className="bg-caro-light text-black px-6 md:px-12 xl:px-24 py-24 md:py-32" {...animProps}>
      
      {/* SECTION HEADER */}
      <div className="flex items-center gap-2 mb-16">
        <span className="font-sans font-bold text-caro-orange text-sm">// 01</span>
        <span className="font-sans font-bold text-sm tracking-widest uppercase">About Me</span>
      </div>

      {/* TOP CONTENT */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
        <motion.div {...(prefersReduced ? {} : fadeIn)}>
          <h2 className="font-bricolage text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-tight">
            The person behind the pixels — driven by curiosity, shaped by craft.
          </h2>
        </motion.div>
        <motion.div 
          className="flex flex-col items-start lg:pl-12"
          {...(prefersReduced ? {} : { ...fadeIn, transition: { ...fadeIn.transition, delay: 0.15 } })}
        >
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
        </motion.div>
      </div>

      {/* BOTTOM CONTENT (IMAGE + STATS) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* IMAGE */}
        <motion.div 
          className="relative aspect-[4/3] w-full max-w-md mx-auto lg:mx-0 overflow-hidden"
          initial={prefersReduced ? {} : { opacity: 0, scale: 0.95 }}
          whileInView={prefersReduced ? {} : { opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src="/images/about-image.png"
            alt="About"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* STATS */}
        <motion.div 
          className="grid grid-cols-2 gap-x-12 gap-y-16"
          variants={prefersReduced ? {} : statsContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          
          <motion.div variants={prefersReduced ? {} : statItem} className="border-b border-black/10 pb-6">
            <h3 className="font-bricolage text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter mb-4">81+</h3>
            <p className="font-sans text-xs text-black/60 font-semibold">Projects Designed & Delivered</p>
          </motion.div>

          <motion.div variants={prefersReduced ? {} : statItem} className="border-b border-black/10 pb-6">
            <h3 className="font-bricolage text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter mb-4">12+</h3>
            <p className="font-sans text-xs text-black/60 font-semibold">Tools & Platforms Worked With</p>
          </motion.div>

          <motion.div variants={prefersReduced ? {} : statItem} className="border-b border-black/10 pb-6">
            <h3 className="font-bricolage text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter mb-4">2+</h3>
            <p className="font-sans text-xs text-black/60 font-semibold">Years of Expertise</p>
          </motion.div>

          <motion.div variants={prefersReduced ? {} : statItem} className="border-b border-black/10 pb-6">
            <h3 className="font-bricolage text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter mb-4">24+</h3>
            <p className="font-sans text-xs text-black/60 font-semibold">Worldwide Clients</p>
          </motion.div>

        </motion.div>

      </div>

    </motion.section>
  );
}
