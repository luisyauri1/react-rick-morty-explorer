import Button from '@/components/atoms/Button/Button';
import { FILTER_OPTIONS } from '@/constants/filterOptions';
import Select from '@atoms/Select/Select';
import type { JSX } from 'react';
import { useTranslation } from 'react-i18next';
import './CharactersFilters.scss';

export default function CharactersFilters(): JSX.Element {
  const { t } = useTranslation();

  return (
    <div className="characters-filters">
      <h2 className="characters-filters__title">{t('filters.title')}</h2>

      <div className="characters-filters__content">
        <Select
          labelKey="filters.status.label"
          id="status"
          name="status"
          options={FILTER_OPTIONS.status}
          placeholderKey="filters.status.placeholder"
          size="sm"
        />

        <Select
          labelKey="filters.gender.label"
          id="gender"
          name="gender"
          options={FILTER_OPTIONS.gender}
          placeholderKey="filters.gender.placeholder"
          size="sm"
        />

        <Select
          labelKey="filters.species.label"
          id="species"
          name="species"
          options={FILTER_OPTIONS.species}
          placeholderKey="filters.species.placeholder"
          size="sm"
        />
      </div>

      <div className="characters-filters__actions">
        <Button variant="outline" fullWidth>
          {t('filters.resetButton')}
        </Button>
      </div>
    </div>
  );
}
