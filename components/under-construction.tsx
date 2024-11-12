'use client';

import { motion } from 'framer-motion';

const UnderConstruction = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl mx-auto text-center p-8 rounded-lg shadow-xl"
      >
        <motion.div
          animate={{ rotate: [0, -10, 10, -10, 0] }}
          transition={{ duration: 1, repeat: Infinity }}
          className="mb-6"
        >
          <span className="text-6xl">🚧</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-4xl font-bold text-white mb-4"
        >
          Under Construction
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-lg text-white/50 mb-8"
        >
          We&apos;re working hard to bring you something amazing. Please check back soon!
        </motion.p>
        
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.7, type: "spring" }}
          className="inline-block"
        >
          <div className="h-2 w-32 bg-blue-600 rounded-full mx-auto mb-2 animate-pulse"></div>
          <div className="h-2 w-24 bg-blue-600 rounded-full mx-auto animate-pulse"></div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default UnderConstruction;