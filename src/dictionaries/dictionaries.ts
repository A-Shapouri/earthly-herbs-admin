import 'server-only';

export type DictionariesTypes = 'en' | 'fr'

const dictionaries = {
  en: () => import('./en.json').then((module) => module.default),
  fr: () => import('./fa.json').then((module) => module.default),
};

const getDictionary = async (locale: DictionariesTypes) => dictionaries[locale]();

export default getDictionary;
