import { useCharacters } from '@/hooks/useCharacters';
import CharacterCard from '@pages/Characters/components/CharacterCard/CharacterCard';
import type { JSX } from 'react';
import './CharacterResults.scss';

export default function CharacterResults(): JSX.Element {
  const { data, loading, error } = useCharacters();

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
