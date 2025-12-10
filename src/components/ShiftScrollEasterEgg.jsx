import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ShiftScrollEasterEgg() {
  const [isActive, setIsActive] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    let isShiftPressed = false;

    const handleKeyDown = (e) => {
      if (e.key === 'Shift') {
        isShiftPressed = true;
        setIsActive(true);
        if (!showMessage) {
          setShowMessage(true);
          setTimeout(() => setShowMessage(false), 2000);
        }
      }
    };

    const handleKeyUp = (e) => {
      if (e.key === 'Shift') {
        isShiftPressed = false;
        setIsActive(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [showMessage]);

  return (
    <>
      <AnimatePresence>
        {showMessage && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-20 left-1/2 -translate-x-1/2 z-50 bg-gradient-to-r from-blue-500 to-pink-500 text-white px-6 py-3 rounded-full shadow-lg backdrop-blur-sm"
          >
            🎉 Reverse Parallax Mode Activated!
          </motion.div>
        )}
      </AnimatePresence>
      {isActive && (
        <style>{`
          * { scroll-behavior: smooth !important; }
        `}</style>
      )}
    </>
  );
}
