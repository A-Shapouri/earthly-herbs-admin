'use client';
import React, { useReducer, useEffect } from 'react';
import { SaveIcon, RedoIcon } from '../../../../../../assets/pb-icons';
import { initialState, reducer } from './store';
import Button from '@elements/button';
import Div from '@elements/div';
import Select from '@elements/select';
import TextField from '@elements/text-field';
import getParseRoute from '@utils/helpers/parse-route';
import routes from '@routes';
import { DictionariesTypes } from '@dictionaries';
import { useParams } from 'next/navigation';
import MainSection from '@layouts/main-section';

const DownloadDetails = ({ name }: { name?: string }) => {
  const { lang } = useParams<{ lang: DictionariesTypes }>();
  const handleCreate = () => {
    dispatch({ type: 'CHECK_ERROR' });
  };
  const handleUpdate = () => {
    dispatch({ type: 'CHECK_ERROR' });
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChangeValue = ({ id, value }: { id: string, value: any }) => {
    dispatch({
      type: 'SET_VALUE',
      id: id,
      value: value,
    });
  };

  useEffect(() => {
    if (name) {
      handleChangeValue({ id: 'name', value: name });
    }
  }, [name]);

  return (
    <Div className='flex-col justify-center w-full gap-4 md:gap-8'>
      <Div className={'w-full gap-2 md:gap-4 md:justify-end justify-between'}>
        <Button href={getParseRoute({ pathname: routes['route.catalog.recurring-profiles.index'], locale: lang })} rounded={'small'} size={'small'} color={'slate'} startAdornment={<RedoIcon />}>Return to List</Button>
        {name ? (
          <Button onClick={handleUpdate} rounded={'small'} size={'small'} color={'indigo'} startAdornment={<SaveIcon />} className={'self-end w-36'}>Update</Button>
        ) : (
          <Button onClick={handleCreate} rounded={'small'} size={'small'} color={'indigo'} startAdornment={<SaveIcon />} className={'self-end w-36'}>Submit</Button>
        )}
      </Div>
      <MainSection title='Recurring Profile'>
        <TextField
          size='small'
          onChange={(e) => handleChangeValue({ id: 'name', value: e.target.value })}
          className={'w-full md:col-span-3'}
          error={state.nameError}
          value={state?.name}
          label={'Name'}
          helperText={state.nameError ? 'name is requiered!' : undefined}
        />
        <TextField
          size='small'
          type={'number'}
          onChange={(e) => handleChangeValue({ id: 'sort_order', value: e.target.value })}
          className={'w-full col-span-2 col-start-1'}
          error={state.sortOrderError}
          value={state?.sort_order}
          label={'Price'}
          helperText={state.sortOrderError ? 'price is requiered!' : undefined}
        />
        <TextField
          size='small'
          type={'number'}
          onChange={(e) => handleChangeValue({ id: 'duration', value: e.target.value })}
          className={'w-full col-span-2'}
          label={'Duration'}
          helperText={state.sortOrderError ? 'price is requiered!' : undefined}
        />
        <TextField
          size='small'
          type={'number'}
          onChange={(e) => handleChangeValue({ id: 'cycle', value: e.target.value })}
          className={'w-full col-span-2'}
          label={'Cycle'}
          helperText={state.sortOrderError ? 'cycle is requiered!' : undefined}
        />
        <Select
          className=' col-span-2'
          size='small'
          label={'Status'}
          optionsList={[{ id: 1, title: 'Enabled' }, { id: 2, title: 'Disabled' }]}
          value={state?.status}
          error={state.statusError}
          onChange={(newValue) => handleChangeValue({ id: 'status', value: newValue })}
          id={'id'}
          helperText={state.statusError ? 'status is requiered!' : undefined}
          text={'title'} />
        <Select
          className=' col-span-2'
          size='small'
          label={'Frequency'}
          optionsList={[{ id: 1, title: 'Day' }, { id: 2, title: 'Week' }, { id: 3, title: 'Semi Month' }, { id: 4, title: 'Month' }, { id: 5, title: 'Year' }]}
          value={state?.status}
          onChange={(newValue) => handleChangeValue({ id: 'frequency', value: newValue })}
          id={'id'}
          text={'title'} />
      </MainSection>
      <MainSection title='Trial Profile'>
        <TextField
          size='small'
          type={'number'}
          onChange={(e) => handleChangeValue({ id: 'sort_order', value: e.target.value })}
          className={'w-full col-span-2 col-start-1'}
          error={state.sortOrderError}
          value={state?.sort_order}
          label={'Trial Price'}
          helperText={state.sortOrderError ? 'price is requiered!' : undefined}
        />
        <TextField
          size='small'
          type={'number'}
          onChange={(e) => handleChangeValue({ id: 'duration', value: e.target.value })}
          className={'w-full col-span-2'}
          label={'Trial Duration'}
          helperText={state.sortOrderError ? 'price is requiered!' : undefined}
        />
        <TextField
          size='small'
          type={'number'}
          onChange={(e) => handleChangeValue({ id: 'cycle', value: e.target.value })}
          className={'w-full col-span-2'}
          label={'Trial Cycle'}
          helperText={state.sortOrderError ? 'cycle is requiered!' : undefined}
        />
        <Select
          className=' col-span-2'
          size='small'
          label={'Trial Status'}
          optionsList={[{ id: 1, title: 'Enabled' }, { id: 2, title: 'Disabled' }]}
          value={state?.status}
          error={state.statusError}
          onChange={(newValue) => handleChangeValue({ id: 'status', value: newValue })}
          id={'id'}
          helperText={state.statusError ? 'status is requiered!' : undefined}
          text={'title'} />
        <Select
          className=' col-span-2'
          size='small'
          label={'Trial Frequency'}
          optionsList={[{ id: 1, title: 'Day' }, { id: 2, title: 'Week' }, { id: 3, title: 'Semi Month' }, { id: 4, title: 'Month' }, { id: 5, title: 'Year' }]}
          value={state?.status}
          onChange={(newValue) => handleChangeValue({ id: 'frequency', value: newValue })}
          id={'id'}
          text={'title'} />
        <TextField
          size='small'
          type={'number'}
          onChange={(e) => handleChangeValue({ id: 'cycle', value: e.target.value })}
          className={'w-full col-span-2'}
          label={'Sort Order'}
        />
      </MainSection>
    </Div>
  );
};

export default DownloadDetails;
