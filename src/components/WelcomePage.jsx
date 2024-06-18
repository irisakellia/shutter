import React from 'react';
import { motion } from 'framer-motion';

const WelcomePage = () => {
  return (
    <motion.div
      className='text-3xl text-red-600'
      initial={{ opacity: 1, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 5 }}
    >
      Welcome to shutter come view our gallery 
    </motion.div>

    
  );
}

export default WelcomePage;