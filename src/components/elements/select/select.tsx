'use client';

import React, { useEffect, useRef, useState } from 'react';
import { SelectProps } from './select.props';
import classNames from '@utils/helpers/class-names';
import { COLORS, DROPDOWN_COLORS, HOVER_COLORS, ROUNDED, SIZES, VARIANTS } from './select.style';
import Text from '../text';
import Div from '../div';

type Item = {
  [key: string]: any
}

export const Select = ({ size = 'medium', placeholder = 'default text', label, optionsList, value, onChange, id, text, color = 'primary', variant = 'outlined', disabled, error, startAdornment, rounded = 'medium', autoComplete = false }: SelectProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const dropDownRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [selectedText, setSelectedText] = useState<string | undefined>('');
  const [show, setShow] = useState<boolean>(false);
  const [searchedItems, setSearchedItems] = useState(optionsList);

  // click outside to close dropdown
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    selectValueByDefault();
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    selectValueByDefault();
  }, [value, optionsList, optionsList.length]);

  useEffect(() => {
    setSearchedItems(optionsList);
  }, [optionsList]);

  // if disabled close dropdown
  useEffect(() => {
    disabled && setShow(false);
  }, [disabled]);

  const selectValueByDefault = () => {
    if (value) {
      optionsList && optionsList.length > 0 && typeof optionsList === 'object' && optionsList.map((item) => {
        if (item[id] == value) {
          setSelectedText(item[text]);
        }
      });
    } else {
      setSelectedText('');
    }
  };

  const handleClickOutside: { (event: MouseEvent): void } = (event: MouseEvent) => {
    const targets = event.target as HTMLDivElement;
    if (wrapperRef.current && !wrapperRef.current.contains(targets) && dropDownRef.current && !dropDownRef.current.contains(targets)) {
      setShow(false);
    }
  };

  // prevState => !prevState
  const handleListDisplay = () => {
    if (!disabled) {
      setShow(prev => !prev);
      inputRef.current && inputRef.current.focus();
    }
  };

  const handleOptionClick = (e?: React.MouseEvent<HTMLDivElement>): void => {
    setShow(false);
    const input = e?.target as HTMLDivElement;
    setSelectedText(input.innerText);
    onChange(input.getAttribute('data-name'));
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchedItems(optionsList.filter((a: Item) => a[text].toLowerCase().includes(event.target.value.toLowerCase())));
    if (event.target.value) {
      setSelectedText(undefined);
    } else {
      setSelectedText('');
    }
  };

  return (
    <Div ref={wrapperRef} className={'flex flex-col items-start justify-between relative w-full h-auto'}>
      <Div className={'relative w-full'}>
        <Div
          onClick={handleListDisplay}
          className={classNames('flex items-center w-full border p-3',
            autoComplete ? 'cursor-text' : 'cursor-pointer',
            !disabled && (`${VARIANTS[variant]}`),
            disabled ? `text-grey-500 !cursor-not-allowed border-grey-100 ${variant === 'text' ? 'bg-transparent' : 'bg-white'}` : (error ? `border-danger !text-danger ${variant === 'text' ? '!bg-danger-100 !text-danger-400' : ''}`
              : (show ? variant === 'text' ? 'border-none' : `${COLORS[color]}` : `${variant === 'text' ? (`${COLORS[color]} border-none`) : 'border-grey-100 hover:border-grey-500'}`)),
            SIZES[size],
            startAdornment ? 'justify-between' : 'justify-end',
            ROUNDED[rounded]
          )}>

          {startAdornment || null}

          {label ? (
            <span
              color={'inherit'}
              className={classNames(
                show || (selectedText !== '' && selectedText !== undefined) ? 'text-m-sm' : 'text-m-base',
                'select-none h-auto px-2 absolute duration-200 flex items-center font-family-regular',
                startAdornment ? 'start-8' : 'start-2',
                show || (selectedText !== '' && selectedText !== undefined) ? `translate-x-0 text-xs  ${variant === 'text' ? '!top-0 !h-auto !leading-none bg-transparent' : `!start-2 !top-0 translate-y-[-50%] bg-white rounded-lg border-white `}` : '',
                disabled ? '!cursor-not-allowed text-grey-500' : (error ? 'text-danger' : (show ? `${COLORS[color]}` : 'text-grey-500'))
              )}
            >
              {label}
            </span>
          ) : placeholder ? (
            <span
              color={'inherit'}
              className={classNames(
                'select-none h-auto px-2 absolute duration-200 flex items-center text-m-sm font-family-regular',
                selectedText !== '' ? `hidden` : startAdornment ? 'start-8' : 'start-2',
                disabled ? '!bg-transparent' : (error ? 'text-danger' : 'text-grey-500')
              )}
            >
              {placeholder}
            </span>
          ) : null}

          {autoComplete ? (
            <input
              ref={inputRef}
              value={selectedText}
              onChange={handleInputChange}
              className={classNames(`px-2 z-10 text-m-base sm:text-d-xs font-family-regular flex-1 outline-0 min-w-8 bg-transparent outline-none`,
                disabled ? 'cursor-not-allowed' : 'cursor-text'
              )}
              type={'text'}
              readOnly={disabled}
            />
          ) : (
            selectedText !== '' && (
              <Div className={'grow flex select-none !leading-none'}>
                <Text className={'!leading-none'} typography={['xs', 'xs']} align={'right'} color={disabled ? 'grey.500' : 'grey.800'}>
                  {selectedText}
                </Text>
              </Div>
            )
          )}

          <svg className={classNames(`duration-300`,
            show ? 'rotate-180' : 'rotate-0'
          )} width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.916669 1.45837L5 5.54171L9.08334 1.45837" stroke="#4D4D4D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </Div>

        {/* dropdown*/}
        <Div
          ref={dropDownRef}
          className={classNames(
            'mt-2 absolute w-full top-full bg-white rounded shadow-lg p-2 z-50',
            DROPDOWN_COLORS[color],
            show ? 'flex flex-col h-fit z-10' : 'hidden',
            variant === 'text' ? 'border-none' : 'border'
          )}
        >
          {searchedItems && searchedItems.length > 0 && typeof searchedItems === 'object' ? searchedItems.map((option: any) => (
            <Div
              className={classNames('flex justify-between items-center hover:bg-control-100 rounded cursor-pointer',
                option[text] === selectedText ? 'bg-primary-50 hover:bg-control-100 hover:!text-white hover:!fill-white' : 'bg-white',
                HOVER_COLORS[color]
              )}
              key={option[id]}
              data-name={option[id]}
            >
              <Text
                color={`${option[text] === selectedText ? 'black' : 'grey.600'}`}
                align={'start'}
                type={`${option[text] === selectedText ? 'medium' : 'normal'}`}
                typography={['xs', 'xs']}
                data-name={option[id]}
                key={option[id]}
                onClick={handleOptionClick}
                className={`px-2 grow py-2 select-none hover:!text-white`}>
                {option[text]}
              </Text>
            </Div>
          )) : (
            <Text
              color={'grey.400'}
              typography={['xs', 'xs']}
              align={'right'}>
              There is no item to show!
            </Text>
          )}
        </Div>
      </Div>

    </Div >

  );
};

export default Select;
