import moment from 'moment/moment';

const createTimeRange = ({ startTime, endTime } : {startTime: string, endTime: string}): Array<{value: string}> => {
  const timeArray = [];
  let start = moment(startTime, 'HH:mm');
  const end = moment(endTime, 'HH:mm');
  while (start <= end) {
    timeArray.push( { value: moment(start).format('HH:mm') } );
    start = moment(start).add(30, 'minutes');
  }
  timeArray.push( { value: moment(end).format('HH:mm') } );
  return timeArray;
};

export default createTimeRange;
