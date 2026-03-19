import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative mt-24 py-24 flex items-center justify-center overflow-hidden bg-black">
      {/* Background Ambient Light */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-600 blur-[120px] opacity-30 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-600 blur-[120px] opacity-30 animate-pulse" />

      <div className="relative z-10 text-center px-5">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-blue-400 font-mono mb-4"
        >
          Hi, my name is
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6"
        >
          Nithushi Shavindi.
        </motion.h1>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl md:text-5xl font-bold text-gray-400 mb-8"
        >
          I build scalable full-stack solutions.
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="max-w-xl mx-auto text-gray-400 text-lg mb-10"
        >
          I’m a Software Engineering student and Trainee Lecturer specializing in 
          building (and occasionally designing) exceptional digital experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <a 
            href="#projects" 
            className="px-8 py-4 bg-transparent border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500/10 transition-all font-medium"
          >
            Check out my work!
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;