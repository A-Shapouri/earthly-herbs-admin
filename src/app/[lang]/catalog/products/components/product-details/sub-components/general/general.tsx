import React from 'react';

import Div from '@elements/div';
import TextField from '@elements/text-field';
import Divider from '@elements/divider';

const General = () => {
  const handleChangeValue = ({ id, value }: { id: string, value: string }) => {

  };
  return (
    <Div className='w-full bg-white'>
      <Div className={'w-full gap-8 grid md:grid-cols-2 grid-cols-1 mt-4'}>
        <TextField
          size='small'
          rounded='small'
          onChange={(e) => handleChangeValue({ id: 'name', value: e.target.value })}
          className={'w-full'}
          label={'Product Name'}
        />
        <Divider shade='dark' className='col-span-2' />
        <TextField
          onChange={(e) => handleChangeValue({ id: 'description', value: e.target.value })}
          className={'w-full md:col-span-2'}
          rounded='small'
          multiline={true}
          maxRows={4}
          inputClassName={'!min-h-32'}
          label={'Description'}
        />
        <Divider shade='dark' className='col-span-2' />
        <TextField
          size='small'
          rounded='small'
          onChange={(e) => handleChangeValue({ id: 'sort_order', value: e.target.value })}
          className={'w-full'}
          label={'Meta Tag Title'}

        />
        <TextField
          size='small'
          rounded='small'
          onChange={(e) => handleChangeValue({ id: 'columns', value: e.target.value })}
          className={'w-full'}
          label={'Meta Tag description'}
        />
        <Divider shade='dark' className='col-span-2' />
        <TextField
          size='small'
          rounded='small'
          onChange={(e) => handleChangeValue({ id: 'parent_id', value: e.target.value })}
          className={'w-full'}
          label={'meta Tag Keywords'}
        />
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

export default General;
