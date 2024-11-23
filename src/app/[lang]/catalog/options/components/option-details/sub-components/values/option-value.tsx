import React, { useState } from 'react';
import Div from '@elements/div';
import Button from '@elements/button';
import { AddIcon } from '../../../../../../../../assets/pb-icons';
import Chip from '@elements/chip';
import TextField from '@elements/text-field';
import Uploader from '@modules/uploader';

const FilterValue = () => {
  const [list, setList] = useState([{
    quantity: '',
    group: '',
    price: '',
    priority: '',
    image: null,
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
      image: null,
    });
    setList(tempList);
  };

  const handleUploadImage = (state, index) => {
    const tempList = JSON.parse(JSON.stringify(list));
    tempList[index].image = state;
    setList(tempList);
  };

  const handleRemoveRow = (index: number) => {
    const tempList = list.map(item => Array.isArray(item) ? tempList(item) : item);
    tempList.splice(index, 1);
    setList(tempList);
  };

  return (
    <Div className={'w-full gap-6 grid grid-cols-1 md:grid-cols-2 mt-4 col-span-6'}>
      {list.map((item, index) => {
        return (
          <Div key={index} className='grid grid-cols-1 md:col-span-6 gap-6 items-center justify-center border border-opacity-55 rounded-lg p-4'>
            <Div className='justify-end'>
              <Chip size='small' onClick={() => handleRemoveRow(index)} onDelete={() => handleRemoveRow(index)} variant={'reverse'} className={'self-start'} color={'danger'} value={'Remove'} />
            </Div>
            <Div className='grid gap-4 grid-cols-1 md:grid-cols-3 items-center'>
              <TextField
                size='small'
                rounded='small'
                onChange={(e) => handleChangeValue({ id: 'parent_id', value: e.target.value })}
                className={'w-full col-span-1'}
                label={'Option Value Name'}
              />
              <TextField
                size='small'
                rounded='small'
                onChange={(e) => handleChangeValue({ id: 'parent_id', value: e.target.value })}
                className={'w-full col-span-1'}
                label={'Sort Order'}
              />
              <Div>
                <Uploader file={item.image} fileCallback={(state) => handleUploadImage(state, index)} title={'please click here to upload image'} />
              </Div>
            </Div>
          </Div>
        );
      })}
      <Div className='md:justify-end md:items-end justify-center col-span-1'>
        <Button onClick={handleAddRow} color={'emerald'} shape='square' startAdornment={<AddIcon />} />
      </Div>
    </Div>
  );
};

export default FilterValue;
