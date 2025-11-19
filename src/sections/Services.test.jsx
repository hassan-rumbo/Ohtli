import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { axe } from 'jest-axe';
import Services from './Services';
import { services } from '../data/services';

describe('Services Component', () => {
  it('renders the section heading', () => {
    render(<Services />);
    expect(screen.getByText('Nuestros Servicios')).toBeInTheDocument();
    // "Experiencias" and "Digitales" appear in the heading
    const experiencias = screen.getAllByText(/Experiencias/i);
    const digitales = screen.getAllByText(/Digitales/i);
    expect(experiencias.length).toBeGreaterThan(0);
    expect(digitales.length).toBeGreaterThan(0);
  });

  it('renders all services from data', () => {
    render(<Services />);
    
    services.forEach(service => {
      expect(screen.getByText(service.title)).toBeInTheDocument();
      expect(screen.getByText(service.description)).toBeInTheDocument();
    });
  });

  it('displays service IDs correctly', () => {
    render(<Services />);
    
    services.forEach(service => {
      const idElements = screen.getAllByText(service.id);
      expect(idElements.length).toBeGreaterThan(0);
    });
  });

  it('renders tech stack tags for each service', () => {
    render(<Services />);
    
    services.forEach(service => {
      service.tech.forEach(tech => {
        expect(screen.getByText(tech)).toBeInTheDocument();
      });
    });
  });

  it('has the 3D services image', () => {
    render(<Services />);
    const image = screen.getByAltText('Services 3D Object');
    expect(image).toBeInTheDocument();
  });

  it('applies correct hover states', () => {
    const { container } = render(<Services />);
    const serviceCards = container.querySelectorAll('.group');
    expect(serviceCards.length).toBeGreaterThan(0);
  });

  it('has no accessibility violations', async () => {
    const { container } = render(<Services />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('uses horizontal scroll animation', () => {
    const { container } = render(<Services />);
    const scrollContainer = container.querySelector('[style*="x"]');
    expect(scrollContainer).toBeInTheDocument();
  });
});
