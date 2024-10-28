import React from 'react';
import { BadgeProps } from './badge.props';
import classNames from '@utils/helpers/class-names';
import { COLORS, DOT, STANDARD, TYPOGRAPHY } from './badge.style';
import Text from '../text';

export const Badge = (props: BadgeProps) => {
  const {
    children,
    variant = 'standard',
    badgeContent,
    max = badgeContent,
    color = 'primary',
    size = 'base',
    shape = 'rounded',
    anchorSituation = 'outer',
    className,
    anchorOrigin = { vertical: 'top', horizontal: 'right' },
  } = props;
  console.log('here', size, TYPOGRAPHY[size]);
  const content: string | number = variant !== 'dot' ? (max < badgeContent ? `${max}+` : badgeContent) : '';
  return (
    <div className={classNames('inline-flex relative shrink-0 w-fit', className)}>
      {children}
      <Text
        color={'inherit'}
        typography={[size, size]}
        className={classNames(
          'absolute flex flex-row-reverse justify-center items-center rounded-full',
          max < badgeContent ? '!w-auto' : '',
          COLORS[color],
          variant === 'standard' ? shape === 'rounded' ? `${STANDARD[size]}` : `${STANDARD[size]} !rounded` : shape === 'rounded' ? `${DOT[size]}` : `${DOT[size]} !rounded-sm`,
          anchorSituation === 'inner' ? (
            `${anchorOrigin.vertical === 'top' ? 'top-0' : 'bottom-0'} ${anchorOrigin.horizontal === 'right' ? 'right-0' : 'left-0'}`
          ) : (
            `${anchorOrigin.vertical === 'top' ? 'top-0 -translate-y-1/2' : 'bottom-0 translate-y-1/2'} ${anchorOrigin.horizontal === 'right' ? 'right-0 translate-x-1/2' : 'left-0 -translate-x-1/2'}`
          )
        )}>
        {content}
      </Text>
    </div>
  );
};

export default Badge;
