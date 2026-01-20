import Container from '@/components/atoms/Container/Container';
import CharacterResults from '@pages/Characters/components/CharacterResults/CharacterResults';
import CharactersFilters from '@pages/Characters/components/CharactersFilters/CharactersFilters';
import type { CharacterFilters } from '@/types/character';
import type { JSX } from 'react';
import './CharactersSection.scss';

interface CharactersSectionProps {
  filters: CharacterFilters;
  onFilterChange: (key: Exclude<keyof CharacterFilters, 'page'>, value: string) => void;
  onReset: () => void;
}

export default function CharactersSection({
  filters,
  onFilterChange,
  onReset,
}: CharactersSectionProps): JSX.Element {
  return (
    <section className="characters-section-wrapper">
      <Container>
        <div className="characters-section">
          <aside className="characters-section__filters">
            <CharactersFilters
              filters={filters}
              onFilterChange={onFilterChange}
              onReset={onReset}
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
