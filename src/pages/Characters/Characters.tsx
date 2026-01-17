import HeroTitle from '@atoms/HeroTitle/HeroTitle';
import SearchBar from '@molecules/SearchBar/SearchBar';
import Header from '@organisms/Header/Header';
import PageHero from '@organisms/PageHero/PageHero';
import type { JSX } from 'react';
import { useTranslation } from 'react-i18next';
import './Characters.scss';
import CharactersSection from './components/CharactersSection/CharactersSection';

export default function Characters(): JSX.Element {
  const { t } = useTranslation();

  const handleSearch = (value: string) => {
    console.log('Searching:', value);
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
        <CharactersSection />
      </main>
    </div>
  );
}
