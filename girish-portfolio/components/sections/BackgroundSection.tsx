"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { sectionEntry } from "@/lib/animations";

const tabs = ["Education", "Experience", "Achievements"];

const content = {
  "Education": [
    { title: "BACHELOR OF DESIGN (B.DES)", subtitle: "UX & Interaction Design", year: "2021-2025" },
    { title: "UX DESIGN CERTIFICATION", subtitle: "Google Programme", year: "2025" },
    { title: "PRODUCT DESIGN CERTIFICATE", subtitle: "ADP List - Mentorship Program", year: "2024" },
  ],
  "Experience": [
    { title: "PRODUCT DESIGNER", subtitle: "Tech Startup Inc.", year: "2023-Present" },
    { title: "UX/UI DESIGN INTERN", subtitle: "Creative Agency", year: "2022-2023" },
    { title: "FREELANCE DESIGNER", subtitle: "Various Clients", year: "2021-2022" },
  ],
  "Achievements": [
    { title: "BEST APP DESIGN", subtitle: "Design Awards 2024", year: "2024" },
    { title: "HACKATHON WINNER", subtitle: "UX UI Hackathon", year: "2023" },
    { title: "TOP RATED FREELANCER", subtitle: "Upwork", year: "2022" },
  ],
};

export default function BackgroundSection() {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const prefersReduced = useReducedMotion();
  const animProps = prefersReduced ? {} : sectionEntry;

  return (
    <motion.section id="background" className="bg-caro-light text-black px-6 md:px-12 xl:px-24 py-24 md:py-32" {...animProps}>
      
      {/* HEADER SECTION */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8 border-b border-black/10 pb-16">
        
        {/* LEFT: Title */}
        <div className="flex items-start gap-4">
          <span className="font-sans font-bold text-caro-orange text-sm mt-4 md:mt-8">// 05</span>
          <h2 className="font-bricolage text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter uppercase leading-none">
            BACKGROUND
          </h2>
        </div>

        {/* RIGHT: Description */}
        <div className="max-w-xs">
          <p className="font-sans text-sm text-black/60 leading-relaxed md:text-right font-medium">
            The education, experience, and achievements that shaped the thinking and craft behind every project.
          </p>
        </div>
      </div>

      {/* CONTENT SPLIT */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
        
        {/* LEFT: TABS */}
        <div className="lg:col-span-3 flex flex-col gap-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-left font-bricolage text-xl md:text-2xl font-semibold transition-colors duration-300 ${
                activeTab === tab ? "text-black" : "text-black/30 hover:text-black/60"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* RIGHT: IMAGE & LIST */}
        <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* IMAGE */}
          <div className="relative aspect-[3/4] w-full max-w-sm overflow-hidden bg-black">
            <Image
              src="https://placehold.co/600x800/FC7200/ffffff?text=Background"
              alt="Background"
              fill
              className="object-cover"
            />
          </div>

          {/* LIST ITEMS */}
          <div className="flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col"
              >
                {content[activeTab as keyof typeof content].map((item, i) => (
                  <div 
                    key={i} 
                    className={`flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 py-8 ${
                      i !== 0 ? 'border-t border-black/10' : ''
                    } ${i === content[activeTab as keyof typeof content].length - 1 ? 'border-b border-black/10' : ''}`}
                  >
                    <div>
                      <h4 className="font-bricolage font-bold text-lg md:text-xl uppercase tracking-tight mb-1">
                        {item.title}
                      </h4>
                      <p className="font-sans text-sm text-black/60 font-medium">
                        {item.subtitle}
                      </p>
                    </div>
                    <div className="font-sans text-xs text-black/40 font-bold tracking-widest">
                      {item.year}
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>

    </motion.section>
  );
}
