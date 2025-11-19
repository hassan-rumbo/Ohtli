import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { axe } from 'jest-axe';
import userEvent from '@testing-library/user-event';
import Contact from './Contact';

describe('Contact Component', () => {
  it('renders the heading', () => {
    render(<Contact />);
    expect(screen.getByText("Let's")).toBeInTheDocument();
    expect(screen.getByText('Talk.')).toBeInTheDocument();
  });

  it('displays the email link', () => {
    render(<Contact />);
    const emailLink = screen.getByText('hola@ohtli.studio');
    expect(emailLink).toBeInTheDocument();
    expect(emailLink).toHaveAttribute('href', 'mailto:hola@ohtli.studio');
  });

  it('renders all form fields with proper labels', () => {
    render(<Contact />);
    
    expect(screen.getByLabelText('Nombre')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Mensaje')).toBeInTheDocument();
  });

  it('allows typing in form fields', async () => {
    const user = userEvent.setup();
    render(<Contact />);
    
    const nameInput = screen.getByLabelText('Nombre');
    const emailInput = screen.getByLabelText('Email');
    const messageInput = screen.getByLabelText('Mensaje');
    
    await user.type(nameInput, 'Juan Pérez');
    await user.type(emailInput, 'juan@example.com');
    await user.type(messageInput, 'Hola, me interesa un proyecto');
    
    expect(nameInput).toHaveValue('Juan Pérez');
    expect(emailInput).toHaveValue('juan@example.com');
    expect(messageInput).toHaveValue('Hola, me interesa un proyecto');
  });

  it('has a submit button', () => {
    render(<Contact />);
    expect(screen.getByText(/Enviar Propuesta/i)).toBeInTheDocument();
  });

  it('displays social media links', () => {
    render(<Contact />);
    expect(screen.getByText('Instagram')).toBeInTheDocument();
    expect(screen.getByText('LinkedIn')).toBeInTheDocument();
    expect(screen.getByText('Twitter')).toBeInTheDocument();
  });

  it('displays location information', () => {
    render(<Contact />);
    expect(screen.getByText(/Ciudad de México/i)).toBeInTheDocument();
  });

  it('has proper input types', () => {
    render(<Contact />);
    
    const emailInput = screen.getByLabelText('Email');
    expect(emailInput).toHaveAttribute('type', 'email');
    
    const nameInput = screen.getByLabelText('Nombre');
    expect(nameInput).toHaveAttribute('type', 'text');
  });

  it('has no accessibility violations', async () => {
    const { container } = render(<Contact />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('displays copyright information', () => {
    render(<Contact />);
    const currentYear = new Date().getFullYear();
    expect(screen.getByText(new RegExp(currentYear.toString()))).toBeInTheDocument();
  });
});
