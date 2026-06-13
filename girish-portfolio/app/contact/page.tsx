"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { Plus, Minus, ArrowUpRight } from "lucide-react";

// --- Internal Components to avoid touching main layout ---

function ContactNavbar() {
  return (
    <nav className="w-full flex justify-between items-center px-6 md:px-12 py-8 absolute top-0 left-0 right-0 z-50 text-black">
      <div className="font-sans font-bold text-2xl tracking-widest uppercase">
        CAROLINA
      </div>
      <div className="flex items-center gap-3 border-b border-black/20 pb-1 cursor-pointer hover:border-black transition-colors">
        <span className="font-sans text-sm font-semibold tracking-[0.2em] uppercase">
          MENU
        </span>
        <div className="grid grid-cols-3 gap-[3px]">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="w-[4px] h-[4px] bg-black rounded-full" />
          ))}
        </div>
      </div>
    </nav>
  );
}

function ContactFooter() {
  return (
    <footer className="bg-[#171312] text-white pt-24 pb-8 relative overflow-hidden flex flex-col font-sans">
      {/* Marquee Text */}
      <div className="relative flex overflow-x-hidden w-full border-b border-white/10 pb-8 mb-20">
        <div className="animate-marquee flex shrink-0 whitespace-nowrap gap-8 items-center text-7xl md:text-9xl font-bold tracking-tighter text-white pr-8">
          <span>GET IN TOUCH</span>
          <span className="text-[#fc7200]">•</span>
          <span>GET IN TOUCH</span>
          <span className="text-[#fc7200]">•</span>
          <span>GET IN TOUCH</span>
          <span className="text-[#fc7200]">•</span>
          <span>GET IN TOUCH</span>
          <span className="text-[#fc7200]">•</span>
        </div>
      </div>

      {/* Footer Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 px-6 md:px-12 lg:px-24 mb-32 z-10 relative">
        {/* Follow Me */}
        <div>
          <h4 className="text-sm font-semibold tracking-widest uppercase mb-8">Follow Me</h4>
          <div className="flex flex-col max-w-[200px]">
            <a href="#" className="flex justify-between items-center text-white/80 hover:text-[#fc7200] transition-colors text-sm py-4 border-b border-white/10 group">
              LinkedIn <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
            <a href="#" className="flex justify-between items-center text-white/80 hover:text-[#fc7200] transition-colors text-sm py-4 border-b border-white/10 group">
              Instagram <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
            <a href="#" className="flex justify-between items-center text-white/80 hover:text-[#fc7200] transition-colors text-sm py-4 border-b border-white/10 group">
              Dribble <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
            <a href="#" className="flex justify-between items-center text-white/80 hover:text-[#fc7200] transition-colors text-sm py-4 border-b border-white/10 group">
              YouTube <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Links */}
        <div className="md:ml-auto w-full max-w-[300px]">
          <div className="flex flex-col">
            <a href="/" className="flex justify-between items-center text-white hover:text-[#fc7200] transition-colors text-lg font-bold py-4 border-b border-white/10">
              HOME <span className="text-white/40 font-normal text-sm">01</span>
            </a>
            <a href="/#about" className="flex justify-between items-center text-white hover:text-[#fc7200] transition-colors text-lg font-bold py-4 border-b border-white/10">
              ABOUT <span className="text-white/40 font-normal text-sm">02</span>
            </a>
            <a href="/#projects" className="flex justify-between items-center text-white hover:text-[#fc7200] transition-colors text-lg font-bold py-4 border-b border-white/10">
              PROJECTS <span className="text-white/40 font-normal text-sm">03</span>
            </a>
            <a href="/contact" className="flex justify-between items-center text-white hover:text-[#fc7200] transition-colors text-lg font-bold py-4 border-b border-white/10">
              CONTACT <span className="text-white/40 font-normal text-sm">04</span>
            </a>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center mt-12 mb-4 relative z-0">
         <h1 className="text-[12vw] font-bold text-white/10 leading-none pointer-events-none select-none tracking-tighter w-full text-center">
            CAROLINA
         </h1>
      </div>
      
      {/* Bottom bar */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center z-10">
         <div className="w-12 h-1 bg-white/20 rounded-full" />
      </div>
    </footer>
  );
}

// --- Page Sections ---

function ExpandingAboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Calculate width from ~30vw to 100vw, height from ~40vh to 100vh
  const width = useTransform(scrollYProgress, [0, 0.4], ["40vw", "100vw"]);
  const height = useTransform(scrollYProgress, [0, 0.4], ["45vh", "100vh"]);
  // At end of scroll, ensure it fills screen
  
  return (
    <section ref={containerRef} className="h-[250vh] w-full relative bg-[#f2f2f2] text-black pt-32 font-sans">
      <div className="sticky top-0 h-screen w-full flex flex-col overflow-hidden px-6 md:px-12">
        
        {/* Text Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-black/10 pb-8 mt-12">
          <h1 className="text-[8rem] md:text-[12rem] lg:text-[16rem] font-bold tracking-tighter leading-none mb-4 md:mb-0">
            ABOUT
          </h1>
          <p className="max-w-[300px] text-lg text-black/60 font-light mb-4 text-right">
            Research-driven. Detail-obsessed. Ready to design what users actually need.
          </p>
        </div>

        {/* Expanding Image Window */}
        <div className="w-full flex-grow flex justify-center items-end pb-8">
           <motion.div
             style={{ width, height }}
             className="relative overflow-hidden z-20 shadow-2xl bg-black/5"
           >
             <Image 
               src="/images/about-image.png" 
               alt="Abstract Waves" 
               fill 
               className="object-cover"
               priority
             />
             <div className="absolute bottom-4 left-0 right-0 flex justify-center z-10">
               <div className="w-12 h-2 bg-white/40 backdrop-blur-sm rounded-full" />
             </div>
           </motion.div>
        </div>
      </div>
    </section>
  );
}

