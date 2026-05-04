import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import nlNL from './translations/nl-NL.json';

const resources = {
	'nl-NL': {
		translation: nlNL
	}
};

i18n.use(initReactI18next).init({
	resources,
	lng: 'nl-NL',
	fallbackLng: 'nl-NL',
	interpolation: {
		escapeValue: false
	}
});

export default i18n;
