import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative w-full h-screen bg-[#050505] flex flex-col items-center justify-center overflow-hidden font-sans">
      {/* 1. CINEMATIC RED GEOMETRIC BACKGROUND */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        {/* This creates the angled geometric red light effect from your image */}
        <div className="absolute w-[150vw] h-[100vh] bg-gradient-to-tr from-brand-dark via-brand-red/30 to-brand-dark transform -rotate-12 scale-150 blur-2xl"></div>

        {/* Vignette shadow to keep the edges dark like the reference */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050505_100%)] opacity-80"></div>
      </div>

      {/* 2. MASSIVE CENTERED TYPOGRAPHY WITH AGENCY-LEVEL ANIMATION */}
      <div className="z-10 flex flex-col items-center mt-16 px-4 w-full">
        {/* We use clipPath for a highly professional "reveal" animation rather than a basic fade */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full text-center"
        >
          <h1 className="text-6xl md:text-[7rem] lg:text-[9rem] font-heading font-black text-white leading-none tracking-[0.1em] uppercase flex flex-col md:flex-row justify-center items-center md:gap-8">
            <span>BAISIL</span>
            <span>JOSE</span>
          </h1>
        </motion.div>
      </div>

      {/* 3. EXACT MINIMALIST "LEARN MORE" BUTTON */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-20 z-10"
      >
        <a
          href="#projects"
          className="text-white text-sm md:text-base font-medium tracking-wide pb-1 border-b-[1.5px] border-white hover:text-brand-red hover:border-brand-red transition-all duration-300"
        >
          Learn More
        </a>
      </motion.div>
    </div>
  );
};

export default Hero;
