import { Service } from '../types';

export const services: Service[] = [
  {
    id: '01',
    title: 'Desarrollo Web',
    description: 'Aplicaciones web modernas y escalables construidas con tecnologías de vanguardia.',
    icon: 'Code',
    tech: ['React', 'Next.js', 'Node.js', 'TypeScript']
  },
  {
    id: '02',
    title: 'Diseño UX/UI',
    description: 'Interfaces intuitivas que combinan estética y funcionalidad para experiencias memorables.',
    icon: 'Palette',
    tech: ['Figma', 'Adobe XD', 'Sketch', 'Prototyping']
  },
  {
    id: '03',
    title: 'E-commerce',
    description: 'Plataformas de comercio electrónico optimizadas para conversión y rendimiento.',
    icon: 'ShoppingCart',
    tech: ['Shopify', 'WooCommerce', 'Stripe', 'Analytics']
  },
  {
    id: '04',
    title: 'Aplicaciones Móviles',
    description: 'Apps nativas e híbridas para iOS y Android con experiencias fluidas.',
    icon: 'Smartphone',
    tech: ['React Native', 'Flutter', 'iOS', 'Android']
  }
];
