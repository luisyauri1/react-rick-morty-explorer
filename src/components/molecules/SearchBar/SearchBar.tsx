import type { JSX } from 'react';
import { useTranslation } from 'react-i18next';
import { FiSearch } from 'react-icons/fi';
import './SearchBar.scss';

interface SearchBarProps {
  placeholder?: string;
  onSearch?: (value: string) => void;
  value?: string;
}

export default function SearchBar({ placeholder, onSearch, value }: SearchBarProps): JSX.Element {
  const { t } = useTranslation();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch?.(e.target.value);
  };

  return (
    <div className="search-bar">
      <div className="search-bar__icon">
        <FiSearch size={20} />
      </div>
      <input
        type="text"
        className="search-bar__input"
        placeholder={placeholder || t('characters.search.placeholder')}
        value={value ?? ''}
        onChange={handleChange}
        aria-label="Buscar personajes"
      />
    </div>
  );
}
