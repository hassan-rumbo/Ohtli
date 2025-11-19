import Button from "../components/Button";
import { ArrowRight } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    console.log("Form submitted:", Object.fromEntries(formData));
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-background flex flex-col justify-between pt-32 pb-10 px-6 md:px-20"
    >
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
            ¿Tienes una visión audaz? Nosotros tenemos la tecnología para
            construirla.
          </p>
          <a
            href="mailto:hola@ohtli.studio"
            className="text-3xl text-[var(--color-text)] hover:text-primary transition-colors border-b border-[var(--color-text)]/20 hover:border-primary pb-2 inline-block"
          >
            hola@ohtli.studio
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 border-t border-[var(--color-text)]/10 pt-20">
        <div className="md:w-full">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Tu nombre"
                aria-label="Nombre"
                className="w-full px-6 py-4 bg-transparent border border-[var(--color-text)]/20 rounded-lg text-[var(--color-text)] placeholder-[var(--color-text-muted)] focus:outline-none focus:border-primary transition-colors"
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Tu email"
                aria-label="Email"
                className="w-full px-6 py-4 bg-transparent border border-[var(--color-text)]/20 rounded-lg text-[var(--color-text)] placeholder-[var(--color-text-muted)] focus:outline-none focus:border-primary transition-colors"
                required
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Cuéntanos sobre tu proyecto"
                aria-label="Mensaje"
                rows={6}
                className="w-full px-6 py-4 bg-transparent border border-[var(--color-text)]/20 rounded-lg text-[var(--color-text)] placeholder-[var(--color-text-muted)] focus:outline-none focus:border-primary transition-colors resize-none"
                required
              ></textarea>
            </div>

            <Button
              variant="primary"
              className="text-xl px-10 py-5 rounded-none"
            >
              Enviar Propuesta <ArrowRight className="ml-2" />
            </Button>
          </form>
        </div>

        <div className="flex flex-col justify-between">
          <div className="grid grid-cols-2 gap-10">
            <div>
              <p className="text-[var(--color-text-muted)] uppercase tracking-widest text-sm mb-4 font-semibold">
                Social
              </p>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-[var(--color-text)] hover:text-primary text-lg"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[var(--color-text)] hover:text-primary text-lg"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[var(--color-text)] hover:text-primary text-lg"
                  >
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-[var(--color-text-muted)] uppercase tracking-widest text-sm mb-4 font-semibold">
                Ubicación
              </p>
              <p className="text-[var(--color-text)] text-lg">
                Ciudad de México,
                <br />
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
