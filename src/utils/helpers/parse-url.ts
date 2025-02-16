const getParseUrl = (URL: string | { pathname: string; query: any }): string => {
  let parseUrl: string | { pathname: string, query: any } = URL;
  if (URL && typeof URL === 'object') {
    parseUrl = URL?.pathname.toString();
    Object.keys(URL.query).forEach((key) => {
      if (typeof parseUrl === 'string') {
        if (parseUrl.indexOf(key) !== -1) {
          parseUrl = parseUrl.replace(`[${key}]`, URL.query[key]);
        } else if (URL.query[key]) {
          if (typeof URL.query[key] === 'object') {
            URL.query[key].forEach((item: string) => {
              parseUrl = `${parseUrl}&${key}[]=${item}`;
            });
          } else {
            parseUrl = `${parseUrl}&${key}=${URL.query[key]}`;
          }
        }
      }
    });
  }

  return parseUrl.toString().replace('&', '?');
};

export default getParseUrl;
