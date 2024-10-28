import React from 'react';
import { DividerProps } from './divider.props';
import classNames from '@utils/helpers/class-names';
import { COLOR, TYPE } from './divider.styles';

export const Divider = (props: DividerProps) => {
  const { color = 'grey', type = 'solid', className } = props;
  return (
    <div className={classNames(`w-full border-t`,
      COLOR[color],
      TYPE[type],
      className
    )} />
  );
};

export default Divider;
