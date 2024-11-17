import moment, { Moment } from 'moment';

const convertDate = (date: string | Date | Moment, format = 'YYYY-MM-DD', locale = 'en') => {
  if (date) {
    return moment(date).locale(locale).format(format);
  }

  return null;
};

export default convertDate;
