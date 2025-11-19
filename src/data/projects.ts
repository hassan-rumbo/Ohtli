import { Project } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Plataforma Fintech',
    category: 'Web App',
    image: '/src/assets/react.svg',
    client: 'TechCorp Inc.',
    year: '2024',
    problem: 'Los usuarios necesitaban un dashboard más intuitivo para gestionar inversiones en cripto.',
    solution: 'Sistema modular con visualización en tiempo real y analytics avanzados.',
    result: '+150% en retención de usuarios en 3 meses.',
    size: 'large'
  },
  {
    id: '2',
    title: 'Marketplace Creativo',
    category: 'E-commerce',
    image: '/src/assets/react.svg',
    client: 'Artisan Co.',
    year: '2023',
    problem: 'Plataforma obsoleta con baja conversión y UX deficiente.',
    solution: 'Rediseño completo con checkout optimizado y search inteligente.',
    result: '+200% en transacciones mensuales.',
    size: 'tall'
  },
  {
    id: '3',
    title: 'App Salud Mental',
    category: 'Mobile App',
    image: '/src/assets/react.svg',
    client: 'Wellness Labs',
    year: '2024',
    problem: 'Baja adherencia en usuarios por experiencia fragmentada.',
    solution: 'App unificada con gamificación y seguimiento personalizado.',
    result: '4.8★ en App Store.',
    size: 'wide'
  }
];
