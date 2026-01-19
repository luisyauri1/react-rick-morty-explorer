import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import CharactersSection from './CharactersSection';

describe('CharactersSection', () => {
  it('should render CharactersFilters component', () => {
    const { container } = render(<CharactersSection />);

    expect(container.querySelector('.characters-section__filters')).toBeInTheDocument();
  });

  it('should render CharacterResults component', () => {
    const { container } = render(<CharactersSection />);

    expect(container.querySelector('.characters-section__results')).toBeInTheDocument();
  });

  it('should have characters-section class', () => {
    const { container } = render(<CharactersSection />);

    expect(container.querySelector('.characters-section')).toBeInTheDocument();
  });

  it('should render filters as aside element', () => {
    render(<CharactersSection />);

    expect(screen.getByRole('complementary')).toBeInTheDocument();
  });

  it('should render results as main element', () => {
    render(<CharactersSection />);

    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  it('should render filters before results in DOM', () => {
    const { container } = render(<CharactersSection />);
    const section = container.querySelector('.characters-section');
    const firstChild = section?.firstElementChild;

    expect(firstChild).toHaveClass('characters-section__filters');
  });
});
