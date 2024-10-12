import { DictionariesTypes } from '@dictionaries';

const getParseRoute = ({ pathname, locale = 'en', query }: { pathname: string; query?: any, locale?: DictionariesTypes }): string => {
  let parseUrl: string;

  if (query) {
    parseUrl = '/' + locale + pathname.toString();
    Object.keys(query).forEach((key) => {
      if (parseUrl.indexOf(key) !== -1) {
        parseUrl = parseUrl.replace(`[${key}]`, query[key]);
      } else {
        if (typeof query[key] === 'object') {
          query[key].forEach((item: string) => {
            parseUrl = `${parseUrl}&${key}=${item}`;
          });
        } else {
          parseUrl = `${parseUrl}&${key}=${query[key]}`;
        }
      }
    });
    return parseUrl.toString().replace('&', '?');
  }
  return '/' + locale + pathname;
};

export default getParseRoute;
