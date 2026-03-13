import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="bg-[#0a0a0a] border border-gray-800 hover:border-brand-red p-8 flex flex-col justify-between h-full group relative overflow-hidden transition-colors duration-300"
    >
      {/* Background Hover Glow */}
      <div className="absolute top-0 left-0 w-full h-1 bg-brand-red transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></div>

      <div>
        <h3 className="text-2xl font-heading font-bold text-white mb-4">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.techStack.map((tech, index) => (
            <span
              key={index}
              className="text-xs font-mono text-brand-red bg-brand-red/10 px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Links Container */}
      <div className="flex gap-4 border-t border-gray-800 pt-4 mt-auto">
        <a
          href={project.githubLink}
          className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-sm uppercase tracking-wider"
        >
          <Github size={16} /> Code
        </a>
        <a
          href={project.liveLink}
          className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-sm uppercase tracking-wider ml-auto"
        >
          <ExternalLink size={16} /> Live Demo
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
