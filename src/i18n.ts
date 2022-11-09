import i18n from 'i18next';

import { initReactI18next } from 'react-i18next';
import translationEn from './locales/en/translation.json';
import translationKr from './locales/kr/translation.json';

const language = window.localStorage.getItem('i18n') || 'kr';

const resources = {
  en: {
    translation: translationEn,
  },
  kr: {
    translation: translationKr,
  },
};

i18n.use(initReactI18next).init({
  debug: process.env.NODE_ENV === 'development',
  fallbackLng: language || 'kr',
  lng: language || 'kr',
  load: 'all',
  ns: ['translation'],
  defaultNS: 'translation',
  resources: resources,
  interpolation: { escapeValue: false },
});

export default i18n;
