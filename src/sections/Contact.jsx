import React from 'react';
import Button from '../components/Button';
import { ArrowRight } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen bg-background flex flex-col justify-between pt-32 pb-10 px-6 md:px-20">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20">
        <div>
          <h2 className="text-[12vw] font-serif italic leading-[0.8] text-[var(--color-text)] mix-blend-difference mb-4">
            Let&apos;s
          </h2>
          <h2 className="text-[12vw] font-bold leading-[0.8] text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            Talk.
          </h2>
        </div>
        
        <div className="mt-10 md:mt-0 max-w-md">
          <p className="text-xl text-[var(--color-text-muted)] mb-8">
            ¿Tienes una visión audaz? Nosotros tenemos la tecnología para construirla.
          </p>
          <a href="mailto:hola@ohtli.studio" className="text-3xl text-[var(--color-text)] hover:text-primary transition-colors border-b border-[var(--color-text)]/20 hover:border-primary pb-2 inline-block">
            hola@ohtli.studio
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 border-t border-[var(--color-text)]/10 pt-20">
        <form className="space-y-12">
          <div className="group relative">
            <input 
              type="text" 
              placeholder="Tu Nombre"
              aria-label="Nombre"
              className="w-full bg-transparent border-b border-[var(--color-text)]/20 py-4 text-2xl text-[var(--color-text)] focus:outline-none focus:border-primary transition-colors placeholder:text-[var(--color-text-muted)]"
            />
          </div>
          <div className="group relative">
            <input 
              type="email" 
              placeholder="Tu Email"
              aria-label="Email"
              className="w-full bg-transparent border-b border-[var(--color-text)]/20 py-4 text-2xl text-[var(--color-text)] focus:outline-none focus:border-primary transition-colors placeholder:text-[var(--color-text-muted)]"
            />
          </div>
          <div className="group relative">
            <textarea 
              rows="1"
              placeholder="Cuéntanos tu idea..."
              aria-label="Mensaje"
              className="w-full bg-transparent border-b border-[var(--color-text)]/20 py-4 text-2xl text-[var(--color-text)] focus:outline-none focus:border-primary transition-colors placeholder:text-[var(--color-text-muted)] resize-none"
            ></textarea>
          </div>

          <Button variant="primary" className="text-xl px-10 py-5 rounded-none">
            Enviar Propuesta <ArrowRight className="ml-2" />
          </Button>
        </form>

        <div className="flex flex-col justify-between">
          <div className="grid grid-cols-2 gap-10">
            <div>
              <p className="text-[var(--color-text-muted)] uppercase tracking-widest text-sm mb-4 font-semibold">Social</p>
              <ul className="space-y-2">
                <li><a href="#" className="text-[var(--color-text)] hover:text-primary text-lg">Instagram</a></li>
                <li><a href="#" className="text-[var(--color-text)] hover:text-primary text-lg">LinkedIn</a></li>
                <li><a href="#" className="text-[var(--color-text)] hover:text-primary text-lg">Twitter</a></li>
              </ul>
            </div>
            <div>
              <p className="text-[var(--color-text-muted)] uppercase tracking-widest text-sm mb-4 font-semibold">Ubicación</p>
              <p className="text-[var(--color-text)] text-lg">
                Ciudad de México,<br />
                México
              </p>
            </div>
          </div>
          
          <div className="mt-20 md:mt-0">
            <p className="text-[var(--color-text-muted)] text-sm">
              © {new Date().getFullYear()} Ohtli Studio. <br />
              All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
