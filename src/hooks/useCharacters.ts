import { rickAndMortyApi } from '@/services/rickAndMortyApi';
import type { ApiResponse, Character, CharacterFilters } from '@/types/character';
import { useEffect, useState } from 'react';

export function useCharacters(filters?: CharacterFilters) {
  const [data, setData] = useState<ApiResponse<Character> | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        setLoading(true);
        setError(null);
        const result = await rickAndMortyApi.getCharacters(filters);
        setData(result);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, [filters]);

  return { data, loading, error };
}
