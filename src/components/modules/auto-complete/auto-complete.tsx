'use client';
import React, { ChangeEvent, useState } from 'react';
import { SearchIcon } from '@icons';
import Button from '@elements/button';
import Div from '@elements/div';
import Popper from '@elements/popper';
import PopperContent from '@elements/popper/popper-content';
import PopperHandler from '@elements/popper/popper-handler';
import Text from '@elements/text';
import TextField from '@elements/text-field';
import ListItem from '@elements/list-item';
import classNames from '@utils/helpers/class-names';

const AutoComplete = ({ handleSelect, label, getSearchData, data, loading, keyValue, id, className }: { handleSelect: (value: string) => void, label?: string, getSearchData: any, data: Array<any>, loading: boolean, keyValue: string, id: string, className?: string }) => {
  const [value, setValue] = useState('');
  const [showList, setShowList] = useState<boolean>(false);

  const handlePopper = () => {
    setShowList(!showList);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setValue(inputValue);
  };

  const handleSearch = () => {
    if (value.length) {
      getSearchData().then(() => {
        setShowList(true);
      });
    } else {
      setShowList(false);
    }
  };

  const handleSelectValue = ({ item }: { item: any }) => {
    setValue(item[keyValue]);
    handleSelect(item);
    setShowList(false);
  };

  return (
    <Popper position={'bottom'} showPopper={showList} handlePopper={handlePopper} className={classNames('w-full z-20', className)}>
      <PopperHandler>
        <TextField
          color={'primary'}
          onChange={handleInputChange}
          value={value}
          className={`w-full`}
          variant={'outlined'}
          label={label}
          endAdornment={
            <Button
              onClick={handleSearch}
              loading={loading}
              disabled={loading}
              endAdornment={<SearchIcon />}
              color={'primary'}
              shape={'square'}
              className={'!p-0'}
              size={'small'}/>
          }
        />
      </PopperHandler>
      <PopperContent className={'w-full mt-14 py-2'}>
        {value.length >= 3 && !loading ? (
          <Div className={'bg-white shadow-lg rounded-lg py-4 px-2'}>
            {data && data.length ? (
              <Div className={'flex-col w-full overflow-y-scroll h-48'}>
                {data.map((item, index) => (
                  <ListItem typography={['xs', 'xs']} className={'cursor-pointer hover:bg-control-100 rounded'} onClick={() => handleSelectValue({ item: item })} key={index}>
                    {item[keyValue]}
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
