"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MarqueeStripProps {
  variant: "top" | "bottom";
}

export default function MarqueeStrip({ variant }: MarqueeStripProps) {
  const isTop = variant === "top";
  
  const content = isTop
    ? "AVAILABLE FOR HIRE · FULL-STACK DEVELOPER · AI PRODUCT BUILDER · LADESTACK.IN · "
    : "GIRISH LADE · GET IN TOUCH · HIRE ME · LADESTACK.IN · ";

  return (
    <div
      className={cn(
        "overflow-hidden flex w-full",
        isTop
          ? "bg-gold-600 text-navy-900 py-4"
          : "bg-navy-950 text-cream-100/20 border-t border-gold/5 py-4"
      )}
    >
      <motion.div
        className={cn(
          "flex whitespace-nowrap",
          isTop
            ? "font-bricolage font-extrabold text-4xl md:text-6xl lg:text-7xl"
            : "font-bricolage font-bold text-2xl md:text-4xl"
        )}
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: isTop ? 30 : 22,
            ease: "linear",
          },
        }}
      >
        <span className="inline-block px-4">{content}</span>
        <span className="inline-block px-4">{content}</span>
      </motion.div>
    </div>
  );
}
