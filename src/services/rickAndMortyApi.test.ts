import { describe, it, expect, vi, afterEach } from 'vitest';
import type { ApiResponse, Character } from '@/types/character';
import { rickAndMortyApi } from './rickAndMortyApi';

const mockCharacter: Character = {
  id: 1,
  name: 'Rick Sanchez',
  status: 'Alive',
  species: 'Human',
  type: '',
  gender: 'Male',
  origin: { name: 'Earth (C-137)', url: 'https://rickandmortyapi.com/api/location/1' },
  location: { name: 'Citadel of Ricks', url: 'https://rickandmortyapi.com/api/location/3' },
  image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  episode: ['https://rickandmortyapi.com/api/episode/1'],
  url: 'https://rickandmortyapi.com/api/character/1',
  created: '2017-11-04T18:48:46.250Z',
};

const mockResponse: ApiResponse<Character> = {
  info: {
    count: 826,
    pages: 42,
    next: 'https://rickandmortyapi.com/api/character/?page=2',
    prev: null,
  },
  results: [mockCharacter],
};

afterEach(() => {
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
});

describe('rickAndMortyApi.getCharacters', () => {
  it('returns characters when fetch succeeds', async () => {
    const json = vi.fn().mockResolvedValue(mockResponse);
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({ ok: true, json }));

    const result = await rickAndMortyApi.getCharacters();

    expect(result).toEqual(mockResponse);
  });

  it('builds query string from filters', async () => {
    const json = vi.fn().mockResolvedValue(mockResponse);
    const fetchMock = vi.fn().mockResolvedValue({ ok: true, json });
    vi.stubGlobal('fetch', fetchMock);

    await rickAndMortyApi.getCharacters({ name: 'Rick', status: 'Alive' });

    expect(fetchMock).toHaveBeenCalledWith(
      'https://rickandmortyapi.com/api/character?name=Rick&status=Alive',
      { signal: undefined }
    );
  });

  it('forwards the abort signal to fetch', async () => {
    const controller = new AbortController();
    const json = vi.fn().mockResolvedValue(mockResponse);
    const fetchMock = vi.fn().mockResolvedValue({ ok: true, json });
    vi.stubGlobal('fetch', fetchMock);

    await rickAndMortyApi.getCharacters(undefined, controller.signal);

    expect(fetchMock).toHaveBeenCalledWith('https://rickandmortyapi.com/api/character', {
      signal: controller.signal,
    });
  });

  it('throws when fetch response is not ok', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({ ok: false }));

    await expect(rickAndMortyApi.getCharacters()).rejects.toThrow('Failed to fetch characters');
  });
});

describe('rickAndMortyApi.getCharacterById', () => {
  it('returns a character when fetch succeeds', async () => {
    const json = vi.fn().mockResolvedValue(mockCharacter);
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({ ok: true, json }));

    const result = await rickAndMortyApi.getCharacterById(1);

    expect(result).toEqual(mockCharacter);
  });

  it('throws when fetch response is not ok', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({ ok: false }));

    await expect(rickAndMortyApi.getCharacterById(2)).rejects.toThrow('Failed to fetch character');
  });
});
