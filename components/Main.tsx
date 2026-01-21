"use client";

import React from 'react';
import { Mainnavbar } from './Mainnavbar';
import Hero from './Hero';
import Programs from './Program'; // Ensure filename matches (Program.js or Programs.js)
import AboutUs from './Aboutus';  // This should contain your new Premium About Us code
import Footer from './Footer';    // Import the new Footer component

export default function Main() {
  return (
    <div className="relative w-full bg-background">
      
      {/* Fixed Navigation Bar */}
      <Mainnavbar />
      
      {/* 1. Home / Hero Section */}
      <section id="home">
        <Hero />
      </section>

      {/* 2. Programs Section */}
      {/* scroll-mt-32 adds invisible space above the section so the navbar doesn't hide the title */}
      <section id="programs" className="scroll-mt-24 md:scroll-mt-32">
        <Programs />
      </section>

      {/* 3. About Us Section */}
      <section id="about" className="scroll-mt-24 md:scroll-mt-32">
        <AboutUs />
      </section>

      {/* 4. Footer (Acts as Contact Section) */}
      {/* If your Navbar 'Contact' link points to #contact, it will scroll here */}
      <div id="contact" className="scroll-mt-24 md:scroll-mt-32">
        <Footer />
      </div>

    </div>
  );
}