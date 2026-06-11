"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Loader2, CheckCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { sectionEntry } from "@/lib/animations";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().optional(),
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
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log(data);
    setIsSuccess(true);
  };

  return (
    <motion.section id="contact" className="bg-caro-light text-black px-6 md:px-12 xl:px-24 py-24 md:py-32" {...animProps}>
      
      {/* HEADER SECTION */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8 border-b border-black/10 pb-16">
        
        {/* LEFT: Title */}
        <div className="flex items-start gap-4">
          <span className="font-sans font-bold text-caro-orange text-sm mt-4 md:mt-8">// 08</span>
          <h2 className="font-bricolage text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter uppercase leading-none">
            GET IN TOUCH
          </h2>
        </div>

        {/* RIGHT: Description */}
        <div className="max-w-xs md:max-w-sm">
          <p className="font-sans text-sm text-black/60 leading-relaxed md:text-right font-medium">
            Open to full-time roles, freelance projects, and good design conversations. Drop a message — it won't sit unanswered for long.
          </p>
        </div>
      </div>

      {/* TWO-COLUMN LAYOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        
        {/* LEFT COLUMN: FORM */}
        <motion.div
          initial={prefersReduced ? {} : { opacity: 0, y: 30 }}
          whileInView={prefersReduced ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h3 className="font-bricolage text-4xl md:text-5xl font-bold tracking-tight mb-12">
            Say hello!
          </h3>

          {isSuccess ? (
            <div className="flex flex-col items-center justify-center text-center p-12 bg-black text-white h-[300px]">
              <CheckCircle size={48} className="text-caro-orange mb-6" />
              <h3 className="font-bricolage text-2xl mb-2">Message sent.</h3>
              <p className="font-sans text-white/60">I'll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
              <div>
                <input
                  type="text"
                  placeholder="Your name"
                  {...register("name")}
                  className="w-full bg-transparent border-b border-black/20 focus:border-caro-orange focus:outline-none px-0 py-4 text-black text-sm placeholder:text-black/40 transition-colors duration-300"
                />
                {errors.name && <p className="text-red-500 text-xs mt-2">{errors.name.message}</p>}
              </div>
              
              <div>
                <input
                  type="email"
                  placeholder="Your email"
                  {...register("email")}
                  className="w-full bg-transparent border-b border-black/20 focus:border-caro-orange focus:outline-none px-0 py-4 text-black text-sm placeholder:text-black/40 transition-colors duration-300"
                />
                {errors.email && <p className="text-red-500 text-xs mt-2">{errors.email.message}</p>}
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Your phone number"
                  {...register("phone")}
                  className="w-full bg-transparent border-b border-black/20 focus:border-caro-orange focus:outline-none px-0 py-4 text-black text-sm placeholder:text-black/40 transition-colors duration-300"
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileTap={{ scale: 0.99 }}
                className="w-full bg-black text-white font-sans font-bold py-5 px-8 uppercase tracking-widest text-xs hover:bg-caro-orange transition-colors duration-300 mt-6 flex justify-between items-center"
                data-cursor="link"
              >
                <span>Submit</span>
                {isSubmitting ? <Loader2 size={16} className="animate-spin" /> : <ArrowUpRight size={16} />}
              </motion.button>
            </form>
          )}
        </motion.div>

        {/* RIGHT COLUMN: IMAGE & INFO */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
          
          <motion.div 
            className="relative aspect-[3/4] w-full overflow-hidden bg-black"
            initial={prefersReduced ? {} : { opacity: 0, scale: 0.95 }}
            whileInView={prefersReduced ? {} : { opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Image
              src="https://placehold.co/600x800/FC7200/ffffff?text=Contact"
              alt="Contact"
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.div 
            className="flex flex-col justify-center gap-12"
            initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
            whileInView={prefersReduced ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          >
            <div>
              <h4 className="font-sans text-[10px] uppercase tracking-widest font-bold text-black mb-2">Email</h4>
              <a href="mailto:admin@ladestack.in" className="font-sans text-sm text-black/60 hover:text-caro-orange transition-colors" data-cursor="link">
                admin@ladestack.in
              </a>
            </div>

            <div>
              <h4 className="font-sans text-[10px] uppercase tracking-widest font-bold text-black mb-2">Website</h4>
              <a href="https://ladestack.in" target="_blank" rel="noopener noreferrer" className="font-sans text-sm text-black/60 hover:text-caro-orange transition-colors" data-cursor="link">
                ladestack.in
              </a>
            </div>
            
            <div>
              <h4 className="font-sans text-[10px] uppercase tracking-widest font-bold text-black mb-2">Address</h4>
              <p className="font-sans text-sm text-black/60 leading-relaxed">
                6520 Chicago Heights, Cook County,<br />Illinois, United States.
              </p>
            </div>

            <div>
              <h4 className="font-sans text-[10px] uppercase tracking-widest font-bold text-black mb-2">Call Me</h4>
              <a href="tel:8084567890" className="font-sans text-sm text-black/60 hover:text-caro-orange transition-colors" data-cursor="link">
                (808) 456 7890
              </a>
            </div>
          </motion.div>

        </div>
      </div>

    </motion.section>
  );
}
