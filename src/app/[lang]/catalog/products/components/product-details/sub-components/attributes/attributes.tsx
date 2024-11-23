import React, { useState } from 'react';

import Div from '@elements/div';
import MainSection from '../main-section';
import Button from '@elements/button';
import { AddIcon } from '../../../../../../../../assets/pb-icons';
import AutoComplete from '@elements/auto-complete';
import TextField from '@elements/text-field';
import Divider from '@elements/divider';
import Chip from '@elements/chip';

const Attributes = () => {
  const [list, setList] = useState<Array<{
    attribute?: string
    text?: string
  }>>([{
    attribute: '',
    text: '',
  }]);

  const handleChangeValue = ({ id, value }: { id: string, value: string }) => {

  };

  const handleAddRow = () => {
    setList([...list, {
      attribute: '',
      text: '',
    }]);
  };

  const handleRemoveRow = (index: number) => {
    const tempList = JSON.parse(JSON.stringify(list));
    tempList.splice(index, 1);
    setList(tempList);
  };

  return (
    <Div className={'w-full gap-6 grid md:grid-cols-2 grid-cols-1 mt-4'}>
      {list.map((item, index) => {
        return (
          <MainSection key={index} title={`Attribute ${index + 1}`} className='flex flex-col col-span-1'>
            <Div className='grid md:grid-cols-3 grid-cols-1 md:col-span-6 md:gap-6 gap-4 items-center justify-center'>
              <Div className='md:col-span-3 justify-end'>
                <Chip size='small' onClick={() => handleRemoveRow(index)} onDelete={() => handleRemoveRow(index)} variant={'reverse'} className={'self-start'} color={'danger'} value={'Remove'} />
              </Div>
              <Div className='md:col-span-2'>
                <AutoComplete
                  className='w-full'
                  searchList={['Test 1', 'Test 2', 'Test 3', 'Test 4', 'Test 5', 'Test 6']}
                  label='Attribute'
                  emptyLabel='No Result'
                />
              </Div>
              <Div className='md:col-span-3'>
                <TextField
                  onChange={(e) => handleChangeValue({ id: 'description', value: e.target.value })}
                  className={'w-full'}
                  rounded='small'
                  multiline={true}
                  maxRows={4}
                  inputClassName={'!min-h-36'}
                  label={'Text'}
                />
              </Div>
            </Div>
          </MainSection>
        );
      })}
      <Div className='md:justify-start md:items-start justify-center col-span-1'>
        <Button onClick={handleAddRow} color={'emerald'} shape='square' startAdornment={<AddIcon />} />
      </Div>
    </Div>
  );
};

export default Attributes;
