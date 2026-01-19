import type { Character } from '@/types/character';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import CharacterCard from './CharacterCard';

describe('CharacterCard', () => {
  const mockCharacter: Character = {
    id: 1,
    name: 'Rick Sanchez',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Male',
    origin: {
      name: 'Earth (C-137)',
      url: 'https://rickandmortyapi.com/api/location/1',
    },
    location: {
      name: 'Citadel of Ricks',
      url: 'https://rickandmortyapi.com/api/location/3',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    episode: ['https://rickandmortyapi.com/api/episode/1'],
    url: 'https://rickandmortyapi.com/api/character/1',
    created: '2017-11-04T18:48:46.250Z',
  };

  it('should render character name', () => {
    render(<CharacterCard character={mockCharacter} />);

    expect(screen.getByText('Rick Sanchez')).toBeInTheDocument();
  });

  it('should render character image', () => {
    render(<CharacterCard character={mockCharacter} />);

    expect(screen.getByAltText('Rick Sanchez')).toBeInTheDocument();
  });

  it('should render character status and species', () => {
    render(<CharacterCard character={mockCharacter} />);

    expect(screen.getByText('Alive - Human')).toBeInTheDocument();
  });

  it('should render character last location', () => {
    render(<CharacterCard character={mockCharacter} />);

    expect(screen.getByText('Citadel of Ricks')).toBeInTheDocument();
  });

  it('should have character-card class', () => {
    const { container } = render(<CharacterCard character={mockCharacter} />);

    expect(container.firstChild).toHaveClass('character-card');
  });

  it('should render image with correct src', () => {
    render(<CharacterCard character={mockCharacter} />);

    expect(screen.getByAltText('Rick Sanchez')).toHaveAttribute(
      'src',
      'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
    );
  });

  it('should render status indicator with alive class', () => {
    const { container } = render(<CharacterCard character={mockCharacter} />);

    expect(container.querySelector('.character-card__status-indicator--alive')).toBeInTheDocument();
  });

  it('should render status indicator with dead class for dead character', () => {
    const deadCharacter = { ...mockCharacter, status: 'Dead' as const };
    const { container } = render(<CharacterCard character={deadCharacter} />);

    expect(container.querySelector('.character-card__status-indicator--dead')).toBeInTheDocument();
  });

  it('should render status indicator with unknown class for unknown status', () => {
    const unknownCharacter = { ...mockCharacter, status: 'unknown' as const };
    const { container } = render(<CharacterCard character={unknownCharacter} />);

    expect(
      container.querySelector('.character-card__status-indicator--unknown')
    ).toBeInTheDocument();
  });

  it('should render as article element', () => {
    render(<CharacterCard character={mockCharacter} />);

    expect(screen.getByRole('article')).toBeInTheDocument();
  });

  it('should render heading with character name', () => {
    render(<CharacterCard character={mockCharacter} />);

    expect(screen.getByRole('heading', { name: 'Rick Sanchez' })).toBeInTheDocument();
  });

  it('should render image with lazy loading', () => {
    render(<CharacterCard character={mockCharacter} />);

    expect(screen.getByAltText('Rick Sanchez')).toHaveAttribute('loading', 'lazy');
  });
});
