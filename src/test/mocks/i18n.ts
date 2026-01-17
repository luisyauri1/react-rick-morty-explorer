import en from '@/locales/en.json';
import es from '@/locales/es.json';
import zh from '@/locales/zh.json';
import { vi } from 'vitest';

type TranslationLanguage = 'es' | 'en' | 'zh';
type TranslationValue = string | Record<string, unknown>;

const translations: Record<TranslationLanguage, typeof es> = {
  es,
  en,
  zh,
};

const getTranslation = (key: string, lang: TranslationLanguage = 'es'): string => {
  const keys = key.split('.');
  let value: TranslationValue = translations[lang];

  for (const k of keys) {
    if (typeof value === 'object' && value !== null) {
      value = value[k] as TranslationValue;
    }
  }

  return typeof value === 'string' ? value : key;
};

export const mockUseTranslation = () => ({
  t: (key: string) => getTranslation(key, 'es'),
  i18n: {
    language: 'es',
    changeLanguage: vi.fn(() => {
      return Promise.resolve();
    }),
  },
});

vi.mock('react-i18next', () => ({
  useTranslation: () => mockUseTranslation(),
}));
