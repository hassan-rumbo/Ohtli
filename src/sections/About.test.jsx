import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { axe } from 'jest-axe';
import About from './About';

describe('About Component', () => {
  it('renders the section heading', () => {
    render(<About />);
    expect(screen.getByText(/Filosofía Ohtli/i)).toBeInTheDocument();
  });

  it('displays the philosophy text', () => {
    render(<About />);
    expect(screen.getByText(/el software es la nueva arquitectura/i)).toBeInTheDocument();
  });

  it('renders all three pillars', () => {
    render(<About />);
    
    expect(screen.getByText('Estrategia')).toBeInTheDocument();
    expect(screen.getByText('Diseño')).toBeInTheDocument();
    expect(screen.getByText('Ingeniería')).toBeInTheDocument();
  });

  it('displays pillar descriptions', () => {
    render(<About />);
    
    expect(screen.getByText(/No solo escribimos código/i)).toBeInTheDocument();
    expect(screen.getByText(/Creamos interfaces que seducen/i)).toBeInTheDocument();
    expect(screen.getByText(/Construimos sistemas robustos/i)).toBeInTheDocument();
  });

  it('has numbered pillars (01, 02, 03)', () => {
    render(<About />);
    
    expect(screen.getByText('01')).toBeInTheDocument();
    expect(screen.getByText('02')).toBeInTheDocument();
    expect(screen.getByText('03')).toBeInTheDocument();
  });

  it('has the 3D philosophy image', () => {
    render(<About />);
    const image = screen.getByAltText('Philosophy 3D Object');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '/src/assets/philosophy-obj.png');
  });

  it('applies light mode filter to image', () => {
    render(<About />);
    const image = screen.getByAltText('Philosophy 3D Object');
    expect(image).toHaveClass('filter', 'invert');
  });

  it('has proper grid layout', () => {
    const { container } = render(<About />);
    const grid = container.querySelector('.grid-cols-1.md\\:grid-cols-3');
    expect(grid).toBeInTheDocument();
  });

  it('has no accessibility violations', async () => {
    const { container } = render(<About />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('applies hover effects to pillar cards', () => {
    const { container } = render(<About />);
    const cards = container.querySelectorAll('.group');
    expect(cards.length).toBe(3);
  });
});
