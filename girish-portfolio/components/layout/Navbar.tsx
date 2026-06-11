"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Linkedin, Github, Instagram, Codepen } from "@/components/ui/Icons";
import Image from "next/image";

const OVERLAY_LINKS = [
  { name: "HOME", href: "#hero" },
  { name: "ABOUT", href: "#about" },
  { name: "PROJECTS", href: "#projects" },
  { name: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const getMenuImage = (hovered: string | null) => {
    switch (hovered) {
      case "ABOUT":
        return "/images/menu-about.png";
      case "PROJECTS":
        return "/images/menu-home.png";
      case "CONTACT":
        return "/images/menu-contact.png";
      default:
        return "/images/menu-home.png";
    }
  };

  return (
    <>
      {/* TOP NAV */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 h-20 transition-colors duration-300 flex items-center justify-between px-6 md:px-12 ${
          isScrolled ? "bg-caro-dark/90 backdrop-blur-md border-b border-white/5" : "bg-transparent"
        }`}
      >
        {/* LEFT: LOGO */}
        <div>
          <a
            href="#"
            className="font-sans font-bold text-lg tracking-widest text-white uppercase"
            data-cursor="link"
          >
            GIRISH
          </a>
        </div>

        {/* RIGHT: MENU BUTTON */}
        <div>
          <motion.button 
            onClick={() => setIsMenuOpen(true)}
            className="flex items-center gap-3 text-white hover:text-caro-orange transition-colors cursor-pointer"
            aria-label="Open menu"
            data-cursor="link"
            whileHover="hover"
          >
            <span className="font-sans text-xs font-semibold tracking-[0.2em] uppercase hidden sm:block">
              Menu
            </span>
            <motion.div 
              className="grid grid-cols-3 gap-1 opacity-80"
              variants={{
                hover: { rotate: 90, scale: 1.1 }
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {[...Array(9)].map((_, i) => (
                <motion.span 
                  key={i} 
                  className="w-1 h-1 bg-current rounded-full" 
                  variants={{
                    hover: { 
                      scale: i === 4 ? 0.6 : 1.2, // shrink center dot, scale outer dots
                      backgroundColor: "#FC7200" 
                    }
                  }}
                  transition={{ duration: 0.3 }}
                />
              ))}
            </motion.div>
          </motion.button>
        </div>
      </motion.nav>

      {/* FULL-SCREEN OVERLAY MENU */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 bg-caro-dark z-[100] flex flex-col justify-between p-6 md:p-12 xl:p-20 overflow-y-auto"
          >
            {/* TOP BAR */}
            <div className="flex justify-between items-center w-full">
              <a 
                href="#" 
                className="font-sans font-bold text-lg tracking-widest text-white uppercase" 
                onClick={() => setIsMenuOpen(false)}
              >
                GIRISH
              </a>
              <motion.button 
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-3 text-white hover:text-caro-orange transition-colors cursor-pointer"
                aria-label="Close menu"
                whileHover="hover"
              >
                <span className="font-sans text-xs font-semibold tracking-[0.2em] uppercase">
                  Close
                </span>
                <motion.div 
                  className="grid grid-cols-3 gap-1 opacity-80 rotate-45 scale-110"
                  variants={{
                    hover: { rotate: 135 }
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  {[...Array(9)].map((_, i) => (
                    <motion.span 
                      key={i} 
                      className="w-1 h-1 bg-current rounded-full" 
                      variants={{
                        hover: {
                          scale: i % 2 === 0 ? 0.6 : 1.2, // checkerboard scale on hover
                          backgroundColor: "#FC7200"
                        }
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  ))}
                </motion.div>
              </motion.button>
            </div>

            {/* LINKS AREA */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center my-auto w-full max-w-[1400px] mx-auto py-12">
              {/* Left links list */}
              <div className="lg:col-span-7 flex flex-col gap-6 items-start">
                {OVERLAY_LINKS.map((item, index) => {
                  const isHovered = hoveredLink === item.name;
                  const isAnyHovered = hoveredLink !== null;
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      onMouseEnter={() => setHoveredLink(item.name)}
                      onMouseLeave={() => setHoveredLink(null)}
                      className="group flex items-baseline relative"
                    >
                      <motion.span
                        className="font-bricolage font-extrabold text-5xl sm:text-6xl md:text-8xl lg:text-[7vw] leading-none uppercase tracking-tighter transition-all duration-300"
                        style={{
                          color: isHovered ? "var(--color-caro-orange)" : "white",
                          opacity: isAnyHovered && !isHovered ? 0.3 : 1
                        }}
                      >
                        {item.name}
                      </motion.span>
                      <span className="font-mono text-xs md:text-sm text-white/30 ml-2 align-super font-normal">
                        0{index + 1}
                      </span>
                    </a>
                  );
                })}
              </div>

              {/* Right image card */}
              <div className="lg:col-span-5 hidden lg:flex justify-center xl:justify-end">
                <div className="relative aspect-[4/5] w-full max-w-[380px] xl:max-w-[420px] overflow-hidden bg-white/5 shadow-2xl border border-white/5">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={hoveredLink || "HOME"}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={getMenuImage(hoveredLink)}
                        alt={hoveredLink || "Home Menu Scene"}
                        fill
                        className="object-cover"
                        priority
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* BOTTOM BAR */}
            <div className="flex flex-wrap justify-between items-center w-full pt-8 border-t border-white/10 gap-6">
              <div className="flex flex-wrap gap-8 md:gap-12">
                <a href="https://www.linkedin.com/in/girish-lade-075bba201/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs text-white/60 hover:text-white transition-colors tracking-widest font-semibold uppercase">
                  LinkedIn <ArrowUpRight size={14} />
                </a>
                <a href="https://www.instagram.com/girish_lade_/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs text-white/60 hover:text-white transition-colors tracking-widest font-semibold uppercase">
                  Instagram <ArrowUpRight size={14} />
                </a>
                <a href="https://github.com/girishlade111" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs text-white/60 hover:text-white transition-colors tracking-widest font-semibold uppercase">
                  GitHub <ArrowUpRight size={14} />
                </a>
                <a href="https://codepen.io/Girish-Lade-the-looper" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs text-white/60 hover:text-white transition-colors tracking-widest font-semibold uppercase">
                  CodePen <ArrowUpRight size={14} />
                </a>
              </div>
              <div className="text-[10px] text-white/40 tracking-widest uppercase font-semibold">
                © {new Date().getFullYear()} Girish Lade
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* RIGHT FLOATING SIDEBAR (Desktop Only) */}
      <div className="fixed right-0 top-0 bottom-0 z-40 hidden xl:flex flex-col justify-center items-center w-24 pointer-events-none">
        
        {/* Follow Text & Line */}
        <div className="flex flex-col items-center gap-6 mt-16 pointer-events-auto">
          <div className="text-[10px] text-white/50 tracking-[0.2em] uppercase -rotate-90 origin-center whitespace-nowrap mb-6">
            Follow
          </div>
          <div className="w-[1px] h-12 bg-white/20" />
        </div>

        {/* Social Icons */}
        <div className="flex flex-col items-center gap-6 mt-6 pointer-events-auto">
          <a href="https://www.linkedin.com/in/girish-lade-075bba201/" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-caro-orange transition-colors" data-cursor="link"><Linkedin size={16} /></a>
          <a href="https://github.com/girishlade111" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-caro-orange transition-colors" data-cursor="link"><Github size={16} /></a>
          <a href="https://www.instagram.com/girish_lade_/" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-caro-orange transition-colors" data-cursor="link"><Instagram size={16} /></a>
          <a href="https://codepen.io/Girish-Lade-the-looper" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-caro-orange transition-colors" data-cursor="link"><Codepen size={16} /></a>
        </div>

        {/* Bottom Button */}
        <div className="mt-auto mb-12 pointer-events-auto">
          <a
            href="#contact"
            className="flex items-center gap-2 bg-white text-black px-4 py-3 text-[10px] font-bold tracking-widest uppercase hover:bg-caro-orange hover:text-white transition-colors"
            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
            data-cursor="link"
          >
            Get in touch
            <ArrowUpRight size={14} className="rotate-90" />
          </a>
        </div>
      </div>
    </>
  );
}
