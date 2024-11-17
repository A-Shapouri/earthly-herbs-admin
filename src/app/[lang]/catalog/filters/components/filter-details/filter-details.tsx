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

const FilterDetails = ({ name }: { name?: string }) => {
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
      <MainSection title='Filter Group'>
        <TextField
          size='small'
          onChange={(e) => handleChangeValue({ id: 'name', value: e.target.value })}
          className={'w-full md:col-span-3'}
          error={state.nameError}
          value={state?.name}
          label={'Filter Group Name'}
          helperText={state.nameError ? 'Filter Group Name is requiered!' : undefined}
        />
        <TextField
          size='small'
          type={'number'}
          onChange={(e) => handleChangeValue({ id: 'cycle', value: e.target.value })}
          className={'w-full col-span-2 col-start-1'}
          label={'Sort Order'}
        />
      </MainSection>
      <MainSection title='Filter Values'>

      </MainSection>
    </Div>
  );
};

export default FilterDetails;
