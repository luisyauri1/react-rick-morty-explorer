import HeroTitle from '@atoms/HeroTitle/HeroTitle';
import SearchBar from '@molecules/SearchBar/SearchBar';
import Header from '@organisms/Header/Header';
import PageHero from '@organisms/PageHero/PageHero';
import type { CharacterFilters } from '@/types/character';
import type { JSX } from 'react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Characters.scss';
import CharactersSection from './components/CharactersSection/CharactersSection';

export default function Characters(): JSX.Element {
  const { t } = useTranslation();
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

  const handleSearch = (value: string) => {
    handleFilterChange('name', value);
  };

  return (
    <div className="characters-page">
      <Header />
      <main>
        <PageHero>
          <HeroTitle
            title={t('characters.hero.title')}
            highlight={t('characters.hero.highlight')}
            description={t('characters.hero.description')}
          />
          <SearchBar placeholder={t('characters.search.placeholder')} onSearch={handleSearch} />
        </PageHero>
        <CharactersSection
          filters={filters}
          onFilterChange={handleFilterChange}
          onReset={handleReset}
        />
      </main>
    </div>
  );
}
