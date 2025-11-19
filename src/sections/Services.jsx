import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { services } from '../data/services';
import { DottedSurface } from '../components/ui/DottedSurface';

const Services = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} id="services" className="relative h-[300vh] bg-background">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        {/* Dotted Surface Background */}
        <DottedSurface className="opacity-50" />
        
        <motion.div style={{ x }} className="flex gap-20 px-20 relative z-10">
          <div className="container mx-auto px-6 mb-16 flex justify-between items-end min-w-[40vw]">
            <div>
              <h2 className="text-sm uppercase tracking-[0.3em] text-[var(--color-text-muted)] mb-4">
                Nuestros Servicios
              </h2>
              <h3 className="text-4xl md:text-6xl font-serif italic text-[var(--color-text)]">
                Experiencias <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  Digitales.
                </span>
              </h3>
            </div>
            <div className="hidden md:block w-32 h-32 opacity-60 mix-blend-screen">
              <img src="/src/assets/services-obj.png" alt="Services 3D Object" className="w-full h-full object-contain dark:filter-none filter invert dark:invert-0 transition-all duration-500" />
            </div>
          </div>
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative h-[60vh] w-[35vw] min-w-[400px] bg-[var(--color-text)]/5 border border-[var(--color-text)]/10 p-10 flex flex-col justify-between hover:bg-[var(--color-text)]/10 transition-colors duration-500"
            >
              <div className="flex justify-between items-start">
                <span className="text-6xl font-serif text-[var(--color-text)]/20 group-hover:text-primary/50 transition-colors duration-500">
                  {service.id}
                </span>
                <ArrowUpRight className="text-[var(--color-text)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" size={32} />
              </div>

              <div>
                <h3 className="text-4xl font-bold text-[var(--color-text)] mb-6 group-hover:text-primary transition-colors duration-500">
                  {service.title}
                </h3>
                <p className="text-lg text-[var(--color-text-muted)] mb-8 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {service.tech.map((tag, i) => (
                    <span key={i} className="text-xs uppercase tracking-wider px-4 py-2 border border-[var(--color-text)]/20 rounded-full text-[var(--color-text-muted)]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
