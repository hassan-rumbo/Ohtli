import Section from '../components/Section';
import { Star } from 'lucide-react';
import { clients } from '../data/clients';
import { testimonials } from '../data/testimonials';

const Testimonials = () => {
  if (!testimonials || !clients) return null;

  return (
    <Section id="testimonials" className="bg-background py-32 border-t border-[var(--color-text)]/10">
      <div className="mb-20">
        <h2 className="text-[6vw] font-serif italic text-center text-[var(--color-text)]">
          Voces de confianza
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-6 md:px-12">
        {testimonials.map((testimonial, index) => (
          <div 
            key={index}
            className="flex flex-col justify-between border-l border-[var(--color-text)]/20 pl-8 py-4 hover:border-primary transition-colors duration-500"
          >
            <p className="text-xl text-[var(--color-text-muted)] mb-8 leading-relaxed font-light italic">
              &quot;{testimonial.content}&quot;
            </p>

            <div>
              <p className="text-[var(--color-text)] font-bold font-serif text-lg">{testimonial.name}</p>
              <p className="text-sm text-[var(--color-text-muted)] uppercase tracking-wider">{testimonial.role}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Client Logos Strip */}
      <div className="mt-32 border-t border-[var(--color-text)]/5 pt-20">
        <p className="text-center text-sm uppercase tracking-widest text-[var(--color-text-muted)] mb-12">
          Confían en nosotros
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
          {clients.map((client, index) => (
            <img 
              key={index}
              src={client.logo} 
              alt={client.name} 
              className="h-8 md:h-12 w-auto object-contain hover:scale-110 transition-transform duration-500"
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Testimonials;
