'use client';

import React from 'react';
import { ButtonProps } from './button.props';
import classNames from '@utils/helpers/class-names';
import { COLOR_VARIANTS, DISABLED_VARIANTS, ICON_SIZES, ROUNDED, SHAPES, SIZES } from './button.style';
// import LoadingIndicator from '../loading-indicator';
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

  const clickOnButton = () => {
    if (!disabled && onClick && typeof onClick !== 'undefined') {
      onClick();
    }
  };

  const buttonProps = {
    href: href,
    dir: 'ltr',
    'data-testid': dataTestId,
    onClick: clickOnButton,
    type: type,
    style: style,
    className: classNames(
      'flex flex-row-reverse items-center justify-center hover:transition hover:duration-150 hover:ease-in-out z-[4]',
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
    null
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
    </button>
  );
};

export default Button;
