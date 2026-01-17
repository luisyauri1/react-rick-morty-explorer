import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import HeroTitle from './HeroTitle';

describe('HeroTitle', () => {
  it('should render title', () => {
    render(<HeroTitle title="Test Title" description="Test description" />);

    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });

  it('should render description', () => {
    render(<HeroTitle title="Test Title" description="Test description" />);

    expect(screen.getByText('Test description')).toBeInTheDocument();
  });

  it('should render highlight when provided', () => {
    render(<HeroTitle title="Test Title" highlight="Highlight" description="Test description" />);

    expect(screen.getByText('Highlight')).toBeInTheDocument();
  });

  it('should have gradient class on highlight', () => {
    render(<HeroTitle title="Test Title" highlight="Highlight" description="Test description" />);
    const highlight = screen.getByText('Highlight');

    expect(highlight).toHaveClass('hero-title__title--gradient');
  });

  it('should render children when provided', () => {
    render(
      <HeroTitle title="Test Title" description="Test description">
        <button>Click me</button>
      </HeroTitle>
    );

    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('should have section element with correct class', () => {
    const { container } = render(<HeroTitle title="Test Title" description="Test description" />);
    const section = container.querySelector('.hero-title');

    expect(section).toBeInTheDocument();
  });

  it('should render title as h2 element', () => {
    render(<HeroTitle title="Test Title" description="Test description" />);
    const heading = screen.getByRole('heading', { level: 2 });

    expect(heading).toHaveTextContent('Test Title');
  });

  it('should not render highlight span when highlight is not provided', () => {
    const { container } = render(<HeroTitle title="Test Title" description="Test description" />);
    const highlightSpan = container.querySelector('.hero-title__title--gradient');

    expect(highlightSpan).not.toBeInTheDocument();
  });
});
