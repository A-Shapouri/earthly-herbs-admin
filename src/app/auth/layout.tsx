'use client';

import React, { ReactNode } from 'react';
import Div from '@elements/div';
import Image from 'next/image';
import LogoImageDesktop from '../../../public/images/earthly-logo-desktop.png';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Div className={'flex-col gap-12 h-full justify-start items-center mt-8 px-10'}>
      <Div className='p-4'>
        <Image src={LogoImageDesktop} alt='Earthly Herbs' />
      </Div>
      <Div className={'px-4 py-12 sm:p-6 md:p-24 flex-row bg-gradient-to-br from-white to-control-100 md:to-control-50 md:w-[1154px] md:h-[660px] w-full shadow-md rounded-lg'}>
        <Div className={'relative md:flex-1 md:justify-center md:items-center w-full'}>
          {children}
        </Div>
      </Div>
    </Div>
  );
};

export default Layout;
