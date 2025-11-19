import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { axe } from 'jest-axe';
import Footer from './Footer';

describe('Footer Component', () => {
  it('renders the Ohtli logo', () => {
    render(<Footer />);
    expect(screen.getByText('Ohtli.')).toBeInTheDocument();
  });

  it('displays all navigation links', () => {
    render(<Footer />);
    
    const links = ['Nosotros', 'Servicios', 'Proyectos', 'Contacto'];
    links.forEach(linkText => {
      // Use getAllByText since these might appear in Navbar too if both are rendered
      const elements = screen.getAllByText(linkText);
      const footerLink = elements.find(el => el.closest('footer'));
      expect(footerLink).toBeDefined();
      expect(footerLink.closest('a')).toHaveAttribute('href');
    });
  });

  it('has correct href attributes for navigation', () => {
    const { container } = render(<Footer />);
    const footer = container.querySelector('footer');
    
    // Query within footer context only
    const about = Array.from(footer.querySelectorAll('a')).find(a => a.textContent === 'Nosotros');
    const services = Array.from(footer.querySelectorAll('a')).find(a => a.textContent === 'Servicios');
    const projects = Array.from(footer.querySelectorAll('a')).find(a => a.textContent === 'Proyectos');
    const contact = Array.from(footer.querySelectorAll('a')).find(a => a.textContent === 'Contacto');
    
    expect(about).toHaveAttribute('href', '#about');
    expect(services).toHaveAttribute('href', '#services');
    expect(projects).toHaveAttribute('href', '#projects');
    expect(contact).toHaveAttribute('href', '#contact');
  });

  it('displays copyright information', () => {
    render(<Footer />);
    const currentYear = new Date().getFullYear();
    expect(screen.getByText(new RegExp(currentYear.toString()))).toBeInTheDocument();
    expect(screen.getByText(/Ohtli Studio.*derechos reservados/i)).toBeInTheDocument();
  });

  it('has proper semantic structure', () => {
    const { container } = render(<Footer />);
    const footer = container.querySelector('footer');
    expect(footer).toBeInTheDocument();
  });

  it('applies correct styling with black background', () => {
    const { container } = render(<Footer />);
    const footer = container.querySelector('footer');
    expect(footer).toHaveClass('bg-black');
  });

  it('has uppercase tracking for links', () => {
    const { container } = render(<Footer />);
    const links = container.querySelectorAll('a');
    
    // Navigation links should have uppercase and tracking classes
    const navLinks = Array.from(links).filter(link => 
      link.textContent.match(/Nosotros|Servicios|Proyectos|Contacto/)
    );
    
    navLinks.forEach(link => {
      expect(link.className).toContain('uppercase');
      expect(link.className).toContain('tracking-widest');
    });
  });

  it('has no accessibility violations', async () => {
    const { container } = render(<Footer />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
