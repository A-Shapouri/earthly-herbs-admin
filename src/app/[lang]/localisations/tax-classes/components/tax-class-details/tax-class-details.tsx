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
import taxClassesShowApi from '@api/tax-classes/show';
import taxClassesStoreApi, { TaxClassesStoreProps } from '@api/tax-classes/store';
import taxClassesUpdateApi, { TaxClassesUpdateProps } from '@api/tax-classes/update';

import useFetch from '@hooks/use-fetch';
import Loading from './loading';
import useUpdate from '@hooks/use-update';
import { useRouter } from 'next-nprogress-bar';
import { AnimatePresence, motion } from 'motion/react';

const TaxClassDetails = () => {
  const { lang, id } = useParams<{ lang: DictionariesTypes, id: string }>();
  const [state, dispatch] = useReducer(reducer, initialState);
  const router = useRouter();

  const checkValidation = () => {
    return (!state.data.name && !state.data.description);
  };

  const {
    loading,
    getData,
  } = useFetch({
    getCallbackData: () => taxClassesShowApi({ id: id }),
  });

  const {
    loading: taxClassLoading,
    setData: taxClassData,
  } = useUpdate({
    getCallbackData: (props: TaxClassesStoreProps) => taxClassesStoreApi({ ...props }),
    apiMessageText: 'Store Succeeded',
    apiMessageDescription: 'A new Tax Class has been added successfully.',
  });

  const {
    loading: updateLoading,
    setData: updateData,
  } = useUpdate({
    getCallbackData: (props: TaxClassesUpdateProps) => taxClassesUpdateApi({ ...props }),
    apiMessageText: 'Update Succeeded',
    apiMessageDescription: 'The Tax Class has been updated successfully.',
  });

  useEffect(() => {
    if (id) {
      getData().then((response) => {
        dispatch({
          type: 'SET_INITIAL',
          data: {
            name: response.name,
            description: response.description,
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
      taxClassData({
        payload: state.data,
      }).then((response) => {
        router.push(getParseRoute({
          pathname: routes['route.localisations.taxClasses.update'],
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
          href={getParseRoute({ pathname: routes['route.localisations.taxClasses.index'], locale: lang })}
          rounded={'small'}
          size={'small'}
          color={'slate'}
          loading={loading || taxClassLoading || updateLoading}
          disabled={loading || taxClassLoading || updateLoading}
          className={'w-36 md:w-40'}
          startAdornment={<RedoIcon/>}>
          Return to List
        </Button>
        {id ? (
          <Button
            disabled={loading || taxClassLoading || updateLoading}
            loading={loading || taxClassLoading || updateLoading}
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
            disabled={loading || taxClassLoading || updateLoading}
            loading={loading || taxClassLoading || updateLoading}
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
                  disabled={loading || taxClassLoading || updateLoading}
                  size='small'
                  rounded='small'
                  onChange={(e) => handleChangeValue({ key: 'name', value: e.target.value })}
                  className={'w-full md:col-span-3'}
                  error={state.error.nameError}
                  value={state.data.name}
                  label={'Tax Class Name'}
                  helperText={state.error.nameError ? 'Tax Class Name is required!' : undefined}
                />
                <TextField
                  disabled={loading || taxClassLoading || updateLoading}
                  size='small'
                  rounded='small'
                  multiline={true}
                  inputClassName={'min-h-24'}
                  onChange={(e) => handleChangeValue({ key: 'description', value: e.target.value })}
                  className={'w-full md:col-span-5'}
                  error={state.error.descriptionError}
                  value={state.data.description}
                  label={'Tax Class Description'}
                  helperText={state.error.descriptionError ? 'Tax Class Description is required!' : undefined}
                />
              </MainSection>
              <SubSection title='Secondary Details' className='md:row-span-3 md:col-span-1 md:h-fit'>
                <TextField
                  size='small'
                  disabled={loading || taxClassLoading || updateLoading}
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
                  disabled={loading || taxClassLoading || updateLoading}
                  label={'Store Status'}
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

export default TaxClassDetails;
