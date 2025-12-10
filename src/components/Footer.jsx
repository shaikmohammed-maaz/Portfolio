import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

export default function Footer() {
  const { isDark } = useTheme();
  return (
    <motion.footer
      className={`w-full py-6 px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm transition-colors duration-300 ${isDark ? 'bg-gray-900 text-gray-400' : 'bg-gray-800 text-gray-400'}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      <div>
        &copy; {new Date().getFullYear()} Shaik Mohammed Maaz. All rights reserved.
      </div>
      <div className="flex gap-4">
        <motion.a href="#home" className="hover:text-white transition" whileHover={{ scale: 1.1 }}>Home</motion.a>
        <motion.a href="#aboutme" className="hover:text-white transition" whileHover={{ scale: 1.1 }}>About</motion.a>
        <motion.a href="#skills" className="hover:text-white transition" whileHover={{ scale: 1.1 }}>Skills</motion.a>
        <motion.a href="#projects" className="hover:text-white transition" whileHover={{ scale: 1.1 }}>Projects</motion.a>
        <motion.a href="#contact" className="hover:text-white transition" whileHover={{ scale: 1.1 }}>Contact</motion.a>
      </div>
      <div className="italic">Crafted with passion & precision.</div>
    </motion.footer>
  );
}
