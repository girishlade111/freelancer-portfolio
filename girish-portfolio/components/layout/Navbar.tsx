"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet";

const NAV_LINKS = [
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Process", href: "#process" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }

    if (latest > 60) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 left-0 right-0 z-50 h-16 transition-colors duration-300 ${
        isScrolled
          ? "bg-navy-900/90 backdrop-blur-md border-b border-gold/10"
          : "bg-transparent"
      }`}
    >
      <div className="h-full px-6 md:px-12 lg:px-20 xl:px-28 mx-auto flex items-center justify-between">
        
        {/* LEFT */}
        <div className="flex items-baseline">
          <a
            href="#"
            className="font-bricolage font-bold text-sm tracking-[0.2em] text-cream-100"
            data-cursor="link"
          >
            GIRISH.
          </a>
          <span className="w-1.5 h-1.5 rounded-full bg-gold-600 inline-block ml-1" />
        </div>

        {/* CENTER */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative font-inter text-sm text-cream-500 hover:text-gold-600 transition-colors duration-200 group"
              data-cursor="link"
            >
              {link.name}
              <span className="absolute -bottom-1 left-1/2 w-0 h-[1px] bg-gold-600 group-hover:w-full group-hover:left-0 transition-all duration-300 ease-out" />
            </a>
          ))}
        </div>

        {/* RIGHT */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="border border-gold-600 text-gold-600 text-sm font-medium tracking-widest px-5 py-2 uppercase hover:bg-gold-600 hover:text-navy-900 transition-all duration-300"
            data-cursor="link"
          >
            Hire Me
          </a>
        </div>

        {/* MOBILE */}
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <button className="text-cream-100 p-2" aria-label="Open menu">
                <Menu size={24} />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-navy-950 border-l border-gold/10 pt-20">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <SheetDescription className="sr-only">Mobile navigation links</SheetDescription>
              <div className="flex flex-col gap-8 items-center">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="font-bricolage font-bold text-2xl text-cream-100 hover:text-gold-600 transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="mt-8 border border-gold-600 text-gold-600 font-bold tracking-widest px-8 py-3 uppercase hover:bg-gold-600 hover:text-navy-900 transition-all duration-300"
                >
                  Hire Me
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.nav>
  );
}
