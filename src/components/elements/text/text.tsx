import React from 'react';
import { TextProps } from './text.props';
import classNames from '@utils/helpers/class-names';
import { ALIGN, COLOR, TYPE, DESKTOP_SIZE, MOBILE_SIZE } from './text.style';

const Text = (
  {
    children,
    variant = 'p',
    className,
    typography = ['md', 'md'],
    color = 'black',
    align = 'start',
    type = 'normal',
    style,
    disabled = false,
    dir = 'ltr',
    ...rest
  }: TextProps) => {
  const Component = variant;

  return (
    <Component
      dir={dir}
      style={style}
      className={classNames(
        'z-[4]',
        MOBILE_SIZE[typography[0]],
        DESKTOP_SIZE[typography[1]],
        disabled ? 'text-grey-300' : COLOR[color],
        ALIGN[align],
        TYPE[type],
        className,
      )}
      {...rest}
    >
      {children}
    </Component>
  );
};

export default Text;
