import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import App from './App';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import { ThemeProvider } from './context/ThemeContext';

// Mock IntersectionObserver for Framer Motion
const mockIntersectionObserver = vi.fn();
mockIntersectionObserver.mockReturnValue({
  observe: () => null,
  unobserve: () => null,
  disconnect: () => null
});
window.IntersectionObserver = mockIntersectionObserver;

// Mock scroll methods
window.scrollTo = vi.fn();

describe('Ohtli Landing Page', () => {
  it('renders the App without crashing', async () => {
    render(<App />);
    // Wait for lazy loaded components if necessary, but "Ohtli." is in Navbar which is not lazy loaded
    // App wraps Navbar in ThemeProvider, so it should be fine.
    // Use findAllByText because "Ohtli." appears in Navbar, Hero, and Footer
    const elements = await screen.findAllByText(/Ohtli/i);
    expect(elements.length).toBeGreaterThan(0);
  });

  it('renders the Navbar with correct links', () => {
    render(
      <ThemeProvider>
        <Navbar />
      </ThemeProvider>
    );
    expect(screen.getByText('Nosotros')).toBeInTheDocument();
    expect(screen.getByText('Servicios')).toBeInTheDocument();
    expect(screen.getByText('Proyectos')).toBeInTheDocument();
    expect(screen.getByText('Contacto')).toBeInTheDocument();
  });

  it('renders the Hero section with main slogan', () => {
    render(<Hero />);
    expect(screen.getByText(/Fusionamos tecnología con experiencias/i)).toBeInTheDocument();
    expect(screen.getByText(/Iniciar Proyecto/i)).toBeInTheDocument();
  });
});
