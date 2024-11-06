import React, { useState } from 'react';

import Div from '@elements/div';
import TextField from '@elements/text-field';
import Divider from '@elements/divider';
import AutoComplete from '@elements/auto-complete';
import MultiSelect from '@elements/multi-select';

const Links = () => {
  const [categories, setCategories] = useState([]);
  const handleChangeValue = ({ id, value }: { id: string, value: string }) => {

  };

  const handleCategories = (newValue) => {
    setCategories(newValue)
  }
  return (
    <Div className='w-full bg-white'>
      <Div className={'w-full gap-8 grid grid-cols-1 mt-4'}>
        <AutoComplete searchList={['-- None --', 'Apple', 'Canon', 'HTC', 'Hewlett-Packard', 'Palm']} label='Manufacturer' emptyLabel='No Result' />
        <Divider shade='dark' />
        <MultiSelect
          color='slate'
          size='small'
          label='Categories'
          onChange={handleCategories}
          optionsList={[{ id: 1, name: 'Category_1' }, { id: 2, name: 'Category_2' }, { id: 3, name: 'Category_3' }, { id: 4, name: 'Category_4' }]}
          id={'id'}
          text={'name'}
          value={categories}
        />
        <Divider shade='dark' />
        <TextField
          size='small'
          rounded='small'
          onChange={(e) => handleChangeValue({ id: 'columns', value: e.target.value })}
          className={'w-full'}
          label={'Meta Tag description'}
        />
        <Divider shade='dark' />
        <TextField
          size='small'
          rounded='small'
          onChange={(e) => handleChangeValue({ id: 'parent_id', value: e.target.value })}
          className={'w-full'}
          label={'meta Tag Keywords'}
        />
        <Divider shade='dark' />
        <TextField
          size='small'
          rounded='small'
          onChange={(e) => handleChangeValue({ id: 'parent_id', value: e.target.value })}
          className={'w-full'}
          label={'Product Tags'}
        />
      </Div>
    </Div>
  );
};

export default Links;
