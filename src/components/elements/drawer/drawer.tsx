'use client';
import React, { useEffect } from 'react';
import { DrawerProps } from './drawer.props';
import classNames from '@utils/helpers/class-names';
import Anchor from './drawer.style';

export const Drawer = ({ open, onClose, anchor = 'start', children, className }: DrawerProps) => {
  useEffect(() => {
    open ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'unset';
  }, [open]);

  return (
    <div className={classNames(
      open ? `${Anchor[anchor].enterAnimation} transition-colors duration-500` : `${Anchor[anchor].exitAnimation} duration-0 transition-all delay-700 `,
      `fixed top-0 right-0 z-20 h-screen w-screen ease-in-out overflow-hidden`
    )}>
      <div className={classNames(
        Anchor[anchor].childrenLocation,
        open ? 'bg-[rgba(0,0,0,0.5)] duration-500' : 'duration-200 delay-500',
        `flex z-10 top-0 right-0 overflow-hidden h-screen w-full ease-in-out transition-colors`
      )}>
        <div onClick={onClose} className={'flex flex-grow h-full'} />
        <div className={classNames(
          open ? Anchor[anchor].enterAnimation : Anchor[anchor].exitAnimation,
          Anchor[anchor].childrenSize,
          `relative flex overflow-y-scroll bg-white transition-all ease-in-out duration-500`,
          className,
        )}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Drawer;
