import { Code, Smartphone, Globe, Cpu } from 'lucide-react';

export const services = [
  {
    id: 1,
    title: "Desarrollo Web",
    description: "Aplicaciones web progresivas y sitios corporativos de alto impacto.",
    icon: Globe,
    tech: ["React", "Next.js", "Node.js"]
  },
  {
    id: 2,
    title: "Apps Móviles",
    description: "Experiencias nativas y multiplataforma para iOS y Android.",
    icon: Smartphone,
    tech: ["React Native", "Swift", "Kotlin"]
  },
  {
    id: 3,
    title: "Sistemas a Medida",
    description: "Software empresarial escalable y arquitecturas robustas.",
    icon: Code,
    tech: ["Python", "Go", "AWS"]
  },
  {
    id: 4,
    title: "IA & Machine Learning",
    description: "Integración de inteligencia artificial para automatización y análisis.",
    icon: Cpu,
    tech: ["TensorFlow", "OpenAI", "PyTorch"]
  }
];
