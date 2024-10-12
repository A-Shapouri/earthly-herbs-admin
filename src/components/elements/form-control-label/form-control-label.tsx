'use client';

import React from 'react';
import { FormControlLabelProps } from './form-control-label.props';
import Text from '../text';
import classNames from '@utils/helpers/class-names';

export const FormControlLabel = (props: FormControlLabelProps) => {
  const { className, label, children, containerRef, disabled, textProps } = props;

  return (
    <label
      className={classNames(
        'w-fit flex flex-row items-center gap-x-2 px-2',
        disabled ? 'cursor-not-allowed' : 'cursor-pointer',
        className
      )}
      ref={containerRef}>
      {children}
      <Text type={'medium'} disabled={disabled} color={'black'} typography={textProps?.typography || ['xs', 'xs']} {...textProps}>{label}</Text>
    </label>
  );
};

export default FormControlLabel;
