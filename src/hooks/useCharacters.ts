import { rickAndMortyApi } from '@/services/rickAndMortyApi';
import type { ApiResponse, Character, CharacterFilters } from '@/types/character';
import { useEffect, useState } from 'react';

export function useCharacters(filters?: CharacterFilters) {
  const [data, setData] = useState<ApiResponse<Character> | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchCharacters = async () => {
      try {
        setLoading(true);
        setError(null);
        const result = await rickAndMortyApi.getCharacters(filters, controller.signal);
        setData(result);
      } catch (err) {
        if (controller.signal.aborted) return;
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    };

    fetchCharacters();
    return () => {
      controller.abort();
    };
  }, [filters]);

  return { data, loading, error };
}
