// components/Footer.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button, Input } from "@heroui/react";
import { Send, Instagram, Twitter, Linkedin, Facebook } from "lucide-react";
import { Logo } from "@/components/icons"; 

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0a0a0a] text-white pt-20 pb-10 overflow-hidden" id="contact">
      
      {/* 1. Background Gradients */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-purple-900/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8"
        >
          {/* --- LEFT COLUMN --- */}
          <div className="lg:col-span-5 space-y-8">
            <motion.div variants={itemVariants} className="flex items-center gap-2">
              <div className="text-white">
                 <Logo size={40} /> 
              </div>
              <span className="text-2xl font-bold tracking-tight">Minervaaa</span>
            </motion.div>

            <motion.p variants={itemVariants} className="text-gray-400 leading-relaxed max-w-sm">
              Empowering the next generation of thinkers, creators, and leaders through holistic and innovative education.
            </motion.p>

            {/* Newsletter */}
            <motion.div variants={itemVariants} className="max-w-sm">
              <h4 className="text-sm font-semibold text-gray-200 mb-3 uppercase tracking-wider">
                Stay Updated
              </h4>
              <div className="flex gap-2">
                <Input 
                  placeholder="Enter your email" 
                  classNames={{
                    inputWrapper: "bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-white",
                    input: "text-white placeholder:text-gray-500",
                  }}
                  radius="full"
                />
                <Button isIconOnly radius="full" className="bg-[#6039DB] text-white shadow-lg shadow-purple-900/20">
                  <Send size={18} />
                </Button>
              </div>
            </motion.div>
          </div>

          {/* --- RIGHT COLUMNS --- */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            <motion.div variants={itemVariants} className="space-y-6">
              <h4 className="text-lg font-semibold text-white">Programs</h4>
              <ul className="space-y-3">
                {["Early Years", "Primary School", "Middle School", "High School", "Summer Camp"].map((link) => (
                  <li key={link}><a href="#" className="text-gray-400 hover:text-[#6039DB] transition-colors text-sm">{link}</a></li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <h4 className="text-lg font-semibold text-white">Admissions</h4>
              <ul className="space-y-3">
                {["Apply Now", "Tuition & Fees", "Financial Aid", "Visit Us", "FAQ"].map((link) => (
                  <li key={link}><a href="#" className="text-gray-400 hover:text-[#6039DB] transition-colors text-sm">{link}</a></li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <h4 className="text-lg font-semibold text-white">Contact</h4>
              <ul className="space-y-3">
                <li className="text-gray-400 text-sm">123 Innovation Dr,<br/> Tech City, ED 45001</li>
                <li><a href="tel:+15551234567" className="text-gray-400 hover:text-white text-sm">+1 (555) 123-4567</a></li>
                <li><a href="mailto:hello@minervaaa.edu" className="text-gray-400 hover:text-white text-sm">hello@minervaaa.edu</a></li>
              </ul>
            </motion.div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="w-full h-px bg-white/10 my-12" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
          <p className="text-gray-500 text-sm">© {currentYear} Minervaaa Education. All rights reserved.</p>
          <div className="flex gap-6">
             {[Instagram, Twitter, Linkedin, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="text-gray-400 hover:text-white transition-colors"><Icon size={20} /></a>
             ))}
          </div>
        </div>

        {/* Big Watermark */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none select-none flex justify-center opacity-[0.03]">
           <h1 className="text-[15vw] font-black text-white leading-[0.8] tracking-tighter">MINERVAAA</h1>
        </div>
      </div>
    </footer>
  );
}