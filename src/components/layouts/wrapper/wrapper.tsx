import React, { ReactNode } from 'react';
import Div from '@elements/div';
import classNames from '@utils/helpers/class-names';

const Wrapper = ({ children, className }: { children: ReactNode, className?: string }) => {
  return (
    <Div className={classNames(
      'w-full self-center max-w-[1440px]',
      className,
    )}>
      {children}
    </Div>
  );
};

export default Wrapper;
