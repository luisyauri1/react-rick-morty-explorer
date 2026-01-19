import { FILTER_OPTIONS } from '@/constants/filterOptions';
import Select from '@atoms/Select/Select';
import type { JSX } from 'react';
import { useTranslation } from 'react-i18next';
import './CharactersFilters.scss';

export default function CharactersFilters(): JSX.Element {
  const { t } = useTranslation();

  return (
    <div className="characters-filters">
      <h2>{t('filters.title')}</h2>

      <Select
        labelKey="filters.status.label"
        id="status"
        name="status"
        options={FILTER_OPTIONS.status}
        placeholderKey="filters.status.placeholder"
      />

      <Select
        labelKey="filters.gender.label"
        id="gender"
        name="gender"
        options={FILTER_OPTIONS.gender}
        placeholderKey="filters.gender.placeholder"
      />

      <Select
        labelKey="filters.species.label"
        id="species"
        name="species"
        options={FILTER_OPTIONS.species}
        placeholderKey="filters.species.placeholder"
      />

      <button type="button">Reiniciar Escáner</button>
    </div>
  );
}
