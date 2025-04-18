'use client';
import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import Div from '@elements/div';
import Popper from '@elements/popper';
import PopperContent from '@elements/popper/popper-content';
import PopperHandler from '@elements/popper/popper-handler';
import Text from '@elements/text';
import TextField from '@elements/text-field';
import ListItem from '@elements/list-item';
import classNames from '@utils/helpers/class-names';
import LoadingIndicator from '@elements/loading-indicator';

const AutoComplete = (
  { handleSelect, label, getSearchData, data, loading, keyValue, id, className, searchValue, error, helperText }:
  { handleSelect: (value: string) => void, label?: string, getSearchData: (searchText: string) => void, data: Array<any>, loading: boolean, keyValue: string, id: string, className?: string, searchValue: any, error: boolean, helperText: any }) => {
  const [showList, setShowList] = useState<boolean>(false);
  const [debouncedInput, setDebouncedInput] = useState<string>(searchValue[keyValue]);
  const isSelectingRef = useRef<boolean>(false);
  const isFirstRender = useRef(true);
  const handlePopper = () => {
    setShowList(!showList);
  };
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDebouncedInput(e.target.value);
  };
  console.log(searchValue, debouncedInput, keyValue);
  useEffect(() => {
    if (searchValue[keyValue]) {
      setDebouncedInput(searchValue[keyValue]);
    }
  }, [searchValue]);

  useEffect(() => {
    if (isSelectingRef.current) {
      isSelectingRef.current = false;
      return;
    }
    const handler = setTimeout(() => {
      if (debouncedInput) {
        getSearchData(debouncedInput);
        if (isFirstRender.current) {
          isFirstRender.current = false;
        } else {
          setShowList(true);
        }
      } else {
        setShowList(false);
      }
    }, 1000);

    return () => clearTimeout(handler);
  }, [debouncedInput]);

  const handleSelectValue = ({ item }: { item: any }) => {
    isSelectingRef.current = true;
    handleSelect(item);
    setDebouncedInput(item[keyValue]);
    setShowList(false);
  };

  return (
    <Popper position={'bottom'} showPopper={showList} handlePopper={handlePopper} className={classNames('w-full h-fit', className)}>
      <PopperHandler>
        <TextField
          onClick={handlePopper}
          color={'slate'}
          onChange={handleInputChange}
          value={debouncedInput}
          size={'small'}
          rounded={'small'}
          className={`w-full`}
          variant={'outlined'}
          label={label}
          error={error}
          helperText={helperText}
          startAdornment={loading ? <LoadingIndicator color={'slate'} size={'tiny'} /> : undefined}
          endAdornment={
            <svg className={classNames(``,
              showList ? 'rotate-0 duration-150' : 'rotate-180 duration-150'
            )} width="18" height="9" viewBox="0 0 18 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.92 8.04999L10.4 1.52999C9.63002 0.759987 8.37002 0.759987 7.60002 1.52999L1.08002 8.04999"
                stroke={'currentColor'} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"
                strokeLinejoin="round"/>
            </svg>
          }
        />
      </PopperHandler>
      <PopperContent className={'w-full pt-2'}>
        {!loading ? (
          <Div className={'bg-white shadow-lg rounded-md py-2 px-2 border border-slate-500'}>
            {data && data.length ? (
              <Div className={'flex-col w-full overflow-y-auto max-h-28'}>
                {data.map((item, index) => (
                  <ListItem
                    typography={['xs', 'xs']}
                    className={classNames(
                      'cursor-pointer hover:bg-slate-500 hover:text-white rounded justify-between',
                      searchValue[id] === item[id] ? 'bg-control-100' : 'bg-white'
                    )}
                    onClick={() => handleSelectValue({ item: item })}
                    key={index}>
                    {item[keyValue]}
                    {searchValue[id] === item[id] ? (
                      <svg
                        width="15" height="11" viewBox="0 0 15 11" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.33336 8.64332L12.9934 0.982483L14.1725 2.16082L5.33336 11L0.0300293 5.69665L1.20836 4.51832L5.33336 8.64332Z" />
                      </svg>
                    ) : null}
                  </ListItem>
                ))}
              </Div>
            ) : (
              <Text typography={['xs', 'xs']}>
                No match was found
              </Text>
            )}
          </Div>
        ) : null}
      </PopperContent>
    </Popper>
  );
};

export default AutoComplete;
