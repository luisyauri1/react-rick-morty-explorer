import type { JSX } from 'react';
import CharacterResults from '../CharacterResults/CharacterResults';
import CharactersFilters from '../CharactersFilters/CharactersFilters';
import './CharactersSection.scss';

export default function CharactersSection(): JSX.Element {
  return (
    <div>
      <CharactersFilters />
      <CharacterResults />
    </div>
  );
}
