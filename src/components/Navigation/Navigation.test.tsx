import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import '../../test/mocks/i18n';
import Navigation from './Navigation';

describe('Navigation', () => {
  it('should render navigation element', () => {
    render(<Navigation />);
    const nav = screen.getByRole('navigation');

    expect(nav).toBeInTheDocument();
  });

  it('should render 4 navigation links', () => {
    render(<Navigation />);
    const links = screen.getAllByRole('link');

    expect(links).toHaveLength(4);
  });

  it('should render characters link', () => {
    render(<Navigation />);

    expect(screen.getByText('PERSONAJES')).toBeInTheDocument();
  });

  it('should render locations link', () => {
    render(<Navigation />);

    expect(screen.getByText('UBICACIONES')).toBeInTheDocument();
  });

  it('should render episodes link', () => {
    render(<Navigation />);

    expect(screen.getByText('EPISODIOS')).toBeInTheDocument();
  });

  it('should render favorites link', () => {
    render(<Navigation />);

    expect(screen.getByText('FAVORITOS')).toBeInTheDocument();
  });

  it('should have correct href for characters', () => {
    render(<Navigation />);
    const link = screen.getByText('PERSONAJES').closest('a');

    expect(link).toHaveAttribute('href', '/');
  });

  it('should have correct href for locations', () => {
    render(<Navigation />);
    const link = screen.getByText('UBICACIONES').closest('a');

    expect(link).toHaveAttribute('href', '/locations');
  });

  it('should have correct href for episodes', () => {
    render(<Navigation />);
    const link = screen.getByText('EPISODIOS').closest('a');

    expect(link).toHaveAttribute('href', '/episodes');
  });

  it('should have correct href for favorites', () => {
    render(<Navigation />);
    const link = screen.getByText('FAVORITOS').closest('a');

    expect(link).toHaveAttribute('href', '/favorites');
  });

  it('should mark first link as active', () => {
    render(<Navigation />);
    const firstLink = screen.getAllByRole('link')[0];

    expect(firstLink).toHaveClass('navigation__link--active');
  });
});
