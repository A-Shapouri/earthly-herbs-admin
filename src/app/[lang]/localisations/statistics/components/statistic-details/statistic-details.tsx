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
import statisticsShowApi from '@api/statistics/show';
import statisticsStoreApi, { StatisticsStoreProps } from '@api/statistics/store';
import statisticsUpdateApi, { StatisticsUpdateProps } from '@api/statistics/update';
import countriesListApi from '@api/countries/list';

import useFetch from '@hooks/use-fetch';
import Loading from './loading';
import useUpdate from '@hooks/use-update';
import { useRouter } from 'next-nprogress-bar';
import { AnimatePresence, motion } from 'motion/react';
import useFetchDatatable from '@hooks/use-fetch-datatable';

const StatisticDetails = () => {
  const { lang, id } = useParams<{ lang: DictionariesTypes, id: string }>();
  const [state, dispatch] = useReducer(reducer, initialState);
  const router = useRouter();

  const checkValidation = () => {
    return (!state.data.value && !state.data.code);
  };

  const {
    loading,
    getData,
  } = useFetch({
    getCallbackData: () => statisticsShowApi({ id: id }),
  });

  const {
    loading: storeLoading,
    setData: storeData,
  } = useUpdate({
    getCallbackData: (props: StatisticsStoreProps) => statisticsStoreApi({ ...props }),
    apiMessageText: 'Store Succeeded',
    apiMessageDescription: 'A new Statistic has been added successfully.',
  });

  const {
    loading: updateLoading,
    setData: updateData,
  } = useUpdate({
    getCallbackData: (props: StatisticsUpdateProps) => statisticsUpdateApi({ ...props }),
    apiMessageText: 'Update Succeeded',
    apiMessageDescription: 'The Statistic has been updated successfully.',
  });

  const {
    data: countryData,
    loading: countryLoading,
    getData: getCountryData,
  } = useFetchDatatable({
    getCallbackData: () => countriesListApi({
      perPage: 100,
    }),
  });

  useEffect(() => {
    if (id) {
      getData().then((response) => {
        dispatch({
          type: 'SET_INITIAL',
          data: {
            value: response.value,
            code: response.code,
            country: response.country,
            sortOrder: response.sortOrder,
            status: response.status,
          },
        });
      });
    }
  }, [id]);

  useEffect(() => {
    getCountryData();
  }, []);

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
          pathname: routes['route.localisations.statistics.update'],
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

  const handleGetCountry = (value: string) => {
    const data = countryData.find((country) => country.id === value);
    handleChangeValue({
      key: 'country',
      value: data,
    });
  };

  return (
    <Div className='flex-col justify-center w-full gap-4 md:gap-8'>
      <Div className={'w-full gap-2 md:gap-4 md:justify-end justify-between'}>
        <Button
          href={getParseRoute({ pathname: routes['route.localisations.statistics.index'], locale: lang })}
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
                  type={'number'}
                  inputMode={'numeric'}
                  onChange={(e) => handleChangeValue({ key: 'value', value: e.target.value })}
                  className={'w-full md:col-span-3'}
                  error={state.error.valueError}
                  value={state.data.value}
                  label={'Statistic Value'}
                  helperText={state.error.valueError ? 'Statistic Value is required!' : undefined}
                />
                <TextField
                  disabled={loading || storeLoading || updateLoading}
                  size='small'
                  rounded='small'
                  onChange={(e) => handleChangeValue({ key: 'code', value: e.target.value })}
                  className={'w-full md:col-span-3'}
                  error={state.error.codeError}
                  value={state.data.code}
                  label={'Statistic Code'}
                  helperText={state.error.codeError ? 'Statistic Code is required!' : undefined}
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
                  label={'Statistic Status'}
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

export default StatisticDetails;
