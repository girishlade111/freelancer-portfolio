"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [cursorState, setCursorState] = useState<"default" | "link" | "view">("default");

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth out the motion values using spring physics
  const springConfig = { stiffness: 800, damping: 50 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Check if the device uses a coarse pointer (like a touch screen)
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsDesktop(false);
      return;
    }

    setIsDesktop(true);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const cursorType = target.closest("[data-cursor]")?.getAttribute("data-cursor");

      if (cursorType === "link" || cursorType === "view") {
        setCursorState(cursorType as "link" | "view");
      } else if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[role='button']")
      ) {
        setCursorState("link");
      } else {
        setCursorState("default");
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY]);

  if (!isDesktop) return null;

  const variants = {
    default: {
      width: 40,
      height: 40,
      x: "-50%",
      y: "-50%",
      opacity: 1,
      scale: 1,
      backgroundColor: "transparent",
      border: "1px solid rgba(201, 168, 76, 0.3)",
      mixBlendMode: "difference" as const,
    },
    link: {
      width: 40,
      height: 40,
      x: "-50%",
      y: "-50%",
      opacity: 1,
      scale: 1.5,
      backgroundColor: "rgba(201, 168, 76, 0.15)",
      border: "1px solid rgba(201, 168, 76, 1)",
      mixBlendMode: "normal" as const,
    },
    view: {
      width: 64,
      height: 64,
      x: "-50%",
      y: "-50%",
      opacity: 1,
      scale: 1,
      backgroundColor: "rgba(11, 22, 40, 0.9)",
      border: "1px solid rgba(201, 168, 76, 0.5)",
      mixBlendMode: "normal" as const,
    },
  };

  return (
    <>
      <style>{`body { cursor: none; }`}</style>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[100] rounded-full flex items-center justify-center backdrop-blur-sm transition-colors duration-300"
        style={{
          x: smoothX,
          y: smoothY,
        }}
        variants={variants}
        animate={cursorState}
        transition={{ type: "tween", duration: 0.15, ease: "easeOut" }}
      >
        {cursorState === "view" && (
          <span className="font-mono text-[10px] text-gold-600 uppercase tracking-widest">
            View
          </span>
        )}
      </motion.div>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[101] w-2 h-2 bg-gold-600 rounded-full"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          opacity: cursorState === "view" ? 0 : 1,
          scale: cursorState === "link" ? 0.5 : 1,
        }}
        transition={{ duration: 0.15 }}
      />
    </>
  );
}
