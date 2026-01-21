"use client";

import React from "react";
import { Button, Chip } from "@heroui/react";
import { motion } from "framer-motion";
import { ArrowRight, Palette, ShieldCheck, BookOpen } from "lucide-react";

// --- Mock Data ---
const schoolHighlights = [
  {
    id: 1,
    title: "Joyful Discovery",
    subtitle: "Standard 1 - Art & Crafts",
    emoji: "🎨",
    img: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=1886&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Early Readers",
    subtitle: "Standard 2 - Library Time",
    emoji: "📚",
    img: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1887&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Hands-on STEM",
    subtitle: "Standard 4 - Science Block",
    emoji: "🧩",
    img: "https://images.unsplash.com/photo-1567722066596-b4504135c422?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Active Play",
    subtitle: "Standard 5 - Outdoors",
    emoji: "⚽",
    img: "https://images.unsplash.com/photo-1472162072942-cd5147eb3902?q=80&w=1769&auto=format&fit=crop",
  },
];

// Duplicate data to ensure smooth looping
const carouselData = [...schoolHighlights, ...schoolHighlights, ...schoolHighlights];

export default function HeroPrimarySchool() {
  return (
    <section className="relative w-full min-h-screen bg-white text-gray-900 overflow-hidden flex flex-col justify-center pt-24 pb-12">
      
      {/* Container */}
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl grid lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* ----- LEFT COLUMN: Content ----- */}
        <div className="flex flex-col items-start space-y-7">
          
          {/* Badge */}
          <Chip
            className="bg-gray-50 border-[0.5px] border-gray-200 pl-1 pr-3 py-4 shadow-sm"
            startContent={
              <span className="bg-[#7F56D9] text-white text-[11px] font-semibold px-2.5 py-1 rounded-full mr-2 uppercase tracking-wider">
                Open
              </span>
            }
          >
            <span className="text-gray-600 text-sm font-medium">Admissions open for 2024-25 (Std 1-5)</span>
          </Chip>

          {/* Heading */}
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight leading-[1.1] text-gray-900">
            Where Every <br />
            Child Blossoms <br />
            & Thrives
          </h1>

          {/* Paragraph */}
          <p className="text-base sm:text-lg text-gray-600 max-w-lg leading-relaxed">
            Nurturing young minds (Standard 1-5) in a safe, creative, and academically enriching environment. We focus on holistic growth through play-based discovery and structured learning.
          </p>

          {/* Buttons - REMOVED Syllabus Button */}
          <div className="flex flex-wrap gap-4 pt-3">
            <Button
              size="lg"
              className="bg-[#7F56D9] text-white font-semibold text-md px-8 rounded-lg hover:bg-[#6941C6] transition-colors shadow-md shadow-purple-500/20"
              endContent={<ArrowRight className="w-5 h-5 ml-1" />}
            >
              Schedule a Visit
            </Button>
          </div>

          {/* Features */}
          <div className="flex flex-wrap items-center gap-8 pt-5 text-xs sm:text-sm font-semibold tracking-wider text-gray-500">
            <div className="flex items-center gap-2">
              <Palette className="w-5 h-5 text-[#7F56D9]" />
              <span>CREATIVE LEARNING</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#7F56D9]" />
              <span>SAFE CAMPUS</span>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-[#7F56D9]" />
              <span>HOLISTIC GROWTH</span>
            </div>
          </div>
        </div>

        {/* ----- RIGHT COLUMN: Slider ----- */}
        {/* REMOVED: border, border-gray-200, bg-gray-50 to remove the outline box */}
        <div className="relative w-full h-[550px] overflow-hidden rounded-2xl">
          
          {/* Side Fades - Changed from gray-50 to white to blend with page background */}
          <div className="absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none"></div>
          <div className="absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none"></div>

          {/* Infinite Scroll Track */}
          <motion.div
            className="flex gap-5 h-full absolute left-0 pl-5"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              x: { repeat: Infinity, repeatType: "loop", duration: 35, ease: "linear" },
            }}
            style={{ width: "max-content" }}
          >
            {carouselData.map((item, index) => (
              <CarouselCard key={index} item={item} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// --- Card Component ---
function CarouselCard({ item }: { item: typeof schoolHighlights[0] }) {
  return (
    <div className="relative w-[280px] h-full rounded-xl overflow-hidden flex-shrink-0 group border border-gray-200 bg-gray-200 shadow-sm">
      <img
        src={item.img}
        alt={item.title}
        className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 transition-all duration-500"
      />
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80"></div>

      <div className="absolute bottom-0 left-0 p-5 w-full">
        <div className="flex items-center gap-2 mb-1">
          <h3 className="text-lg font-bold text-white">{item.title}</h3>
          <span className="text-xl">{item.emoji}</span>
        </div>
        <p className="text-gray-200 text-xs uppercase tracking-wide font-medium">{item.subtitle}</p>
      </div>
    </div>
  );
}