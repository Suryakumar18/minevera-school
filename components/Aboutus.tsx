"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@heroui/react";
import { ArrowRight, Sparkles, CheckCircle2, Users, Star } from "lucide-react";

// --- Configuration & Animation Constants ---

const TRANSITION_EASE = [0.25, 0.1, 0.25, 1]; // "Soft cubic-bezier" for premium feel

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: TRANSITION_EASE },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9, x: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: { duration: 1, ease: TRANSITION_EASE },
  },
};

// --- Sub-Components ---

// Text Reveal Wrapper
const RevealText = ({ text, className, delay = 0 }: { text: string; className: string; delay?: number }) => (
  <div className={`overflow-hidden ${className}`}>
    <motion.div
      initial={{ y: "100%" }}
      whileInView={{ y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, ease: TRANSITION_EASE, delay }}
    >
      {text}
    </motion.div>
  </div>
);

// Feature List Item
const FeatureItem = ({ text }: { text: string }) => (
  <motion.div variants={itemVariants} className="flex items-center gap-3">
    <div className="p-1.5 rounded-full bg-purple-100 text-purple-600">
      <CheckCircle2 size={16} strokeWidth={2.5} />
    </div>
    <span className="text-gray-700 font-medium text-sm md:text-base">{text}</span>
  </motion.div>
);

export default function AboutUsPremium() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center bg-white overflow-hidden py-20 lg:py-0" id="about">
      
      {/* --- 1. Background Layer --- */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        {/* Subtle Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage: "linear-gradient(#E9E9E9 1px, transparent 1px), linear-gradient(90deg, #E9E9E9 1px, transparent 1px)",
            backgroundSize: "40px 40px"
          }}
        ></div>

        {/* Animated Gradient Orbs */}
        <motion.div 
          animate={{ scale: [1, 1.1, 1], rotate: [0, 10, -10, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-purple-100 rounded-full blur-[100px] opacity-50"
        />
        <motion.div 
          animate={{ scale: [1, 1.2, 1], x: [0, 50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-50 rounded-full blur-[120px] opacity-60"
        />
      </div>

      {/* --- 2. Main Content Container --- */}
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* ====== LEFT COLUMN: Content ====== */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col space-y-8"
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="flex items-center gap-2">
              <span className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white border border-purple-100 shadow-sm text-purple-700 text-[11px] font-bold uppercase tracking-wider">
                <Sparkles size={12} className="text-[#6039DB]" />
                Who We Are
              </span>
            </motion.div>

            {/* Heading */}
            <div className="space-y-1">
               <RevealText text="Building Strong" className="text-4xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-[1.1]" />
               <RevealText text="Foundations." className="text-4xl lg:text-6xl font-extrabold text-[#6039DB] tracking-tight leading-[1.1]" delay={0.1} />
            </div>

            {/* Main Description */}
            <motion.p variants={itemVariants} className="text-gray-600 text-lg leading-relaxed max-w-lg">
              We provide a seamless learning journey tailored for every stage of early development. From playful exploration to structured academic excellence, we focus on holistic growth.
            </motion.p>

            {/* Features List (New Content) */}
            <div className="space-y-3 pt-2">
              <FeatureItem text="Personalized Learning Paths" />
              <FeatureItem text="Certified & Passionate Educators" />
              <FeatureItem text="Safe & Inspiring Environments" />
            </div>

            {/* Stats Row */}
            <motion.div variants={itemVariants} className="py-4 border-t border-gray-100 mt-4">
              <div className="flex items-center gap-10">
                <div>
                  <h4 className="text-3xl font-extrabold text-gray-900">12+</h4>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-wide mt-1">Years Exp.</p>
                </div>
                <div className="w-px h-10 bg-gray-200"></div>
                <div>
                  <h4 className="text-3xl font-extrabold text-gray-900">25+</h4>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-wide mt-1">Expert Faculty</p>
                </div>
                <div className="w-px h-10 bg-gray-200"></div>
                <div>
                  <h4 className="text-3xl font-extrabold text-gray-900">500+</h4>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-wide mt-1">Happy Students</p>
                </div>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div variants={itemVariants}>
              <Button 
                className="bg-[#6039DB] text-white font-semibold text-base px-8 py-6 shadow-xl shadow-purple-900/20 hover:shadow-purple-900/40 transition-shadow"
                radius="full"
                endContent={<ArrowRight size={18} />}
              >
                Start Your Journey
              </Button>
            </motion.div>
          </motion.div>

          {/* ====== RIGHT COLUMN: Visuals ====== */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative lg:h-[600px] flex items-center justify-center"
          >
            {/* Main Image Container */}
            <motion.div 
              variants={imageVariants}
              className="relative w-full h-[400px] lg:h-[550px] rounded-[2rem] overflow-hidden shadow-2xl group"
            >
               <img 
                 src="/aboutus/image11.webp" 
                 alt="Students learning" 
                 className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </motion.div>

            {/* Floating Card: Community (New Content) */}
            <motion.div 
              initial={{ opacity: 0, y: 40, x: -40 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8, ease: TRANSITION_EASE }}
              className="absolute -bottom-8 -left-4 lg:bottom-10 lg:-left-12 bg-white p-5 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 flex items-center gap-4 max-w-[260px] z-20"
            >
              <div className="bg-orange-100 p-3 rounded-full text-orange-600">
                <Users size={24} />
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <Star size={14} className="fill-yellow-400 text-yellow-400" />
                  <span className="font-bold text-gray-900 text-sm">4.9/5</span>
                </div>
                <p className="text-xs text-gray-500 font-medium leading-tight mt-1">
                  Rated by 500+ happy parents and students.
                </p>
              </div>
            </motion.div>

            {/* Decorative Dots Pattern */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute -top-8 -right-8 -z-10 text-purple-200"
            >
               <svg width="120" height="120" fill="currentColor" viewBox="0 0 100 100">
                 <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                   <circle cx="2" cy="2" r="2" />
                 </pattern>
                 <rect width="100" height="100" fill="url(#dots)" />
               </svg>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}