import Container from '@/components/atoms/Container/Container';
import type { CharacterFilters } from '@/types/character';
import CharacterFiltersPanel from '@pages/Characters/components/CharacterFiltersPanel/CharacterFiltersPanel';
import CharacterList from '@pages/Characters/components/CharacterList/CharacterList';
import type { JSX } from 'react';
import './CharacterLayout.scss';

interface CharacterLayoutProps {
  filters: CharacterFilters;
  onFilterChange: (key: Exclude<keyof CharacterFilters, 'page'>, value: string) => void;
  onReset: () => void;
}

export default function CharacterLayout({
  filters,
  onFilterChange,
  onReset,
}: CharacterLayoutProps): JSX.Element {
  return (
    <section className="character-layout__wrapper">
      <Container>
        <div className="character-layout">
          <aside className="character-layout__filters">
            <CharacterFiltersPanel
              filters={filters}
              onFilterChange={onFilterChange}
              onReset={onReset}
            />
          </aside>
          <main className="character-layout__results">
            <CharacterList filters={filters} />
          </main>
        </div>
      </Container>
    </section>
  );
}
