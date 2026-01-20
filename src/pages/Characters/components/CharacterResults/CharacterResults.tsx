import { useCharacters } from '@/hooks/useCharacters';
import type { CharacterFilters } from '@/types/character';
import CharacterCard from '@pages/Characters/components/CharacterCard/CharacterCard';
import type { JSX } from 'react';
import './CharacterResults.scss';

interface CharacterResultsProps {
  filters?: CharacterFilters;
}

export default function CharacterResults({ filters }: CharacterResultsProps): JSX.Element {
  const { data, loading, error } = useCharacters(filters);

  if (loading) {
    return <div className="character-results__loading">Loading...</div>;
  }

  if (error) {
    return <div className="character-results__error">Error: {error}</div>;
  }

  if (!data?.results.length) {
    return <div className="character-results__empty">No characters found</div>;
  }

  return (
    <div className="character-results">
      <div className="character-results__grid">
        {data.results.map(character => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
}
