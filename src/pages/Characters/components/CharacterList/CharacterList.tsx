import { useCharacters } from '@/hooks/useCharacters';
import type { CharacterFilters } from '@/types/character';
import CharacterCard from '@pages/Characters/components/CharacterCard/CharacterCard';
import type { JSX } from 'react';
import './CharacterList.scss';

interface CharacterListProps {
  filters?: CharacterFilters;
}

export default function CharacterList({ filters }: CharacterListProps): JSX.Element {
  const { data, loading, error } = useCharacters(filters);

  if (loading) {
    return <div className="character-list__loading">Loading...</div>;
  }

  if (error) {
    return <div className="character-list__error">Error: {error}</div>;
  }

  if (!data?.results.length) {
    return <div className="character-list__empty">No characters found</div>;
  }

  return (
    <div className="character-list">
      <div className="character-list__grid">
        {data.results.map(character => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
}
