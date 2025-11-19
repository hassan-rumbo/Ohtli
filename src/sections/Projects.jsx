import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';

const Projects = () => {
  if (!projects) return null;

  return (
    <section id="projects" className="py-32 bg-background relative z-10">
      <div className="container mx-auto px-6">
        <div className="mb-32">
          <h2 className="text-[10vw] font-serif italic leading-[0.8] text-[var(--color-text)] mix-blend-difference">
            Selected
          </h2>
          <h2 className="text-[10vw] font-bold leading-[0.8] text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-text-muted)] to-[var(--color-text)] ml-[10vw]">
            Works
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-[400px]">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`group relative overflow-hidden bg-[var(--color-text)]/5 ${
                project.size === 'large' ? 'md:col-span-2 md:row-span-2' :
                project.size === 'tall' ? 'md:col-span-1 md:row-span-2' :
                project.size === 'wide' ? 'md:col-span-2 md:row-span-1' :
                'md:col-span-1 md:row-span-1'
              }`}
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500 z-10" />
              
              <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
              />

              <div className="absolute bottom-0 left-0 w-full p-8 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
                <div className="flex items-center gap-4">
                  <span className="h-[1px] w-12 bg-primary" />
                  <p className="text-gray-300 uppercase tracking-widest text-sm">{project.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
