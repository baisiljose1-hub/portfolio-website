import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, LayoutGrid, X } from "lucide-react";

const Projects = () => {
  // State to control the popup gallery
  const [showGallery, setShowGallery] = useState(false);

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
    {
      // THE NEW FRONTEND GALLERY CARD
      id: 4,
      title: "Frontend Architecture",
      role: "React & Next.js Playground",
      description:
        "A curated archive of my specialized frontend engineering work. This collection contains interactive components, modern landing pages, and micro-applications built to experiment with advanced UI/UX patterns and responsive design.",
      tech: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
      isGallery: true, // This special flag tells the code to render the "Open Gallery" button
      bgGradient: "from-gray-800 to-black",
    },
  ];

  // The mini-projects that will show up inside the popup gallery
  const frontendArchive = [
    {
      title: "Modern E-Commerce UI",
      tech: "Next.js, Tailwind, Stripe",
      link: "#",
      repo: "#",
    },
    {
      title: "Crypto Dashboard",
      tech: "React, Chart.js, REST APIs",
      link: "#",
      repo: "#",
    },
    {
      title: "Animated Agency Landing Page",
      tech: "React, Framer Motion",
      link: "#",
      repo: "#",
    },
    {
      title: "Glassmorphism Weather App",
      tech: "Vanilla JS, CSS3, OpenWeather API",
      link: "#",
      repo: "#",
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
              <div
                className={`w-full lg:w-5/12 min-h-[300px] bg-gradient-to-br ${project.bgGradient} relative overflow-hidden flex items-center justify-center border-b lg:border-b-0 lg:border-r border-white/10`}
              >
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 mix-blend-overlay"></div>
                <h3 className="text-4xl font-heading font-black text-white/10 tracking-widest uppercase transform -rotate-12 scale-150 group-hover:scale-110 transition-transform duration-700 text-center px-4">
                  {project.title.split(" ")[0]}
                </h3>
              </div>

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

                <div className="flex flex-wrap gap-2 mb-10">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs font-mono text-gray-500 bg-white/5 px-3 py-1 border border-white/10 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-6 mt-auto">
                  {/* If it's the gallery project, show the "Open Gallery" button */}
                  {project.isGallery ? (
                    <button
                      onClick={() => setShowGallery(true)}
                      className="cursor-pointer flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-white hover:text-brand-red transition-colors duration-300"
                    >
                      <LayoutGrid size={18} />
                      View Full Archive
                    </button>
                  ) : (
                    /* Otherwise, show the normal Live/GitHub links */
                    <>
                      {project.liveLink !== "#" && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noreferrer"
                          className="cursor-pointer flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-white hover:text-brand-red transition-colors duration-300"
                        >
                          <ExternalLink size={18} /> Live Demo
                        </a>
                      )}
                      {project.githubLink !== "#" && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noreferrer"
                          className="cursor-pointer flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-white hover:text-brand-red transition-colors duration-300"
                        >
                          <Github size={18} /> Source Code
                        </a>
                      )}
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* THE FRONTEND ARCHIVE MODAL */}
      <AnimatePresence>
        {showGallery && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050505]/95 backdrop-blur-xl p-4 md:p-12"
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ delay: 0.1 }}
              className="w-full max-w-4xl max-h-[80vh] overflow-y-auto bg-[#0a0a0a] border border-brand-red/20 relative p-8 md:p-12 shadow-2xl"
            >
              <button
                onClick={() => setShowGallery(false)}
                className="absolute top-6 right-6 text-gray-500 hover:text-brand-red transition-colors cursor-pointer"
              >
                <X size={28} />
              </button>

              <h2 className="text-2xl md:text-3xl font-heading font-black text-white uppercase tracking-widest mb-2">
                Frontend Archive
              </h2>
              <p className="text-gray-500 font-mono text-xs md:text-sm mb-12 uppercase tracking-wider border-b border-gray-800 pb-6">
                A collection of specialized UI builds.
              </p>

              <div className="flex flex-col gap-6">
                {frontendArchive.map((item, idx) => (
                  <div
                    key={idx}
                    className="group flex flex-col md:flex-row justify-between md:items-center p-6 border border-white/5 hover:border-brand-red/30 bg-[#050505] transition-colors duration-300"
                  >
                    <div>
                      <h4 className="text-white font-bold text-lg mb-2 group-hover:text-brand-red transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-gray-500 font-mono text-xs">
                        {item.tech}
                      </p>
                    </div>
                    <div className="flex gap-4 mt-4 md:mt-0">
                      <a
                        href={item.link}
                        className="text-xs uppercase tracking-widest font-bold text-gray-400 hover:text-white flex items-center gap-1 cursor-pointer"
                      >
                        <ExternalLink size={14} /> Live
                      </a>
                      <a
                        href={item.repo}
                        className="text-xs uppercase tracking-widest font-bold text-gray-400 hover:text-white flex items-center gap-1 cursor-pointer"
                      >
                        <Github size={14} /> Code
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
