import { rickAndMortyApi } from '@/services/rickAndMortyApi';
import type { ApiResponse, Character } from '@/types/character';
import { renderHook, waitFor } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { useCharacters } from './useCharacters';

vi.mock('@/services/rickAndMortyApi', () => ({
  rickAndMortyApi: {
    getCharacters: vi.fn(),
  },
}));

describe('useCharacters', () => {
  const mockApiResponse: ApiResponse<Character> = {
    info: {
      count: 826,
      pages: 42,
      next: 'https://rickandmortyapi.com/api/character/?page=2',
      prev: null,
    },
    results: [
      {
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
      },
    ],
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should initialize with loading state', async () => {
    vi.mocked(rickAndMortyApi.getCharacters).mockResolvedValue(mockApiResponse);
    const { result } = renderHook(() => useCharacters());

    expect(result.current.loading).toBe(true);

    await waitFor(() => {
      expect(rickAndMortyApi.getCharacters).toHaveBeenCalled();
    });
  });

  it('should fetch characters on mount', async () => {
    vi.mocked(rickAndMortyApi.getCharacters).mockResolvedValue(mockApiResponse);
    renderHook(() => useCharacters());

    await waitFor(() => {
      expect(rickAndMortyApi.getCharacters).toHaveBeenCalledTimes(1);
    });
  });

  it('should set data after successful fetch', async () => {
    vi.mocked(rickAndMortyApi.getCharacters).mockResolvedValue(mockApiResponse);
    const { result } = renderHook(() => useCharacters());

    await waitFor(() => {
      expect(result.current.data).toEqual(mockApiResponse);
    });
  });

  it('should set loading to false after successful fetch', async () => {
    vi.mocked(rickAndMortyApi.getCharacters).mockResolvedValue(mockApiResponse);
    const { result } = renderHook(() => useCharacters());

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });
  });

  it('should set error on failed fetch', async () => {
    vi.mocked(rickAndMortyApi.getCharacters).mockRejectedValue(
      new Error('Failed to fetch characters')
    );
    const { result } = renderHook(() => useCharacters());

    await waitFor(() => {
      expect(result.current.error).toBe('Failed to fetch characters');
    });
  });

  it('should set loading to false after failed fetch', async () => {
    vi.mocked(rickAndMortyApi.getCharacters).mockRejectedValue(
      new Error('Failed to fetch characters')
    );
    const { result } = renderHook(() => useCharacters());

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });
  });

  it('should pass filters to API', async () => {
    vi.mocked(rickAndMortyApi.getCharacters).mockResolvedValue(mockApiResponse);
    const filters = { name: 'Rick', status: 'Alive' };
    renderHook(() => useCharacters(filters));

    await waitFor(() => {
      expect(rickAndMortyApi.getCharacters).toHaveBeenCalledWith(filters);
    });
  });

  it('should refetch when filters change', async () => {
    vi.mocked(rickAndMortyApi.getCharacters).mockResolvedValue(mockApiResponse);
    const { rerender } = renderHook(({ filters }) => useCharacters(filters), {
      initialProps: { filters: { name: 'Rick' } },
    });

    await waitFor(() => {
      expect(rickAndMortyApi.getCharacters).toHaveBeenCalledTimes(1);
    });

    rerender({ filters: { name: 'Morty' } });

    await waitFor(() => {
      expect(rickAndMortyApi.getCharacters).toHaveBeenCalledTimes(2);
    });
  });

  it('should clear error on successful refetch', async () => {
    vi.mocked(rickAndMortyApi.getCharacters).mockRejectedValueOnce(new Error('Error'));
    const { result, rerender } = renderHook(({ filters }) => useCharacters(filters), {
      initialProps: { filters: { name: 'Rick' } },
    });

    await waitFor(() => {
      expect(result.current.error).toBe('Error');
    });

    vi.mocked(rickAndMortyApi.getCharacters).mockResolvedValue(mockApiResponse);
    rerender({ filters: { name: 'Morty' } });

    await waitFor(() => {
      expect(result.current.error).toBeNull();
    });
  });

  it('should handle unknown error type', async () => {
    vi.mocked(rickAndMortyApi.getCharacters).mockRejectedValue('String error');
    const { result } = renderHook(() => useCharacters());

    await waitFor(() => {
      expect(result.current.error).toBe('Unknown error');
    });
  });

  it('should initialize with null data', async () => {
    vi.mocked(rickAndMortyApi.getCharacters).mockResolvedValue(mockApiResponse);
    const { result } = renderHook(() => useCharacters());

    expect(result.current.data).toBeNull();

    await waitFor(() => {
      expect(rickAndMortyApi.getCharacters).toHaveBeenCalled();
    });
  });

  it('should initialize with null error', async () => {
    vi.mocked(rickAndMortyApi.getCharacters).mockResolvedValue(mockApiResponse);
    const { result } = renderHook(() => useCharacters());

    expect(result.current.error).toBeNull();

    await waitFor(() => {
      expect(rickAndMortyApi.getCharacters).toHaveBeenCalled();
    });
  });
});
