'use client';
import { DictionariesTypes } from './dictionaries';
import en from './en.json';
import fr from './fa.json';

const dictionaries = {
  en,
  fr,
};

const getDictionary = (locale: DictionariesTypes) => dictionaries[locale];

export default getDictionary;
