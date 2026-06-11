"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Plus, Minus } from "lucide-react";

// SECTION 1: Expanding Image (About Section)
function AboutExpandingSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Grow from a small window to full screen
  const width = useTransform(scrollYProgress, [0, 1], ["40vw", "100vw"]);
  const height = useTransform(scrollYProgress, [0, 1], ["50vh", "100vh"]);
  const borderRadius = useTransform(scrollYProgress, [0, 1], ["24px", "0px"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <div ref={containerRef} className="h-[250vh] w-full relative bg-caro-dark">
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        
        {/* Title above image */}
        <motion.div 
          className="absolute top-32 left-0 w-full text-center z-10 px-4"
          style={{ opacity: opacityText }}
        >
          <h1 className="text-white text-5xl md:text-7xl lg:text-9xl font-bold uppercase tracking-widest font-sans">
            About
          </h1>
        </motion.div>
        
        {/* Expanding Image Window */}
        <motion.div
          style={{ width, height, borderRadius }}
          className="relative overflow-hidden z-20 shadow-2xl mt-20"
        >
          <Image 
            src="/images/about-image.png" 
            alt="About me" 
            fill 
            className="object-cover"
            priority
          />
          {/* Overlay to ensure readability if text goes over, though in this design image is just visual */}
          <div className="absolute inset-0 bg-black/20 pointer-events-none" />
        </motion.div>
      </div>
    </div>
  );
}

// SECTION 2: Work Information
function WorkInfoSection() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-caro-dark text-white relative z-30 font-sans">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Text Info */}
        <div className="space-y-12">
          <div>
            <h2 className="text-sm font-semibold tracking-[0.2em] text-caro-orange uppercase mb-6">
              Work Information
            </h2>
            <h3 className="text-4xl md:text-5xl lg:text-[4rem] font-bold uppercase tracking-tight leading-[1.1] mb-8">
              Driving Digital <br/> Excellence
            </h3>
            <p className="text-white/70 text-lg md:text-xl max-w-lg mb-8 leading-relaxed font-light">
              With a diverse background in software engineering and web development, I have helped numerous clients transform their ideas into robust, scalable applications. My focus is always on delivering seamless user experiences and modern aesthetics.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-x-8 gap-y-12">
            <div>
              <div className="text-5xl font-bold text-caro-orange mb-3">50+</div>
              <div className="text-xs text-white/50 uppercase tracking-[0.2em] font-semibold">Projects Completed</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-caro-orange mb-3">30+</div>
              <div className="text-xs text-white/50 uppercase tracking-[0.2em] font-semibold">Happy Clients</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-caro-orange mb-3">5+</div>
              <div className="text-xs text-white/50 uppercase tracking-[0.2em] font-semibold">Years Experience</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-caro-orange mb-3">100%</div>
              <div className="text-xs text-white/50 uppercase tracking-[0.2em] font-semibold">Client Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Right: Image */}
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl group">
          <Image 
            src="/images/contact-image.png" 
            alt="Work process" 
            fill 
            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
          />
        </div>
      </div>
    </section>
  );
}

