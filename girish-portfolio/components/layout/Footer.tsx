"use client";

import Image from "next/image";
import { Github, Twitter, Linkedin } from "lucide-react";
import MarqueeStrip from "@/components/ui/MarqueeStrip";
import { projects } from "@/data/projects";

export default function Footer() {
  const images = projects.slice(0, 6);

  return (
    <footer className="bg-navy-950 flex flex-col">
      <MarqueeStrip variant="top" />

      {/* IMAGE MOSAIC */}
      <div className="grid grid-cols-3 md:grid-cols-6 gap-1 w-full h-40 md:h-56">
        {images.map((img, i) => (
          <div key={i} className="relative overflow-hidden group cursor-pointer" data-cursor="link">
            <Image
              src={img.image}
              alt={img.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 33vw, 16vw"
            />
            <div className="absolute inset-0 bg-gold-600/0 group-hover:bg-gold-600/15 transition-all duration-300 z-10" />
          </div>
        ))}
      </div>

      {/* FOOTER BAR */}
      <div className="px-6 md:px-12 lg:px-20 py-6 flex flex-col md:flex-row justify-between items-center gap-4 border-t border-gold/10">
        <p className="font-mono text-[11px] text-cream-700">
          © {new Date().getFullYear()} Girish Lade
        </p>
        
        <a 
          href="https://ladestack.in" 
          className="font-mono text-[11px] text-gold-600/60 hover:text-gold-600 transition-colors"
          data-cursor="link"
        >
          girish.ladestack.in
        </a>

        <div className="flex gap-4">
          <a href="https://github.com/girishlade" target="_blank" rel="noopener noreferrer" className="text-cream-500 hover:text-gold-600 transition-colors" aria-label="GitHub" data-cursor="link">
            <Github size={14} />
          </a>
          <a href="#" className="text-cream-500 hover:text-gold-600 transition-colors" aria-label="Twitter" data-cursor="link">
            <Twitter size={14} />
          </a>
          <a href="#" className="text-cream-500 hover:text-gold-600 transition-colors" aria-label="LinkedIn" data-cursor="link">
            <Linkedin size={14} />
          </a>
        </div>
      </div>

      <MarqueeStrip variant="bottom" />
    </footer>
  );
}
