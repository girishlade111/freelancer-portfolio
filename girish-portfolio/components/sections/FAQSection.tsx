"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { faqs } from "@/data/faqs";
import { sectionEntry } from "@/lib/animations";

export default function FAQSection() {
  const prefersReduced = useReducedMotion();
  const animProps = prefersReduced ? {} : sectionEntry;

  return (
    <motion.section id="faq" className="bg-caro-light text-black px-6 md:px-12 xl:px-24 py-24 md:py-32" {...animProps}>
      
      {/* HEADER SECTION */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8 border-b border-black/10 pb-16">
        
        {/* LEFT: Title */}
        <div className="flex items-start gap-4">
          <span className="font-sans font-bold text-caro-orange text-sm mt-4 md:mt-8">// 07</span>
          <h2 className="font-bricolage text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter uppercase leading-none">
            FAQS
          </h2>
        </div>

        {/* RIGHT: Description */}
        <div className="max-w-xs md:max-w-sm">
          <p className="font-sans text-sm text-black/60 leading-relaxed md:text-right font-medium">
            No jargon, no fluff. Just clear answers to the most common questions about the work and process.
          </p>
        </div>
      </div>

      {/* FAQ ACCORDION */}
      <div className="flex flex-col max-w-4xl mx-auto w-full">
        {faqs.map((faq, index) => (
          <FAQItem key={index} faq={faq} index={index + 1} />
        ))}
      </div>

    </motion.section>
  );
}

function FAQItem({ faq, index }: { faq: { question: string; answer: string }; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="py-6 border-b border-black/10 cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
      data-cursor="link"
    >
      <div className="flex justify-between items-center gap-6">
        <div className="flex items-center gap-6">
          <span className="font-bricolage font-bold text-caro-orange text-lg">
            {index < 10 ? `0${index}` : index}
          </span>
          <h3 className="font-sans font-medium text-base sm:text-lg md:text-xl text-black">
            {faq.question}
          </h3>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="text-caro-orange text-2xl font-light"
        >
          +
        </motion.div>
      </div>
      
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="font-sans text-sm text-black/60 leading-relaxed pt-4 pl-8 md:pl-12 pr-4 md:pr-12">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
