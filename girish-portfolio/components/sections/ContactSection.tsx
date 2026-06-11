"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Loader2, CheckCircle } from "lucide-react";
import { Github, Twitter, Linkedin } from "@/components/ui/Icons";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { sectionEntry } from "@/lib/animations";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  message: z.string().min(10, "Message is required"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactSection() {
  const prefersReduced = useReducedMotion();
  const animProps = prefersReduced ? {} : sectionEntry;
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log(data);
    setIsSuccess(true);
  };

  return (
    <motion.section id="contact" className="bg-navy-900 section-padding" {...animProps}>
      <div className="content-max">
        {/* HEADER */}
        <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold-600 mb-4">
          LET'S BUILD SOMETHING
        </div>
        <h2 
          className="font-bricolage font-extrabold text-cream-50 leading-none mb-4"
          style={{ fontSize: "clamp(3rem, 7vw, 7rem)" }}
        >
          Say hello<span className="text-gold-600">.</span>
        </h2>
        <p className="font-inter text-sm text-cream-500 max-w-sm mb-12">
          Available for freelance projects, long-term contracts, and agency partnerships.
        </p>

        {/* TWO-COLUMN LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          
          {/* LEFT COLUMN */}
          <div>
            <a 
              href="mailto:girish@ladestack.in" 
              className="inline-block mt-2 mb-8 font-mono text-sm md:text-base text-gold-600 hover:text-gold-400 transition-colors tracking-wide"
              data-cursor="link"
            >
              girish@ladestack.in
            </a>

            <div className="flex gap-3 mt-6">
              <a href="https://github.com/girishlade" target="_blank" rel="noopener noreferrer" className="w-11 h-11 border border-gold/20 hover:border-gold/60 hover:bg-gold-600/10 flex items-center justify-center transition-all duration-300" aria-label="GitHub" data-cursor="link">
                <Github size={16} className="text-cream-500" />
              </a>
              <a href="#" className="w-11 h-11 border border-gold/20 hover:border-gold/60 hover:bg-gold-600/10 flex items-center justify-center transition-all duration-300" aria-label="Twitter" data-cursor="link">
                <Twitter size={16} className="text-cream-500" />
              </a>
              <a href="#" className="w-11 h-11 border border-gold/20 hover:border-gold/60 hover:bg-gold-600/10 flex items-center justify-center transition-all duration-300" aria-label="LinkedIn" data-cursor="link">
                <Linkedin size={16} className="text-cream-500" />
              </a>
            </div>

            <div className="mt-8 inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-mono text-[11px] text-cream-500 tracking-wide">
                Available for new projects
              </span>
            </div>
          </div>

          {/* RIGHT COLUMN: Contact Form */}
          <div>
            {isSuccess ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center p-12 bg-navy-800 border border-gold/10"
              >
                <CheckCircle size={48} className="text-gold-600 mb-6" />
                <h3 className="font-bricolage text-2xl text-cream-100 mb-2">Message sent.</h3>
                <p className="font-inter text-cream-500">I'll get back to you within 24 hours.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your name"
                    {...register("name")}
                    className="w-full bg-navy-700 border border-gold/15 focus:border-gold/45 focus:outline-none px-4 py-3.5 text-cream-100 text-sm placeholder:text-cream-700 transition-colors duration-200 rounded-none"
                  />
                  {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
                </div>
                
                <div>
                  <input
                    type="email"
                    placeholder="Email address"
                    {...register("email")}
                    className="w-full bg-navy-700 border border-gold/15 focus:border-gold/45 focus:outline-none px-4 py-3.5 text-cream-100 text-sm placeholder:text-cream-700 transition-colors duration-200 rounded-none"
                  />
                  {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
                </div>

                <div>
                  <textarea
                    rows={5}
                    placeholder="Tell me about your project..."
                    {...register("message")}
                    className="w-full bg-navy-700 border border-gold/15 focus:border-gold/45 focus:outline-none px-4 py-3.5 text-cream-100 text-sm placeholder:text-cream-700 transition-colors duration-200 rounded-none resize-none"
                  />
                  {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>}
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileTap={{ scale: 0.99 }}
                  className="w-full bg-gold-600 text-navy-900 font-bricolage font-bold py-4 px-8 uppercase tracking-[0.15em] text-sm hover:bg-gold-400 transition-colors duration-300 mt-2 flex justify-center items-center h-[52px]"
                  data-cursor="link"
                >
                  {isSubmitting ? (
                    <Loader2 size={18} className="animate-spin" />
                  ) : (
                    "Send Message →"
                  )}
                </motion.button>
              </form>
            )}
          </div>

        </div>
      </div>
    </motion.section>
  );
}
