import React from 'react';

import Div from '@elements/div';
import TextField from '@elements/text-field';
import Select from '@elements/select';
import MainSection from '../main-section';
import SubSection from '../sub-section';

const Data = () => {
  const handleChangeValue = ({ id, value }: { id: string, value: string }) => {

  };
  return (
    <Div className={'w-full gap-6 grid md:grid-cols-3 md:grid-rows-3 grid-cols-1 mt-4 grid-flow-dense'}>
      <MainSection title='Primary Info' className='md:row-span-2 md:col-span-2 h-fit'>
        <TextField
          size='small'
          rounded='small'
          onChange={(e) => handleChangeValue({ id: 'name', value: e.target.value })}
          className={'w-full md:col-span-3'}
          label={'Model'}
        />
        <TextField
          size='small'
          type='number'
          rounded='small'
          onChange={(e) => handleChangeValue({ id: 'parent_id', value: e.target.value })}
          className={'w-full md:col-span-6'}
          label={'Quantity'}
        />
        <TextField
          size='small'
          rounded='small'
          onChange={(e) => handleChangeValue({ id: 'parent_id', value: e.target.value })}
          className={'w-full md:col-span-3'}
          label={'Price'}
        />
        <TextField
          size='small'
          rounded='small'
          onChange={(e) => handleChangeValue({ id: 'parent_id', value: e.target.value })}
          className={'w-full md:col-span-3'}
          label={'Location'}
        />
      </MainSection>
      <MainSection title='Secondary Info' className='md:row-span-3 md:col-span-2'>
        <Select
          rounded='small'
          value={''}
          size='small'
          className='md:col-span-3 w-full'
          label={'Tax Class'}
          optionsList={[{ id: 1, title: '--- None ---' }, { id: 2, title: 'Taxable Goods' }, { id: 3, title: 'Downloadable Products' }]}
          onChange={(newValue) => handleChangeValue({ id: 'status', value: newValue })}
          id={'id'}
          text={'title'} />
        <Select
          rounded='small'
          className='md:col-span-3 w-full'
          value={''}
          size='small'
          label={'Status'}
          optionsList={[{ id: 1, title: 'Enabled' }, { id: 2, title: 'Disabled' }]}
          onChange={(newValue) => handleChangeValue({ id: 'status', value: newValue })}
          id={'id'}
          text={'title'} />
        <TextField
          size='small'
          rounded='small'
          type='number'
          onChange={(e) => handleChangeValue({ id: 'parent_id', value: e.target.value })}
          className={'w-full md:col-span-3'}
          label={'Sort Order'}
        />
      </MainSection>
      <MainSection title='Length' className='md:row-span-1 md:col-span-2'>
        <TextField
          size='small'
          rounded='small'
          onChange={(e) => handleChangeValue({ id: 'parent_id', value: e.target.value })}
          className={'w-full md:col-span-2'}
          label={'Length'}
        />
        <TextField
          size='small'
          rounded='small'
          onChange={(e) => handleChangeValue({ id: 'parent_id', value: e.target.value })}
          className={'w-full md:col-span-2'}
          label={'Width'}
        />
        <TextField
          size='small'
          rounded='small'
          onChange={(e) => handleChangeValue({ id: 'parent_id', value: e.target.value })}
          className={'w-full md:col-span-2'}
          label={'Height'}
        />
        <Select
          rounded='small'
          value={''}
          size='small'
          className='md:col-span-3 w-full'
          label={'Length Class'}
          optionsList={[{ id: 1, title: 'Centimiter' }, { id: 2, title: 'Milemiter' }, { id: 3, title: 'Inch' }]}
          onChange={(newValue) => handleChangeValue({ id: 'status', value: newValue })}
          id={'id'}
          text={'title'} />
      </MainSection>
      <SubSection title='Details' className='md:row-span-3 md:col-span-1 md:h-fit'>
        <TextField
          size='small'
          rounded='small'
          onChange={(e) => handleChangeValue({ id: 'sort_order', value: e.target.value })}
          className={'w-full md:col-span-3'}
          label={'SKU'}
        />

        <TextField
          size='small'
          rounded='small'
          onChange={(e) => handleChangeValue({ id: 'columns', value: e.target.value })}
          className={'w-full md:col-span-3'}
          label={'UPC'}
        />
        <TextField
          size='small'
          rounded='small'
          onChange={(e) => handleChangeValue({ id: 'parent_id', value: e.target.value })}
          className={'w-full md:col-span-3'}
          label={'EAN'}
        />

        <TextField
          size='small'
          rounded='small'
          onChange={(e) => handleChangeValue({ id: 'parent_id', value: e.target.value })}
          className={'w-full md:col-span-3'}
          label={'JAN'}
        />
        <TextField
          size='small'
          rounded='small'
          onChange={(e) => handleChangeValue({ id: 'columns', value: e.target.value })}
          className={'w-full md:col-span-3'}
          label={'ISBN'}
        />
        <TextField
          size='small'
          rounded='small'
          onChange={(e) => handleChangeValue({ id: 'parent_id', value: e.target.value })}
          className={'w-full md:col-span-3'}
          label={'MPN'}
        />
      </SubSection>
      <SubSection title='Weight' className='md:row-span-3 h-fit md:col-span-1'>
        <TextField
          size='small'
          rounded='small'
          onChange={(e) => handleChangeValue({ id: 'parent_id', value: e.target.value })}
          className={'w-full md:col-span-3'}
          label={'Weight'}
        />
        <Select
          rounded='small'
          value={''}
          size='small'
          className='md:col-span-3 w-full'
          label={'Weight Class'}
          optionsList={[{ id: 1, title: 'Kilogram' }, { id: 2, title: 'gram' }, { id: 3, title: 'pound' }, { id: 4, title: 'Ounce' }]}
          onChange={(newValue) => handleChangeValue({ id: 'status', value: newValue })}
          id={'id'}
          text={'title'} />
      </SubSection>
    </Div>
  );
};

export default Data;
