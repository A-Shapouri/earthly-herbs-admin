import React from 'react';

import Div from '@elements/div';
import TextField from '@elements/text-field';
import MainSection from '@layouts/main-section';
import Select from '@elements/select';
import { RecurringGeneralsStore } from './store';
import SubSection from '@layouts/sub-section';

const frequencyEnum = ['MONTH', 'WEEK', 'YEAR', 'SEMI_MONTH', 'DAY'];

const General = ({ state, dispatch }: {state: RecurringGeneralsStore, dispatch: any}) => {
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
          value={state.general.cycle}
          rounded='small'
          onChange={(e) => handleChangeValue({ key: 'cycle', value: e.target.value })}
          className={'w-full col-span-1 md:col-span-3'}
          label={'Cycle'}
          type={'number'}
        />
        <TextField
          size='small'
          value={state.general.duration}
          rounded='small'
          onChange={(e) => handleChangeValue({ key: 'duration', value: e.target.value })}
          className={'w-full col-span-1 md:col-span-3'}
          label={'Duration'}
          type={'number'}
        />
        <Select
          rounded='small'
          value={state.general.frequency}
          size='small'
          onChange={(newValue) => handleChangeValue({ key: 'frequency', value: newValue })}
          className={'w-full col-span-1 md:col-span-3'}
          label={'Frequency'}
          optionsList={frequencyEnum.map(item => ({ id: item, title: item }))}
          id={'id'}
          text={'title'}/>
        <TextField
          size='small'
          value={state.general.price}
          rounded='small'
          onChange={(e) => handleChangeValue({ key: 'price', value: e.target.value })}
          className={'w-full col-span-1 md:col-span-3'}
          label={'Price'}
          type={'number'}
        />
      </MainSection>
      <MainSection priority={3} title='Trial Info' className='md:row-span-1 md:col-span-2'>
        <TextField
          size='small'
          value={state.general.trialCycle}
          rounded='small'
          onChange={(e) => handleChangeValue({ key: 'trialCycle', value: e.target.value })}
          className={'w-full col-span-1 md:col-span-3'}
          label={'Trial Cycle'}
          type={'number'}
        />
        <TextField
          size='small'
          value={state.general.trialDuration}
          rounded='small'
          onChange={(e) => handleChangeValue({ key: 'trialDuration', value: e.target.value })}
          className={'w-full col-span-1 md:col-span-3'}
          label={'Trial Duration'}
          type={'number'}
        />
        <Select
          rounded='small'
          value={state.general.trialFrequency}
          size='small'
          className='w-full col-span-1 md:col-span-3'
          label={'Trial Frequency'}
          optionsList={frequencyEnum.map(item => ({ id: item, title: item }))}
          onChange={(newValue) => handleChangeValue({ key: 'trialFrequency', value: newValue })}
          id={'id'}
          text={'title'}/>
        <TextField
          size='small'
          value={state.general.trialPrice}
          rounded='small'
          onChange={(e) => handleChangeValue({ key: 'trialPrice', value: e.target.value })}
          className={'w-full col-span-1 md:col-span-3'}
          label={'Trial Price'}
          type={'number'}
        />
      </MainSection>
      <SubSection priority={1} title='Secondary Info' className='md:row-span-3 md:col-span-1 md:h-fit'>
        <TextField
          size='small'
          value={state.general.sortOrder}
          rounded='small'
          type={'number'}
          onChange={(e) => handleChangeValue({ key: 'sortOrder', value: e.target.value })}
          className={'w-full md:col-span-2 md:col-start-1'}
          label={'Sort Order'}
        />
        <Select
          rounded='small'
          value={state?.general?.status?.toString()}
          size='small'
          className='w-full md:col-span-2'
          label={'Status'}
          optionsList={[{ id: '1', title: 'Active' }, { id: '0', title: 'In Active' }]}
          onChange={(newValue) => handleChangeValue({ key: 'status', value: newValue })}
          id={'id'}
          text={'title'}/>
        <Select
          rounded='small'
          value={state?.general?.trialStatus?.toString()}
          size='small'
          className='w-full md:col-span-2'
          label={'Trial Status'}
          optionsList={[{ id: '1', title: 'Active' }, { id: '0', title: 'In Active' }]}
          onChange={(newValue) => handleChangeValue({ key: 'trialStatus', value: newValue })}
          id={'id'}
          text={'title'}/>
      </SubSection>
    </Div>
  );
};

export default General;
