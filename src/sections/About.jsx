import React from 'react';
import Section from '../components/Section';
import { motion } from 'framer-motion';
import { Search, PenTool, Code2, Quote } from 'lucide-react';

const About = () => {
  const pillars = [
    {
      id: "01",
      title: "Estrategia",
      description: "No solo escribimos código. Entendemos tu negocio y definimos la ruta crítica hacia el éxito."
    },
    {
      id: "02",
      title: "Diseño",
      description: "Creamos interfaces que seducen. La estética no es un añadido, es la base de la experiencia."
    },
    {
      id: "03",
      title: "Ingeniería",
      description: "Construimos sistemas robustos y escalables. Tecnología invisible que simplemente funciona."
    }
  ];

  return (
    <Section id="about" className="bg-background py-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-32">
        <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between mb-20">
          <h2 className="text-sm uppercase tracking-[0.3em] text-[var(--color-text-muted)] mb-8 md:mb-0">
            Filosofía Ohtli.
          </h2>
          <motion.div 
            className="w-32 h-32 md:w-48 md:h-48 opacity-80"
            initial={{ opacity: 0, rotate: 90 }}
            whileInView={{ opacity: 0.8, rotate: 0 }}
            transition={{ duration: 1.5 }}
          >
             <img src="/src/assets/philosophy-obj.png" alt="Philosophy 3D Object" className="w-full h-full object-contain dark:filter-none filter invert dark:invert-0 transition-all duration-500" />
          </motion.div>
        </div>
        </div>
        <div className="flex flex-col justify-end">
          <p className="text-xl md:text-2xl text-[var(--color-text-muted)] leading-relaxed font-light">
            En <span className="text-[var(--color-text)] font-serif italic">Ohtli</span>, creemos que el software es la nueva arquitectura. 
            Combinamos la precisión de la ingeniería con la sensibilidad del arte para crear 
            espacios digitales que inspiran y transforman.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[var(--color-text)]/10 border border-[var(--color-text)]/10">
        {pillars.map((pillar, index) => (
          <div 
            key={index}
            className="p-12 bg-background hover:bg-[var(--color-text)]/5 transition-colors duration-500 group"
          >
            <span className="block text-sm text-primary mb-8 font-mono">{pillar.id}</span>
            <h3 className="text-3xl font-serif italic text-[var(--color-text)] mb-6 group-hover:translate-x-2 transition-transform duration-500">
              {pillar.title}
            </h3>
            <p className="text-[var(--color-text-muted)] leading-relaxed">
              {pillar.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default About;
