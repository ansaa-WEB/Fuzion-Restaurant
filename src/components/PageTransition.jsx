import React from 'react';
import { motion } from 'framer-motion';

const pageVariants = {
  initial: {
    opacity: 0,
    y: 40, // Neeche se thora slide hote hue upar aayega
  },
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: -40,
  },
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5, // Slide ki speed (0.5 seconds)
};

export default function PageTransition({ children }) {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      style={{ width: '100%' }}
    >
      {children}
    </motion.div>
  );
}