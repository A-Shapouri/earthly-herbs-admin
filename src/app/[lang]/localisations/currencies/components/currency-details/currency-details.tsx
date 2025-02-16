'use client';
import React, { useReducer, useEffect } from 'react';
import { SaveIcon, RedoIcon } from '@icons';
import { initialState, reducer } from './store';
import Button from '@elements/button';
import Div from '@elements/div';
import TextField from '@elements/text-field';
import getParseRoute from '@utils/helpers/parse-route';
import routes from '@routes';
import { DictionariesTypes } from '@dictionaries';
import { useParams } from 'next/navigation';
import MainSection from '@layouts/main-section';
import Select from '@elements/select';
import SubSection from '@layouts/sub-section';
import currenciesShowApi from '@api/currencies/show';
import currenciesStoreApi, { CurrenciesStoreProps } from '@api/currencies/store';
import currenciesUpdateApi, { CurrenciesUpdateProps } from '@api/currencies/update';

import useFetch from '@hooks/use-fetch';
import Loading from './loading';
import useUpdate from '@hooks/use-update';
import { useRouter } from 'next-nprogress-bar';
import { AnimatePresence, motion } from 'motion/react';

const CurrencyDetails = () => {
  const { lang, id } = useParams<{ lang: DictionariesTypes, id: string }>();
  const [state, dispatch] = useReducer(reducer, initialState);
  const router = useRouter();

  const checkValidation = () => {
    //TODO: add image validation
    return (!state.data.name && !state.data.code && !state.data.locale && !state.data.directory);
  };

  const {
    loading,
    getData,
  } = useFetch({
    getCallbackData: () => currenciesShowApi({ id: id }),
  });

  const {
    loading: storeLoading,
    setData: storeData,
  } = useUpdate({
    getCallbackData: (props: CurrenciesStoreProps) => currenciesStoreApi({ ...props }),
    apiMessageText: 'Store Succeeded',
    apiMessageDescription: 'A new currency has been added successfully.',
  });

  const {
    loading: updateLoading,
    setData: updateData,
  } = useUpdate({
    getCallbackData: (props: CurrenciesUpdateProps) => currenciesUpdateApi({ ...props }),
    apiMessageText: 'Update Succeeded',
    apiMessageDescription: 'The currency has been updated successfully.',
  });

  useEffect(() => {
    if (id) {
      getData().then((response) => {
        dispatch({
          type: 'SET_INITIAL',
          data: {
            title: response.title,
            code: response.code,
            symbolLeft: response.symbolLeft,
            symbolRight: response.symbolRight,
            decimalPlace: response.decimalPlace,
            value: response.value,
            sortOrder: response.sortOrder,
            status: response.status,
          },
        });
      });
    }
  }, [id]);

  const handleUpdate = () => {
    const error = checkValidation();
    if (!error) {
      updateData({
        payload: {
          ...state.data,
          id: id,
        },
        id: id,
      });
    } else {
      dispatch({ type: 'CHECK_ERROR' });
    }
  };

  const handleCreate = () => {
    const error = checkValidation();
    if (!error) {
      storeData({
        payload: state.data,
      }).then((response) => {
        router.push(getParseRoute({
          pathname: routes['route.localisations.currencies.update'],
          query: {
            id: response.id,
          },
          locale: lang,
        }));
      });
    } else {
      dispatch({ type: 'CHECK_ERROR' });
    }
  };

  const handleChangeValue = ({ key, value }: { key: string, value: any }) => {
    dispatch({
      type: 'SET_VALUE',
      id: key,
      value: value,
    });
  };

  return (
    <Div className='flex-col justify-center w-full gap-4 md:gap-8'>
      <Div className={'w-full gap-2 md:gap-4 md:justify-end justify-between'}>
        <Button
          href={getParseRoute({ pathname: routes['route.localisations.currencies.index'], locale: lang })}
          rounded={'small'}
          size={'small'}
          color={'slate'}
          loading={loading || storeLoading || updateLoading}
          disabled={loading || storeLoading || updateLoading}
          className={'w-36 md:w-40'}
          startAdornment={<RedoIcon/>}>
          Return to List
        </Button>
        {id ? (
          <Button
            disabled={loading || storeLoading || updateLoading}
            loading={loading || storeLoading || updateLoading}
            onClick={handleUpdate}
            rounded={'small'}
            size={'small'}
            color={'indigo'}
            startAdornment={<SaveIcon/>}
            className={'self-end w-36 md:w-40'}>
            Update
          </Button>
        ) : (
          <Button
            disabled={loading || storeLoading || updateLoading}
            loading={loading || storeLoading || updateLoading}
            onClick={handleCreate}
            rounded={'small'}
            size={'small'}
            color={'indigo'}
            startAdornment={<SaveIcon/>}
            className={'self-end w-36 md:w-40'}>
            Submit
          </Button>
        )}
      </Div>
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {loading ? (
            <Loading />
          ) : (
            <Div className={'w-full gap-6 grid md:grid-cols-3 md:grid-rows-3 grid-cols-1 mt-4 grid-flow-dense'}>
              <MainSection className='md:row-span-1 md:col-span-2' title='Primary Details'>
                <TextField
                  disabled={loading || storeLoading || updateLoading}
                  size='small'
                  rounded='small'
                  onChange={(e) => handleChangeValue({ key: 'title', value: e.target.value })}
                  className={'w-full md:col-span-3'}
                  error={state.error.titleError}
                  value={state.data.title}
                  label={'currency Title'}
                  helperText={state.error.titleError ? 'currency Title is required!' : undefined}
                />
                <TextField
                  disabled={loading || storeLoading || updateLoading}
                  size='small'
                  rounded='small'
                  onChange={(e) => handleChangeValue({ key: 'code', value: e.target.value })}
                  className={'w-full md:col-span-3'}
                  error={state.error.codeError}
                  value={state.data.code}
                  label={'currency Code'}
                  helperText={state.error.codeError ? 'currency Code is required!' : undefined}
                />
                <TextField
                  disabled={loading || storeLoading || updateLoading}
                  size='small'
                  rounded='small'
                  onChange={(e) => handleChangeValue({ key: 'symbolLeft', value: e.target.value })}
                  className={'w-full md:col-span-3'}
                  error={state.error.symbolLeftError}
                  value={state.data.symbolLeft}
                  label={'currency Symbol Left'}
                  helperText={state.error.symbolLeftError ? 'currency Symbol Left is required!' : undefined}
                />
                <TextField
                  disabled={loading || storeLoading || updateLoading}
                  size='small'
                  rounded='small'
                  onChange={(e) => handleChangeValue({ key: 'symbolRight', value: e.target.value })}
                  className={'w-full md:col-span-3'}
                  error={state.error.symbolRightError}
                  value={state.data.symbolRight}
                  label={'currency Symbol Right'}
                  helperText={state.error.symbolRightError ? 'currency Symbol Right is required!' : undefined}
                />
                <TextField
                  disabled={loading || storeLoading || updateLoading}
                  size='small'
                  rounded='small'
                  onChange={(e) => handleChangeValue({ key: 'decimalPlace', value: e.target.value })}
                  className={'w-full md:col-span-3'}
                  error={state.error.decimalPlaceError}
                  value={state.data.decimalPlace}
                  label={'currency Decimal Place'}
                  helperText={state.error.decimalPlaceError ? 'currency Decimal Place is required!' : undefined}
                />
                <TextField
                  disabled={loading || storeLoading || updateLoading}
                  size='small'
                  rounded='small'
                  onChange={(e) => handleChangeValue({ key: 'value', value: e.target.value })}
                  className={'w-full md:col-span-3'}
                  error={state.error.valueError}
                  value={state.data.value}
                  label={'currency Value'}
                  helperText={state.error.valueError ? 'currency Value is required!' : undefined}
                />
              </MainSection>
              <SubSection title='Secondary Details' className='md:row-span-3 md:col-span-1 md:h-fit'>
                <TextField
                  size='small'
                  disabled={loading || storeLoading || updateLoading}
                  value={state.data.sortOrder}
                  rounded='small'
                  type={'number'}
                  onChange={(e) => handleChangeValue({ key: 'sortOrder', value: e.target.value })}
                  className={'w-full'}
                  label={'Sort Order'}
                />
                <Select
                  rounded='small'
                  value={state.data.status.toString()}
                  size='small'
                  className='w-full'
                  disabled={loading || storeLoading || updateLoading}
                  label={'currency Status'}
                  optionsList={[{ id: '1', title: 'Active' }, { id: '0', title: 'In Active' }]}
                  onChange={(newValue) => handleChangeValue({ key: 'status', value: newValue })}
                  id={'id'}
                  text={'title'}/>
              </SubSection>
            </Div>
          )}
        </motion.div>
      </AnimatePresence>
    </Div>
  );
};

export default CurrencyDetails;
