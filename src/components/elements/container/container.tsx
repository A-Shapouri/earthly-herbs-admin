import React, { ReactNode } from 'react';
import Div from '@elements/div';
import classNames from '@utils/helpers/class-names';

const Container = ({ className, children }: { className?: string, children: ReactNode }) => {
  return (
    <Div className={classNames(
      'flex-col w-full items-center',
      className,
    )}>
      {children}
    </Div>
  );
};

export default Container;
