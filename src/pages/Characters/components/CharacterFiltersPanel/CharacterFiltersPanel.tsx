import Button from '@/components/atoms/Button/Button';
import { FILTER_OPTIONS } from '@/constants/filterOptions';
import type { CharacterFilters } from '@/types/character';
import Select from '@atoms/Select/Select';
import type { JSX } from 'react';
import { useTranslation } from 'react-i18next';
import './CharacterFiltersPanel.scss';

type CharacterFilterKey = Exclude<keyof CharacterFilters, 'page'>;

interface CharacterFiltersProps {
  filters: CharacterFilters;
  onFilterChange: (key: CharacterFilterKey, value: string) => void;
  onReset: () => void;
}

export default function CharacterFiltersPanel({
  filters,
  onFilterChange,
  onReset,
}: CharacterFiltersProps): JSX.Element {
  const { t } = useTranslation();

  return (
    <div className="character-filters">
      <h2 className="character-filters__title">{t('filters.title')}</h2>

      <div className="character-filters__content">
        <Select
          labelKey="filters.status.label"
          id="status"
          name="status"
          options={FILTER_OPTIONS.status}
          placeholderKey="filters.status.placeholder"
          size="sm"
          value={filters.status ?? ''}
          onChange={event => onFilterChange('status', event.target.value)}
        />

        <Select
          labelKey="filters.gender.label"
          id="gender"
          name="gender"
          options={FILTER_OPTIONS.gender}
          placeholderKey="filters.gender.placeholder"
          size="sm"
          value={filters.gender ?? ''}
          onChange={event => onFilterChange('gender', event.target.value)}
        />

        <Select
          labelKey="filters.species.label"
          id="species"
          name="species"
          options={FILTER_OPTIONS.species}
          placeholderKey="filters.species.placeholder"
          size="sm"
          value={filters.species ?? ''}
          onChange={event => onFilterChange('species', event.target.value)}
        />
      </div>

      <div className="character-filters__actions">
        <Button variant="outline" fullWidth onClick={onReset}>
          {t('filters.resetButton')}
        </Button>
      </div>
    </div>
  );
}
