import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationZH from './zh/translation.json';
import translationEN from './en/translation.json';

const resources = {
    zh: {
        translation: translationZH,
    },
    en: {
        translation: translationEN,
    },
};

i18n.use(initReactI18next).init({
    resources,
    lng: 'en',

    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
