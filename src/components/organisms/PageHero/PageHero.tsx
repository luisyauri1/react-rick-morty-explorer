import type { JSX, ReactNode } from 'react';
import Container from '../../atoms/Container/Container';
import './PageHero.scss';

interface PageHeroProps {
  children: ReactNode;
}

export default function PageHero({ children }: PageHeroProps): JSX.Element {
  return (
    <section className="page-hero">
      <Container className="page-hero__container">{children}</Container>
    </section>
  );
}
