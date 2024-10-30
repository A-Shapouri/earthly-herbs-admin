import { KeyboardEvent } from 'react';

const pressEnterKey = ({ event, callBack }: { event: KeyboardEvent<HTMLInputElement>, callBack: () => void }) => {
  if (event.key === 'Enter') {
    callBack();
  }
};

export default pressEnterKey;
