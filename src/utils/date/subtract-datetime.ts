const subtractDatetime = ({ time = new Date(), format = 'jYYYY-jMM-jDD HH:mm:ss', number = 0, unit = 'days', locale = 'fa' }: { time?: string | Date, format?: string, number?: number, unit?: string, locale?: string }) => {
  let moment = require('jalali-moment');
  if (locale !== 'fa') {
    moment = require('moment');
  }

  const timeBefore = moment(time).subtract(number, unit);
  return timeBefore.locale('fa').format(format);
};

export default subtractDatetime;
