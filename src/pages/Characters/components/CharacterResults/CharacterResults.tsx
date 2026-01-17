import type { JSX } from 'react';
import CharacterCard from '../CharacterCard/CharacterCard';
import './CharacterResults.scss';

export default function CharacterResults(): JSX.Element {
  return (
    <div>
      <CharacterCard />
    </div>
  );
}
