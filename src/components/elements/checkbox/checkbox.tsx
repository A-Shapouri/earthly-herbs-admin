'use client';

import React from 'react';
import { CheckboxProps } from './checkbox.props';
import { CHECK_SIZES, COLORS, SIZES } from './checkbox.style';
import classNames from '@utils/helpers/class-names';

export const Checkbox = ({ color = 'primary', className, onChange, checked, disabled = false, size = 'medium', ...rest }: CheckboxProps) => {
  return (
    <div className="inline-flex items-center">
      <div className="relative flex items-center cursor-pointer">
        <input
          onChange={onChange}
          checked={checked}
          disabled={disabled}
          type={'checkbox'}
          className={classNames(
            'peer relative appearance-none rounded-sm sm:rounded transition-all',
            disabled ? 'border border-control-light checked:bg-control-light cursor-not-allowed' : `${COLORS[color]} cursor-pointer`,
            SIZES[size],
            className,
          )}
          {...rest}
        />
        <div className={'text-white absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity'}>
          <svg xmlns="http://www.w3.org/2000/svg" className={CHECK_SIZES[size]} viewBox="0 0 20 20" fill={'currentColor'} stroke={'currentColor'}>
            <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Checkbox;
