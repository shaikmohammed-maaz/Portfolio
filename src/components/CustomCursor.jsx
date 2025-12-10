import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

export default function CustomCursor() {
  const { isDark } = useTheme();
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 1024);
    
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a') || e.target.closest('button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  if (isMobile) return null;

  return (
    <>
      <motion.div
        className="fixed pointer-events-none z-[9999]"
        animate={{
          x: position.x - 8,
          y: position.y - 8,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      >
        <div 
          className="w-4 h-4 rounded-full"
          style={{
            background: isDark 
              ? 'radial-gradient(circle, rgba(59, 130, 246, 0.8) 0%, rgba(236, 72, 153, 0.6) 100%)'
              : 'radial-gradient(circle, rgba(37, 99, 235, 0.8) 0%, rgba(219, 39, 119, 0.6) 100%)',
            boxShadow: isDark
              ? '0 0 20px rgba(59, 130, 246, 0.6), 0 0 40px rgba(236, 72, 153, 0.4)'
              : '0 0 20px rgba(37, 99, 235, 0.6), 0 0 40px rgba(219, 39, 119, 0.4)'
          }}
        />
      </motion.div>
      <motion.div
        className="fixed pointer-events-none z-[9998] rounded-full"
        animate={{
          x: position.x - 20,
          y: position.y - 20,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{ type: 'spring', stiffness: 120, damping: 20 }}
      >
        <div 
          className="w-10 h-10 rounded-full border-2"
          style={{
            borderColor: isDark ? 'rgba(59, 130, 246, 0.4)' : 'rgba(37, 99, 235, 0.4)',
            background: isDark 
              ? 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(37, 99, 235, 0.1) 0%, transparent 70%)'
          }}
        />
      </motion.div>
    </>
  );
}
