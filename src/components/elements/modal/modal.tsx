'use client';

import React, { useEffect } from 'react';
import { ModalProps } from './modal.props';
import Div from '../div';
import classNames from '@utils/helpers/class-names';
import { motion, AnimatePresence } from 'motion/react';

export const Modal = ({ open, position = 'float', children, onClose, className, wrapperClassName, ...rest }: ModalProps) => {
  useEffect(() => {
    open ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'unset';
  }, [open]);

  if (position === 'float') {
    return (
      <AnimatePresence>
        {open && position === 'float' ? (
          <motion.div
            exit={{ opacity: 0, transition: { duration: 0.6 } }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 100, transition: { duration: 0.2 } }}
            className={
              classNames(
                `flex justify-center items-center bg-control-600/[0.9] backdrop-blur-md fixed top-0 left-0 right-0 z-[1300] w-full h-dvh`,
                className,
              )
            }>
            <Div className={`-z-10 w-screen h-dvh absolute`} onClick={onClose} {...rest} />
            <motion.div
              className='w-full flex items-center justify-center'
              exit={{ translateY: 2000, transition: { duration: 0.6 } }}
              initial={{ translateY: 2000 }}
              animate={{ translateY: 0, transition: { duration: 0.5 } }}
              transition={{}}>
              {children}
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    );
  }

  return (
    <AnimatePresence>
      {open && position === 'bottom' ? (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 100 }} transition={{ duration: 0.2 }}
          className={classNames(
            `flex w-full h-dvh justify-center bg-control-600/[0.9] backdrop-blur-md fixed top-0 left-0 right-0 z-[1300] items-end`,
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

        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default Modal;
