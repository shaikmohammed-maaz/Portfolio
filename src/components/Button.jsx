import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

const Button = ({ children, onClick }) => {
  const { isDark } = useTheme();
  return (
    <motion.button
      className={`px-6 py-3 rounded-lg font-medium transition-all ${isDark ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-gray-800 text-white hover:bg-gray-700'}`}
      whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(59, 130, 246, 0.4)" }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};

export default Button;
