'use client';

import React from 'react';
import { TextFieldProps } from './text-field.props';
import classNames from '@utils/helpers/class-names';
import { PLACEHOLDER_POSITION, ROUNDED, SIZES } from './text-field.style';

export const TextField = React.forwardRef<any, TextFieldProps>(function CustomInput(props, ref) {
  const {
    variant = 'outlined',
    className,
    placeholder,
    size = 'medium',
    error = false,
    disabled = false,
    rounded = 'medium',
    multiline = false,
    maxRows,
    placeholderPosition = 'left',
    inputClassName,
    startAdornment,
    startAdornmentClassName,
    endAdornment,
    endAdornmentClassName,
    type = 'text',
    inputMode = 'text',
    maxLength,
    onChange,
    value,
    onFocus,
    label,
    inputId,
    ...rest
  } = props;

  const onChangeTextInput = (e: any) => {
    if (onChange && typeof onChange === 'function') {
      onChange(e);
    }
  };

  const ClassName = classNames(
    `flex w-full duration-75 px-3 text-grey-800 placeholder:text-grey placeholder-shown:!text-d-xs bg-white border border-grey-300 hover:bg-white`,
    `peer z-[2] block w-full appearance-none text-m-xs sm:text-t-xs md:text-d-xs outline-none ${placeholderPosition === 'center' ? 'text-center' : ''}`,
    SIZES[size],
    ROUNDED[rounded],
    PLACEHOLDER_POSITION[placeholderPosition],
    disabled ? 'border-grey-100 text-grey-100 bg-grey-100 cursor-not-allowed placeholder-shown:border-t-grey-100 placeholder-shown:hover:border-t-grey-100 !text-grey-500' : '',
    startAdornment ? 'pl-12' : 'px-4',
    endAdornment ? 'pr-12' : 'px-4',
    multiline ? 'pt-2' : '',
    inputClassName,
  );

  let Component = <input
    ref={ref}
    dir={'auto'}
    disabled={disabled}
    placeholder={label ? ' ' : placeholder}
    type={type}
    inputMode={inputMode}
    maxLength={maxLength}
    onChange={onChangeTextInput}
    value={value}
    onFocus={onFocus}
    id={inputId}
    className={ClassName}
    {...rest}
  />;

  if (multiline) {
    Component = <textarea
      ref={ref}
      rows={maxRows}
      dir={'auto'}
      disabled={disabled}
      placeholder={label ? ' ' : placeholder}
      onChange={onChangeTextInput}
      maxLength={maxLength}
      value={value}
      onFocus={onFocus}
      className={ClassName}
      id={inputId}
      {...rest}
    />;
  }

  return (
    <label
      className={classNames(
        'relative block font-family-regular',
        !disabled && error ? 'text-danger' : 'text-control',
        className
      )}>
      {Component}
      {label ? (
        <span className={classNames(
          `flex items-center z-[1] absolute top-0 start-0 cursor-text`,
          `transition-all origin-[0]`,
          disabled ? '!cursor-not-allowed' : '',
          'peer-placeholder-shown:mx-2 mx-2 peer-focus:mx-2',
          variant === 'filled' ? '!bg-transparent' : `translate-y-[-50%] peer-focus:translate-y-[-50%] peer-placeholder-shown:translate-y-0`,
          `bg-white peer-placeholder-shown:bg-transparent peer-focus:bg-white`,
          `text-m-sm peer-focus:text-m-sm peer-placeholder-shown:text-m-base`,
          `before:px-1 after:px-1`,
          startAdornment ? 'peer-placeholder-shown:ml-8' : '',
          endAdornment ? 'peer-placeholder-shown:mr-8' : '',
          ROUNDED[rounded],
        )}>
          {label}
        </span>
      ) : null}
      {startAdornment ? (
        <div className={classNames(
          `flex items-center justify-center mx-2 absolute top-0 start-0`,
          SIZES[size],
          startAdornmentClassName,
        )}>
          {startAdornment}
        </div>
      ) : null}
      {endAdornment ? (
        <div className={classNames(
          `flex items-center justify-center ml-2 mr-0.5 absolute top-0 end-0`,
          SIZES[size],
          endAdornmentClassName,
        )}>
          {endAdornment}
        </div>
      ) : null}
    </label>
  );
});

export default TextField;
