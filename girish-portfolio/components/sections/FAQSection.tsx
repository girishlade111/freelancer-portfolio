"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { faqs } from "@/data/faqs";
import { sectionEntry } from "@/lib/animations";

export default function FAQSection() {
  const prefersReduced = useReducedMotion();
  const animProps = prefersReduced ? {} : sectionEntry;

  return (
    <motion.section id="faq" className="bg-navy-800 section-padding" {...animProps}>
      <div className="content-max">
        {/* SECTION HEADER */}
        <div className="flex flex-col sm:flex-row justify-between items-end mb-12 gap-4">
          <h2 className="section-title">FAQS</h2>
          <p className="font-inter text-sm text-cream-500">
            Have more questions? Reach out.
          </p>
        </div>

        {/* FAQ ACCORDION */}
        <div className="mt-8 space-y-0">
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} isFirst={index === 0} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}

function FAQItem({ faq, isFirst }: { faq: { question: string; answer: string }; isFirst: boolean }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`py-5 md:py-6 cursor-pointer border-b border-gold/15 ${
        isFirst ? "border-t border-gold/15" : ""
      }`}
      onClick={() => setIsOpen(!isOpen)}
      data-cursor="link"
    >
      <div className="flex justify-between items-center gap-8">
        <h3 className="font-bricolage font-semibold text-cream-100 text-lg md:text-xl flex-1">
          {faq.question}
        </h3>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="text-gold-600 text-2xl font-light leading-none"
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
            transition={{ duration: 0.38, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden"
          >
            <p className="font-inter text-sm text-cream-500 leading-relaxed pt-3 max-w-3xl">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
