import React from 'react';

import Div from '@elements/div';
import TextField from '@elements/text-field';
import MainSection from '@layouts/main-section';
import Select from '@elements/select';
import { ManufacturerGeneralsStore } from './store';
import SubSection from '@layouts/sub-section';
import Uploader from '@modules/uploader';

const General = ({ state, dispatch }: {state: ManufacturerGeneralsStore, dispatch: any}) => {
  const handleChangeValue = ({ key, value }: { key: string, value: string | boolean }) => {
    dispatch({
      type: 'SET_GENERAL_VALUE',
      key: key,
      value: value,
    });
  };

  return (
    <Div className={'w-full gap-6 grid md:grid-cols-3 grid-cols-1 mt-4 grid-flow-dense'}>
      <MainSection priority={2} title='General Info' className='md:row-span-1 md:col-span-2'>
        <TextField
          size='small'
          value={state.general.name}
          rounded='small'
          onChange={(e) => handleChangeValue({ key: 'name', value: e.target.value })}
          className={'w-full col-span-1 md:col-span-3'}
          label={'Manufacturer Name'}
          error={state.error?.name}
          helperText={state.error?.name ? 'Manufacturer Name is required' : undefined}
        />
      </MainSection>
      <MainSection priority={3} title='Secondary Info' className='md:row-span-1 md:col-span-2'>
        <TextField
          size='small'
          value={state.general.sortOrder}
          rounded='small'
          type={'number'}
          onChange={(e) => handleChangeValue({ key: 'sortOrder', value: e.target.value })}
          className={'w-full md:col-span-2 md:col-start-1'}
          label={'Manufacturer Sort Order'}
        />
        <Select
          rounded='small'
          value={state?.general?.status?.toString()}
          size='small'
          className='w-full md:col-span-2'
          label={'Manufacturer Status'}
          optionsList={[{ id: '1', title: 'Active' }, { id: '0', title: 'In Active' }]}
          onChange={(newValue) => handleChangeValue({ key: 'status', value: newValue })}
          id={'id'}
          text={'title'}/>
      </MainSection>
      <SubSection priority={1} title='Image' className='md:row-span-3 md:col-span-1 md:h-fit'>
        <Uploader
          file={state.general.image}
          title={'Click to Upload Image'}
          fileCallback={(filePath) => handleChangeValue({ key: 'image', value: filePath })}
        />
      </SubSection>
    </Div>
  );
};

export default General;
