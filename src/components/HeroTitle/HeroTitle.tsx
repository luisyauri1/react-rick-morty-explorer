import type { JSX, ReactNode } from 'react';
import './HeroTitle.scss';

interface HeroTitleProps {
  title: string;
  highlight?: string;
  description: string;
  children?: ReactNode;
}

export default function HeroTitle({
  title,
  highlight,
  description,
  children,
}: HeroTitleProps): JSX.Element {
  return (
    <section className="hero-title">
      <h2 className="hero-title__title">
        {title} {highlight && <span className="hero-title__title--gradient">{highlight}</span>}
      </h2>
      <p className="hero-title__description">{description}</p>
      {children}
    </section>
  );
}
