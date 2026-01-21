"use client";

import React, { useRef, useState, useEffect } from "react";
import { Button, Chip } from "@heroui/react";
import { motion, useScroll, useSpring } from "framer-motion";
import { 
  ArrowRight, 
  ArrowLeft,
  CheckCircle2, 
  MonitorPlay, 
  Users, 
  Trophy, 
  Cpu, 
  Palette, 
  Music,
  Dumbbell,
  BookOpen,
  Heart,
  Medal,
  Leaf // Added Leaf for environmental/social context if needed, or mapped to existing
} from "lucide-react";

// --- Data ---
const programsData = [
  // --- PROGRAM 1 (Correspondent's Message) ---
  {
    id: 1,
    category: "Correspondent's Message",
    title: "Correspondent's Message",
    description: "At Minervaa Vidhya Mandhir, education is about nurturing confident, compassionate individuals. Our mission is to provide a safe, engaging, and inclusive environment where every child is inspired to discover their potential and pursue excellence.",
    image: "/programs/program1.webp", 
    checklist: [
      "Holistic Development Focus",
      "Safe & Inclusive Environment",
      "Values & Creativity Integration",
      "Building Responsible Citizens"
    ],
    features: [
      { icon: <Users />, title: "Passionate Educators", desc: "Committed staff nurturing growth." },
      { icon: <Heart />, title: "Community Support", desc: "Strong parent-school partnership." },
      { icon: <BookOpen />, title: "Lifelong Learning", desc: "Shaping the leaders of tomorrow." }
    ]
  },
  // --- UPDATED PROGRAM 2 (Community Welfare) ---
  {
    id: 2,
    category: "Social Responsibility",
    title: "Community Welfare Projects",
    description: "We organize a number of community-based welfare projects to nurture social change close to its heart. We believe in instilling empathy and a sense of duty towards society in our students.",
    image: "/programs/program2.webp",
    checklist: [
      "Community Outreach Drives",
      "Social Awareness Campaigns",
      "Eco-friendly Initiatives",
      "Charity & Donation Camps"
    ],
    features: [
      { icon: <Heart />, title: "Social Change", desc: "Nurturing compassion & care." },
      { icon: <Users />, title: "Active Participation", desc: "Students leading real change." },
      { icon: <CheckCircle2 />, title: "Impactful Values", desc: "Serving the community." }
    ]
  },
  // --- PROGRAM 3 (Principal's Message) ---
  {
    id: 3,
    category: "Principal's Desk",
    title: "Principal's Message",
    description: "I have been endowed with the responsibility of heading this premier institution. Education is the powerful tool which converts a man into a complete human. Our focus will always remain on the students as the 'Centre of Gravity'.",
    image: "/programs/program3.webp",
    checklist: [
      "Communication in English",
      "Academic Excellence",
      "Discipline (Bridge between Aim & Achievement)",
      "Sports & Active Participation"
    ],
    features: [
      { icon: <Users />, title: "Holistic Growth", desc: "Creative & rational thinking." },
      { icon: <Trophy />, title: "Our Promise", desc: "Redefining potential together." },
      { icon: <CheckCircle2 />, title: "Jai Hind", desc: "Achieving goals with unity." }
    ]
  },
  // --- PROGRAM 4 (Sports) ---
  {
    id: 4,
    category: "Sports & Fitness",
    title: "Sports Programs",
    description: "We firmly believe that participation in sports is an essential part of the learning process of a child. It instills discipline, resilience, and the spirit of teamwork essential for holistic growth.",
    image: "/programs/program4.webp",
    checklist: [
      "Team sports (Football, Basketball)",
      "Athletics & Stamina building",
      "Yoga & Flexibility training",
      "Sportsmanship & Fair Play"
    ],
    features: [
      { icon: <Dumbbell />, title: "Pro Coaching", desc: "Certified sports coaches." },
      { icon: <Medal />, title: "Competitive Spirit", desc: "District & State level meets." },
      { icon: <Users />, title: "Team Building", desc: "Learning through collaboration." }
    ]
  },
  // ----------------------------------
  {
    id: 5,
    category: "Performing Arts",
    title: "Social Service Campus",
    description: "Our social service camp serves the purpose of experiential learning involving physical and mental abilities",
    image: "/programs/program5.webp",
    checklist: [
      "Classical & Western Vocals",
      "Keyboard & Guitar basics",
      "Theatrical acting & scripts",
      "Contemporary dance forms"
    ],
    features: [
      { icon: <Music />, title: "Soundproof Rooms", desc: "Dedicated practice rooms." },
      { icon: <MonitorPlay />, title: "Recording Sessions", desc: "Studio recording experience." },
      { icon: <Users />, title: "Annual Concert", desc: "Grand stage performance." }
    ]
  }
];

