import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './en.json';
import ua from './ua.json';
import cz from './cz.json';

import { Language } from '../types/types';

export const resources = {
  cz: { translation: cz },
  en: { translation: en },
  ua: { translation: ua },
} as const;

const LANG_KEY = 'appLanguage';

const fallbackLang =
  (localStorage.getItem(LANG_KEY) as Language) || Language.CZ;

i18n.use(initReactI18next).init({
  resources,
  lng: fallbackLang,
  fallbackLng: 'cz',
  interpolation: { escapeValue: false },
  pluralSeparator: '_',
});

export const changeLanguage = (lng: Language) => {
  i18n.changeLanguage(lng);
  localStorage.setItem(LANG_KEY, lng);
};

export default i18n;
