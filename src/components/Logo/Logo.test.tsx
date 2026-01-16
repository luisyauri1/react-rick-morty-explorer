import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import '../../test/mocks/i18n';
import Logo from './Logo';

describe('Logo', () => {
  it('should render logo with title', () => {
    render(<Logo />);

    expect(screen.getByText('C-137')).toBeInTheDocument();
  });

  it('should render link to home page', () => {
    render(<Logo />);
    const link = screen.getByRole('link');

    expect(link).toHaveAttribute('href', '/');
  });

  it('should have accessible label', () => {
    render(<Logo />);
    const link = screen.getByRole('link');

    expect(link).toHaveAttribute('aria-label');
  });
});
