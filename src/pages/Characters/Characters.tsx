import type { JSX } from 'react';
import Container from '../../components/Container/Container';
import Header from '../../components/Header/Header';
import HeroSection from '../../components/HeroSection/HeroSection';
import './Characters.scss';

export default function Characters(): JSX.Element {
  return (
    <div className="characters-page">
      <Header />
      <main className="characters-page__main">
        <Container>
          <HeroSection
            title="Análisis de"
            highlight="Especímenes Críticos"
            description="Registro centralizado para la clasificación de variantes, monitoreo de estados biológicos y localización interdimensional en tiempo real."
          />
        </Container>
      </main>
    </div>
  );
}