export default function Programs() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);    

  // Scroll Progress Hook
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useSpring(scrollYProgress, { stiffness: 300, damping: 30 });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const length = programsData.length;
      // Adjust step to make the switch feel natural
      const step = 1 / length;
      const newIndex = Math.min(
        Math.max(Math.floor(latest / step), 0),
        length - 1
      );
      setActiveIndex(newIndex);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  // --- Navigation Handlers ---
  const scrollToProgram = (index: number) => {
    if (index < 0 || index >= programsData.length) return;
    
    if (containerRef.current) {
      const sectionHeight = window.innerHeight; 
      const containerTop = containerRef.current.offsetTop;
      
      // We add a little buffer (+ 5px) to ensure the index snaps correctly
      const targetY = containerTop + (index * sectionHeight) + 5;
      
      window.scrollTo({
        top: targetY,
        behavior: "smooth"
      });
    }
  };

  const handleNext = () => scrollToProgram(activeIndex + 1);
  const handlePrev = () => scrollToProgram(activeIndex - 1);

  const currentProgram = programsData[activeIndex];

  return (
    <section 
      ref={containerRef} 
      className="relative bg-[#F9FAFB] mt-10" // Initial margin from previous section
      style={{ height: `${programsData.length * 100}vh` }}
      id="programs"
    >
      {/* STICKY CONTAINER FIX */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-start overflow-hidden pt-20 lg:pt-26 pb-4">
        <div className="container mx-auto px-4 md:px-6 lg:px-12 max-w-7xl h-full flex flex-col relative">
          
          {/* Main Grid Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start lg:items-center w-full h-full">
            
            {/* --- LEFT COLUMN: Description --- */}
            <motion.div 
              key={`left-${activeIndex}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="lg:col-span-4 flex flex-col justify-center space-y-4 lg:space-y-6 order-2 lg:order-1"
            >
              <Chip color="secondary" variant="flat" className="bg-purple-100 text-purple-700 font-bold w-fit">
                {currentProgram.category}
              </Chip>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
                {currentProgram.title}
              </h2>
              
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                 {currentProgram.description}
              </p>

              {/* Checklist */}
              <div className="space-y-2 pt-2 hidden sm:block">
                {currentProgram.checklist.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium text-sm">{item}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4">
                <Button 
                  className="bg-[#6039DB] text-white font-semibold px-6 py-2 rounded-lg shadow-md"
                  endContent={<ArrowRight size={16} />}
                >
                  Read More
                </Button>
                <Button 
                  variant="bordered" 
                  className="border-gray-300 bg-white text-gray-700 font-semibold px-6 py-2 rounded-lg"
                >
                  Contact
                </Button>
              </div>
            </motion.div>


            {/* --- MIDDLE COLUMN: Image --- */}
            <motion.div 
              key={`mid-${activeIndex}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="lg:col-span-4 h-[250px] sm:h-[350px] lg:h-[500px] w-full relative order-1 lg:order-2 rounded-2xl overflow-hidden shadow-xl"
            >
                <img 
                  src={currentProgram.image} 
                  alt={currentProgram.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </motion.div>


            {/* --- RIGHT COLUMN: Features & Nav --- */}
            <motion.div 
              key={`right-${activeIndex}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="lg:col-span-4 flex flex-col gap-4 lg:gap-6 order-3 justify-center h-full lg:h-auto"
            >
              {/* Features List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                {currentProgram.features.map((feature, idx) => (
                  <div key={idx} className="flex gap-3 items-start p-3 rounded-xl bg-white lg:bg-transparent border lg:border-none border-gray-100 shadow-sm lg:shadow-none">
                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center shrink-0 text-purple-600">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-900">{feature.title}</h4>
                      <p className="text-gray-500 text-xs mt-0.5">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Controls */}
              <div className="mt-auto lg:mt-4 pt-4 border-t border-gray-200 flex items-center justify-between bg-white/50 backdrop-blur-sm p-4 rounded-xl">
                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                  Page {activeIndex + 1} / {programsData.length}
                </div>
                
                <div className="flex gap-2">
                  <Button 
                    isIconOnly
                    size="sm" 
                    variant="flat" 
                    className="bg-white border border-gray-200 hover:bg-gray-100 disabled:opacity-50"
                    onClick={handlePrev}
                    disabled={activeIndex === 0}
                  >
                    <ArrowLeft size={18} />
                  </Button>
                  
                  <Button 
                    size="sm" 
                    variant="solid" 
                    className="bg-[#6039DB] text-white hover:bg-[#4c2baf] disabled:opacity-50 font-medium px-4"
                    onClick={handleNext}
                    endContent={activeIndex === programsData.length - 1 ? null : <ArrowRight size={16} />}
                  >
                    {activeIndex === programsData.length - 1 ? "Finish" : "Next"}
                  </Button>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}