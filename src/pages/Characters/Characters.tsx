import type { JSX } from 'react';
import { useTranslation } from 'react-i18next';
import HeroTitle from '../../components/atoms/HeroTitle/HeroTitle';
import SearchBar from '../../components/molecules/SearchBar/SearchBar';
import Header from '../../components/organisms/Header/Header';
import PageHero from '../../components/organisms/PageHero/PageHero';
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
