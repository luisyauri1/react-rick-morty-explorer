import CharacterResults from '@pages/Characters/components/CharacterResults/CharacterResults';
import CharactersFilters from '@pages/Characters/components/CharactersFilters/CharactersFilters';
import type { JSX } from 'react';
import './CharactersSection.scss';

export default function CharactersSection(): JSX.Element {
  return (
    <div>
      <CharactersFilters />
      <CharacterResults />
    </div>
  );
}
