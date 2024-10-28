import React from 'react';
import Div from '../../div';
import { PopperContentProps } from './popper-content.props';
import classNames from '@utils/helpers/class-names';

const PopperContent = ({ className, children }: PopperContentProps) => {
  return (
    <Div
      className={classNames(
        'hidden absolute h-auto',
        className,
      )}
    >
      {children}
    </Div>
  );
};

export default PopperContent;
