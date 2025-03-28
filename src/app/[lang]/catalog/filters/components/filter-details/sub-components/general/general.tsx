import React from 'react';

import Div from '@elements/div';
import TextField from '@elements/text-field';
import MainSection from '@layouts/main-section';
import Select from '@elements/select';
import { FilterGeneralsStore } from './store';
import AutoComplete from '@modules/auto-complete';

const General = ({ state, dispatch, filterGroupData, searchFilterGroup, loading }: {state: FilterGeneralsStore, dispatch: any, filterGroupData: Array<any>, searchFilterGroup: (searchText: string) => void, loading: boolean}) => {
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
          label={'Filter Name'}
        />
        <AutoComplete
          getSearchData={(searchText) => searchFilterGroup(searchText)}
          searchValue={state?.general?.filterGroupId ? filterGroupData?.find((value) => value?.id === state?.general?.filterGroupId) || '' : ''}
          className={'w-full col-span-1 md:col-span-3'}
          data={filterGroupData}
          loading={loading}
          handleSelect={(value: any) => handleChangeValue({ key: 'filterGroupId', value: value.id })}
          label={'Filter Group'}
          error={state.error?.filterGroupId}
          helperText={state.error?.filterGroupId ? 'Filter Group is required' : undefined}
          keyValue={'name'}
          id={'id'}
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
          label={'Filter Sort Order'}
        />
        <Select
          rounded='small'
          value={state?.general?.status?.toString()}
          size='small'
          className='w-full md:col-span-2'
          label={'Filter Status'}
          optionsList={[{ id: '1', title: 'Active' }, { id: '0', title: 'In Active' }]}
          onChange={(newValue) => handleChangeValue({ key: 'status', value: newValue })}
          id={'id'}
          text={'title'}/>
      </MainSection>
    </Div>
  );
};

export default General;
