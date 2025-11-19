import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { axe } from 'jest-axe';
import Hero from './Hero';

describe('Hero Component', () => {
  it('renders the main heading correctly', () => {
    render(<Hero />);
    expect(screen.getByText('Ohtli.')).toBeInTheDocument();
  });

  it('displays the tagline', () => {
    render(<Hero />);
    expect(screen.getByText(/Fusionamos tecnología con experiencias/i)).toBeInTheDocument();
  });

  it('renders the CTA button', () => {
    render(<Hero />);
    expect(screen.getByText(/Iniciar Proyecto/i)).toBeInTheDocument();
  });

  it('has the 3D hero image', () => {
    render(<Hero />);
    const image = screen.getByAltText('Abstract 3D Shape');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '/src/assets/hero-obj.png');
  });

  it('applies light mode filter to image', () => {
    render(<Hero />);
    const image = screen.getByAltText('Abstract 3D Shape');
    expect(image).toHaveClass('filter', 'invert');
  });

  it('has proper heading hierarchy', () => {
    render(<Hero />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveTextContent('Ohtli.');
  });

  it('has no accessibility violations', async () => {
    const { container } = render(<Hero />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('renders scroll indicator', () => {
    const { container } = render(<Hero />);
    const scrollIndicator = container.querySelector('.w-\\[1px\\]');
    expect(scrollIndicator).toBeInTheDocument();
  });
});
