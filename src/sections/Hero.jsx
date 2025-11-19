import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Button from '../components/Button';
import { ArrowRight } from 'lucide-react';
import { EtherealShadow } from '../components/ui/EtherealShadow';

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} id="home" className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-background pt-20">
      {/* Ethereal Shadow Background */}
      <EtherealShadow
        color="var(--color-primary)"
        animation={{ scale: 100, speed: 70 }}
        noise={{ opacity: 0.8, scale: 1.2 }}
        sizing="fill"
        className="opacity-20"
      />
      
      {/* 3D Object Overlay */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-1/4 right-10 w-[40vw] h-[40vw] opacity-60 mix-blend-screen"
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 0.6, scale: 1, rotate: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <img src="/src/assets/hero-obj.png" alt="Abstract 3D Shape" className="w-full h-full object-contain dark:filter-none filter invert dark:invert-0 transition-all duration-500" />
        </motion.div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div 
          style={{ y, opacity }}
          className="flex flex-col items-center"
        >
          {/* Massive Brand Name */}
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-[25vw] leading-[0.8] font-serif italic tracking-tighter text-[var(--color-text)] mix-blend-difference select-none"
          >
            Ohtli.
          </motion.h1>

          {/* Smaller Slogan */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="text-xl md:text-3xl font-light text-[var(--color-text-muted)] mt-8 max-w-2xl tracking-wide"
          >
            Fusionamos tecnología con experiencias.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-12"
          >
            <Button variant="primary" className="rounded-full px-8 py-4 text-lg group bg-white text-black hover:bg-gray-200 border-none">
              <span className="mr-2">Iniciar Proyecto</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-gray-500 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
