import type { JSX } from 'react';
import { useTranslation } from 'react-i18next';
import Container from '../../components/Container/Container';
import Header from '../../components/Header/Header';
import HeroSection from '../../components/HeroSection/HeroSection';
import './Characters.scss';

export default function Characters(): JSX.Element {
  const { t } = useTranslation();
  return (
    <div className="characters-page">
      <Header />
      <main className="characters-page__main">
        <Container>
          <HeroSection
            title={t('characters.hero.title')}
            highlight={t('characters.hero.highlight')}
            description={t('characters.hero.description')}
          />
        </Container>
      </main>
    </div>
  );
}
