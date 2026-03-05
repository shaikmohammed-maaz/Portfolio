import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

const NavBar = ({ onNavClick }) => {
  const { isDark } = useTheme();
  const [activeSection, setActiveSection] = useState('home');
  const navItems = [
    { to: "home", label: "Home" },
    { to: "aboutme", label: "About Me" },
    { to: "skills", label: "Skills" },
    { to: "projects", label: "Projects" },
    { to: "timeline", label: "Experience" },
    { to: "contact", label: "Contact" }
  ];

  return (
    <ul className="space-y-1 relative">
      {navItems.map((item, i) => (
        <motion.li key={item.to} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 + i * 0.05 }}>
          <Link
            to={item.to}
            smooth={true}
            duration={500}
            spy={true}
            offset={0}
            onClick={onNavClick}
            onSetActive={() => setActiveSection(item.to)}
            className={`block px-4 py-3 rounded-lg transition-all cursor-pointer relative overflow-hidden group ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
            activeClass={isDark ? 'text-white bg-gradient-to-r from-blue-500/20 to-pink-500/20 border-l-2 border-blue-500' : 'text-gray-900 bg-gradient-to-r from-blue-100 to-pink-100 border-l-2 border-blue-500'}
          >
            <motion.span className="relative z-10" whileHover={{ x: 4 }}>{item.label}</motion.span>
            <motion.div
              className={`absolute inset-0 -z-10 ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </Link>
        </motion.li>
      ))}
    </ul>
  );
};

export default NavBar;
