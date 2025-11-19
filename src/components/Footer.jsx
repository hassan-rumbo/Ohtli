import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black py-20 border-t border-white/10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-end">
        <div>
          <h2 className="text-[15vw] leading-[0.8] font-serif italic text-white select-none">
            Ohtli.
          </h2>
        </div>
        
        <div className="flex flex-col items-end gap-8 mt-10 md:mt-0">
          <div className="flex gap-8">
            <a href="#about" className="text-gray-400 hover:text-white transition-colors uppercase tracking-widest text-xs">Nosotros</a>
            <a href="#services" className="text-gray-400 hover:text-white transition-colors uppercase tracking-widest text-xs">Servicios</a>
            <a href="#projects" className="text-gray-400 hover:text-white transition-colors uppercase tracking-widest text-xs">Proyectos</a>
            <a href="#contact" className="text-gray-400 hover:text-white transition-colors uppercase tracking-widest text-xs">Contacto</a>
          </div>
          
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Ohtli Studio. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
