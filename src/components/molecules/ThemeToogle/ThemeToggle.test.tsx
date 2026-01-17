import '@/test/mocks/i18n';
import { fireEvent, render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import ThemeToggle from './ThemeToggle';

describe('ThemeToggle', () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.classList.remove('dark-theme');
  });

  it('should render theme toggle button', () => {
    render(<ThemeToggle />);
    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
  });

  it('should toggle theme on click', () => {
    render(<ThemeToggle />);
    const button = screen.getByRole('button');

    fireEvent.click(button);

    expect(document.documentElement.classList.contains('dark-theme')).toBe(true);
    expect(localStorage.getItem('theme')).toBe('dark');
  });

  it('should apply saved theme from localStorage', () => {
    localStorage.setItem('theme', 'dark');

    render(<ThemeToggle />);

    expect(document.documentElement.classList.contains('dark-theme')).toBe(true);
  });
});
