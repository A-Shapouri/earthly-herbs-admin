'use client';

import React, { useRef } from 'react';
import { ButtonProps } from './button.props';
import classNames from '@utils/helpers/class-names';
import { COLOR_VARIANTS, DISABLED_VARIANTS, ICON_SIZES, ROUNDED, SHAPES, SIZES } from './button.style';
import LoadingIndicator from '../loading-indicator';
import { TYPE } from '../text/text.style';
import Div from '../div';
import Link from 'next/link';

export const Button = (props: ButtonProps) => {
  const {
    children,
    color = 'primary',
    size = 'medium',
    variant = 'filled',
    shape = 'rectangle',
    rounded = 'full',
    className,
    onClick,
    type,
    disabled = false,
    loading = false,
    style,
    startAdornment,
    startAdornmentClassName,
    endAdornment,
    endAdornmentClassName,
    fontType = 'bold',
    href,
    dataTestId,
    buttonId,
    ariaLabel,
    ref,
    iconSize = 'medium',
    ...rest
  } = props;

  const rippleRef = useRef();
  const clickOnButton = (event: any) => {
    rippleEffect(event);
    if (!disabled && onClick && typeof onClick !== 'undefined') {
      onClick();
    }
  };

  const rippleEffect = (event: any) => {
    const btn = event?.currentTarget;
    const diameter = Math.max(btn.clientWidth, btn.clientHeight);
    const radius = diameter / 2;
    const circle = rippleRef.current;

    //@ts-ignore
    circle.style.width = circle.style.height = `${diameter}px`;
    //@ts-ignore
    circle.style.left = `${event.clientX - (btn.offsetLeft + radius)}px`;
    //@ts-ignore
    circle.style.top = `${event.clientY - (btn.offsetTop + radius)}px`;
    //@ts-ignore
    circle.classList.add('ripple');

    const ripple = btn.getElementsByClassName('ripple')[0];

    if (ripple) {
      ripple.remove();
    }

    btn.appendChild(circle);
  };

  const buttonProps = {
    href: href,
    dir: 'ltr',
    'data-testid': dataTestId,
    onClick: clickOnButton,
    type: type,
    style: style,
    className: classNames(
      'overflow-hidden relative flex flex-row-reverse items-center justify-center hover:transition hover:duration-150 hover:ease-in-out z-[4]',
      TYPE[fontType],
      ROUNDED[rounded],
      SIZES[size],
      disabled ? `${DISABLED_VARIANTS[variant]} cursor-not-allowed` : COLOR_VARIANTS({ color: color, variant: variant }),
      SHAPES({ shape: shape, size: size }),
      className,
    ),
    id: buttonId,
    'aria-label': ariaLabel,
    ...rest,
  };

  const Children = loading ? (
    <LoadingIndicator color={'inherit'} />
  ) : (
    <>
      {startAdornment ? (
        <Div className={`items-center justify-center relative object-cover ${ICON_SIZES[iconSize]} ${startAdornmentClassName}`}>
          {startAdornment}
        </Div>
      ) : null}
      {children}
      {endAdornment ? (
        <Div className={`items-center justify-center relative object-cover ${ICON_SIZES[iconSize]} ${endAdornmentClassName}`}>
          {endAdornment}
        </Div>
      ) : null}
    </>
  );

  if (href && !disabled) {
    return (
      <Link {...buttonProps}>
        {Children}
      </Link>
    );
  }

  return (
    <button ref={ref} {...buttonProps}>
      {Children}
      <span className='ripple' ref={rippleRef} />
    </button>
  );
};

export default Button;
