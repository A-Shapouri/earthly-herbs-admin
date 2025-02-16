import React from 'react';
import { SkeletonProps } from './skeleton.props';
import classNames from '@utils/helpers/class-names';
import { COLORS, SHAPES, SIZES } from './skeleton.style';

export const Skeleton = ({ className, shape = 'rectangular', size = 'medium', color = 'primary', ...rest }: SkeletonProps) => {
  return (
    <div
      role="status"
      className={classNames(
        'animate-pulse',
        className,
        COLORS[color],
        size ? SIZES[size] : 'h-fit',
        SHAPES({ shape: shape, size: size }),
      )}
      {...rest}
    />
  );
};

export default Skeleton;
