"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { Plus, Minus, ArrowUpRight } from "lucide-react";

// --- Internal Components to avoid touching main layout ---

function ContactNavbar({ scrollYProgress }: { scrollYProgress: any }) {
  const textColor = useTransform(scrollYProgress, [0.75, 0.85, 0.92, 1.0], ["#000000", "#ffffff", "#ffffff", "#000000"]);
  const borderCol = useTransform(scrollYProgress, [0.75, 0.85, 0.92, 1.0], ["rgba(0,0,0,0.2)", "rgba(255,255,255,0.2)", "rgba(255,255,255,0.2)", "rgba(0,0,0,0.2)"]);
  const dotBg = useTransform(scrollYProgress, [0.75, 0.85, 0.92, 1.0], ["#000000", "#ffffff", "#ffffff", "#000000"]);

  return (
    <motion.nav 
      style={{ color: textColor }}
      className="w-full flex justify-between items-center px-6 md:px-12 py-8 fixed top-0 left-0 right-0 z-50 transition-colors duration-100"
    >
      <div className="font-sans font-bold text-2xl tracking-widest uppercase">
        CAROLINA
      </div>
      <motion.div 
        style={{ borderColor: borderCol }}
        className="flex items-center gap-3 border-b pb-1 cursor-pointer hover:opacity-85 transition-opacity"
      >
        <span className="font-sans text-sm font-semibold tracking-[0.2em] uppercase">
          MENU
        </span>
        <div className="grid grid-cols-3 gap-[3px]">
          {[...Array(9)].map((_, i) => (
            <motion.div 
              key={i} 
              style={{ backgroundColor: dotBg }}
              className="w-[4px] h-[4px] rounded-full" 
            />
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
}

function ContactFooter() {
  return (
    <footer className="bg-[#171312] text-white pt-24 pb-8 relative overflow-hidden flex flex-col font-sans">
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 px-6 md:px-12 lg:px-24 mb-32 z-10 relative">
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
      
      <div className="absolute bottom-4 left-0 right-0 flex justify-center z-10">
         <div className="w-12 h-1 bg-white/20 rounded-full" />
      </div>
    </footer>
  );
}

// --- Page Sections ---

interface ExpandingAboutSectionProps {
  sectionRef: React.RefObject<HTMLDivElement | null>;
  scrollYProgress: any;
}

function ExpandingAboutSection({ sectionRef, scrollYProgress }: ExpandingAboutSectionProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const headerY = useTransform(scrollYProgress, [0, 0.2], [0, -80]);

  const imageY = useTransform(scrollYProgress, [0, 0.35], ["30vh", "0vh"]);
  
  const width = useTransform(
    scrollYProgress,
    [0, 0.35, 0.85],
    isMobile ? ["80vw", "85vw", "100vw"] : ["45vw", "55vw", "100vw"]
  );
  
  const height = useTransform(
    scrollYProgress,
    [0, 0.35, 0.85],
    isMobile ? ["45vw", "47.8vw", "100vh"] : ["25.31vw", "30.93vw", "100vh"]
  );

  const borderRadius = useTransform(scrollYProgress, [0, 0.7, 0.85], ["16px", "12px", "0px"]);

  return (
    <section ref={sectionRef} className="h-[300vh] w-full relative bg-[#f2f2f2]">
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between overflow-hidden">
        <motion.div 
          style={{ opacity: headerOpacity, y: headerY }}
          className="w-full flex flex-col pt-32 px-6 md:px-12 z-10"
        >
          <h1 className="text-[10vw] md:text-[8vw] font-bold tracking-tighter leading-none text-black pb-4 border-b border-black/10">
            CONTACT
          </h1>
          <div className="flex justify-end mt-4">
            <p className="max-w-[320px] text-xs md:text-sm text-black/60 font-medium leading-relaxed text-left">
              Open to full-time roles, freelance projects, and good design conversations. Drop a message — it won't sit unanswered for long.
            </p>
          </div>
        </motion.div>

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
           <motion.div
             style={{ width, height, y: imageY, borderRadius }}
             className="relative overflow-hidden bg-black/5 shadow-2xl"
           >
             <Image 
               src="/images/about-image.png" 
               alt="Abstract Waves" 
               fill 
               className="object-cover"
               priority
             />
           </motion.div>
        </div>
      </div>
    </section>
  );
}

function WorkInfoSection() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-12 lg:px-24 bg-[#f2f2f2] text-black font-sans">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-32 items-start">
        <div className="space-y-8 md:space-y-16">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-[1.1]">
            The person behind the pixels — driven by curiosity, shaped by craft.
          </h2>
          
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
            <Image 
              src="/images/contact-image.png" 
              alt="Flowers in jar" 
              fill 
              className="object-cover"
            />
          </div>
        </div>

        <div className="space-y-12 md:space-y-24 mt-8 lg:mt-0">
          <div className="text-black/60 text-base md:text-lg leading-relaxed font-light space-y-6 md:pt-2">
            <p>
              Grounded in user research, product thinking, and interface design — built through academic work, hands-on internships, and real projects that shipped to real users.
            </p>
            <p>
              Currently open to full-time roles, internships, and freelance projects.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:gap-x-8 md:gap-y-16 border-t border-black/10 pt-10 md:pt-16">
            <div>
              <div className="text-4xl md:text-6xl lg:text-7xl font-bold mb-2 md:mb-4 tracking-tighter">98+</div>
              <div className="text-xs md:text-sm text-black/50 font-medium">Projects Designed & Delivered</div>
            </div>
            <div>
              <div className="text-4xl md:text-6xl lg:text-7xl font-bold mb-2 md:mb-4 tracking-tighter">15+</div>
              <div className="text-xs md:text-sm text-black/50 font-medium">Tools & Platforms Worked With</div>
            </div>
            <div className="border-t border-black/10 pt-8 md:pt-12">
              <div className="text-4xl md:text-6xl lg:text-7xl font-bold mb-2 md:mb-4 tracking-tighter">2+</div>
              <div className="text-xs md:text-sm text-black/50 font-medium">Years of Expertise</div>
            </div>
            <div className="border-t border-black/10 pt-8 md:pt-12">
              <div className="text-4xl md:text-6xl lg:text-7xl font-bold mb-2 md:mb-4 tracking-tighter">25+</div>
              <div className="text-xs md:text-sm text-black/50 font-medium">Worldwide Clients</div>
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
    <section className="py-16 md:py-24 px-4 md:px-12 lg:px-24 bg-[#f2f2f2] text-black font-sans border-t border-black/10">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16">
          <h2 className="text-[10vw] md:text-[8vw] lg:text-[10rem] font-bold tracking-tighter leading-none mb-4 md:mb-0">
            BACKGROUND
          </h2>
          <p className="max-w-[280px] text-black/50 text-sm md:text-base lg:text-lg text-left md:text-right font-medium">
            The education, experience, and achievements that shaped the thinking and craft behind every project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_2fr_3fr] gap-8 md:gap-12 lg:gap-24 items-start">
          <div className="flex flex-row md:flex-col gap-4 md:gap-6 overflow-x-auto md:overflow-x-visible pb-4 md:pb-0 pt-2 border-b md:border-b-0 border-black/10 md:pt-4">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-left text-lg md:text-xl font-semibold transition-colors duration-300 whitespace-nowrap ${
                  activeTab === tab ? "text-black" : "text-black/30 hover:text-black/60"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="relative aspect-[3/4] w-full overflow-hidden bg-black/5 max-w-[320px] md:max-w-[400px] mx-auto md:mx-0 rounded-xl">
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
                 />
               </motion.div>
             </AnimatePresence>
          </div>

          <div className="pt-2 md:pt-4">
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
                     <div key={index} className="flex justify-between items-start py-6 md:py-8 border-b border-black/10 first:pt-0">
                       <div className="pr-4">
                         <h3 className="font-bold text-base md:text-lg mb-1 md:mb-2">{item.role}</h3>
                         <p className="text-black/50 text-xs md:text-sm font-medium">{item.org}</p>
                       </div>
                       <div className="text-black/40 text-xs md:text-sm whitespace-nowrap">{item.year}</div>
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
    <section className="py-16 md:py-24 px-4 md:px-12 lg:px-24 bg-[#f2f2f2] text-black border-t border-black/10 font-sans">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 border-b border-black/10 pb-8">
          <h2 className="text-[10vw] md:text-[6rem] lg:text-[8rem] font-bold tracking-tighter leading-none mb-4 md:mb-0">
            FAQS
          </h2>
          <p className="max-w-[300px] text-black/50 text-sm md:text-base lg:text-lg text-left md:text-right pb-2 font-medium">
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
                  className="w-full flex items-center justify-between py-6 md:py-8 text-left hover:bg-black/[0.02] transition-colors"
                >
                  <div className="flex items-center gap-4 md:gap-6">
                    <span className="text-[#fc7200] font-semibold text-base md:text-lg">{number}</span>
                    <span className="text-base md:text-xl font-medium pr-4">{q}</span>
                  </div>
                  <span className="text-[#fc7200] flex-shrink-0">
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
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
                      <div className="pl-10 md:pl-16 pb-6 md:pb-8 pr-4 md:pr-8 text-black/60 text-sm md:text-base leading-relaxed font-light">
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
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  return (
    <main className="bg-[#f2f2f2] min-h-screen relative overflow-x-hidden selection:bg-[#fc7200] selection:text-white">
      <ContactNavbar scrollYProgress={scrollYProgress} />
      
      <ExpandingAboutSection sectionRef={sectionRef} scrollYProgress={scrollYProgress} />
      
      <WorkInfoSection />
      
      <BackgroundInfoSection />
      
      <FAQSection />

      <ContactFooter />
    </main>
  );
}
