import React from 'react';

import Div from '@elements/div';
import TextField from '@elements/text-field';
import Select from '@elements/select';
import Divider from '@elements/divider';

const Data = () => {
  const handleChangeValue = ({ id, value }: { id: string, value: string }) => {

  };
  return (
    <Div className='w-full bg-white'>
      <Div className={'w-full gap-8 grid md:grid-cols-6 grid-cols-1 mt-4'}>
        <TextField
          size='small'
          rounded='small'
          onChange={(e) => handleChangeValue({ id: 'name', value: e.target.value })}
          className={'w-full col-span-3'}
          label={'Model'}
        />
        <TextField
          size='small'
          rounded='small'
          onChange={(e) => handleChangeValue({ id: 'sort_order', value: e.target.value })}
          className={'w-full col-span-3'}
          label={'SKU'}
        />
        <Divider shade='dark' className={'col-span-6'} />
        <TextField
          size='small'
          rounded='small'
          onChange={(e) => handleChangeValue({ id: 'columns', value: e.target.value })}
          className={'w-full col-span-3'}
          label={'UPC'}
        />
        <TextField
          size='small'
          rounded='small'
          onChange={(e) => handleChangeValue({ id: 'parent_id', value: e.target.value })}
          className={'w-full col-span-3'}
          label={'EAN'}
        />
        <Divider shade='dark' className={'col-span-6'} />
        <TextField
          size='small'
          rounded='small'
          onChange={(e) => handleChangeValue({ id: 'parent_id', value: e.target.value })}
          className={'w-full col-span-3'}
          label={'JAN'}
        />
        <TextField
          size='small'
          rounded='small'
          onChange={(e) => handleChangeValue({ id: 'columns', value: e.target.value })}
          className={'w-full col-span-3'}
          label={'ISBN'}
        />
        <Divider shade='dark' className={'col-span-6'} />
        <TextField
          size='small'
          rounded='small'
          onChange={(e) => handleChangeValue({ id: 'parent_id', value: e.target.value })}
          className={'w-full col-span-3'}
          label={'MPN'}
        />
        <TextField
          size='small'
          rounded='small'
          onChange={(e) => handleChangeValue({ id: 'parent_id', value: e.target.value })}
          className={'w-full col-span-3'}
          label={'Location'}
        />
        <Divider shade='dark' className={'col-span-6'} />
        <TextField
          size='small'
          rounded='small'
          onChange={(e) => handleChangeValue({ id: 'parent_id', value: e.target.value })}
          className={'w-full col-span-3'}
          label={'Price'}
        />
        <Select
          rounded='small'
          value={''}
          size='small'
          className='col-span-3 w-full'
          label={'Tax Class'}
          optionsList={[{ id: 1, title: '--- None ---' }, { id: 2, title: 'Taxable Goods' }, { id: 3, title: 'Downloadable Products' }]}
          onChange={(newValue) => handleChangeValue({ id: 'status', value: newValue })}
          id={'id'}
          text={'title'} />
        <Divider shade='dark' className={'col-span-6'} />
        <TextField
          size='small'
          type='number'
          rounded='small'
          onChange={(e) => handleChangeValue({ id: 'parent_id', value: e.target.value })}
          className={'w-full col-span-6'}
          label={'Quantity'}
        />
        <Divider shade='dark' className={'col-span-6'} />
        <TextField
          size='small'
          rounded='small'
          onChange={(e) => handleChangeValue({ id: 'parent_id', value: e.target.value })}
          className={'w-full col-span-2'}
          label={'Length'}
        />
        <TextField
          size='small'
          rounded='small'
          onChange={(e) => handleChangeValue({ id: 'parent_id', value: e.target.value })}
          className={'w-full col-span-2'}
          label={'Width'}
        />
        <TextField
          size='small'
          rounded='small'
          onChange={(e) => handleChangeValue({ id: 'parent_id', value: e.target.value })}
          className={'w-full col-span-2'}
          label={'Height'}
        />
        <Divider shade='dark' className={'col-span-6'} />
        <Select
          rounded='small'
          value={''}
          size='small'
          className='col-span-3 w-full'
          label={'Length Class'}
          optionsList={[{ id: 1, title: 'Centimiter' }, { id: 2, title: 'Milemiter' }, { id: 3, title: 'Inch' }]}
          onChange={(newValue) => handleChangeValue({ id: 'status', value: newValue })}
          id={'id'}
          text={'title'} />
        <TextField
          size='small'
          rounded='small'
          onChange={(e) => handleChangeValue({ id: 'parent_id', value: e.target.value })}
          className={'w-full col-span-3'}
          label={'Weight'}
        />
        <Divider shade='dark' className={'col-span-6'} />
        <Select
          rounded='small'
          value={''}
          size='small'
          className='col-span-3 w-full'
          label={'Weight Class'}
          optionsList={[{ id: 1, title: 'Kilogram' }, { id: 2, title: 'gram' }, { id: 3, title: 'pound' }, { id: 4, title: 'Ounce' }]}
          onChange={(newValue) => handleChangeValue({ id: 'status', value: newValue })}
          id={'id'}
          text={'title'} />
        <Select
          rounded='small'
          className='col-span-3 w-full'
          value={''}
          size='small'
          label={'Status'}
          optionsList={[{ id: 1, title: 'Enabled' }, { id: 2, title: 'Disabled' }]}
          onChange={(newValue) => handleChangeValue({ id: 'status', value: newValue })}
          id={'id'}
          text={'title'} />
        <Divider shade='dark' className={'col-span-6'} />
        <TextField
          size='small'
          rounded='small'
          type='number'
          onChange={(e) => handleChangeValue({ id: 'parent_id', value: e.target.value })}
          className={'w-full col-span-3'}
          label={'Sort Order'}
        />
      </Div>
    </Div>
  );
};

export default Data;
