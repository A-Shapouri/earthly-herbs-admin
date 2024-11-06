import React from 'react';
import { DividerProps } from './divider.props';
import classNames from '@utils/helpers/class-names';
import { COLOR, TYPE } from './divider.styles';

export const Divider = ({ color = 'slate', type = 'solid', shade = 'light', className }: DividerProps) => {
  return (
    <div className={classNames(`w-full border-t`,
      COLOR(shade, color),
      TYPE[type],
      className
    )} />
  );
};

export default Divider;
