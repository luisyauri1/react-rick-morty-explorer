import { useState } from 'react';
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
  const getInitialLanguage = (): LanguageValue => {
    const savedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY);

    if (savedLanguage && Object.values(LANGUAGES).includes(savedLanguage as LanguageValue)) {
      return savedLanguage as LanguageValue;
    }

    const browserLanguage = navigator.language.split('-')[0];
    if (browserLanguage === LANGUAGES.ES) return LANGUAGES.ES;
    if (browserLanguage === LANGUAGES.ZH) return LANGUAGES.ZH;
    return LANGUAGES.EN;
  };

  const [currentLanguage, setCurrentLanguage] = useState<LanguageValue>(getInitialLanguage);
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (language: LanguageValue) => {
    setCurrentLanguage(language);
    localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    setIsOpen(false);

    console.log('Idioma cambiado a:', language);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="language-selector">
      <button
        className="language-selector__button"
        onClick={toggleDropdown}
        aria-label="Seleccionar idioma"
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
