import React from 'react';
import Div from '@elements/div';
import classNames from '@utils/helpers/class-names';
import { SectionItemProps } from './section-item.props';

const SectionItem = ({ children, isActive }: SectionItemProps) => {
  if (isActive) {
    return (
      <Div className={classNames('flex-col w-full top-12 left-0 transition-all duration-500',
        isActive ? 'visible' : 'hidden')}>
        <Div className={'w-full rounded-lg rounded-tr-none flex-col z-[2]'}>
          {children}
        </Div>
      </Div>
    );
  }

  return null;
};

export default SectionItem;
