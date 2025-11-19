import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Section = ({ children, id, className = "", delay = 0 }) => {
  const { ref, isInView, variants } = useScrollAnimation({ margin: "-20% 0px" });

  return (
    <section id={id} className={`min-h-screen flex flex-col justify-center ${className}`}>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={variants}
        transition={{ delay }}
      >
        {children}
      </motion.div>
    </section>
  );
};

export default Section;
