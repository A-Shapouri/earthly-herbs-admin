import Cookies from 'js-cookie';

export const saveToCookie = (key: string, value: string, expires: number | Date = 365) => {
  Cookies.set(key, value, { expires: expires, secure: true });
};

export const getFromCookie = (key: string) => {
  return Cookies.get(key);
};

export const removeFromCookie = (key: string) => {
  Cookies.remove(key);
};

export const clearCookie = () => {
  localStorage.clear();
};
