import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector';


import enTranslations from './locales/en.json';
import ptTranslations from './locales/pt.json';


const resources = {
  en: {
    translation: enTranslations,
  },
  pt: {
    translation: ptTranslations,
  },
};

i18n
  .use(I18nextBrowserLanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en', 
    interpolation: {
      escapeValue: false, 
    },
    detection: {
     
      order: ['navigator', 'htmlTag', 'path', 'subdomain'],
      caches: ['localStorage'], 
    },
  });

export default i18n;