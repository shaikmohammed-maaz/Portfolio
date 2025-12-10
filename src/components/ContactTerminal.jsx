import { FaEnvelope, FaLinkedin, FaGithub, FaCode } from "react-icons/fa";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from '../contexts/ThemeContext';

export default function ContactSection() {
  const { isDark } = useTheme();
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleCopy = () => {
    navigator.clipboard.writeText('shaikmaaz333@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setFormSubmitted(false), 3000);
  };

  return (
    <motion.section
      id="contact"
      className="relative py-16 px-6 md:px-24 max-w-4xl mx-auto my-12 pt-24"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      {/* Projection Grid Background */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, ${isDark ? '#00ffff' : '#0066cc'} 1px, transparent 1px)`,
            backgroundSize: '30px 30px'
          }}
          animate={{
            x: [0, 30, 0],
            opacity: [0.05, 0.15, 0.05]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Main Form Container */}
      <motion.div
        className={`relative z-10 p-8 rounded-lg border transition-all duration-300 ${isDark ? 'bg-gray-900/80 border-white/20' : 'bg-white/80 border-gray-300/20'}`}
        style={{
          boxShadow: isDark 
            ? '0 0 15px rgba(0, 255, 255, 0.15), inset 0 0 10px rgba(0, 255, 255, 0.05)'
            : '0 0 15px rgba(0, 102, 204, 0.15), inset 0 0 10px rgba(0, 102, 204, 0.05)'
        }}
        whileHover={{
          boxShadow: isDark
            ? '0 0 20px rgba(0, 255, 255, 0.25), inset 0 0 15px rgba(0, 255, 255, 0.1)'
            : '0 0 20px rgba(0, 102, 204, 0.25), inset 0 0 15px rgba(0, 102, 204, 0.1)'
        }}
      >
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className={`title-font text-4xl md:text-6xl mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            CONNECT TERMINAL
          </h2>
          <p className={`font-mono text-sm ${isDark ? 'text-cyan-400' : 'text-gray-700'}`} style={{ color: isDark ? '#22d3ee' : '#374151' }}>
            Encrypting message for transmission...
          </p>
        </div>

        {/* Contact Form */}
        <AnimatePresence mode="wait">
          {!formSubmitted ? (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              className="mb-8 space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <input
                type="text"
                placeholder="IDENTITY_NAME"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
                className={`w-full px-4 py-3 rounded font-mono transition-all ${isDark ? 'bg-gray-800 text-white border border-gray-700 focus:border-cyan-400 focus:shadow-[0_0_10px_rgba(0,255,255,0.3)]' : 'bg-white text-gray-900 border border-gray-300 focus:border-blue-500 focus:shadow-[0_0_10px_rgba(0,102,204,0.3)]'} outline-none`}
              />
              <input
                type="email"
                placeholder="CONTACT_PROTOCOL"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
                className={`w-full px-4 py-3 rounded font-mono transition-all ${isDark ? 'bg-gray-800 text-white border border-gray-700 focus:border-cyan-400 focus:shadow-[0_0_10px_rgba(0,255,255,0.3)]' : 'bg-white text-gray-900 border border-gray-300 focus:border-blue-500 focus:shadow-[0_0_10px_rgba(0,102,204,0.3)]'} outline-none`}
              />
              <textarea
                placeholder="MESSAGE_PAYLOAD"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                required
                rows={4}
                className={`w-full px-4 py-3 rounded font-mono transition-all ${isDark ? 'bg-gray-800 text-white border border-gray-700 focus:border-cyan-400 focus:shadow-[0_0_10px_rgba(0,255,255,0.3)]' : 'bg-white text-gray-900 border border-gray-300 focus:border-blue-500 focus:shadow-[0_0_10px_rgba(0,102,204,0.3)]'} outline-none resize-none`}
              />
              <motion.button
                type="submit"
                className={`w-full px-8 py-4 rounded font-bold transition-all ${isDark ? 'bg-cyan-500 hover:bg-cyan-400' : 'bg-blue-600 hover:bg-blue-500'}`}
                style={{ 
                  color: '#ffffff',
                  boxShadow: isDark
                    ? '0 0 10px rgba(0, 255, 255, 0.2)'
                    : '0 0 10px rgba(0, 102, 204, 0.2)'
                }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: isDark
                    ? '0 0 15px rgba(0, 255, 255, 0.3)'
                    : '0 0 15px rgba(0, 102, 204, 0.3)'
                }}
                whileTap={{ scale: 0.98 }}
              >
                TRANSMIT MESSAGE
              </motion.button>
            </motion.form>
          ) : (
            <motion.div
              key="success"
              className="mb-8 py-12 text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
            >
              <div className="text-6xl mb-4">📡</div>
              <p className={`text-2xl font-bold mb-2 ${isDark ? 'text-cyan-400' : 'text-blue-600'}`}>TRANSMISSION COMPLETE</p>
              <p className={`font-mono text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Message encrypted and sent successfully.</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Connection Endpoints Footer */}
        <div className="border-t border-gray-600 pt-6">
          <motion.button
            onClick={handleCopy}
            className={`block mx-auto mb-6 px-4 py-2 rounded font-mono text-sm transition-all hover:shadow-[0_0_10px_rgba(0,255,255,0.3)]`}
            style={{ color: isDark ? '#9ca3af' : '#6b7280' }}
            whileHover={{ scale: 1.05 }}
          >
            [ <FaEnvelope className="inline mx-1" /> {copied ? 'COPIED!' : 'shaikmaaz333@gmail.com'} ]
          </motion.button>

          <div className="flex justify-center gap-8">
            <motion.a
              href="https://www.linkedin.com/in/shaik-mohammed-maaz-938496272/"
              target="_blank"
              rel="noopener noreferrer"
              className={`font-mono text-sm transition-all ${isDark ? 'text-gray-400 hover:text-cyan-400 hover:shadow-[0_0_10px_rgba(0,255,255,0.3)]' : 'text-gray-600 hover:text-blue-500 hover:shadow-[0_0_10px_rgba(0,102,204,0.3)]'}`}
              whileHover={{ scale: 1.1, y: -2 }}
            >
              [ <FaLinkedin className="inline mx-1" /> LINKEDIN ]
            </motion.a>
            <motion.a
              href="https://github.com/shaikmohammed-maaz"
              target="_blank"
              rel="noopener noreferrer"
              className={`font-mono text-sm transition-all ${isDark ? 'text-gray-400 hover:text-cyan-400 hover:shadow-[0_0_10px_rgba(0,255,255,0.3)]' : 'text-gray-600 hover:text-blue-500 hover:shadow-[0_0_10px_rgba(0,102,204,0.3)]'}`}
              whileHover={{ scale: 1.1, y: -2 }}
            >
              [ <FaGithub className="inline mx-1" /> GITHUB ]
            </motion.a>
            <motion.a
              href="https://leetcode.com/u/Shaik_Mohammed_Maaz/"
              target="_blank"
              rel="noopener noreferrer"
              className={`font-mono text-sm transition-all ${isDark ? 'text-gray-400 hover:text-cyan-400 hover:shadow-[0_0_10px_rgba(0,255,255,0.3)]' : 'text-gray-600 hover:text-blue-500 hover:shadow-[0_0_10px_rgba(0,102,204,0.3)]'}`}
              whileHover={{ scale: 1.1, y: -2 }}
            >
              [ <FaCode className="inline mx-1" /> LEETCODE ]
            </motion.a>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}