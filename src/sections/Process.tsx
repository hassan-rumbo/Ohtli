import Section from '../components/Section';

const Process = () => {
  const steps = [
    {
      id: "01",
      title: "Inmersión",
      description: "Nos sumergimos en tu realidad. Decodificamos tus necesidades y desafiamos las asunciones iniciales."
    },
    {
      id: "02",
      title: "Abstracción",
      description: "Diseñamos la solución conceptual. Bocetos, wireframes y arquitectura de sistemas."
    },
    {
      id: "03",
      title: "Materialización",
      description: "Código limpio. Desarrollo iterativo. Construimos el producto capa por capa con precisión quirúrgica."
    },
    {
      id: "04",
      title: "Evolución",
      description: "El lanzamiento es solo el comienzo. Monitoreamos, optimizamos y escalamos tu solución."
    }
  ];

  return (
    <Section id="process" className="bg-background py-32">
      <div className="container mx-auto px-6">
        <div className="mb-24">
          <h2 className="text-[8vw] font-serif italic leading-none text-[var(--color-text)] mb-4">
            Nuestro <br /> Proceso.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-32">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`group relative ${index % 2 === 1 ? 'md:mt-32' : ''}`}
            >
              {/* Background Number - Adjusted z-index and opacity to prevent overlap issues */}
              <span className="absolute -top-12 left-0 text-8xl font-serif text-[var(--color-text)]/5 group-hover:text-primary/20 transition-colors duration-500 select-none -z-10">
                {step.id}
              </span>
              <div className="relative border-t border-[var(--color-text)]/20 pt-8 group-hover:border-primary transition-colors duration-500 bg-background/50 backdrop-blur-sm">
                <h3 className="text-4xl font-bold text-[var(--color-text)] mb-6 group-hover:text-primary transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-xl text-[var(--color-text-muted)] font-light leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Process;
