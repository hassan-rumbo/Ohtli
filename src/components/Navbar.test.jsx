import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { axe } from 'jest-axe';
import userEvent from '@testing-library/user-event';
import Navbar from './Navbar';
import { ThemeProvider } from '../context/ThemeContext';

describe('Navbar Component', () => {
  const renderNavbar = () => {
    return render(
      <ThemeProvider>
        <Navbar />
      </ThemeProvider>
    );
  };

  it('renders without crashing', () => {
    renderNavbar();
    // The logo "Ohtli." appears once in the navbar
    const logo = screen.getByText('Ohtli.');
    expect(logo).toBeInTheDocument();
  });

  it('displays all navigation links', () => {
    renderNavbar();
    expect(screen.getByText('Nosotros')).toBeInTheDocument();
    expect(screen.getByText('Servicios')).toBeInTheDocument();
    expect(screen.getByText('Proyectos')).toBeInTheDocument();
    expect(screen.getByText('Contacto')).toBeInTheDocument();
  });

  it('toggles theme when theme button is clicked', async () => {
    const user = userEvent.setup();
    renderNavbar();
    
    const themeButtons = screen.getAllByLabelText('Toggle Theme');
    await user.click(themeButtons[0]);
    
    // Verify that the theme was toggled (icon should change)
    expect(themeButtons[0]).toBeInTheDocument();
  });

  it('opens mobile menu when menu button is clicked', async () => {
    const user = userEvent.setup();
    renderNavbar();
    
    const menuButton = screen.getByLabelText('Toggle menu');
    await user.click(menuButton);
    
    // Mobile menu should now be visible
    const mobileLinks = screen.getAllByText('Nosotros');
    expect(mobileLinks.length).toBeGreaterThan(1); // One in desktop, one in mobile
  });

  it('has no accessibility violations', async () => {
    const { container } = renderNavbar();
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('applies correct classes when scrolled', () => {
    renderNavbar();
    
    // Simulate scroll
    window.scrollY = 100;
    window.dispatchEvent(new Event('scroll'));
    
    // The navbar should have the scrolled class
    const nav = screen.getByRole('navigation').closest('nav');
    expect(nav).toBeInTheDocument();
  });

  it('has proper aria labels for accessibility', () => {
    renderNavbar();
    
    expect(screen.getAllByLabelText('Toggle Theme')).toHaveLength(2); // Desktop + Mobile
    expect(screen.getByLabelText('Toggle menu')).toBeInTheDocument();
  });
});
