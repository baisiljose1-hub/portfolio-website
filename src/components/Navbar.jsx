import React, { useState } from "react";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    // Restored the bg-[#1a0505]/90 deep red tint!
    <nav className="w-full flex items-center justify-between px-6 md:px-12 py-5 text-[11px] md:text-xs font-bold tracking-[0.2em] uppercase fixed top-0 z-50 border-b border-brand-red/20 bg-[#1a0505]/90 backdrop-blur-md">
      {/* Left Side: Desktop Links */}
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
      <div className="text-xl sm:text-2xl md:text-3xl text-brand-red font-heading cursor-pointer hover:text-white transition-colors duration-300 tracking-wide whitespace-nowrap md:absolute md:left-1/2 md:transform md:-translate-x-1/2 z-50">
        BAISIL JOSE
      </div>

      {/* Right Side: Desktop Socials OR Mobile Hamburger Toggle */}
      <div className="flex justify-end md:w-1/3">
        {/* Desktop Socials */}
        <div className="hidden md:flex gap-4 text-brand-red">
          <a
            href="https://github.com/baisiljose1-hub"
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 rounded-full border border-brand-red flex items-center justify-center hover:bg-brand-red hover:text-white transition-all duration-300"
          >
            <Github size={16} />
          </a>
          <a
            href="https://linkedin.com/in/YOUR_USERNAME_HERE"
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 rounded-full border border-brand-red flex items-center justify-center hover:bg-brand-red hover:text-white transition-all duration-300"
          >
            <Linkedin size={16} />
          </a>
          <a
            href="mailto:your.actual.email@gmail.com"
            className="w-10 h-10 rounded-full border border-brand-red flex items-center justify-center hover:bg-brand-red hover:text-white transition-all duration-300"
          >
            <Mail size={16} />
          </a>
        </div>

        {/* Mobile Hamburger / X Toggle Button */}
        <button
          className="md:hidden text-brand-red p-1 cursor-pointer z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* THE GLASS DROPDOWN MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            // Also updated the dropdown background to match the deep red tint
            className="absolute top-full left-0 w-full bg-[#1a0505]/95 backdrop-blur-xl border-b border-brand-red/20 flex flex-col items-center py-8 shadow-2xl md:hidden"
          >
            {/* Navigation Links */}
            <div className="flex flex-col gap-8 text-center text-lg font-heading tracking-widest uppercase">
              <a
                href="#home"
                onClick={handleLinkClick}
                className="text-white hover:text-brand-red transition-colors duration-300"
              >
                Home
              </a>
              <a
                href="#about"
                onClick={handleLinkClick}
                className="text-white hover:text-brand-red transition-colors duration-300"
              >
                About
              </a>
              <a
                href="#projects"
                onClick={handleLinkClick}
                className="text-white hover:text-brand-red transition-colors duration-300"
              >
                Projects
              </a>
              <a
                href="#contact"
                onClick={handleLinkClick}
                className="text-white hover:text-brand-red transition-colors duration-300"
              >
                Contact
              </a>
            </div>

            {/* Mobile Social Links */}
            <div className="flex gap-6 mt-10 text-brand-red">
              <a
                href="https://github.com/baisiljose1-hub"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full border border-brand-red flex items-center justify-center hover:bg-brand-red hover:text-white transition-all duration-300"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/YOUR_USERNAME_HERE"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full border border-brand-red flex items-center justify-center hover:bg-brand-red hover:text-white transition-all duration-300"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
