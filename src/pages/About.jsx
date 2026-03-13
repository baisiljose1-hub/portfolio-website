import React from "react";
import { motion } from "framer-motion";
import {
  Database,
  ServerCog,
  Atom,
  Server,
  FileCode2,
  Wind,
  TerminalSquare,
  FlaskConical,
  Binary,
  Cpu,
  FileDown, // <-- We imported the FileDown icon for the resume button!
} from "lucide-react";

const About = () => {
  const skillVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.1, duration: 0.5, ease: "easeOut" },
    }),
  };

  const skills = [
    { name: "MongoDB", icon: <Database size={18} /> },
    { name: "Express.js", icon: <ServerCog size={18} /> },
    { name: "React", icon: <Atom size={18} /> },
    { name: "Node.js", icon: <Server size={18} /> },
    { name: "JavaScript", icon: <FileCode2 size={18} /> },
    { name: "Tailwind CSS", icon: <Wind size={18} /> },
    { name: "Python", icon: <TerminalSquare size={18} /> },
    { name: "Flask", icon: <FlaskConical size={18} /> },
    { name: "C", icon: <Binary size={18} /> },
    { name: "C++", icon: <Cpu size={18} /> },
  ];

  return (
    <section
      id="about"
      className="min-h-screen bg-[#050505] py-24 px-8 md:px-16 lg:px-24 flex items-center relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-brand-red/5 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none"></div>

      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 z-10">
        {/* Left Column: The Bio */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col justify-center"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white tracking-tighter mb-8 uppercase">
            Beyond The <span className="text-brand-red">Code</span>
          </h2>

          <div className="space-y-6 text-gray-400 text-sm md:text-base leading-relaxed font-sans">
            <p>
              I am a Full Stack Developer and a final-semester Computer Science
              Engineering (CSE) student with a deep passion for building
              scalable, interactive web applications. I am actively seeking
              opportunities in the IT sector where I can engineer high-impact
              solutions.
            </p>
            <p>
              My expertise lies in crafting pixel-perfect, highly responsive
              user interfaces using modern frontend technologies, and seamlessly
              integrating them with robust backend architectures using the MERN
              stack and Python/Flask.
            </p>
            <p>
              Whether I am designing a complex AI chess solver, building core
              logic in C/C++, or optimizing an inventory management system, my
              focus is always on writing clean, maintainable code. And when I
              step away from the keyboard, you can usually find me on the
              badminton court.
            </p>
          </div>

          {/* THE NEW RESUME BUTTON */}
          <div className="mt-10">
            <a
              href="/Baisil_Jose_Software_Developer_Resume.pdf"
              download="Baisil_Jose_Software_Developer_Resume.pdf"
              className="group inline-flex items-center gap-3 px-8 py-4 border border-brand-red text-brand-red font-bold uppercase tracking-[0.2em] text-xs md:text-sm hover:bg-brand-red hover:text-white transition-all duration-300 cursor-pointer"
            >
              <span>Download Resume</span>
              <FileDown size={18} className="group-hover:animate-bounce" />
            </a>
          </div>
        </motion.div>

        {/* Right Column: Skills & Stats */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col justify-center"
        >
          <h3 className="text-xl font-heading font-bold text-white tracking-widest uppercase mb-8 border-b border-gray-800 pb-4">
            Technical Arsenal
          </h3>

          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <motion.span
                key={skill.name}
                custom={index}
                variants={skillVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex items-center gap-2 px-5 py-3 border border-gray-800 text-gray-300 text-xs md:text-sm font-mono tracking-wider hover:border-brand-red hover:text-brand-red transition-all duration-300 cursor-pointer bg-[#0a0a0a] group"
              >
                <span className="text-brand-red/70 group-hover:text-brand-red group-hover:scale-110 transition-all duration-300">
                  {skill.icon}
                </span>
                {skill.name}
              </motion.span>
            ))}
          </div>

          <div className="mt-12 p-6 border border-gray-800 bg-[#0a0a0a] relative group hover:border-brand-red transition-colors duration-300 cursor-pointer">
            <div className="absolute top-0 left-0 w-1 h-full bg-brand-red scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>
            <h4 className="text-white font-bold tracking-wider uppercase text-sm mb-2">
              B.E. Computer Science Engineering
            </h4>
            <p className="text-gray-500 text-xs font-mono uppercase">
              Expected Graduation: 2026
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
