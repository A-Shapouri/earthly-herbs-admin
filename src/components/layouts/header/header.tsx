'use client';
import React from 'react';
import Div from '@elements/div';
import Media from '@elements/media';
import MobileHeader from './mobile';
import DesktopHeader from './desktop';

const Menu = () => {
  return (
    <Div className={'w-full bg-white border-b min-h-20 h-20 items-center justify-between'}>
      <Media lessThan={'md'} className={'w-full'}>
        <MobileHeader />
      </Media>
      <Media greaterThan={'sm'} className={'w-full'}>
        <DesktopHeader />
      </Media>
    </Div>
  );
};

export default Menu;
