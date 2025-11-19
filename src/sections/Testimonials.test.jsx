import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { axe } from 'jest-axe';
import Testimonials from './Testimonials';
import { testimonials } from '../data/testimonials';
import { clients } from '../data/clients';

describe('Testimonials Component', () => {
  it('renders the section heading', () => {
    render(<Testimonials />);
    expect(screen.getByText(/Voces de confianza/i)).toBeInTheDocument();
  });

  it('renders all testimonials from data', () => {
    render(<Testimonials />);
    
    testimonials.forEach(testimonial => {
      expect(screen.getByText(testimonial.content, { exact: false })).toBeInTheDocument();
      expect(screen.getByText(testimonial.name)).toBeInTheDocument();
      expect(screen.getByText(testimonial.role)).toBeInTheDocument();
    });
  });

  it('displays testimonial quotes correctly', () => {
    const { container } = render(<Testimonials />);
    const quotes = container.querySelectorAll('p.italic');
    expect(quotes.length).toBe(testimonials.length);
  });

  it('displays client logos section', () => {
    render(<Testimonials />);
    expect(screen.getByText(/Confían en nosotros/i)).toBeInTheDocument();
  });

  it('renders all client logos', () => {
    render(<Testimonials />);
    
    clients.forEach(client => {
      const logo = screen.getByAltText(client.name);
      expect(logo).toBeInTheDocument();
      expect(logo).toHaveAttribute('src', client.logo);
    });
  });

  it('applies proper grid layout', () => {
    const { container } = render(<Testimonials />);
    const grid = container.querySelector('.grid-cols-1.md\\:grid-cols-3');
    expect(grid).toBeInTheDocument();
  });

  it('has border decoration on testimonial cards', () => {
    const { container } = render(<Testimonials />);
    const testimonialCards = container.querySelectorAll('.border-l');
    expect(testimonialCards.length).toBe(testimonials.length);
  });

  it('has hover effects on client logos', () => {
    const { container } = render(<Testimonials />);
    const logoContainer = container.querySelector('.grayscale');
    expect(logoContainer).toBeInTheDocument();
  });

  it('has no accessibility violations', async () => {
    const { container } = render(<Testimonials />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
