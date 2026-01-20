import '@/test/mocks/i18n';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Navigation from './Navigation';

describe('Navigation', () => {
  it('should render navigation element', () => {
    render(<Navigation />);
    const nav = screen.getByRole('navigation', { hidden: true });

    expect(nav).toBeInTheDocument();
  });

  it('should render navigation link', () => {
    render(<Navigation />);
    const links = screen.getAllByRole('link', { hidden: true });

    expect(links).toHaveLength(1);
  });

  it('should render characters link', () => {
    render(<Navigation />);

    expect(screen.getByText('PERSONAJES')).toBeInTheDocument();
  });

  it('should have correct href for characters', () => {
    render(<Navigation />);
    const link = screen.getByText('PERSONAJES').closest('a');

    expect(link).toHaveAttribute('href', '/');
  });

  it('should mark first link as active', () => {
    render(<Navigation />);
    const firstLink = screen.getAllByRole('link', { hidden: true })[0];

    expect(firstLink).toHaveClass('navigation__link--active');
  });
});
