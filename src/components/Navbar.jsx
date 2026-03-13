import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Navbar = () => {
  return (
    // Changed the background to a deep red tint instead of pure black
    <nav className="w-full flex items-center justify-between px-8 md:px-12 py-6 text-[11px] md:text-xs font-bold tracking-[0.2em] uppercase absolute top-0 z-50 border-b border-brand-red/20 bg-[#1a0505]/90 backdrop-blur-md">
      {/* Left Side: Navigation Links (Given a width to help balance the flexbox) */}
      <div className="hidden md:flex gap-12 text-gray-500 w-1/3">
        <a
          href="#home"
          className="text-brand-red hover:text-brand-red transition-colors duration-300"
        >
          Home
        </a>
        <a
          href="#about"
          className="hover:text-white transition-colors duration-300"
        >
          About
        </a>
        <a
          href="#projects"
          className="hover:text-white transition-colors duration-300"
        >
          Projects
        </a>
        <a
          href="#contact"
          className="hover:text-white transition-colors duration-300"
        >
          Contact
        </a>
      </div>

      {/* Center: Full Name */}
      {/* Using absolute positioning (left-1/2 and -translate-x-1/2) guarantees it is EXACTLY in the center */}
      {/* tracking-wide reduces the massive gap between letters you had before */}
      <div className="absolute left-1/2 transform -translate-x-1/2 text-2xl md:text-3xl text-brand-red font-heading cursor-pointer hover:text-white transition-colors duration-300 tracking-wide whitespace-nowrap">
        BAISIL JOSE
      </div>

      {/* Right Side: Circular Social Icons */}
      <div className="flex gap-4 text-brand-red w-1/3 justify-end">
        <a
          href="https://github.com/baisiljose1-hub"
          target="_blank"
          rel="noreferrer"
          className="w-10 h-10 rounded-full border border-brand-red flex items-center justify-center hover:bg-brand-red hover:text-white transition-all duration-300"
        >
          <Github size={16} />
        </a>
        <a
          href="https://www.linkedin.com/in/baisil-jose/"
          target="_blank"
          rel="noreferrer"
          className="w-10 h-10 rounded-full border border-brand-red flex items-center justify-center hover:bg-brand-red hover:text-white transition-all duration-300"
        >
          <Linkedin size={16} />
        </a>
        <a
          href="mailto:baisiljose1@gmail.com"
          className="w-10 h-10 rounded-full border border-brand-red flex items-center justify-center hover:bg-brand-red hover:text-white transition-all duration-300"
        >
          <Mail size={16} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
