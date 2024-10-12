'use client';
import React, { useState } from 'react';
import { RatingProps } from './rating.props';
import classNames from '@utils/helpers/class-names';
import Text from '../text';

export const Rating = ({ readOnly, value, size = ['lg', 'lg'], onChange, ...rest }: RatingProps) => {
  const [rate, setRate] = useState<number>(0);

  const handleChange = (val: number) => {
    if (onChange && !readOnly) {
      return onChange(val === value ? 0 : val);
    }
    return setRate(val === rate ? 0 : val);
  };

  return (
    <Text
      color={'black'}
      typography={size}
      className={classNames(
        'inline-flex relative cursor-pointer text-left gap-1',
      )}
      aria-label={`${value} Stars`}
      {...rest}>
      <Star onClick={() => handleChange(1)} fill={value ? value >= 1 : rate >= 1} />
      <Star onClick={() => handleChange(2)} fill={value ? value >= 2 : rate >= 2} />
      <Star onClick={() => handleChange(3)} fill={value ? value >= 3 : rate >= 3} />
      <Star onClick={() => handleChange(4)} fill={value ? value >= 4 : rate >= 4} />
      <Star onClick={() => handleChange(5)} fill={value ? value >= 5 : rate >= 5} />
    </Text>
  );
};

const Star = ({ fill, onClick }: { fill: boolean, onClick: () => void }) => {
  return (
    <span onClick={onClick} className="hover:scale-110 flex items-center">
      <svg fill={'currentColor'} className="inline-block fill-current shrink-0 user-select-none w-[1em] h-[1em] transition delay-75" focusable="false" aria-hidden="true" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
        {fill ? (
          <circle cx="8" cy="8" r="8" fill="#040606" />
        ) : (
          <circle cx="8" cy="8" r="8" fill="#F1EDE4" />
        )}
      </svg>
    </span>
  );
};

export default Rating;
