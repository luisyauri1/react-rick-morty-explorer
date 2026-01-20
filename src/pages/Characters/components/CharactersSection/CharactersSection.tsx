import Container from '@/components/atoms/Container/Container';
import type { CharacterFilters } from '@/types/character';
import CharacterResults from '@pages/Characters/components/CharacterResults/CharacterResults';
import CharactersFilters from '@pages/Characters/components/CharactersFilters/CharactersFilters';
import type { JSX } from 'react';
import { useState } from 'react';
import './CharactersSection.scss';

export default function CharactersSection(): JSX.Element {
  const [filters, setFilters] = useState<CharacterFilters>({});

  type CharacterFilterKey = Exclude<keyof CharacterFilters, 'page'>;

  const handleFilterChange = (key: CharacterFilterKey, value: string) => {
    setFilters(prev => {
      const next = { ...prev };
      if (value) {
        next[key] = value;
      } else {
        delete next[key];
      }
      delete next.page;
      return next;
    });
  };

  const handleReset = () => {
    setFilters({});
  };

  return (
    <section className="characters-section-wrapper">
      <Container>
        <div className="characters-section">
          <aside className="characters-section__filters">
            <CharactersFilters
              filters={filters}
              onFilterChange={handleFilterChange}
              onReset={handleReset}
            />
          </aside>
          <main className="characters-section__results">
            <CharacterResults filters={filters} />
          </main>
        </div>
      </Container>
    </section>
  );
}
