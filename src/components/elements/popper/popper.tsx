'use client';

import React, { useEffect, useRef } from 'react';
import classNames from '@utils/helpers/class-names';
import Div from '../div';
import { PopperProps } from './popper.props';
import { POPPER_CONTENT_POSITION, POPPER_POSITION } from './popper.style';

const Popper = (
  {
    showPopper,
    position = 'bottom',
    closeOnScroll = false,
    closeOnClickOutside = true,
    className,
    children,
    handlePopper,
  }: PopperProps) => {
  const popperRef = useRef<HTMLDivElement>();

  useEffect(() => {
    if (popperRef.current && popperRef.current.children[1]) {
      popperRef.current.children[1].className = `${popperRef.current.children[1].className} absolute h-auto ${POPPER_CONTENT_POSITION[position]}`;
    }
  }, []);

  // toggle when click popper handler and close when click popper content
  useEffect(() => {
    function clicked(event: Event) {
      const targets = event.target as HTMLDivElement;
      if (popperRef.current && popperRef.current.childNodes[0]?.contains(targets)) {
        handlePopper(showPopper);
      }
    }

    document.addEventListener('click', clicked);
    return () => {
      document.removeEventListener('click', clicked);
    };
  }, [showPopper]);

  // show or hide Popper Content based on showPopper state
  useEffect(() => {
    const childNode = popperRef.current?.childNodes[1];
    if (childNode instanceof HTMLElement) {
      childNode.style.display = !showPopper ? 'none' : 'block';
    }
  }, [showPopper]);

  // close popper when user on scrolling page
  useEffect(() => {
    const handleClosePopper = (event: Event): void => {
      const targets = event.target as HTMLDivElement;
      if (showPopper && closeOnScroll && popperRef.current && !popperRef.current?.contains(targets)) {
        handlePopper(showPopper);
      }
    };

    document.addEventListener('scroll', handleClosePopper);
    return () => {
      document.removeEventListener('scroll', handleClosePopper);
    };
  }, [showPopper, closeOnScroll]);

  // close popper when user click outside
  useEffect(() => {
    const handleClosePopper = (event: Event): void => {
      const targets = event.target as HTMLDivElement;
      if (showPopper && closeOnClickOutside && popperRef.current && !popperRef.current?.contains(targets)) {
        handlePopper(showPopper);
      }
    };

    document.addEventListener('mousedown', handleClosePopper);
    return () => {
      document.removeEventListener('mousedown', handleClosePopper);
    };
  }, [showPopper, closeOnClickOutside]);

  return (
    <Div
      ref={popperRef}
      className={classNames(
        'relative h-auto w-auto z-10',
        POPPER_POSITION[position],
        className,
      )}
    >
      {children}
    </Div>
  );
};

export default Popper;
