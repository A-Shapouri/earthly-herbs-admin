'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Lists, MultiSelectProps } from './multi-select.props';
import classNames from '@utils/helpers/class-names';
import { COLORS, DROPDOWN_BORDER_COLOR, HOVER_COLORS, ROUNDED, SIZES, TEXT_SIZE, VARIANTS } from './multi-select.style';
import Checkbox from '../checkbox';
import Div from '../div';
import Text from '../text';
import Chip from '../chip/chip';

type Item = {
  [key: string]: any
}

export const MultiSelect = ({ size = 'medium', label, placeholder = 'enter your text', optionsList, value, onChange, id = 'id', text = 'name', color = 'primary', variant = 'outlined', disabled, error, startAdornment, helperText, rounded = 'small', direction = 'ltr', className }: MultiSelectProps) => {
  // refs
  const wrapperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // state
  const [searchedItems, setSearchedItems] = useState<Lists[]>(optionsList);
  const [show, setShow] = useState<boolean>(false);

  // click outside to close dropdown
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setSearchedItems(optionsList);
  }, [optionsList]);

  let newOptionsList: Item = {};
  optionsList && optionsList.length && optionsList.map(item => {
    newOptionsList = Object.assign({}, newOptionsList, {
      [item.id]: item,
    });
  });

  const handleClickOutside: { (event: MouseEvent): void } = (event: MouseEvent) => {
    const targets = event.target as HTMLDivElement;
    if (wrapperRef.current && !wrapperRef.current.contains(targets)) {
      setShow(false);
      if (inputRef.current) {
        inputRef.current.value = '';
      }
      setSearchedItems(optionsList);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchedItems(optionsList.filter((a: Item) => a[text].includes(event.target.value)));
  };

  // prevState => !prevState
  const handleListDisplay = (): void => {
    if (!disabled) {
      inputRef.current && inputRef.current.value !== '' ? setShow(true) : setShow(prev => !prev);
      inputRef.current && inputRef.current.focus();
    }
  };

  // click to setState selected items
  const handleOptionClick = (id: number): void => {
    setShow(false);
    const currentIndex = value.indexOf(id);
    const newChecked = [...value];

    if (currentIndex === -1) {
      newChecked.push(id);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    onChange(newChecked);
    if (inputRef.current) {
      inputRef.current.value = '';
    }
    setSearchedItems(optionsList);
  };

  return (
    <Div className={classNames('flex flex-col items-start relative w-full h-auto', className)}>
      <Div ref={wrapperRef} className={'relative w-full'}>
        <Div
          onClick={handleListDisplay}
          className={classNames(
            'flex items-center w-full border px-3 cursor-text',
            !disabled && (`${VARIANTS[variant]}`),
            disabled ? `border-control-100 ${variant === 'filled' ? 'bg-control-500' : 'bg-white'} text-control-500 !cursor-not-allowed` : (error ? `border-danger !text-danger ${variant === 'filled' && '!bg-danger-100 !text-danger-400'}`
              : (show ? `${COLORS[color]}` : `${variant === 'filled' ? (`${COLORS[color]} border text-control-700 !border-control hover:border hover:!border-control-dark`) : 'border-control hover:border-control-dark'}`)),
            SIZES[size],
            startAdornment ? 'justify-between' : 'justify-end',
            ROUNDED[rounded]
          )}>

          {startAdornment || null}

          {label ? (
            <span
              className={classNames(
                'font-family-regular select-none w-auto h-auto px-2 absolute duration-200',
                startAdornment ? 'start-8' : 'start-2',
                show || value.length >= 1 ? `text-m-sm translate-x-0 ${variant === 'filled' ? `!top-0 !h-auto bg-transparent ${startAdornment && '!start-6'}` : `!start-2 !top-0 translate-y-[-50%] !bg-white rounded-lg border-white`}` : 'text-m-base',
                disabled ? '!bg-transparent' : (error ? 'text-danger' : (show ? `${COLORS[color]}` : 'text-control')),
              )}>
              {label}
            </span>
          ) : placeholder ? (
            <span
              color={'inherit'}
              className={classNames(
                'font-family-regular h-auto px-2 absolute',
                TEXT_SIZE[size],
                show || value.length >= 1 ? `hidden` : `${startAdornment ? 'start-6' : 'start-2'}`,
                disabled ? '!bg-transparent' : (error ? 'text-danger' : 'text-control')
              )}>
              {placeholder}
            </span>
          ) : null}

          <Div className={'flex flex-wrap items-center grow w-0 gap-1 my-1 z-[5]'}>
            {value && value.length >= 1 && (
              value.map((item, index) => (
                <Div key={index} className={'flex flex-wrap items-center select-none gap-1 h-auto'}>
                  <Chip
                    onDelete={() => handleOptionClick(newOptionsList[item][id])}
                    value={newOptionsList[item][text]}
                    id={newOptionsList[item][id]}
                    rounded={rounded}
                    // disabled={disabled}
                    size={size}
                    color={color}
                    variant={variant}
                  />
                </Div>
              ))
            )}

            <input
              ref={inputRef}
              onChange={handleInputChange}
              className={classNames(`text-m-base sm:text-d-xs md:text-d-base text-control-700 font-family-regular flex-1 outline-0 min-w-8 bg-transparent outline-none`,
                TEXT_SIZE[size],
                disabled ? 'cursor-not-allowed' : 'cursor-text'
              )}
              type={'text'}
              readOnly={disabled}
              dir={direction}
            />
          </Div>

          <svg className={classNames(``,
            show ? 'rotate-0 duration-150' : 'rotate-180 duration-150'
          )} width="18" height="9" viewBox="0 0 18 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.92 8.04999L10.4 1.52999C9.63002 0.759987 8.37002 0.759987 7.60002 1.52999L1.08002 8.04999" stroke={'currentColor'} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
          </svg>

        </Div>

        {/*  dropdown*/}
        {searchedItems && searchedItems.length > 0 && typeof searchedItems === 'object' ? (
          <Div className={classNames(`mt-2 gap-y-1 flex flex-col absolute w-full top-full bg-white border text-control-500 rounded-lg shadow-lg p-2`,
            !disabled && show ? 'block h-fit z-10' : 'hidden',
            DROPDOWN_BORDER_COLOR[color]
          )}
          >
            {searchedItems?.map((option: any) => (
              <Div
                className={classNames('group px-2 gap-x-2 flex justify-start items-center rounded cursor-pointer',
                  HOVER_COLORS[color],
                  value && value.includes(option[id]) ? 'bg-control-100' : 'bg-white'
                )}
                onClick={() => handleOptionClick(option[id])}
                key={option[id]}
              >

                <Checkbox
                  checked={value && value.includes(option[id])}
                  color={color}
                  size={size}
                />

                <Text
                  align={'start'}
                  type={value && value.includes(option[id]) ? 'bold' : 'medium'}
                  typography={['xs', 'xs']}
                  data-name={option[id]}
                  key={option[id]}
                  className={classNames(`py-2 group-hover:!text-white`,
                    value && value.includes(option[id]) ? 'text-black' : '!text-control'
                  )}>
                  {option[text]}
                </Text>

              </Div>
            ))}
          </Div>
        ) : (
          <Div className={classNames('mt-2 flex flex-col absolute w-full top-full bg-white border text-control-500 rounded-lg shadow-lg py-2 px-3',
            show ? 'block h-fit z-10' : 'hidden',
          )}>
            <Text
              color={'grey.400'}
              typography={['xs', 'xs']}>
              No Result
            </Text>
          </Div>
        )}

      </Div>
      {helperText ? (
        <Div className={'px-3 w-full'}>
          <Text
            color={disabled ? 'grey.500' : (error ? 'danger' : 'grey.400')}
            typography={['xs', 'xs']}>
            {helperText}
          </Text>
        </Div>
      ) : null}
    </Div>

  );
};

export default MultiSelect;
