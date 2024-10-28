'use client';
import React, { ReactNode } from 'react';
import Div from '@elements/div';
import Media from '@elements/media';
import classNames from '@utils/helpers/class-names';
import Menu from '@layouts/menu';
import Header from '@layouts/header';
import { useSelector } from 'react-redux';
import { RootState } from '@store/root-reducer';

const Layout = ({ children }: { children: ReactNode }) => {
  const { expandedMenu } = useSelector((state: RootState) => state.home);

  return (
    <Div className={'flex-col md:flex-row md:p-0 h-full relative bg-control-50'}>
      <Media greaterThan={'sm'}>
        <Div className={classNames('rounded-3xl h-full z-10 transition-all duration-1000', expandedMenu ? 'relative' : 'w-12 fixed left-0 top-0')}>
          <Div className={'peer group z-0'}>
            <Menu />
          </Div>
        </Div>
      </Media>
      <Div className={classNames('w-full flex-col bg-control-50 overflow-auto min-h-screen transition-all', expandedMenu ? 'md:ml-0 duration-0' : 'md:ml-20 duration-1000')}>
        <Header />
        <Div className={'flex-col p-4 md:p-8 min-h-screen'}>
          <Div className={'flex-col bg-control-50 justify-center items-center md:flex-row'}>
            {children}
          </Div>
        </Div>
      </Div>
    </Div>
  );
};

export default Layout;
