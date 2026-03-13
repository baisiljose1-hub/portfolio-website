import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Ghost Player Chess",
      role: "Full-Stack AI Chess Assistant",
      description:
        "An AI-powered chess engine featuring real-time board scanning via webcam and live move recommendations. Built with a FastAPI backend integrating Stockfish 16 and OpenCV for image processing, delivering instant tactical analysis through a custom glassmorphism UI via WebSockets.",
      tech: [
        "Python",
        "FastAPI",
        "OpenCV",
        "WebSockets",
        "Vanilla JS",
        "Stockfish 16",
      ],
      liveLink: "https://ghost-chess.onrender.com",
      githubLink: "https://github.com/baisiljose1-hub/ghost-chess",
      // We will use a sleek dark gradient as a placeholder until you add project screenshots
      bgGradient: "from-gray-900 to-black",
    },
    {
      id: 2,
      title: "Active-AI Fitness",
      role: "Prediction & Recommendation Engine",
      description:
        "A comprehensive fitness tracking platform that leverages predictive algorithms to generate dynamic diet and workout plans. Designed to monitor user progress over time and adjust recommendations based on calculated performance metrics.",
      tech: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
      liveLink: "#",
      githubLink: "#",
      bgGradient: "from-brand-red/10 to-black",
    },
    {
      id: 3,
      title: "Nexus Inventory",
      role: "B2B Management System",
      description:
        "A robust backend inventory management solution engineered for small businesses. Features secure authentication, real-time stock tracking, automated low-stock alerts, and comprehensive data visualization for sales metrics.",
      tech: ["React", "Node.js", "Express", "PostgreSQL", "REST APIs"],
      liveLink: "#",
      githubLink: "#",
      bgGradient: "from-gray-900 to-black",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen bg-[#050505] py-24 px-8 md:px-16 lg:px-24 relative overflow-hidden border-t border-white/5"
    >
      <div className="w-full max-w-7xl mx-auto z-10 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-black text-white tracking-tighter uppercase">
            Featured <span className="text-brand-red">Work</span>
          </h2>
          <div className="w-24 h-1 bg-brand-red mt-6"></div>
        </motion.div>

        {/* Projects Grid */}
        <div className="flex flex-col gap-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className="group relative flex flex-col lg:flex-row w-full border border-white/10 bg-[#0a0a0a] overflow-hidden hover:border-brand-red/50 transition-colors duration-500"
            >
              {/* Left Side: Image / Visual Placeholder */}
              <div
                className={`w-full lg:w-5/12 min-h-[300px] bg-gradient-to-br ${project.bgGradient} relative overflow-hidden flex items-center justify-center border-b lg:border-b-0 lg:border-r border-white/10`}
              >
                {/* This is where a screenshot would go. For now, it's a sleek geometric layout */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 mix-blend-overlay"></div>
                <h3 className="text-4xl font-heading font-black text-white/10 tracking-widest uppercase transform -rotate-12 scale-150 group-hover:scale-110 transition-transform duration-700">
                  {project.title.split(" ")[0]}
                </h3>
              </div>

              {/* Right Side: Project Details */}
              <div className="w-full lg:w-7/12 p-8 md:p-12 flex flex-col justify-center relative">
                <p className="text-brand-red font-mono text-xs md:text-sm uppercase tracking-[0.2em] mb-4">
                  {project.role}
                </p>

                <h3 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6 uppercase tracking-tight">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8">
                  {project.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-10">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs font-mono text-gray-500 bg-white/5 px-3 py-1 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Live & Repo Links */}
                <div className="flex gap-6 mt-auto">
                  {project.liveLink !== "#" && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noreferrer"
                      className="cursor-pointer flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-white hover:text-brand-red transition-colors duration-300"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  )}

                  {project.githubLink !== "#" && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      className="cursor-pointer flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-white hover:text-brand-red transition-colors duration-300"
                    >
                      <Github size={18} />
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
