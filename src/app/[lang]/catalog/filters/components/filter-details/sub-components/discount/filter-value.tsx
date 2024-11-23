import React, { useState } from 'react';
import Div from '@elements/div';
import Button from '@elements/button';
import { AddIcon } from '../../../../../../../../assets/pb-icons';
import Chip from '@elements/chip';
import TextField from '@elements/text-field';
const FilterValue = () => {
  const [list, setList] = useState([{
    quantity: '',
    group: '',
    price: '',
    priority: '',
    startDatePopper: false,
    endDatePopper: false,
    startDate: '',
    endDate: '',
  }]);
  const handleChangeValue = ({ id, value }: { id: string, value: string }) => {
  };

  const handleAddRow = () => {
    const tempList = JSON.parse(JSON.stringify(list));
    tempList.push({
      quantity: '',
      group: '',
      price: '',
      priority: '',
      startDatePopper: false,
      endDatePopper: false,
      startDate: '',
      endDate: '',
    });
    setList(tempList);
  };

  const handleRemoveRow = (index: number) => {
    const tempList = list.map(item => Array.isArray(item) ? tempList(item) : item);
    tempList.splice(index, 1);
    setList(tempList);
  };

  return (
    <Div className={'w-full gap-6 grid grid-cols-1 md:grid-cols-2 mt-4 md:col-span-6'}>
      {list.map((item, index) => {
        return (
          <Div key={index} className='grid grid-cols-1 col-span-6 gap-6 items-center justify-center border border-opacity-55 rounded-lg p-4'>
            <Div className='justify-end'>
              <Chip size='small' onClick={() => handleRemoveRow(index)} onDelete={() => handleRemoveRow(index)} variant={'reverse'} className={'self-start'} color={'danger'} value={'Remove'} />
            </Div>
            <Div className='grid gap-4 md:grid-cols-3 grid-cols-1'>
              <TextField
                size='small'
                rounded='small'
                onChange={(e) => handleChangeValue({ id: 'parent_id', value: e.target.value })}
                className={'w-full md:col-span-2'}
                label={'Filter Name'}
              />
              <TextField
                size='small'
                rounded='small'
                onChange={(e) => handleChangeValue({ id: 'parent_id', value: e.target.value })}
                className={'w-full col-span-1'}
                label={'Sort Order'}
              />
            </Div>
          </Div>
        );
      })}
      <Div className='md:justify-end md:items-end justify-center items-center md:col-span-1'>
        <Button onClick={handleAddRow} color={'emerald'} shape='square' startAdornment={<AddIcon />} />
      </Div>
    </Div>
  );
};

export default FilterValue;
