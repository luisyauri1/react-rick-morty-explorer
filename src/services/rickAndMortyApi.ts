import type { ApiResponse, Character, CharacterFilters } from '@/types/character';

const BASE_URL = 'https://rickandmortyapi.com/api';

export const rickAndMortyApi = {
  async getCharacters(
    filters?: CharacterFilters,
    signal?: AbortSignal
  ): Promise<ApiResponse<Character>> {
    const params = new URLSearchParams();

    if (filters) {
      Object.entries(filters).forEach(([key, value]) => {
        if (value) params.append(key, String(value));
      });
    }

    const url = `${BASE_URL}/character${params.toString() ? `?${params}` : ''}`;
    const response = await fetch(url, { signal });

    if (!response.ok) {
      throw new Error('Failed to fetch characters');
    }

    return response.json();
  },

  async getCharacterById(id: number): Promise<Character> {
    const response = await fetch(`${BASE_URL}/character/${id}`);

    if (!response.ok) {
      throw new Error('Failed to fetch character');
    }

    return response.json();
  },
};
