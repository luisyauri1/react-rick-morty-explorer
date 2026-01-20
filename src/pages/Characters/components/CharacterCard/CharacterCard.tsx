import type { Character } from '@/types/character';
import type { JSX } from 'react';
import { useTranslation } from 'react-i18next';
import './CharacterCard.scss';

interface CharacterCardProps {
  character: Character;
}

export default function CharacterCard({ character }: CharacterCardProps): JSX.Element {
  const { t } = useTranslation();

  return (
    <article className="character-card">
      <div className="character-card__image-wrapper">
        <img
          src={character.image}
          alt={character.name}
          className="character-card__image"
          loading="lazy"
        />
      </div>
      <div className="character-card__content">
        <h3 className="character-card__name">{character.name}</h3>
        <div className="character-card__info">
          <div className="character-card__status">
            <span
              className={`character-card__status-indicator character-card__status-indicator--${character.status.toLowerCase()}`}
            />
            <span>
              {character.status} - {character.species}
            </span>
          </div>
          <div className="character-card__location">
            <span className="character-card__label">{t('characters.card.lastLocation')}</span>
            <span className="character-card__value">{character.location.name}</span>
          </div>
        </div>
      </div>
    </article>
  );
}
