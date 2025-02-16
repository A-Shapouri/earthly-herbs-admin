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
import settingsShowApi from '@api/settings/show';
import settingsStoreApi, { SettingsStoreProps } from '@api/settings/store';
import settingsUpdateApi, { SettingsUpdateProps } from '@api/settings/update';

import useFetch from '@hooks/use-fetch';
import Loading from './loading';
import useUpdate from '@hooks/use-update';
import { useRouter } from 'next-nprogress-bar';
import FormControlLabel from '@elements/form-control-label';
import Checkbox from '@elements/checkbox';
import { AnimatePresence, motion } from 'motion/react';
import useFetchDatatable from '@hooks/use-fetch-datatable';
import storesListApi from '@api/stores/list';

const SettingDetails = () => {
  const { lang, id } = useParams<{ lang: DictionariesTypes, id: string }>();
  const [state, dispatch] = useReducer(reducer, initialState);
  const router = useRouter();

  const checkValidation = () => {
    return (!state.data.code && !state.data.key && !state.data.value);
  };

  const {
    loading,
    getData,
  } = useFetch({
    getCallbackData: () => settingsShowApi({ id: id }),
  });

  const {
    loading: storeLoading,
    setData: storeData,
  } = useUpdate({
    getCallbackData: (props: SettingsStoreProps) => settingsStoreApi({ ...props }),
    apiMessageText: 'Store Succeeded',
    apiMessageDescription: 'A new Setting has been added successfully.',
  });

  const {
    loading: updateLoading,
    setData: updateData,
  } = useUpdate({
    getCallbackData: (props: SettingsUpdateProps) => settingsUpdateApi({ ...props }),
    apiMessageText: 'Update Succeeded',
    apiMessageDescription: 'The Setting has been updated successfully.',
  });

  const {
    data: storeApiData,
    loading: storeApiLoading,
    getData: getStoreData,
  } = useFetchDatatable({
    getCallbackData: () => storesListApi({
      perPage: 100,
    }),
  });

  useEffect(() => {
    if (id) {
      getData().then((response) => {
        dispatch({
          type: 'SET_INITIAL',
          data: {
            code: response.code,
            key: response.key,
            value: response.value,
            serialized: response.serialized,
            sortOrder: response.sortOrder,
            status: response.status,
          },
        });
      });
    }
  }, [id]);

  useEffect(() => {
    getStoreData();
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
          pathname: routes['route.localisations.settings.update'],
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

  const handleGetStore = (value: string) => {
    const data = storeApiData.find((store) => store.id === value);
    handleChangeValue({
      key: 'country',
      value: data,
    });
  };

  return (
    <Div className='flex-col justify-center w-full gap-4 md:gap-8'>
      <Div className={'w-full gap-2 md:gap-4 md:justify-end justify-between'}>
        <Button
          href={getParseRoute({ pathname: routes['route.localisations.settings.index'], locale: lang })}
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
                  onChange={(e) => handleChangeValue({ key: 'code', value: e.target.value })}
                  className={'w-full md:col-span-3'}
                  error={state.error.codeError}
                  value={state.data.code}
                  label={'Setting Code'}
                  helperText={state.error.codeError ? 'Setting Code is required!' : undefined}
                />
                <TextField
                  disabled={loading || storeLoading || updateLoading}
                  size='small'
                  rounded='small'
                  multiline={true}
                  inputClassName={'min-h-24'}
                  onChange={(e) => handleChangeValue({ key: 'value', value: e.target.value })}
                  className={'w-full md:col-span-5'}
                  error={state.error.valueError}
                  value={state.data.value}
                  label={'Setting Value'}
                  helperText={state.error.valueError ? 'Setting Value is required!' : undefined}
                />
                <TextField
                  disabled={loading || storeLoading || updateLoading}
                  size='small'
                  rounded='small'
                  onChange={(e) => handleChangeValue({ key: 'key', value: e.target.value })}
                  className={'w-full md:col-span-3'}
                  error={state.error.keyError}
                  value={state.data.key}
                  label={'Setting Key'}
                  helperText={state.error.keyError ? 'Setting Key is required!' : undefined}
                />
                <Select
                  rounded='small'
                  value={state?.data?.store?.id?.toString()}
                  size='small'
                  className='w-full md:col-span-3'
                  disabled={loading || storeLoading || updateLoading || storeApiLoading}
                  label={'Store'}
                  optionsList={storeApiData}
                  onChange={(newValue) => handleGetStore(newValue)}
                  id={'id'}
                  text={'name'}/>
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
                  label={'Setting Status'}
                  optionsList={[{ id: '1', title: 'Active' }, { id: '0', title: 'In Active' }]}
                  onChange={(newValue) => handleChangeValue({ key: 'status', value: newValue })}
                  id={'id'}
                  text={'title'}/>
                <FormControlLabel label={'Serialized'}>
                  <Checkbox
                    onChange={() => handleChangeValue({ key: 'serialized', value: !state.data.serialized })}
                    color={'slate'}
                    checked={state.data.serialized}
                  />
                </FormControlLabel>
              </SubSection>
            </Div>
          )}
        </motion.div>
      </AnimatePresence>
    </Div>
  );
};

export default SettingDetails;
