import React from 'react';
import Div from '@elements/div';
import classNames from '@utils/helpers/class-names';
import { SectionItemProps } from './section-item.props';

const SectionItem = ({ children, isActive }: SectionItemProps) => {
  return (
    <Div className={classNames('flex-col w-full', isActive ? 'visible' : 'hidden')}>
      <Div className={'w-full bg-white md:p-8 rounded-lg rounded-tr-none flex-col z-[2]'}>
        {children}
      </Div>
    </Div>
  );
};

export default SectionItem;
