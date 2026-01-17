import type { JSX } from 'react';
import { useTranslation } from 'react-i18next';
import CharactersSection from '../../components/CharactersSection/CharactersSection';
import Header from '../../components/Header/Header';
import HeroTitle from '../../components/HeroTitle/HeroTitle';
import PageHero from '../../components/PageHero/PageHero';
import SearchBar from '../../components/SearchBar/SearchBar';
import './Characters.scss';

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
