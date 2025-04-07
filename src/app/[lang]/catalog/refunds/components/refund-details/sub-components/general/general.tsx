import React from 'react';

import Div from '@elements/div';
import TextField from '@elements/text-field';
import MainSection from '@layouts/main-section';
import SubSection from '@layouts/sub-section';
import Uploader from '@modules/uploader';
import Select from '@elements/select';
import Checkbox from '@elements/checkbox';
import FormControlLabel from '@elements/form-control-label';
import { CategoryGeneralsStore } from './store';

const General = ({ state, dispatch }: {state: CategoryGeneralsStore, dispatch: any}) => {
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
          label={'Category Name'}
          error={state.error?.name}
          helperText={state.error?.name ? 'Category Name is required' : undefined}
        />
        <TextField
          value={state.general.parentId}
          size='small'
          rounded='small'
          onChange={(e) => handleChangeValue({ key: 'parentId', value: e.target.value })}
          className={'w-full md:col-span-3'}
          label={'Category Parent Id'}
          error={state.error?.parentId}
          helperText={state.error?.parentId ? 'Category Parent Id is required' : undefined}
        />
        <TextField
          value={state.general.slug}
          size='small'
          rounded='small'
          onChange={(e) => handleChangeValue({ key: 'slug', value: e.target.value })}
          className={'w-full md:col-span-3'}
          label={'Category Slug'}
        />
        <TextField
          value={state.general.column}
          size='small'
          rounded='small'
          onChange={(e) => handleChangeValue({ key: 'column', value: e.target.value })}
          className={'w-full md:col-span-3'}
          label={'Category Column'}
          error={state.error?.column}
          helperText={state.error?.column ? 'Category Column is required' : undefined}
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
          label={'Category Sort Order'}
          error={state.error?.sortOrder}
          helperText={state.error?.sortOrder ? 'Category Sort Order is required' : undefined}
        />
        <Select
          rounded='small'
          value={state.general?.status?.toString()}
          size='small'
          className='w-full md:col-span-2'
          label={'Category Status'}
          optionsList={[{ id: '1', title: 'Active' }, { id: '0', title: 'In Active' }]}
          onChange={(newValue) => handleChangeValue({ key: 'status', value: newValue })}
          id={'id'}
          text={'title'}/>
        <FormControlLabel label={'Top'}>
          <Checkbox
            onChange={() => handleChangeValue({ key: 'top', value: !state.general.top })}
            color={'slate'}
            checked={state.general.top}
          />
        </FormControlLabel>
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
