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
      viewport={{ once: true, amount: 0.25 }}
    >
      <h2 className={`title-font text-4xl md:text-6xl mb-12 text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
        SKILLS & TECHNOLOGIES
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {Object.entries(skillCategories).map(([category, skills]) => (
          <motion.div
            key={category}
            className={`p-6 rounded-xl ${isDark ? 'bg-gray-800/50' : 'bg-gray-100/50'} backdrop-blur-sm`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className={`title-font text-lg mb-6 text-center ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
              {category.toUpperCase()}
            </h3>
            
            <div className="space-y-4">
              {skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  className="relative cursor-pointer"
                  onMouseEnter={() => setHoveredSkill(skill)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <skill.icon className={`text-2xl ${skill.color}`} />
                    <span className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {skill.name}
                    </span>
                    <span className={`ml-auto text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      {skill.xp}%
                    </span>
                  </div>
                  
                  {/* XP Bar */}
                  <div className={`w-full h-2 rounded-full ${isDark ? 'bg-gray-700' : 'bg-gray-300'} overflow-hidden`}>
                    <motion.div
                      className={`h-full ${getXPColor(skill.xp)} rounded-full`}
                      initial={{ width: 0 }}
                      animate={{ width: hoveredSkill === skill ? `${skill.xp}%` : `${skill.xp}%` }}
                      whileInView={{ width: `${skill.xp}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: hoveredSkill === skill ? 0.8 : 1, delay: hoveredSkill === skill ? 0 : 0.2 }}
                      key={hoveredSkill === skill ? 'hovered' : 'normal'}
                    />
                  </div>

                  {/* Pixel Art Tooltip */}
                  {hoveredSkill === skill && (
                    <motion.div
                      className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-50 p-3 rounded-lg border-2 ${isDark ? 'bg-gray-900 border-blue-500 text-white' : 'bg-white border-blue-600 text-gray-900'} shadow-2xl`}
                      style={{ 
                        fontFamily: 'monospace',
                        fontSize: '12px',
                        minWidth: '200px'
                      }}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="text-center">
                        <div className={`font-bold mb-1 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                          [{skill.name.toUpperCase()}]
                        </div>
                        <div className="text-xs mb-1">
                          Class: {skill.class}
                        </div>
                        <div className="text-xs mb-1">
                          Ability: {skill.ability}
                        </div>
                        <div className="text-xs">
                          XP: {skill.xp}/100
                        </div>
                      </div>
                      {/* Tooltip Arrow */}
                      <div 
                        className={`absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent ${isDark ? 'border-t-blue-500' : 'border-t-blue-600'}`}
                      />
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}