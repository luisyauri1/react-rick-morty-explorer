import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import './ThemeToggle.scss';

// Constantes
const THEME_STORAGE_KEY = 'theme';
const DARK_THEME_CLASS = 'dark-theme';
const THEME_VALUES = {
  DARK: 'dark',
  LIGHT: 'light',
} as const;

export default function ThemeToggle() {
  const { t } = useTranslation();

  const getInitialTheme = (): boolean => {
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);

    if (savedTheme) {
      return savedTheme === THEME_VALUES.DARK;
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  };

  const [isDark, setIsDark] = useState(getInitialTheme);

  const applyTheme = (isDarkMode: boolean) => {
    const htmlElement = document.documentElement;

    if (isDarkMode) {
      htmlElement.classList.add(DARK_THEME_CLASS);
    } else {
      htmlElement.classList.remove(DARK_THEME_CLASS);
    }
  };

  useEffect(() => {
    applyTheme(isDark);
  }, [isDark]);

  const handleToggle = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);

    const themeValue = newTheme ? THEME_VALUES.DARK : THEME_VALUES.LIGHT;
    localStorage.setItem(THEME_STORAGE_KEY, themeValue);
  };

  return (
    <button
      className="theme-toggle"
      onClick={handleToggle}
      aria-label={isDark ? t('header.actions.lightMode') : t('header.actions.darkMode')}
      title={isDark ? t('header.actions.lightMode') : t('header.actions.darkMode')}
    >
      <span className="theme-toggle__icon">
        {isDark ? <MdLightMode aria-hidden="true" /> : <MdDarkMode aria-hidden="true" />}
      </span>
    </button>
  );
}
