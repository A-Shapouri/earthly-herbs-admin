const timeIsAfter = (start: string, end: string) => {
  if (parseInt(end.substring(0, 2)) > parseInt(start.substring(0, 2))) {
    return true;
  }
  if (parseInt(end.substring(0, 2)) < parseInt(start.substring(0, 2))) {
    return false;
  }
  if (parseInt(end.substring(0, 2)) === parseInt(start.substring(0, 2))) {
    return parseInt(end.substring(3, 5)) > parseInt(start.substring(3, 5));
  }
};

export default timeIsAfter;
