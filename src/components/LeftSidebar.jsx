import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaGithub, FaCode, FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import NavBar from './NavBar';
import { useTheme } from '../contexts/ThemeContext';
import cvFile from "../assets/Shaik_Mohammed_Maaz.pdf";

const LeftSidebar = () => {
  const { isDark, toggleTheme } = useTheme();
  const [scrollY, setScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth >= 1024;
    }
    return false;
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    const handleScroll = () => setScrollY(window.scrollY);

    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleSidebar = () => {
    setIsOpen((s) => !s);
  };

  const closeSidebarMobile = () => {
    if (window.innerWidth < 1024) {
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Toggle Button */}
      <motion.button
        onClick={toggleSidebar}
        aria-label={isOpen ? 'Close sidebar' : 'Open sidebar'}
        className={`lg:hidden fixed top-4 left-4 z-50 p-3 rounded-full backdrop-blur-md shadow-lg ${isDark ? 'bg-gray-800/90 text-white' : 'bg-white/90 text-gray-800'}`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
      </motion.button>

      {/* Circular Reveal Overlay (mobile only) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="lg:hidden fixed inset-0 z-40"
            initial={{ clipPath: 'circle(0% at 2rem 2rem)' }}
            animate={{ clipPath: 'circle(150% at 2rem 2rem)' }}
            exit={{ clipPath: 'circle(0% at 2rem 2rem)' }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            style={{ background: isDark ? 'rgba(17, 24, 39, 0.98)' : 'rgba(255, 255, 255, 0.98)' }}
            onClick={toggleSidebar}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-72 shadow-2xl transform transition-all duration-300 ease-in-out z-50 backdrop-blur-xl ${isOpen ? 'translate-x-0' : '-translate-x-full'
          } lg:translate-x-0 ${isDark ? 'bg-gray-900/95 text-white' : 'bg-white/95 text-gray-800'}`}
      >
        <div className="h-full flex flex-col p-6">
          <div className="space-y-6">
            <motion.div className="pt-4" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <h1 className="text-2xl font-bold">Shaik Mohammed Maaz</h1>
              <p className={`text-sm mt-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Passionate developer creating seamless digital experiences.
              </p>
            </motion.div>

            <motion.div className="flex gap-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
              <motion.a
                href="https://www.linkedin.com/in/shaik-mohammed-maaz-938496272/"
                target="_blank"
                rel="noopener noreferrer"
                className={`${isDark ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-500'} transition-colors`}
                whileHover={{ scale: 1.2, y: -2 }}
              >
                <FaLinkedin className="text-2xl" />
              </motion.a>
              <motion.a
                href="https://github.com/shaikmohammed-maaz"
                target="_blank"
                rel="noopener noreferrer"
                className={`${isDark ? 'text-gray-400 hover:text-purple-400' : 'text-gray-600 hover:text-purple-500'} transition-colors`}
                whileHover={{ scale: 1.2, y: -2 }}
              >
                <FaGithub className="text-2xl" />
              </motion.a>
              <motion.a
                href="https://leetcode.com/u/Shaik_Mohammed_Maaz/"
                target="_blank"
                rel="noopener noreferrer"
                className={`${isDark ? 'text-gray-400 hover:text-yellow-400' : 'text-gray-600 hover:text-yellow-500'} transition-colors`}
                whileHover={{ scale: 1.2, y: -2 }}
              >
                <FaCode className="text-2xl" />
              </motion.a>
            </motion.div>

          </div>
          <nav className="mt-8 flex-1">
            <NavBar onNavClick={closeSidebarMobile} />
          </nav>

          <div className="mt-auto pt-6 text-center">
            <motion.a
              href={cvFile}
              download="Shaik_Mohammed_Maaz_Resume.pdf"
              className={`flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold tracking-widest text-xs transition-all border-2 ${isDark
                ? 'border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 shadow-[0_0_15px_rgba(34,211,238,0.3)]'
                : 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white shadow-lg'
                }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              RÉSUMÉ
            </motion.a>
          </div>
        </div>
      </aside>
    </>
  );
};

export default LeftSidebar;
