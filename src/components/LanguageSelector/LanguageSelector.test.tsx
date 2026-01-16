import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import '../../test/mocks/i18n';
import LanguageSelector from './LanguageSelector';

describe('LanguageSelector', () => {
  it('should render language selector button', () => {
    render(<LanguageSelector />);
    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
  });

  it('should show current language as ES', () => {
    render(<LanguageSelector />);

    expect(screen.getByText('ES')).toBeInTheDocument();
  });

  it('should have language icon', () => {
    const { container } = render(<LanguageSelector />);
    const icon = container.querySelector('.language-selector__icon');

    expect(icon).toBeInTheDocument();
  });

  it('should have accessible label', () => {
    render(<LanguageSelector />);
    const button = screen.getByRole('button');

    expect(button).toHaveAttribute('aria-label', 'Seleccionar idioma');
  });

  it('should not show dropdown initially', () => {
    render(<LanguageSelector />);
    const dropdown = screen.queryByRole('list');

    expect(dropdown).not.toBeInTheDocument();
  });

  it('should toggle dropdown on click', () => {
    render(<LanguageSelector />);
    const button = screen.getByRole('button');

    fireEvent.click(button);

    expect(screen.getByRole('list')).toBeInTheDocument();
  });

  it('should have aria-expanded false initially', () => {
    render(<LanguageSelector />);
    const button = screen.getByRole('button');

    expect(button).toHaveAttribute('aria-expanded', 'false');
  });

  it('should have aria-expanded true when open', () => {
    render(<LanguageSelector />);
    const button = screen.getByRole('button');

    fireEvent.click(button);

    expect(button).toHaveAttribute('aria-expanded', 'true');
  });

  it('should display ES option in dropdown', () => {
    render(<LanguageSelector />);
    const button = screen.getByRole('button');

    fireEvent.click(button);

    expect(screen.getAllByText('ES').length).toBeGreaterThan(1);
  });

  it('should display EN option in dropdown', () => {
    render(<LanguageSelector />);
    const button = screen.getByRole('button');

    fireEvent.click(button);

    expect(screen.getByText('EN')).toBeInTheDocument();
  });

  it('should display Chinese option in dropdown', () => {
    render(<LanguageSelector />);
    const button = screen.getByRole('button');

    fireEvent.click(button);

    expect(screen.getByText('中文')).toBeInTheDocument();
  });

  it('should close dropdown when selecting a language', () => {
    render(<LanguageSelector />);
    const button = screen.getByRole('button');

    fireEvent.click(button);
    const enOption = screen.getByText('EN');
    fireEvent.click(enOption);

    expect(screen.queryByRole('list')).not.toBeInTheDocument();
  });
});
