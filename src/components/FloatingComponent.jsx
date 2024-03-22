import React, { useState, useEffect } from 'react';
import { FaQuestionCircle, FaPhone, FaMailBulk } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function FloatingComponent() {
  const [showFloatingComponent, setShowFloatingComponent] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setShowFloatingComponent(true);
      } else {
        setShowFloatingComponent(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={showFloatingComponent ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-4 left-4 right-4 p-4 flex justify-evenly z-10"
    >
      <div className="flex gap-2 bg-white px-4 py-2 rounded-lg shadow-lg ">
        <button className="flex items-center bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-2 px-2 md:py-3 md:px-6 rounded focus:outline-none focus:shadow-outline shadow-lg">
          <FaMailBulk className="mr-2" /> Enquire now
        </button>

        <button className="flex bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-2 px-4 md:py-3 md:px-6 rounded focus:outline-none focus:shadow-outline gap-1 justify-between items-center shadow-lg">
          <div className="inline-block rotate-90 mt-1">
            <FaPhone className="mr-2" />
          </div>
          Call
        </button>
      </div>
    </motion.div>
  );
}
