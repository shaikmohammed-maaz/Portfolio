import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from '../contexts/ThemeContext';
import { FaReact, FaJava, FaPython, FaDatabase, FaHtml5, FaCss3Alt, FaJsSquare, FaGitAlt, FaAws, FaSwift, FaDocker, FaGoogle } from "react-icons/fa";

export default function SkillsSection() {
  const { isDark } = useTheme();
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skillCategories = {
    Frontend: [
      { name: "HTML5", icon: FaHtml5, xp: 100, color: "text-orange-500", class: "Frontend", ability: "Structure & Semantics" },
      { name: "CSS3", icon: FaCss3Alt, xp: 80, color: "text-blue-400", class: "Frontend", ability: "Styling & Animation" },
      { name: "JavaScript", icon: FaJsSquare, xp: 70, color: "text-yellow-400", class: "Frontend", ability: "Dynamic Interactions" },
      { name: "React", icon: FaReact, xp: 80, color: "text-blue-500", class: "Frontend", ability: "Component Rendering" }
    ],
    Backend: [
      { name: "Python", icon: FaPython, xp: 90, color: "text-yellow-500", class: "Backend", ability: "Data Processing" },
      { name: "Java", icon: FaJava, xp: 30, color: "text-red-500", class: "Backend", ability: "Enterprise Solutions" },
      { name: "Swift", icon: FaSwift, xp: 70, color: "text-orange-400", class: "Backend", ability: "iOS Development" }
    ],
    Database: [
      { name: "SQL/NoSQL", icon: FaDatabase, xp: 70, color: "text-green-500", class: "Database", ability: "Data Management" },
      { name: "DynamoDB", icon: FaAws, xp: 75, color: "text-orange-500", class: "Database", ability: "Cloud Storage" }
    ],
    Tools: [
      { name: "Git", icon: FaGitAlt, xp: 60, color: "text-red-600", class: "Tools", ability: "Version Control" },
      { name: "Docker", icon: FaDocker, xp: 20, color: "text-blue-600", class: "Tools", ability: "Containerization" },
      { name: "ADK", icon: FaGoogle, xp: 10, color: "text-purple-500", class: "Tools", ability: "Agent Development" }
    ]
  };

  const getXPColor = (xp) => {
    if (xp >= 80) return isDark ? 'bg-green-500' : 'bg-green-600';
    if (xp >= 60) return isDark ? 'bg-yellow-500' : 'bg-yellow-600';
    if (xp >= 40) return isDark ? 'bg-orange-500' : 'bg-orange-600';
    return isDark ? 'bg-red-500' : 'bg-red-600';
  };

  return (
    <motion.section
      id="skills"
      className={`py-16 px-6 md:px-24 rounded-2xl shadow-xl max-w-6xl mx-auto my-12 pt-24 backdrop-blur-md transition-colors duration-300 ${isDark ? 'bg-gray-900/70 border border-gray-800' : 'bg-white/70 border border-gray-200'}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <h2 className={`title-font text-3xl md:text-5xl lg:text-6xl mb-12 text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
        SKILLS & TECHNOLOGIES
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {Object.entries(skillCategories).map(([category, skills]) => (
          <motion.div
            key={category}
            className={`p-6 rounded-xl ${isDark ? 'bg-gray-800/50' : 'bg-gray-100/50'} backdrop-blur-sm relative z-10`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className={`title-font text-lg mb-6 text-center tracking-widest ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
              {category.toUpperCase()}
            </h3>

            <div className="space-y-6">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="relative group cursor-pointer"
                  onMouseEnter={() => setHoveredSkill(skill)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <motion.div
                    className="flex items-center gap-4 mb-2"
                    whileHover={{ x: 4 }}
                  >
                    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                      <skill.icon className={`text-2xl md:text-3xl ${skill.color}`} />
                    </div>
                    <span className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {skill.name}
                    </span>
                    <span className={`ml-auto text-sm font-mono ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      {skill.xp}%
                    </span>
                  </motion.div>

                  {/* XP Bar */}
                  <div className={`w-full h-2 md:h-2.5 rounded-full ${isDark ? 'bg-gray-700' : 'bg-gray-300'} overflow-hidden`}>
                    <motion.div
                      className={`h-full ${getXPColor(skill.xp)} rounded-full`}
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.xp}%` }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                    />
                  </div>

                  {/* Pixel Art Tooltip */}
                  {hoveredSkill === skill && (
                    <motion.div
                      className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-4 z-50 p-4 rounded-lg border-2 ${isDark ? 'bg-gray-900 border-blue-500 text-white' : 'bg-white border-blue-600 text-gray-900'} shadow-2xl pointer-events-none`}
                      style={{
                        fontFamily: 'monospace',
                        fontSize: '13px',
                        minWidth: '220px',
                        width: 'max-content'
                      }}
                      initial={{ opacity: 0, y: 15, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="text-center space-y-1">
                        <div className={`font-bold mb-2 text-sm tracking-widest ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                          [{skill.name.toUpperCase()}]
                        </div>
                        <div className="flex justify-between border-b border-gray-700/50 pb-1">
                          <span className="opacity-70">Class:</span>
                          <span>{skill.class}</span>
                        </div>
                        <div className="flex justify-between border-b border-gray-700/50 pb-1 pt-1">
                          <span className="opacity-70">Ability:</span>
                          <span>{skill.ability}</span>
                        </div>
                        <div className="flex justify-between pt-1 font-bold">
                          <span className="opacity-70">XP:</span>
                          <span className={getXPColor(skill.xp).replace('bg-', 'text-')}>{skill.xp}/100</span>
                        </div>
                      </div>
                      {/* Tooltip Arrow */}
                      <div
                        className={`absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-transparent ${isDark ? 'border-t-blue-500' : 'border-t-blue-600'}`}
                      />
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}