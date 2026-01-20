import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import CharacterList from './CharacterList';

vi.mock('@/hooks/useCharacters', () => ({
  useCharacters: vi.fn(),
}));

import { useCharacters } from '@/hooks/useCharacters';

describe('CharacterList', () => {
  it('should render loading state', () => {
    vi.mocked(useCharacters).mockReturnValue({
      data: null,
      loading: true,
      error: null,
    });

    render(<CharacterList />);

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('should render error state', () => {
    vi.mocked(useCharacters).mockReturnValue({
      data: null,
      loading: false,
      error: 'Failed to fetch characters',
    });

    render(<CharacterList />);

    expect(screen.getByText('Error: Failed to fetch characters')).toBeInTheDocument();
  });

  it('should render empty state when no characters', () => {
    vi.mocked(useCharacters).mockReturnValue({
      data: { info: { count: 0, pages: 0, next: null, prev: null }, results: [] },
      loading: false,
      error: null,
    });

    render(<CharacterList />);

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

    const { container } = render(<CharacterList />);

    expect(container.querySelector('.character-list__grid')).toBeInTheDocument();
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

    render(<CharacterList />);

    expect(screen.getByText('Rick Sanchez')).toBeInTheDocument();
  });

  it('should have character-list class', () => {
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

    const { container } = render(<CharacterList />);

    expect(container.querySelector('.character-list')).toBeInTheDocument();
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

    render(<CharacterList />);

    expect(screen.getAllByRole('article')).toHaveLength(2);
  });
});
