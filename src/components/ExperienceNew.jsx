import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from '../contexts/ThemeContext';

export default function TimelineSection() {
  const { isDark } = useTheme();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const timelineData = [
    {
      type: "education",
      title: "Bachelor of Computer Applications",
      organization: "Madras University",
      period: "2023 – Present",
      description: "Pursuing a degree in Computer Applications with a focus on software development and core concepts.",
    },
    {
      type: "education",
      title: "BSc Data Science",
      organization: "IIT Madras",
      period: "2025 - Present",
      description: "A keen interest in data made me pursue a BSc in Data Science from IIT Madras, where I am learning advanced data analysis and machine learning techniques.",
    },
    {
      type: "experience",
      title: "Swift Developer Intern",
      organization: "Arjava Tech Pvt Ltd",
      period: "2024 Aug – 2024 Sep",
      description: "Worked as a Swift developer intern, where I developed and maintained iOS applications, focusing on user experience and making accessibility easy for older users. The PSPVoice Over App is the product of the internship.",
    },
  ];

  return (
    <motion.section
      id="timeline"
      className={`py-16 px-6 md:px-24 rounded-2xl shadow-xl max-w-5xl mx-auto my-12 pt-24 backdrop-blur-md transition-colors duration-300 ${isDark ? 'bg-gray-900/70 border border-gray-800' : 'bg-white/70 border border-gray-200'}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <h2 className={`title-font text-4xl md:text-6xl mb-12 text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
        EXPERIENCE & EDUCATION
      </h2>

      <div className="relative">
        {/* Glowing Timeline Line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-blue-500 to-cyan-400 opacity-60">
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-cyan-400 via-blue-500 to-cyan-400"
            animate={{
              opacity: [0.6, 1, 0.6],
              boxShadow: [
                '0 0 5px rgba(34, 211, 238, 0.5)',
                '0 0 20px rgba(34, 211, 238, 0.8)',
                '0 0 5px rgba(34, 211, 238, 0.5)'
              ]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        {/* Timeline Entries */}
        <div className="space-y-12">
          {timelineData.map((item, i) => (
            <motion.div
              key={i}
              className="relative pl-20"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ x: 8 }}
              transition={{ duration: 0.3 }}
            >
              {/* Hexagonal Marker */}
              <motion.div
                className="absolute left-6 top-2 w-4 h-4 transform rotate-45 bg-cyan-400 shadow-lg"
                style={{
                  clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'
                }}
                animate={hoveredIndex === i ? {
                  scale: [1, 1.3, 1],
                  boxShadow: [
                    '0 0 10px rgba(34, 211, 238, 0.6)',
                    '0 0 25px rgba(34, 211, 238, 1)',
                    '0 0 10px rgba(34, 211, 238, 0.6)'
                  ]
                } : {}}
                transition={{ duration: 0.5 }}
              />

              {/* Content Card */}
              <motion.div
                className={`p-6 rounded-lg transition-all duration-300 ${isDark ? 'bg-gray-800/50 hover:bg-gray-800/70' : 'bg-gray-100/50 hover:bg-gray-100/70'}`}
                whileHover={{ 
                  boxShadow: isDark 
                    ? '0 10px 30px rgba(34, 211, 238, 0.2)' 
                    : '0 10px 20px rgba(0,0,0,0.1)' 
                }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {item.title}
                  </h3>
                  <span className={`font-mono text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'} mt-1 md:mt-0`}>
                    {item.period}
                  </span>
                </div>
                
                <div className={`font-bold text-sm mb-3 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                  {item.organization}
                </div>
                
                <p className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  {item.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}