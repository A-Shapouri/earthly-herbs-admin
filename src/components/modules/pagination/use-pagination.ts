const usePagination = (currentPage: number, lastPage: number, type: 'simple' | 'default') => {
  if (type === 'simple') {
    return [];
  }
  let situation = 'NONE';
  if (lastPage > 7) {
    if ((currentPage <= 4)) {
      situation = 'BEGINNING';
    } else if (lastPage - currentPage <= 3) {
      situation = 'END';
    } else if (currentPage > 4 || lastPage - currentPage > 3) {
      situation = 'MIDDLE';
    }
  }

  const temp: Array<number | string> = [];

  switch (situation) {
    case 'BEGINNING': {
      for (let i = 1; i <= 5; i++) {
        temp.push(i);
      }
      temp.push('...', lastPage);
      return temp;
    }

    case 'MIDDLE': {
      temp.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', lastPage);
      return temp;
    }

    case 'END': {
      for (let i = lastPage; i > (lastPage - 5); i--) {
        temp.push(i);
      }
      temp.push('...', 1);
      return temp.reverse();
    }

    default : {
      for (let i = 1; i <= lastPage; i++) {
        temp.push(i);
      }
      return temp;
    }
  }
};

export default usePagination;