// SECTION 3: Background Information (Tabs)
function BackgroundInfoSection() {
  const [activeTab, setActiveTab] = useState<"education" | "experience" | "achievement">("education");

  const tabContent = {
    education: {
      title: "Educational Background",
      items: [
        { year: "2019 - 2023", role: "Bachelor of Technology", desc: "Graduated with honors in Computer Science, focusing on advanced algorithms and modern web technologies. Participated in multiple national-level coding competitions." },
        { year: "2017 - 2019", role: "Higher Secondary Education", desc: "Specialized in Science and Mathematics with top percentiles, laying a strong foundation for engineering and analytical thinking." }
      ]
    },
    experience: {
      title: "Professional Experience",
      items: [
        { year: "2023 - Present", role: "Senior Frontend Engineer", desc: "Leading the UI development for cutting-edge applications using React and Next.js. Architecting scalable design systems and improving overall application performance." },
        { year: "2021 - 2023", role: "Freelance Web Developer", desc: "Delivered highly customized, responsive web solutions for global clients across various industries, handling everything from design to deployment." }
      ]
    },
    achievement: {
      title: "Key Achievements",
      items: [
        { year: "2023", role: "Best UI/UX Implementation", desc: "Awarded for designing and implementing an intuitive, highly accessible dashboard interface that increased user engagement by 40%." },
        { year: "2022", role: "National Hackathon Winner", desc: "Secured first place in an open-source hackathon for building a real-time collaboration tool tailored for remote teams." }
      ]
    }
  };

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#0a0a0a] text-white font-sans border-t border-white/5">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        {/* Left: Image & Buttons */}
        <div className="relative">
          <div className="sticky top-32 space-y-8">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl mb-8 group">
              <Image 
                src="/images/background-image.png" 
                alt="Background details" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-wrap gap-4">
              {(["education", "experience", "achievement"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-4 text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 border rounded-sm flex-1 sm:flex-none text-center ${
                    activeTab === tab 
                      ? "bg-caro-orange text-white border-caro-orange" 
                      : "bg-transparent text-white/50 border-white/10 hover:border-white/30 hover:text-white"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Content */}
        <div className="min-h-[500px] flex flex-col justify-center py-8">
          <h2 className="text-sm font-semibold tracking-[0.2em] text-caro-orange uppercase mb-6">
            Background Information
          </h2>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="space-y-12"
            >
              <h3 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-white mb-12 border-b border-white/10 pb-8">
                {tabContent[activeTab].title}
              </h3>
              
              <div className="space-y-12">
                {tabContent[activeTab].items.map((item, index) => (
                  <div key={index} className="relative pl-10 before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:bg-caro-orange before:rounded-sm">
                    <div className="text-caro-orange text-sm font-mono tracking-[0.1em] mb-3">{item.year}</div>
                    <h4 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">{item.role}</h4>
                    <p className="text-white/60 leading-relaxed text-base md:text-lg font-light max-w-xl">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

// SECTION 4: FAQs
function FAQSection() {
  const faqs = [
    {
      q: "What types of projects do you take on?",
      a: "I specialize in front-end development, specifically building high-performance web applications using React, Next.js, and modern CSS frameworks. I love working on interactive dashboards, landing pages, and complex user interfaces that require attention to detail."
    },
    {
      q: "How long does a typical project take?",
      a: "Project timelines vary greatly depending on scope and complexity. A standard landing page or portfolio might take 2-3 weeks, while a full-scale web application could take 2-3 months. I provide detailed, transparent estimates after our initial discovery call."
    },
    {
      q: "Do you handle the design process as well?",
      a: "While my primary expertise is in frontend engineering and bringing designs to life, I have a strong eye for UI/UX. I am very comfortable working from Figma files, implementing design systems independently, or collaborating with a dedicated designer."
    },
    {
      q: "What is your typical development process?",
      a: "My process involves Discovery, Strategic Planning, Iterative Development, and Exhaustive Testing. I believe in frequent communication, sharing progress regularly, and ensuring the final product strictly adheres to design constraints and accessibility standards."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 bg-caro-dark text-white border-t border-white/5 font-sans">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-sm font-semibold tracking-[0.2em] text-caro-orange uppercase mb-6">Got Questions?</h2>
          <h3 className="text-4xl md:text-6xl lg:text-[5rem] font-bold uppercase tracking-tight leading-none">
            Frequently <br/> Asked Questions
          </h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`border border-white/10 rounded-sm overflow-hidden transition-all duration-300 ${isOpen ? 'bg-white/[0.03] border-white/20' : 'bg-transparent hover:bg-white/[0.02]'}`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full text-left px-8 py-8 flex justify-between items-center"
                >
                  <span className="text-xl md:text-2xl font-bold tracking-tight pr-8">{faq.q}</span>
                  <span className={`text-caro-orange transition-transform duration-500 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}>
                    {isOpen ? <Minus size={24} /> : <Plus size={24} />}
                  </span>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-8 pb-8 text-white/60 leading-relaxed text-lg font-light border-t border-white/5 pt-6">
                        {faq.a}
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
    <main className="bg-caro-dark min-h-screen">
      <Navbar />
      
      {/* 1. About Expanding Image Section */}
      <AboutExpandingSection />
      
      {/* 2. Work Information */}
      <WorkInfoSection />
      
      {/* 3. Background Information Tabs */}
      <BackgroundInfoSection />
      
      {/* 4. FAQs */}
      <FAQSection />

      {/* 5. Footer */}
      <Footer />
    </main>
  );
}
