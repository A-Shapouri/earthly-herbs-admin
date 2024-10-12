'use client';

import React, { useEffect } from 'react';
import { ModalProps } from './modal.props';
import Div from '../div';
import classNames from '@utils/helpers/class-names';

export const Modal = ({ open, position = 'float', children, onClose, className, wrapperClassName, ...rest }: ModalProps) => {
  useEffect(() => {
    open ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'unset';
  }, [open]);

  if (open && position === 'float') {
    return (
      <Div className={
        classNames(
          `justify-center items-center bg-control-600/[0.9] backdrop-blur-md fixed top-0 left-0 right-0 z-[1300] w-full h-dvh`,
          className,
        )
      }>
        <Div className={`-z-10 w-screen h-dvh absolute`} onClick={onClose} {...rest} />
        {children}
      </Div>
    );
  }

  if (open && position === 'bottom') {
    return (
      <Div
        className={classNames(
          `w-full h-dvh justify-center bg-control-600/[0.9] backdrop-blur-md fixed top-0 left-0 right-0 z-[1300] items-end`,
          className,
        )}
      >
        <Div onClick={onClose} className={'-z-10 w-screen h-dvh absolute'} />
        <Div
          className={classNames(
            'w-full h-auto justify-center overflow-hidden',
            wrapperClassName,
          )}
        >
          {children}
        </Div>

      </Div>
    );
  }
  return null;
};

export default Modal;
