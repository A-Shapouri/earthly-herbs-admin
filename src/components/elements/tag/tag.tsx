'use client';
import React, { useState } from 'react';
import Text from '@elements/text';
import Div from '@elements/div';
import classNames from '@utils/helpers/class-names';

const Tag = ({ value }: { value: string }) => {
  const [select, setSelect] = useState(false);

  const handleClick = () => {
    setSelect(prevState => !prevState);
  };

  return (
    <Div className={classNames(
      'w-fit justify-center items-center transition duration-300 py-1 px-3 hover:cursor-pointer rounded-full',
      select ? 'bg-primary text-white' : 'bg-grey-50 text-black'
    )} onClick={handleClick}>
      <Text color={'inherit'} typography={['xs', 'xs']} type={'medium'}>{value}</Text>
    </Div>
  );
};

export default Tag;
