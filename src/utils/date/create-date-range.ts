import moment from 'moment/moment';

const createDateRange = ({ startDate, stopDate } : {startDate: string, stopDate: string}): Array<string> => {
  const dateArray = [];
  let start = moment(startDate);
  const end = moment(stopDate);
  while (start <= end) {
    dateArray.push( moment(start).format('YYYY-MM-DD') );
    start = moment(start).add(1, 'days');
  }
  return dateArray;
};

export default createDateRange;
