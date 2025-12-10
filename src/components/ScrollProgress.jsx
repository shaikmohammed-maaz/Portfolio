import React from 'react';
import { motion, useScroll } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const { isDark } = useTheme();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 z-[100] origin-left"
      style={{
        scaleX: scrollYProgress,
        background: isDark
          ? 'linear-gradient(90deg, #3b82f6, #ec4899)'
          : 'linear-gradient(90deg, #60a5fa, #f472b6)',
      }}
    />
  );
}
