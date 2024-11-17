import React, { ChangeEvent, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';

import TextField from '@elements/text-field';
import Popper from '@elements/popper';
import PopperContent from '@elements/popper/popper-content';
import PopperHandler from '@elements/popper/popper-handler';
import Div from '@elements/div';
import Text from '@elements/text';
import { AutoCompleteProps } from './auto-complete.props';

const AutoComplete = ({ label, placeholder, emptyLabel, searchList, className }: AutoCompleteProps) => {
  const [showList, setShowList] = useState<boolean>(false);
  const [searchResults, setSearchResults] = useState<Array<string>>(searchList);
  const [value, setValue] = useState('');

  const handlePopper = () => {
    setShowList(!showList);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    handleSearch(inputValue);
  };

  const handleSearch = useDebouncedCallback((value: string) => {
    const temp = searchList.filter((item) => item.toLowerCase().includes(value.toLowerCase()));
    setSearchResults(temp);
    setShowList(true);
  }, 500);

  const handleSelectValue = (value: string) => {
    setValue(value);
    setShowList(false);
  }

  return (
    <Div className={className}>
      <Popper position={'bottom'} showPopper={showList} handlePopper={handlePopper} className={'w-full'}>
        <PopperHandler>
          <TextField
            rounded='medium'
            color={'slate'}
            onChange={handleInputChange}
            value={value}
            size={'small'}
            className={'w-full'}
            variant={'outlined'}
            label={label}
            placeholder={placeholder}
          />
        </PopperHandler>
        <PopperContent className={'w-full top-12'}>
          <Div className={'bg-white shadow-lg rounded p-3 px-2 border'}>
            {searchResults && searchResults.length ? (
              <Div className={'flex-col w-full gap-2'}>
                {searchResults.map((item, index) => (
                  <Text type='medium' onClick={() => handleSelectValue(item)} className='px-2 py-1 hover:cursor-pointer hover:bg-slate-100 transition-all duration-300' typography={['xs', 'xs']} key={index}>{item}</Text>
                ))}
              </Div>
            ) : (
              <Text type='medium' typography={['xs', 'xs']}>
                {emptyLabel}
              </Text>
            )}
          </Div>
        </PopperContent>
      </Popper>
    </Div>
  );
};

export default AutoComplete;
