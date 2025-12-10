import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

export default function AnimatedBackground() {
  const { isDark } = useTheme();

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className={`absolute inset-0 transition-colors duration-500 ${isDark ? 'bg-[#0a0a0f]' : 'bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30'}`} />
      
      <motion.div
        className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -80, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          background: isDark
            ? 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(147, 197, 253, 0.4) 0%, transparent 70%)',
        }}
      />
      
      <motion.div
        className="absolute bottom-0 right-0 w-[700px] h-[700px] rounded-full blur-3xl"
        animate={{
          x: [0, -120, 0],
          y: [0, 60, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          background: isDark
            ? 'radial-gradient(circle, rgba(236, 72, 153, 0.15) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(251, 207, 232, 0.4) 0%, transparent 70%)',
        }}
      />
      
      <motion.div
        className="absolute top-1/2 left-1/2 w-[500px] h-[500px] rounded-full blur-3xl"
        animate={{
          x: [-250, -150, -250],
          y: [-250, -300, -250],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          background: isDark
            ? 'radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(196, 181, 253, 0.3) 0%, transparent 70%)',
        }}
      />
    </div>
  );
}
