'use client';

import React from 'react';
import { ChipProps } from './chip.props';
import classNames from '@utils/helpers/class-names';
import { COLORS, HOVER_COLORS, ICON_SIZE, OUTLINED_COLORS, OUTLINED_HOVER_COLORS, REVERSE_COLORS, REVERSE_HOVER_COLORS, ROUNDED, SIZES, TYPOGRAPHY } from './chip.style';
import Text from '../text';
import Div from '../div';
import { Sizes } from '@types';

export const Chip = (
  {
    value,
    color = 'primary',
    size = 'large',
    rounded = 'full',
    variant = 'filled',
    style,
    className,
    id,
    startAdornment,
    startAdornmentClassName,
    endAdornment,
    endAdornmentClassName,
    onClick,
    onDelete,
    textProps,
  }: ChipProps) => {
  return (
    <Div
      id={id}
      className={classNames(
        `w-fit justify-center items-center gap-x-1 ${value ? 'px-3' : ''} ${className}`,
        onClick ? 'cursor-pointer' : '',
        variant === 'reverse' ? REVERSE_COLORS[color] : variant === 'outlined' ? OUTLINED_COLORS[color] : COLORS[color],
        onClick ? (variant === 'reverse' ? REVERSE_HOVER_COLORS[color] : variant === 'outlined' ? OUTLINED_HOVER_COLORS[color] : HOVER_COLORS[color]) : null,
        ROUNDED[rounded],
        SIZES[size]
      )}
      onClick={onClick}
      style={style}
    >
      {onDelete ? (
        <DeleteIcon onDelete={onDelete} size={size} />
      ) : startAdornment ? (
        <div className={classNames(`flex h-full items-center justify-center`, startAdornmentClassName)}>
          {startAdornment}
        </div>
      ) : null}
      {value ? (
        <>
          {/*@ts-ignore*/}
          <Text color={'inherit'} type={'medium'} typography={[TYPOGRAPHY[size], TYPOGRAPHY[size]]} {...textProps}>
            {value}
          </Text>
        </>
      ) : null}
      {endAdornment ? (
        <div className={classNames(`flex h-full items-center justify-center`, endAdornmentClassName)}>
          {endAdornment}
        </div>
      ) : null}
    </Div>
  );
};

export default Chip;

const DeleteIcon = ({ onDelete, size }: { onDelete: any, size: Sizes }) => {
  return (
    <svg
      onClick={onDelete}
      className={'cursor-pointer hover:opacity-75'}
      width={ICON_SIZE[size]}
      height={ICON_SIZE[size]}
      focusable="false"
      aria-hidden="true"
      viewBox="0 0 24 24"
      data-testid="CancelIcon">
      <path fill={'currentColor'} d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"></path>
    </svg>
  );
};
