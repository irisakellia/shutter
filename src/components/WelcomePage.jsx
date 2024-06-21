import React from 'react';
import { motion } from 'framer-motion';

const WelcomePage = () => {
  return (
    <motion.div
      className='text-3xl text-red-600 '
      initial={{ opacity: 1, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 3 }}
    >
      Welcome to shutter come view our gallery 

      <p className='text-black text-lg mt-10'>Our photography 
        <button className='bg-red-600 p-2 py-2 rounded-xl text-white text-sm ml-10 '>
          View Gallery
        </button>
        <p> Search for any image that you want heyeeyeye</p>
      </p>
    </motion.div>

    

    
  );
}

export default WelcomePage;