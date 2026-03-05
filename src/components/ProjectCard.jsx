import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

export default function ProjectCard({ project, isFocused = false }) {
  const { isDark } = useTheme();

  return (
    <motion.div
      className="w-full h-full rounded-lg overflow-hidden flex flex-col"
      initial={{ backgroundColor: isDark ? '#111827' : '#ffffff' }}
      animate={{
        backgroundColor: isDark ? '#111827' : 'rgba(255, 255, 255, 0.7)',
        boxShadow: isFocused
          ? isDark
            ? '0 0 30px rgba(0, 255, 255, 0.6), 0 0 60px rgba(0, 255, 255, 0.3)'
            : '0 0 30px rgba(0, 200, 255, 0.4), 0 0 60px rgba(0, 200, 255, 0.2)'
          : isDark
            ? '0 0 15px rgba(0, 255, 255, 0.2)'
            : '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
      }}
      whileHover={{
        boxShadow: isDark
          ? '0 0 25px rgba(0, 255, 255, 0.5), 0 0 50px rgba(0, 255, 255, 0.2)'
          : '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
      }}
    >
      {/* Image Area */}
      <div className="relative w-full h-48 sm:h-64 overflow-hidden shrink-0 border-b border-gray-800/50">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
        />
        {/* Status Banner */}
        <div className="absolute top-3 left-3 z-10">
          <span className={`px-3 py-1 text-xs font-bold rounded shadow-lg backdrop-blur-sm ${project.status === 'Completed'
            ? 'bg-green-500/90 text-black'
            : 'bg-yellow-500/90 text-black'
            }`}>
            {project.status?.toUpperCase() || 'COMPLETED'}
          </span>
        </div>
      </div>

      {/* Details Panel */}
      <div className={`w-full flex flex-col flex-grow p-6 sm:p-8 z-20 ${isDark ? 'bg-gray-900' : 'bg-transparent'}`}>
        <div className="flex-grow">
          {/* Title */}
          <h3 className={`text-xl sm:text-2xl font-bold mb-3 tracking-wide ${isDark ? 'text-white' : 'text-gray-900'}`}>
            {project.title.toUpperCase()}
          </h3>

          {/* Description */}
          <p className={`text-sm sm:text-base leading-relaxed mb-6 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            {project.description}
          </p>

          {/* Tech Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tech.map((tech, idx) => (
              <span
                key={idx}
                className={`px-3 py-1 text-xs sm:text-sm font-mono rounded border ${isDark
                  ? 'bg-gray-800 text-cyan-200 border-gray-700'
                  : 'bg-white text-blue-600 border-blue-200 shadow-sm'
                  }`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Buttons - pushed to bottom */}
        <div className="flex flex-wrap sm:flex-nowrap gap-4 mt-auto pt-6 border-t border-gray-800/50">
          {project.link && (
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex-1 px-4 py-3 font-bold text-sm sm:text-base rounded text-center transition-colors min-w-[120px] ${isDark
                ? 'bg-cyan-500 text-white hover:bg-cyan-400'
                : 'bg-blue-600 text-white hover:bg-blue-700 shadow-md'
                }`}
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
              className={`flex-1 px-4 py-3 font-bold text-sm sm:text-base rounded text-center border transition-all min-w-[120px] ${isDark
                ? 'bg-transparent text-white border-white hover:bg-white hover:text-black'
                : 'bg-white text-gray-900 border-gray-300 hover:bg-gray-50 hover:border-gray-400 shadow-sm'
                }`}
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