import '@/test/mocks/i18n';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Header from './Header';

describe('Header', () => {
  it('should render header element', () => {
    const { container } = render(<Header />);
    const header = container.querySelector('.header');

    expect(header).toBeInTheDocument();
  });

  it('should render Logo component', () => {
    render(<Header />);

    expect(screen.getByText('C-137')).toBeInTheDocument();
  });

  it('should render Navigation component', () => {
    render(<Header />);

    expect(screen.getByRole('navigation', { hidden: true })).toBeInTheDocument();
  });

  it('should render HeaderActions component', () => {
    render(<Header />);
    const buttons = screen.getAllByRole('button');

    expect(buttons.length).toBeGreaterThan(0);
  });

  it('should be wrapped in Container', () => {
    const { container } = render(<Header />);
    const containerDiv = container.querySelector('.container');

    expect(containerDiv).toBeInTheDocument();
  });
});
