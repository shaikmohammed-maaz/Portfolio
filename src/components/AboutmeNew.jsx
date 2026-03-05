import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

export default function Aboutme() {
  const { isDark } = useTheme();
  const [hoveredKeyword, setHoveredKeyword] = useState(null);

  const timeline = [
    {
      phase: 'PAST',
      icon: '🧭',
      title: 'Foundation',
      content:
        'My journey began with curiosity for technology and solving real-world problems through code. Working with friends in hackathons opened new perspectives on problem-solving and teamwork.'
    },
    {
      phase: 'PRESENT',
      icon: '⌨️',
      title: 'Focus',
      content:
        "I'm a passionate developer thriving at the intersection of frontend and backend development. Recently joined a data science course, exploring statistics and AI's data-driven world."
    },
    {
      phase: 'FUTURE',
      icon: '🚀',
      title: 'Growth',
      content:
        'Continuously exploring new technologies, data science insights, and emerging tech trends. Outside coding: hiking, photography, and reading about innovation.'
    }
  ];

  const keywords = {
    'data science': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400',
    hackathons: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400',
    statistics: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?w=400'
  };

  return (
    <motion.section
      id="aboutme"
      className="py-16 px-8 md:px-24 max-w-7xl mx-auto my-12 pt-24"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.8 }}
    >
      <h2
        className={`title-font text-3xl md:text-5xl lg:text-6xl mb-12 lg:mb-16 text-center ${isDark ? 'text-white' : 'text-gray-900'
          }`}
      >
        ABOUT ME
      </h2>

      {/* Timeline Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
        {timeline.map((item, i) => (
          <motion.div
            key={i}
            className={`relative p-8 rounded-2xl backdrop-blur-md transition-all ${isDark ? 'bg-gray-900/70 border border-gray-800' : 'bg-white/70 border border-gray-200'
              }`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            whileHover={{
              y: -8,
              boxShadow: isDark
                ? '0 20px 60px rgba(59, 130, 246, 0.3)'
                : '0 20px 40px rgba(0,0,0,0.1)'
            }}
          >
            <div className="text-6xl mb-4">{item.icon}</div>
            <div
              className={`title-font text-xs mb-2 ${isDark ? 'text-blue-400' : 'text-blue-600'
                }`}
            >
              {item.phase}
            </div>
            <h3
              className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'
                }`}
            >
              {item.title}
            </h3>
            <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
              {item.content}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Quote Highlight */}
      <motion.div
        className={`relative p-12 rounded-2xl backdrop-blur-lg text-center mb-16 ${isDark
            ? 'bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-blue-500/30'
            : 'bg-gradient-to-br from-blue-50/80 to-purple-50/80 border border-blue-200'
          }`}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-6xl mb-4 opacity-20">"</div>
        <p className={`title-font text-2xl md:text-4xl ${isDark ? 'text-white' : 'text-gray-900'}`}>
          I THRIVE AT THE INTERSECTION OF CREATIVITY AND LOGIC
        </p>
      </motion.div>

      {/* Interactive Keywords */}
      <div
        className={`p-8 rounded-2xl backdrop-blur-md ${isDark ? 'bg-gray-900/70 border border-gray-800' : 'bg-white/70 border border-gray-200'
          }`}
      >
        <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
          With a background in both frontend and backend development, I build seamless digital
          experiences. My recent interest in{' '}
          <span
            className="relative font-bold text-blue-500 cursor-pointer"
            onMouseEnter={() => setHoveredKeyword('data science')}
            onMouseLeave={() => setHoveredKeyword(null)}
          >
            data science
            {hoveredKeyword === 'data science' && (
              <motion.div
                className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-50 w-[80vw] max-w-[200px] sm:max-w-xs md:max-w-sm"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <img
                  src={keywords['data science']}
                  alt="Data Science"
                  className="w-full h-auto object-cover rounded-lg shadow-2xl border-2 border-blue-500/30"
                />
              </motion.div>
            )}
          </span>{' '}
          led me to explore{' '}
          <span
            className="relative font-bold text-purple-500 cursor-pointer"
            onMouseEnter={() => setHoveredKeyword('statistics')}
            onMouseLeave={() => setHoveredKeyword(null)}
          >
            statistics
            {hoveredKeyword === 'statistics' && (
              <motion.div
                className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-50 w-[80vw] max-w-[200px] sm:max-w-xs md:max-w-sm"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <img
                  src={keywords.statistics}
                  alt="Statistics"
                  className="w-full h-auto object-cover rounded-lg shadow-2xl border-2 border-purple-500/30"
                />
              </motion.div>
            )}
          </span>
          , which changed my view on problem-solving. I believe teamwork fuels creativity—my
          experience in{' '}
          <span
            className="relative font-bold text-pink-500 cursor-pointer"
            onMouseEnter={() => setHoveredKeyword('hackathons')}
            onMouseLeave={() => setHoveredKeyword(null)}
          >
            hackathons
            {hoveredKeyword === 'hackathons' && (
              <motion.div
                className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-50 w-[80vw] max-w-[200px] sm:max-w-xs md:max-w-sm"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <img
                  src={keywords.hackathons}
                  alt="Hackathons"
                  className="w-full h-auto object-cover rounded-lg shadow-2xl border-2 border-pink-500/30"
                />
              </motion.div>
            )}
          </span>{' '}
          taught me that. A balanced life fuels innovation.
        </p>
      </div>
    </motion.section>
  );
}
