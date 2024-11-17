import React, { ReactNode } from 'react';

import Div from '@elements/div';
import classNames from '@utils/helpers/class-names';
import Text from '@elements/text';
import Divider from '@elements/divider';

const MainSection = ({ children, className, title }: { children: ReactNode, className?: string, title?: string }) => {
  return (
    <Div className={classNames(
      'grid grid-cols-1 md:grid-cols-6 gap-6 py-6 px-4 bg-white rounded-lg shadow-md shadow-slate-500 w-full',
      className,
    )}>
      {title ? (
        <Div className='md:col-span-6 flex-col gap-1'>
          <Text className='' type='bold' color='slate' typography={['lg', 'lg']}>{title}</Text>
          <Divider color='control' shade='dark' />
        </Div>
      ) : null}
      {children}
    </Div>
  );
};

export default MainSection;
