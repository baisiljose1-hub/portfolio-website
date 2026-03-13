import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-[80vh] bg-[#050505] py-24 px-8 md:px-16 flex flex-col items-center justify-center relative overflow-hidden border-t border-white/5"
    >
      {/* Subtle red ambient glow in the bottom right corner */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-brand-red/5 rounded-full blur-[150px] pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-center z-10 w-full flex flex-col items-center"
      >
        <p className="text-brand-red tracking-[0.3em] text-xs md:text-sm uppercase font-bold mb-8">
          Got a project in mind?
        </p>

        {/* The Massive Mailto Link with Hover Effect */}
        <a
          href="mailto:baisiljose1@gmail.com"
          className="group relative inline-flex items-center justify-center text-center"
        >
          <h2 className="text-6xl md:text-[8vw] font-heading font-black text-white leading-none tracking-tight uppercase group-hover:text-brand-red transition-colors duration-500">
            Let's Talk
          </h2>

          {/* This arrow shoots up and to the right when you hover! */}
          <ArrowUpRight className="absolute -right-12 md:-right-20 top-0 text-white group-hover:text-brand-red transition-all duration-500 group-hover:translate-x-4 group-hover:-translate-y-4 w-10 h-10 md:w-16 md:h-16" />
        </a>

        {/* Social Links below the giant text */}
        <div className="mt-24 flex flex-col items-center gap-6">
          <p className="text-gray-500 uppercase tracking-[0.2em] text-[10px] md:text-xs">
            Or find me on
          </p>
          <div className="flex gap-8">
            <a
              href="https://www.linkedin.com/in/baisil-jose/"
              target="_blank"
              rel="noreferrer"
              className="text-white hover:text-brand-red uppercase text-xs md:text-sm font-bold tracking-widest transition-colors duration-300"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/baisiljose1-hub"
              target="_blank"
              rel="noreferrer"
              className="text-white hover:text-brand-red uppercase text-xs md:text-sm font-bold tracking-widest transition-colors duration-300"
            >
              GitHub
            </a>
          </div>
        </div>
      </motion.div>

      {/* The minimal footer copyright at the very bottom */}
      <div className="absolute bottom-8 w-full text-center text-[10px] text-gray-600 font-mono uppercase tracking-widest">
        © {new Date().getFullYear()} Baisil Jose. Crafted with React & Tailwind.
      </div>
    </section>
  );
};

export default Contact;
