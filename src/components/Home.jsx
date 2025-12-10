import React from 'react';
import { motion } from 'framer-motion';
import HeroImg from '../assets/Hero.gif'


function Home() {



  return (
    <section id='home' className="relative h-screen w-full overflow-hidden">
      {/* GIF Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={HeroImg}
          alt="Hero Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>



      {/* Centered Poster Text */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <motion.h1
          className="text-white text-4xl md:text-6xl lg:text-7xl font-black text-center leading-tight"
          style={{ 
            textShadow: '0 0 20px rgba(255, 255, 255, 0.3)',
            fontFamily: 'Inter, sans-serif'
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Building the Future.<br/>
          One Pixel at a Time.
        </motion.h1>
      </div>



      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="text-white text-center"
        >
          <div className="text-2xl mb-2">↓</div>
          <div className="text-xs font-bold tracking-widest">SCROLL</div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Home;
