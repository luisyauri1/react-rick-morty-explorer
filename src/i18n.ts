import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import es from './locales/es.json';
import zh from './locales/zh.json';

const LANGUAGE_STORAGE_KEY = 'language';
const VALID_LANGUAGES = ['es', 'en', 'zh'];

// Función para obtener idioma inicial con validación
const getInitialLanguage = (): string => {
  const savedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY);

  // Validar que el idioma guardado sea válido
  if (savedLanguage && VALID_LANGUAGES.includes(savedLanguage)) {
    return savedLanguage;
  }

  // Detectar idioma del navegador
  const browserLanguage = navigator.language.split('-')[0];
  if (VALID_LANGUAGES.includes(browserLanguage)) {
    return browserLanguage;
  }

  // Idioma por defecto
  return 'es';
};

i18n.use(initReactI18next).init({
  resources: {
    es: { translation: es },
    en: { translation: en },
    zh: { translation: zh },
  },
  lng: getInitialLanguage(),
  fallbackLng: 'es',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
