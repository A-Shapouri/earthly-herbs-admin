'use client';

import React from 'react';
import { COLORS, LABEL_SIZES, LABEL_VARIANT_ROUNDING, LABEL_VARIANT_SIZES, SIZES } from './switch-box.style';
import classNames from '@utils/helpers/class-names';
import { SwitchBoxProps } from './switch-box.props';

export const SwitchBox = ({ color = 'primary', size = 'medium', variant = 'default', value, onChange, disabled }: SwitchBoxProps) => {
  return (
    <label className={classNames(
      'relative flex items-center justify-center',
      disabled ? 'cursor-not-allowed !bg-grey-200' : 'cursor-pointer',
      LABEL_VARIANT_SIZES({ checked: value, color: color, size: size, variant: variant }),
      LABEL_VARIANT_ROUNDING[variant],
    )}>
      <div className={classNames('flex', LABEL_SIZES[size])}>
        <div
          className={classNames(
            `flex before:rounded-full transition duration-500 before:flex before:self-center before:bg-white before:transition before:duration-500 before:content-['']`,
            SIZES[size],
            value ? `${COLORS[color]} translate-x-1/2` : `before:-translate-x-1/2 before:shadow-lg`,
          )} />
        <input disabled={disabled} checked={value} onChange={onChange} className={'w-0 h-0 !border-0 opacity-0 focus:shadow-md'} type="checkbox" />
      </div>
    </label>
  );
};

export default SwitchBox;

