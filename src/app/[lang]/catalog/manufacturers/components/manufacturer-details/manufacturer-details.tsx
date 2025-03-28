'use client';
import React, { useReducer, useEffect, useState } from 'react';
import { SaveIcon, RedoIcon } from '@icons';
import { initialGeneralState, generalReducer } from './sub-components/general/store';
import Button from '@elements/button';
import Div from '@elements/div';
import getParseRoute from '@utils/helpers/parse-route';
import routes from '@routes';
import { DictionariesTypes } from '@dictionaries';
import { useParams } from 'next/navigation';
import Header from '@layouts/section/sub-components/header';
import SectionItem from '@layouts/section/sub-components/section-item';
import General from './sub-components/general';
import useFetchDatatable from '@hooks/use-fetch-datatable';
import useUpdate from '@hooks/use-update';
import manufacturersStoreApi, { ManufacturersStoreProps } from '@api/manufacturers/store';
import { useModuleForm } from '@modules/catalog-form/catalog-store';
import useFetch from '@hooks/use-fetch';
import manufacturersShowApi from '@api/manufacturers/show';
import manufacturersUpdateApi, { ManufacturersUpdateProps } from '@api/manufacturers/update';
import { useRouter } from 'next-nprogress-bar';
import { initialStoreState } from './sub-components/stores/store';
import storesListApi, { StoresListProps } from '@api/stores/list';
import Stores from './sub-components/stores';
const Menu = [
  {
    id: 'general',
    title: 'General',
  },
  {
    id: 'stores',
    title: 'Stores',
  },
];

const AttributeDetails = () => {
  const { lang, id } = useParams<{ lang: DictionariesTypes, id: string }>();
  const [section, setSection] = useState<string>('general');
  const [generalState, generalDispatch] = useReducer(generalReducer, initialGeneralState);
  const router = useRouter();

  const storeForm : any = useModuleForm({
    data: initialStoreState.store,
    error: initialStoreState.error,
  });

  const {
    data: storesData,
    loading: storesLoading,
    getData: getStoresData,
  } = useFetchDatatable({
    getCallbackData: (props: StoresListProps) => storesListApi({
      ...props,
    }),
  });

  const {
    loading: storeLoading,
    setData: storeData,
  } = useUpdate({
    getCallbackData: (props: ManufacturersStoreProps) => manufacturersStoreApi({ ...props }),
    apiMessageText: 'Store Succeeded',
    apiMessageDescription: 'A new Manufacturer has been added successfully.',
  });

  const {
    loading: updateLoading,
    setData: updateData,
  } = useUpdate({
    getCallbackData: (props: ManufacturersUpdateProps) => manufacturersUpdateApi({ ...props }),
    apiMessageText: 'Update Succeeded',
    apiMessageDescription: 'The Manufacturer has been updated successfully.',
  });

  const {
    loading,
    getData,
  } = useFetch({
    getCallbackData: () => manufacturersShowApi({ id: id }),
  });

  useEffect(() => {
    if (id) {
      getData().then((response) => {
        console.log(response);
        generalDispatch({
          type: 'SET_INITIAL_STATE',
          general: {
            name: response?.name,
            attributeGroupId: response?.attributeGroupId,
            sortOrder: response?.sortOrder,
            status: response?.status,
          },
        });
        if (response.stores.length) {
          storeForm.handleInitial(response?.stores.length
            ? response?.stores.map((
              { storeId }) =>
              ({ storeId }))
            : initialStoreState.store);
        }
      });
    }
  }, [id]);

  useEffect(() => {
    getStoresData();
  }, []);

  const handleCreate = () => {
    const error = false;
    if (!error) {
      storeData({
        payload: {
          ...generalState.general,
          stores: storeForm.state.data,
        },
      }).then((response) => {
        router.push(getParseRoute({ pathname: routes['route.catalog.manufacturers.update'], query: { id: response.id } }));
      });
    }
  };

  const handleUpdate = () => {
    const error = false;
    if (!error) {
      updateData({
        id: id,
        payload: {
          ...generalState.general,
          id: id,
          stores: storeForm.state.data,
        },
      });
    }
  };

  const handleChangeSection = (id: string) => {
    setSection(id);
  };

  if (loading) {
    return null;
  }

  return (
    <Div className='flex-col justify-center w-full gap-4 md:gap-8'>
      <Div className={'w-full gap-2 md:gap-4 md:justify-end justify-between'}>
        <Button href={getParseRoute({ pathname: routes['route.catalog.manufacturers.index'], locale: lang })} rounded={'small'} size={'small'} color={'slate'} startAdornment={<RedoIcon />}>Return to List</Button>
        {id ? (
          <Button loading={updateLoading} disabled={updateLoading} onClick={handleUpdate} rounded={'small'} size={'small'} color={'indigo'} startAdornment={<SaveIcon />} className={'self-end w-36'}>Update</Button>
        ) : (
          <Button loading={storeLoading} disabled={storeLoading} onClick={handleCreate} rounded={'small'} size={'small'} color={'indigo'} startAdornment={<SaveIcon />} className={'self-end w-36'}>Submit</Button>
        )}
      </Div>
      <Div className={'justify-start w-full flex-col'}>
        <Header menu={Menu} handleChangeSection={handleChangeSection} section={section} />
        <SectionItem isActive={section === 'general'}>
          <General
            dispatch={generalDispatch}
            state={generalState}
          />
        </SectionItem>
        <SectionItem isActive={section === 'stores'}>
          <Stores
            moduleForm={storeForm}
            storeData={storesData}
            loading={storesLoading}
            searchStores={(searchText) => getStoresData({
              searchText: searchText,
            })}
          />
        </SectionItem>
      </Div>
    </Div>
  );
};

export default AttributeDetails;
