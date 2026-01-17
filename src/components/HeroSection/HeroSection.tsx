import type { JSX, ReactNode } from 'react';
import './HeroSection.scss';

interface HeroSectionProps {
  title: string;
  highlight?: string;
  description: string;
  children?: ReactNode;
}

export default function HeroSection({
  title,
  highlight,
  description,
  children,
}: HeroSectionProps): JSX.Element {
  return (
    <section className="hero-section">
      <h2 className="hero-section__title">
        {title} {highlight && <span className="hero-section__title--gradient">{highlight}</span>}
      </h2>
      <p className="hero-section__description">{description}</p>
      {children}
    </section>
  );
}
