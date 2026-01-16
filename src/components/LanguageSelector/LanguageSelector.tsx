import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MdLanguage } from 'react-icons/md';
import './LanguageSelector.scss';

// Constantes
const LANGUAGE_STORAGE_KEY = 'language';
const LANGUAGES = {
  ES: 'es',
  EN: 'en',
  ZH: 'zh',
} as const;

type LanguageKey = keyof typeof LANGUAGES;
type LanguageValue = (typeof LANGUAGES)[LanguageKey];

const LANGUAGE_LABELS: Record<LanguageValue, string> = {
  [LANGUAGES.ES]: 'ES',
  [LANGUAGES.EN]: 'EN',
  [LANGUAGES.ZH]: '中文',
};

export default function LanguageSelector() {
  const { i18n, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const currentLanguage = i18n.language as LanguageValue;

  // Cerrar dropdown al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleLanguageChange = (language: LanguageValue) => {
    i18n.changeLanguage(language);
    localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="language-selector" ref={dropdownRef}>
      <button
        className="language-selector__button"
        onClick={toggleDropdown}
        aria-label={t('header.actions.selectLanguage')}
        aria-expanded={isOpen}
      >
        <MdLanguage className="language-selector__icon" aria-hidden="true" />
        <span className="language-selector__text">{LANGUAGE_LABELS[currentLanguage]}</span>
      </button>

      {isOpen && (
        <ul className="language-selector__dropdown">
          {Object.entries(LANGUAGES).map(([, value]) => (
            <li key={value}>
              <button
                className={`language-selector__option ${
                  currentLanguage === value ? 'language-selector__option--active' : ''
                }`}
                onClick={() => handleLanguageChange(value)}
              >
                {LANGUAGE_LABELS[value]}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
