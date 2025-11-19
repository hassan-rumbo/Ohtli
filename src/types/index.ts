// Core types
export interface ResponsiveImage {
  src: string;
  alt?: string;
  srcSet?: string;
}

// Service types
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  tech: string[];
}

// Project types
export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  client: string;
  year: string;
  problem: string;
  solution: string;
  result: string;
  size?: 'large' | 'tall' | 'wide' | 'default';
}

// Testimonial types
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

// Technology types
export interface Technology {
  id: string;
  name: string;
  logo: string;
}

// Client types
export interface Client {
  id: string;
  name: string;
  logo: string;
}

// Theme types
export type Theme = 'light' | 'dark';

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

// Component prop types
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent';
  children: React.ReactNode;
}

export interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

// Animation types
export interface AnimationConfig {
  preview?: boolean;
  scale: number;
  speed: number;
}

export interface NoiseConfig {
  opacity: number;
  scale: number;
}

// DottedSurface props
export interface DottedSurfaceProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

// EtherealShadow props
export interface EtherealShadowProps extends React.HTMLAttributes<HTMLDivElement> {
  sizing?: 'fill' | 'stretch';
  color?: string;
  animation?: AnimationConfig;
  noise?: NoiseConfig;
  className?: string;
}
