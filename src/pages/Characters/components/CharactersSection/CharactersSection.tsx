import Container from '@/components/atoms/Container/Container';
import CharacterResults from '@pages/Characters/components/CharacterResults/CharacterResults';
import CharactersFilters from '@pages/Characters/components/CharactersFilters/CharactersFilters';
import type { JSX } from 'react';
import './CharactersSection.scss';

export default function CharactersSection(): JSX.Element {
  return (
    <section className="characters-section-wrapper">
      <Container>
        <div className="characters-section">
          <aside className="characters-section__filters">
            <CharactersFilters />
          </aside>
          <main className="characters-section__results">
            <CharacterResults />
          </main>
        </div>
      </Container>
    </section>
  );
}
