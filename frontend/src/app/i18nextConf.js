'use client'

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './locales/en/en.json';
import translationPl from './locales/ru/ru.json';

const fallbackLng = [localStorage.getItem('lang')] && ['en'];
const availableLanguages = ['en', 'pl'];

const resources = {
  en: {
    translation: translationEN,
  },
  pl: {
    translation: translationPl,
  },
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng,

  detection: {
    checkWhitelist: true,
  },

  debug: false,

  whitelist: availableLanguages,

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
