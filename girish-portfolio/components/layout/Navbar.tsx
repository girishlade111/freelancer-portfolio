"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, ArrowUpRight } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Linkedin, Github, Instagram, Codepen } from "@/components/ui/Icons";

const NAV_LINKS = [
  { name: "About Me", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Process", href: "#process" },
  { name: "Background", href: "#background" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

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

        {/* RIGHT: MENU */}
        <div>
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger 
              className="flex items-center gap-3 text-white hover:text-caro-orange transition-colors"
              aria-label="Open menu"
              data-cursor="link"
            >
              <span className="font-sans text-xs font-semibold tracking-[0.2em] uppercase hidden sm:block">
                Menu
              </span>
              <div className="grid grid-cols-3 gap-1 opacity-80">
                {[...Array(9)].map((_, i) => (
                  <span key={i} className="w-1 h-1 bg-current rounded-full" />
                ))}
              </div>
            </SheetTrigger>
            <SheetContent side="right" className="bg-caro-dark border-l border-white/10 pt-20">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <SheetDescription className="sr-only">Mobile navigation links</SheetDescription>
              <div className="flex flex-col gap-8 items-start px-6">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="font-bricolage font-bold text-3xl text-white hover:text-caro-orange transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </motion.nav>

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
          <a href="#" className="text-white/50 hover:text-white transition-colors" data-cursor="link"><Linkedin size={16} /></a>
          <a href="#" className="text-white/50 hover:text-white transition-colors" data-cursor="link"><Github size={16} /></a>
          <a href="#" className="text-white/50 hover:text-white transition-colors" data-cursor="link"><Twitter size={16} /></a>
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
