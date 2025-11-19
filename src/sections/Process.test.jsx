import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { axe } from 'jest-axe';
import Process from './Process';

describe('Process Component', () => {
  it('renders the section heading', () => {
    render(<Process />);
    expect(screen.getByText(/Nuestro/i)).toBeInTheDocument();
    expect(screen.getByText(/Proceso/i)).toBeInTheDocument();
  });

  it('renders all four process steps', () => {
    render(<Process />);
    
    expect(screen.getByText('Inmersión')).toBeInTheDocument();
    expect(screen.getByText('Abstracción')).toBeInTheDocument();
    expect(screen.getByText('Materialización')).toBeInTheDocument();
    expect(screen.getByText('Evolución')).toBeInTheDocument();
  });

  it('displays step descriptions', () => {
    render(<Process />);
    
    expect(screen.getByText(/Nos sumergimos en tu realidad/i)).toBeInTheDocument();
    expect(screen.getByText(/Diseñamos la solución conceptual/i)).toBeInTheDocument();
    expect(screen.getByText(/Código limpio/i)).toBeInTheDocument();
    expect(screen.getByText(/El lanzamiento es solo el comienzo/i)).toBeInTheDocument();
  });

  it('has numbered steps (01-04)', () => {
    render(<Process />);
    
    expect(screen.getByText('01')).toBeInTheDocument();
    expect(screen.getByText('02')).toBeInTheDocument();
    expect(screen.getByText('03')).toBeInTheDocument();
    expect(screen.getByText('04')).toBeInTheDocument();
  });

  it('has proper z-index for background numbers', () => {
    const { container } = render(<Process />);
    const backgroundNumbers = container.querySelectorAll('.-z-10');
    expect(backgroundNumbers.length).toBe(4);
  });

  it('applies backdrop blur to prevent overlaps', () => {
    const { container } = render(<Process />);
    const contentCards = container.querySelectorAll('.backdrop-blur-sm');
    expect(contentCards.length).toBe(4);
  });

  it('has alternating layout for visual interest', () => {
    const { container } = render(<Process />);
    const steps = container.querySelectorAll('.group');
    
    // Every other step should have margin-top on md screens
    steps.forEach((step, index) => {
      if (index % 2 === 1) {
        expect(step.className).toContain('md:mt-32');
      }
    });
  });

  it('has no accessibility violations', async () => {
    const { container } = render(<Process />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('applies hover effects', () => {
    const { container } = render(<Process />);
    const steps = container.querySelectorAll('.group');
    expect(steps.length).toBe(4);
  });
});
