import { motion } from 'framer-motion';
import { technologies } from '../data/technologies';

const Technologies = () => {
  if (!technologies) return null;

  // Duplicate for infinite scroll effect
  const marqueeContent = [...technologies, ...technologies];

  return (
    <section className="bg-background py-32 overflow-hidden border-y border-white/5 relative z-10">
      <div className="mb-20 container mx-auto px-6 text-center">
        <h2 className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-4">
          Arsenal Tecnológico
        </h2>
        <p className="text-white/60 font-light max-w-2xl mx-auto">
          Dominamos las herramientas más potentes del mercado para construir el futuro.
        </p>
      </div>

      <div className="relative flex overflow-x-hidden group">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-20" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-20" />

        <motion.div 
          className="flex whitespace-nowrap gap-16 px-8"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            repeat: Infinity, 
            ease: "linear", 
            duration: 40 
          }}
        >
          {marqueeContent.map((tech, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center gap-6 group/tech cursor-pointer min-w-[120px]"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 relative flex items-center justify-center transition-all duration-500 grayscale group-hover/tech:grayscale-0 group-hover/tech:scale-110 bg-white/5 rounded-xl p-4">
                <img 
                  src={tech.icon} 
                  alt={tech.name} 
                  className="w-full h-full object-contain opacity-60 group-hover/tech:opacity-100 transition-opacity duration-500"
                />
              </div>
              <span className="text-sm font-mono text-[var(--color-text-muted)] group-hover/tech:text-[var(--color-text)] transition-colors duration-300 opacity-0 group-hover/tech:opacity-100 transform translate-y-2 group-hover/tech:translate-y-0">
                {tech.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Technologies;
