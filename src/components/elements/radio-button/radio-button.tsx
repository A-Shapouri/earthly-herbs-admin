'use client';

import React from 'react';
import { RadioButtonProps } from './radio-button.props';
import { COLORS, HOVER_COLORS, RADIO_SIZES, SIZES } from './radio-button.style';
import classNames from '@utils/helpers/class-names';

export const RadioButton = ({ color = 'primary', value, name, size = 'medium', className, disabled = false, checked, onChange, id, ...rest }: RadioButtonProps) => {
  return (
    <div className="flex items-center">
      <div className={'relative flex items-center cursor-pointer'}>
        <input
          id={id}
          checked={checked}
          onChange={onChange}
          name={name}
          value={value}
          disabled={disabled}
          className={
            classNames(
              `peer relative rounded-full cursor-pointer appearance-none border border-control`,
              disabled ? 'accent-control !cursor-not-allowed' : COLORS[color],
              className,
              SIZES[size],
            )
          }
          type={'radio'}
          {...rest}
        />
        <div className={
          classNames(
            `absolute rounded-full top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 pointer-events-none opacity-0 peer-checked:opacity-100 ${RADIO_SIZES[size]}`,
            disabled ? 'bg-control-500' : HOVER_COLORS[color]
          )
        } />
      </div>
    </div>
  );
};

export default RadioButton;
