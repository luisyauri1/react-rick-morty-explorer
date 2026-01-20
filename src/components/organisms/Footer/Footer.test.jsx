import '@/test/mocks/i18n';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Footer from './Footer';

describe('Footer', () => {
  it('should render brand title', () => {
    render(<Footer />);

    expect(screen.getByText(/Citadel Archive Project/i)).toBeInTheDocument();
  });

  it('should render systems section title', () => {
    render(<Footer />);

    expect(screen.getByText(/Sistemas/i)).toBeInTheDocument();
  });

  it('should render data source section title', () => {
    render(<Footer />);

    expect(screen.getByText(/Fuente de datos/i)).toBeInTheDocument();
  });

  it('should render all navigation links', () => {
    render(<Footer />);

    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(6);
  });

  it('should show connection status', () => {
    render(<Footer />);

    expect(screen.getByText(/Encrypted connection/i)).toBeInTheDocument();
  });
});
