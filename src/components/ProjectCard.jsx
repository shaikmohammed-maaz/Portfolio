import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

export default function ProjectCard({ project, isFocused = false }) {
  const { isDark } = useTheme();

  return (
    <motion.div
      className="min-w-[600px] h-[350px] rounded-lg overflow-hidden bg-gray-900 flex"
      style={{
        boxShadow: isFocused 
          ? '0 0 30px rgba(0, 255, 255, 0.6), 0 0 60px rgba(0, 255, 255, 0.3)'
          : '0 0 15px rgba(0, 255, 255, 0.4)'
      }}
      whileHover={{
        boxShadow: '0 0 25px rgba(0, 255, 255, 0.5), 0 0 50px rgba(0, 255, 255, 0.2)'
      }}
    >
      {/* Image Area - 60% */}
      <div className="relative w-[60%] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        {/* Status Banner */}
        <div className="absolute top-3 left-3">
          <span className={`px-3 py-1 text-xs font-bold rounded ${
            project.status === 'Completed' 
              ? 'bg-green-500 text-black' 
              : 'bg-yellow-500 text-black'
          }`}>
            {project.status?.toUpperCase() || 'COMPLETED'}
          </span>
        </div>
      </div>

      {/* Details Panel - 40% */}
      <div className="w-[40%] p-6 flex flex-col justify-between">
        {/* Title */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-3 tracking-wide">
            {project.title.toUpperCase()}
          </h3>
          
          {/* Description */}
          <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
            {project.description}
          </p>

          {/* Tech Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech, idx) => (
              <span
                key={idx}
                className="px-2 py-1 text-xs font-mono bg-gray-800 text-white rounded border border-gray-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          {project.link && (
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-4 py-2 bg-cyan-500 text-white font-bold text-sm rounded text-center hover:bg-cyan-400 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              LIVE DEMO
            </motion.a>
          )}
          {project.github && (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-4 py-2 bg-transparent text-white font-bold text-sm rounded text-center border border-white hover:bg-white hover:text-black transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              CODE
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
}