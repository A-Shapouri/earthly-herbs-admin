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
import locationsShowApi from '@api/locations/show';
import locationsStoreApi, { LocationsStoreProps } from '@api/locations/store';
import locationsUpdateApi, { LocationsUpdateProps } from '@api/locations/update';

import useFetch from '@hooks/use-fetch';
import Loading from './loading';
import useUpdate from '@hooks/use-update';
import { useRouter } from 'next-nprogress-bar';
import { AnimatePresence, motion } from 'motion/react';

const LocationDetails = () => {
  const { lang, id } = useParams<{ lang: DictionariesTypes, id: string }>();
  const [state, dispatch] = useReducer(reducer, initialState);
  const router = useRouter();

  const checkValidation = () => {
    return (!state.data.name &&
      !state.data.fax &&
      !state.data.geocode &&
      !state.data.telephone &&
      !state.data.address &&
      !state.data.open &&
      !state.data.comment);
  };

  const {
    loading,
    getData,
  } = useFetch({
    getCallbackData: () => locationsShowApi({ id: id }),
  });

  const {
    loading: storeLoading,
    setData: storeData,
  } = useUpdate({
    getCallbackData: (props: LocationsStoreProps) => locationsStoreApi({ ...props }),
    apiMessageText: 'Store Succeeded',
    apiMessageDescription: 'A new Location has been added successfully.',
  });

  const {
    loading: updateLoading,
    setData: updateData,
  } = useUpdate({
    getCallbackData: (props: LocationsUpdateProps) => locationsUpdateApi({ ...props }),
    apiMessageText: 'Update Succeeded',
    apiMessageDescription: 'The Location has been updated successfully.',
  });

  useEffect(() => {
    if (id) {
      getData().then((response) => {
        dispatch({
          type: 'SET_INITIAL',
          data: {
            name: response.name,
            fax: response.fax,
            geocode: response.geocode,
            telephone: response.telephone,
            address: response.address,
            image: response.image,
            open: response.open,
            comment: response.comment,
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
          pathname: routes['route.localisations.locations.update'],
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
          href={getParseRoute({ pathname: routes['route.localisations.locations.index'], locale: lang })}
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
            <Loading/>
          ) : (
            <Div className={'w-full gap-6 grid md:grid-cols-3 md:grid-rows-3 grid-cols-1 mt-4 grid-flow-dense'}>
              <MainSection className='md:row-span-1 md:col-span-2' title='Primary Details'>
                <TextField
                  disabled={loading || storeLoading || updateLoading}
                  size='small'
                  rounded='small'
                  onChange={(e) => handleChangeValue({ key: 'name', value: e.target.value })}
                  className={'w-full md:col-span-3'}
                  error={state.error.nameError}
                  value={state.data.name}
                  label={'Location Name'}
                  helperText={state.error.nameError ? 'Location Name is required!' : undefined}
                />
                <TextField
                  disabled={loading || storeLoading || updateLoading}
                  size='small'
                  rounded='small'
                  multiline={true}
                  inputClassName={'min-h-24'}
                  onChange={(e) => handleChangeValue({ key: 'address', value: e.target.value })}
                  className={'w-full md:col-span-5'}
                  error={state.error.addressError}
                  value={state.data.address}
                  label={'Location Address'}
                  helperText={state.error.addressError ? 'Location Address is required!' : undefined}
                />
                <TextField
                  disabled={loading || storeLoading || updateLoading}
                  size='small'
                  rounded='small'
                  onChange={(e) => handleChangeValue({ key: 'telephone', value: e.target.value })}
                  className={'w-full md:col-span-2'}
                  error={state.error.telephoneError}
                  value={state.data.telephone}
                  label={'Location Telephone'}
                  helperText={state.error.telephoneError ? 'Location Telephone is required!' : undefined}
                />
                <TextField
                  disabled={loading || storeLoading || updateLoading}
                  size='small'
                  rounded='small'
                  onChange={(e) => handleChangeValue({ key: 'fax', value: e.target.value })}
                  className={'w-full md:col-span-2'}
                  error={state.error.faxError}
                  value={state.data.fax}
                  label={'Location Fax'}
                  helperText={state.error.faxError ? 'Location Fax is required!' : undefined}
                />
                <TextField
                  disabled={loading || storeLoading || updateLoading}
                  size='small'
                  rounded='small'
                  onChange={(e) => handleChangeValue({ key: 'geocode', value: e.target.value })}
                  className={'w-full md:col-span-2'}
                  error={state.error.geocodeError}
                  value={state.data.geocode}
                  label={'Location Geocode'}
                  helperText={state.error.geocodeError ? 'Location Geocode is required!' : undefined}
                />
              </MainSection>
              <MainSection className='md:row-span-1 md:col-span-2' title='Primary Details'>
                <TextField
                  disabled={loading || storeLoading || updateLoading}
                  size='small'
                  rounded='small'
                  multiline={true}
                  inputClassName={'min-h-24'}
                  onChange={(e) => handleChangeValue({ key: 'open', value: e.target.value })}
                  className={'w-full md:col-span-4'}
                  error={state.error.openError}
                  value={state.data.open}
                  label={'Location Open'}
                  helperText={state.error.openError ? 'Location Open is required!' : undefined}
                />
                <TextField
                  disabled={loading || storeLoading || updateLoading}
                  size='small'
                  rounded='small'
                  multiline={true}
                  inputClassName={'min-h-24'}
                  onChange={(e) => handleChangeValue({ key: 'comment', value: e.target.value })}
                  className={'w-full md:col-span-6'}
                  error={state.error.commentError}
                  value={state.data.comment}
                  label={'Location Comment'}
                  helperText={state.error.commentError ? 'Location Comment is required!' : undefined}
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
                  label={'Location Status'}
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

export default LocationDetails;
