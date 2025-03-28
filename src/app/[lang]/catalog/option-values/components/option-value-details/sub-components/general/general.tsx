import React, { useState } from 'react';

import Div from '@elements/div';
import TextField from '@elements/text-field';
import MainSection from '@layouts/main-section';
import Select from '@elements/select';
import { OptionGeneralsStore } from './store';
import AutoComplete from '@modules/auto-complete';
import SubSection from '@layouts/sub-section';
import Uploader from '@modules/uploader';

const General = ({ state, dispatch, optionData, loading, searchOption }: {state: OptionGeneralsStore, dispatch: any, optionData: any, loading: boolean, searchOption: (searchText: string) => void}) => {
  const [image, setImage] = useState<string | null>(null);
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
        <AutoComplete
          getSearchData={(searchText) => searchOption(searchText)}
          searchValue={state.general.orderId ? optionData?.find((value) => value?.id === state?.general.orderId) || '' : ''}
          className={'w-full md:col-span-2'}
          data={optionData}
          loading={loading}
          handleSelect={(value: any) => handleChangeValue({ key: 'orderId', value: value.id })}
          label={'Option'}
          error={state.error.orderId}
          helperText={state.error.orderId ? 'Option is required' : undefined}
          keyValue={'type'}
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
          label={'Option Sort Order'}
        />
        <Select
          rounded='small'
          value={state?.general?.status?.toString()}
          size='small'
          className='w-full md:col-span-2'
          label={'Option Status'}
          optionsList={[{ id: '1', title: 'Active' }, { id: '0', title: 'In Active' }]}
          onChange={(newValue) => handleChangeValue({ key: 'status', value: newValue })}
          id={'id'}
          text={'title'}/>
      </MainSection>
      <SubSection priority={1} title='Image' className='md:row-span-3 md:col-span-1 md:h-fit'>
        <Uploader
          file={image}
          title={'Click to Upload Image'}
          fileCallback={(file) => setImage(file)}
        />
      </SubSection>
    </Div>
  );
};

export default General;