function WorkInfoSection() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#f2f2f2] text-black font-sans">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start">
        {/* Left column: Text & Image */}
        <div className="space-y-16">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
            The person behind the pixels — driven by curiosity, shaped by craft.
          </h2>
          
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <Image 
              src="/images/contact-image.png" 
              alt="Flowers in jar" 
              fill 
              className="object-cover"
            />
            {/* Nav dots placeholder over image */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              <div className="w-2 h-2 rounded-full bg-white/80" />
              <div className="w-2 h-2 rounded-full bg-white/40" />
              <div className="w-2 h-2 rounded-full bg-white/40" />
            </div>
          </div>
        </div>

        {/* Right column: Bio & Stats */}
        <div className="space-y-24">
          <div className="text-black/60 text-lg leading-relaxed font-light space-y-6 pt-2">
            <p>
              Grounded in user research, product thinking, and interface design — built through academic work, hands-on internships, and real projects that shipped to real users.
            </p>
            <p>
              Currently open to full-time roles, internships, and freelance projects.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-16 border-t border-black/10 pt-16">
            <div>
              <div className="text-6xl md:text-7xl font-bold mb-4 tracking-tighter">98+</div>
              <div className="text-sm text-black/50 font-medium">Projects Designed & Delivered</div>
            </div>
            <div>
              <div className="text-6xl md:text-7xl font-bold mb-4 tracking-tighter">15+</div>
              <div className="text-sm text-black/50 font-medium">Tools & Platforms Worked With</div>
            </div>
            <div className="border-t border-black/10 pt-12">
              <div className="text-6xl md:text-7xl font-bold mb-4 tracking-tighter">2+</div>
              <div className="text-sm text-black/50 font-medium">Years of Expertise</div>
            </div>
            <div className="border-t border-black/10 pt-12">
              <div className="text-6xl md:text-7xl font-bold mb-4 tracking-tighter">25+</div>
              <div className="text-sm text-black/50 font-medium">Worldwide Clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BackgroundInfoSection() {
  const [activeTab, setActiveTab] = useState<"Education" | "Experience" | "Achievements">("Education");

  const tabs = ["Education", "Experience", "Achievements"] as const;

  const data = {
    Education: [
      { role: "BACHELOR OF DESIGN (B.DES)", org: "UX & Interaction Design", year: "2021-2025" },
      { role: "UX DESIGN CERTIFICATION", org: "Google Programma", year: "2023" },
      { role: "PRODUCT DESIGN CERTIFICATE", org: "ADP List - Mentorship Program", year: "2024" }
    ],
    Experience: [
      { role: "UI/UX DESIGN INTERN", org: "TechCorp Inc.", year: "2023-Present" },
      { role: "FREELANCE DESIGNER", org: "Various Global Clients", year: "2022-2023" },
      { role: "JUNIOR WEB DEVELOPER", org: "Creative Agency", year: "2021-2022" }
    ],
    Achievements: [
      { role: "BEST UI DESIGN AWARD", org: "National Design Competition", year: "2024" },
      { role: "HACKATHON WINNER", org: "Global Tech Summit", year: "2023" },
      { role: "PUBLISHED AUTHOR", org: "UX Matters Magazine", year: "2022" }
    ]
  };

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#f2f2f2] text-black font-sans border-t border-black/10">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
          <h2 className="text-[4rem] md:text-[6rem] lg:text-[8rem] font-bold tracking-tighter leading-none mb-6 md:mb-0">
            BACKGROUND
          </h2>
          <p className="max-w-[280px] text-black/50 text-sm md:text-base text-left md:text-right">
            The education, experience, and achievements that shaped the thinking and craft behind every project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr_3fr] gap-12 lg:gap-24 items-start">
          {/* Navigation Buttons */}
          <div className="flex flex-col gap-6 pt-4">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-left text-xl font-semibold transition-colors duration-300 ${
                  activeTab === tab ? "text-black" : "text-black/30 hover:text-black/60"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Dynamic Image */}
          <div className="relative aspect-[3/4] w-full overflow-hidden bg-black/5 max-w-[400px]">
             <AnimatePresence mode="wait">
               <motion.div
                 key={activeTab}
                 initial={{ opacity: 0, scale: 1.05 }}
                 animate={{ opacity: 1, scale: 1 }}
                 exit={{ opacity: 0 }}
                 transition={{ duration: 0.4 }}
                 className="absolute inset-0"
               >
                 <Image 
                   src="/images/background-image.png" 
                   alt={activeTab} 
                   fill 
                   className="object-cover"
                   // Re-using the same image placeholder for now, but animating to show change
                 />
               </motion.div>
             </AnimatePresence>
          </div>

          {/* Dynamic Content List */}
          <div className="pt-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
              >
                <div className="flex flex-col">
                  {data[activeTab].map((item, index) => (
                    <div key={index} className="flex justify-between items-start py-8 border-b border-black/10 first:pt-0">
                      <div>
                        <h3 className="font-bold text-lg mb-2">{item.role}</h3>
                        <p className="text-black/50 text-sm font-medium">{item.org}</p>
                      </div>
                      <div className="text-black/40 text-sm">{item.year}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const faqs = [
    "Are you open to full-time roles?",
    "What disciplines do you specialise in?",
    "What tools do you work with?",
    "How long does a typical freelance project take?",
    "Do you work with international clients or remote teams?"
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#f2f2f2] text-black border-t border-black/10 font-sans">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 border-b border-black/10 pb-8">
          <h2 className="text-[5rem] md:text-[8rem] font-bold tracking-tighter leading-none mb-6 md:mb-0">
            FAQS
          </h2>
          <p className="max-w-[300px] text-black/50 text-sm md:text-base text-left md:text-right pb-4">
            No jargon, no fluff. Just clear answers to the most common questions about the work and process.
          </p>
        </div>

        <div className="max-w-4xl ml-auto">
          {faqs.map((q, index) => {
            const isOpen = openIndex === index;
            const number = String(index + 1).padStart(2, '0');
            return (
              <div key={index} className="border-b border-black/10 overflow-hidden">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between py-8 text-left hover:bg-black/[0.02] transition-colors"
                >
                  <div className="flex items-center gap-6">
                    <span className="text-[#fc7200] font-semibold text-lg">{number}</span>
                    <span className="text-lg md:text-xl font-medium">{q}</span>
                  </div>
                  <span className="text-[#fc7200] flex-shrink-0 ml-4">
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                  </span>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="pl-16 pb-8 pr-8 text-black/60 leading-relaxed font-light">
                        Placeholder answer for the frequently asked question. As a UI implementation, this demonstrates the accordion expansion.
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// MAIN PAGE
export default function ContactPage() {
  return (
    <main className="bg-[#f2f2f2] min-h-screen relative overflow-x-hidden selection:bg-[#fc7200] selection:text-white">
      <ContactNavbar />
      
      <ExpandingAboutSection />
      
      <WorkInfoSection />
      
      <BackgroundInfoSection />
      
      <FAQSection />

      <ContactFooter />
    </main>
  );
}

