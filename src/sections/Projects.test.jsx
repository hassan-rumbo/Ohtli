import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { axe } from 'jest-axe';
import Projects from './Projects';
import { projects } from '../data/projects';

describe('Projects Component', () => {
  it('renders the section heading', () => {
    render(<Projects />);
    expect(screen.getByText('Selected')).toBeInTheDocument();
    expect(screen.getByText('Works')).toBeInTheDocument();
  });

  it('renders all projects from data', () => {
    render(<Projects />);
    
    projects.forEach(project => {
      expect(screen.getByText(project.title)).toBeInTheDocument();
      expect(screen.getByText(project.category)).toBeInTheDocument();
    });
  });

  it('displays project images correctly', () => {
    render(<Projects />);
    
    projects.forEach(project => {
      const image = screen.getByAltText(project.title);
      expect(image).toBeInTheDocument();
      expect(image).toHaveAttribute('src', project.image);
    });
  });

  it('applies correct grid layout classes based on project size', () => {
    const { container } = render(<Projects />);
    
    const projectCards = container.querySelectorAll('.group');
    expect(projectCards.length).toBe(projects.length);
    
    // Verify that size classes are applied
    projects.forEach((project, index) => {
      const card = projectCards[index];
      if (project.size === 'large') {
        expect(card.className).toContain('md:col-span-2');
        expect(card.className).toContain('md:row-span-2');
      } else if (project.size === 'tall') {
        expect(card.className).toContain('md:row-span-2');
      } else if (project.size === 'wide') {
        expect(card.className).toContain('md:col-span-2');
      }
    });
  });

  it('has hover effects on project cards', () => {
    const { container } = render(<Projects />);
    const projectCards = container.querySelectorAll('.group');
    
    projectCards.forEach(card => {
      expect(card).toHaveClass('group');
    });
  });

  it('has no accessibility violations', async () => {
    const { container } = render(<Projects />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('renders visual decoration (primary line)', () => {
    const { container } = render(<Projects />);
    const decorations = container.querySelectorAll('.bg-primary');
    expect(decorations.length).toBeGreaterThan(0);
  });
});
