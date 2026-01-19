import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import CharacterResults from './CharacterResults';

vi.mock('@/hooks/useCharacters', () => ({
  useCharacters: vi.fn(),
}));

import { useCharacters } from '@/hooks/useCharacters';

describe('CharacterResults', () => {
  it('should render loading state', () => {
    vi.mocked(useCharacters).mockReturnValue({
      data: null,
      loading: true,
      error: null,
    });

    render(<CharacterResults />);

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('should render error state', () => {
    vi.mocked(useCharacters).mockReturnValue({
      data: null,
      loading: false,
      error: 'Failed to fetch characters',
    });

    render(<CharacterResults />);

    expect(screen.getByText('Error: Failed to fetch characters')).toBeInTheDocument();
  });

  it('should render empty state when no characters', () => {
    vi.mocked(useCharacters).mockReturnValue({
      data: { info: { count: 0, pages: 0, next: null, prev: null }, results: [] },
      loading: false,
      error: null,
    });

    render(<CharacterResults />);

    expect(screen.getByText('No characters found')).toBeInTheDocument();
  });

  it('should render character grid when data is available', () => {
    vi.mocked(useCharacters).mockReturnValue({
      data: {
        info: { count: 1, pages: 1, next: null, prev: null },
        results: [
          {
            id: 1,
            name: 'Rick Sanchez',
            status: 'Alive',
            species: 'Human',
            type: '',
            gender: 'Male',
            origin: { name: 'Earth', url: '' },
            location: { name: 'Earth', url: '' },
            image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
            episode: [],
            url: '',
            created: '',
          },
        ],
      },
      loading: false,
      error: null,
    });

    const { container } = render(<CharacterResults />);

    expect(container.querySelector('.character-results__grid')).toBeInTheDocument();
  });

  it('should render character cards', () => {
    vi.mocked(useCharacters).mockReturnValue({
      data: {
        info: { count: 1, pages: 1, next: null, prev: null },
        results: [
          {
            id: 1,
            name: 'Rick Sanchez',
            status: 'Alive',
            species: 'Human',
            type: '',
            gender: 'Male',
            origin: { name: 'Earth', url: '' },
            location: { name: 'Earth', url: '' },
            image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
            episode: [],
            url: '',
            created: '',
          },
        ],
      },
      loading: false,
      error: null,
    });

    render(<CharacterResults />);

    expect(screen.getByText('Rick Sanchez')).toBeInTheDocument();
  });

  it('should have character-results class', () => {
    vi.mocked(useCharacters).mockReturnValue({
      data: {
        info: { count: 1, pages: 1, next: null, prev: null },
        results: [
          {
            id: 1,
            name: 'Rick',
            status: 'Alive',
            species: 'Human',
            type: '',
            gender: 'Male',
            origin: { name: 'Earth', url: '' },
            location: { name: 'Earth', url: '' },
            image: '',
            episode: [],
            url: '',
            created: '',
          },
        ],
      },
      loading: false,
      error: null,
    });

    const { container } = render(<CharacterResults />);

    expect(container.querySelector('.character-results')).toBeInTheDocument();
  });

  it('should render multiple character cards', () => {
    vi.mocked(useCharacters).mockReturnValue({
      data: {
        info: { count: 2, pages: 1, next: null, prev: null },
        results: [
          {
            id: 1,
            name: 'Rick Sanchez',
            status: 'Alive',
            species: 'Human',
            type: '',
            gender: 'Male',
            origin: { name: 'Earth', url: '' },
            location: { name: 'Earth', url: '' },
            image: '',
            episode: [],
            url: '',
            created: '',
          },
          {
            id: 2,
            name: 'Morty Smith',
            status: 'Alive',
            species: 'Human',
            type: '',
            gender: 'Male',
            origin: { name: 'Earth', url: '' },
            location: { name: 'Earth', url: '' },
            image: '',
            episode: [],
            url: '',
            created: '',
          },
        ],
      },
      loading: false,
      error: null,
    });

    render(<CharacterResults />);

    expect(screen.getAllByRole('article')).toHaveLength(2);
  });
});
