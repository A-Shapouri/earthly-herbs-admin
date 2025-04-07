'use client';
import React, { useReducer, useEffect, useState } from 'react';
import { SaveIcon, RedoIcon } from '@icons';
import { initialDescriptionState } from './sub-components/descriptions/store';
import { initialFilterState } from './sub-components/filters/store';
import { initialStoreState } from './sub-components/stores/store';
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
import Stores from './sub-components/stores';
import Filters from './sub-components/filters';
import Description from './sub-components/descriptions';
import useFetchDatatable from '@hooks/use-fetch-datatable';
import languagesListApi, { LanguagesListProps } from '@api/languages/list';
import filtersListApi from '@api/filters/list';
import storesListApi, { StoresListProps } from '@api/stores/list';
import useUpdate from '@hooks/use-update';
import categoriesStoreApi, { CategoriesStoreProps } from '@api/categories/store';
import { useModuleForm } from '@modules/catalog-form/catalog-store';
import useFetch from '@hooks/use-fetch';
import categoriesShowApi from '@api/categories/show';
import { useRouter } from 'next-nprogress-bar';
import categoriesUpdateApi, { CategoriesUpdateProps } from '@api/categories/update';

const Menu = [
  {
    id: 'general',
    title: 'General',
  },
  {
    id: 'histories',
    title: 'Histories',
  },
  {
    id: 'reasons',
    title: 'Reasons',
  },
  {
    id: 'statuses',
    title: 'Statuses',
  },
];

const RefundDetails = () => {
  const router = useRouter();
  const { lang, id } = useParams<{ lang: DictionariesTypes, id: string }>();
  const [section, setSection] = useState<string>('general');
  const [generalState, generalDispatch] = useReducer(generalReducer, initialGeneralState);
  const descriptionForm: any = useModuleForm({
    data: initialDescriptionState.description,
    error: initialDescriptionState.error,
  });

  const filterForm : any = useModuleForm({
    data: initialFilterState.filter,
    error: initialFilterState.error,
  });

  const storeForm : any = useModuleForm({
    data: initialStoreState.store,
    error: initialStoreState.error,
  });
  const {
    data: languageData,
    loading: languageLoading,
    getData: getLanguageData,
  } = useFetchDatatable({
    getCallbackData: (props: LanguagesListProps) => languagesListApi({
      ...props,
    }),
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
    data: filterData,
    loading: filterLoading,
    getData: getFilterData,
  } = useFetchDatatable({
    getCallbackData: () => filtersListApi({
      perPage: 100,
    }),
  });

  const {
    loading: storeLoading,
    setData: storeData,
  } = useUpdate({
    getCallbackData: (props: CategoriesStoreProps) => categoriesStoreApi({ ...props }),
    apiMessageText: 'Store Succeeded',
    apiMessageDescription: 'A new Category has been added successfully.',
  });

  const {
    loading,
    getData,
  } = useFetch({
    getCallbackData: () => categoriesShowApi({ id: id }),
  });

  const {
    loading: updateLoading,
    setData: updateData,
  } = useUpdate({
    getCallbackData: (props: CategoriesUpdateProps) => categoriesUpdateApi({ ...props }),
    apiMessageText: 'Update Succeeded',
    apiMessageDescription: 'The Category has been updated successfully.',
  });

  useEffect(() => {
    if (id) {
      getData().then((response) => {
        generalDispatch({
          type: 'SET_INITIAL_STATE',
          general: {
            name: response?.name,
            image: response?.image,
            slug: response?.slug,
            column: response?.column,
            parentId: response?.parentId,
            top: response?.top,
            sortOrder: response?.sortOrder,
            status: response?.status,
          },
        });
        if (response.descriptions.length) {
          descriptionForm.handleInitial(response?.descriptions.length
            ? response?.descriptions.map((
              { languageId, name, description, status, sortOrder, metaTitle, metaDescription, metaKeywords }) =>
              ({ languageId, name, description, status, sortOrder, metaTitle, metaDescription, metaKeywords }))
            : initialDescriptionState.description);
        }
        if (response.filters.length) {
          filterForm.handleInitial(response?.filters.length
            ? response?.filters.map((
              { filterId }) =>
              ({ filterId }))
            : initialFilterState.filter);
        }
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
    getLanguageData();
    getFilterData();
    getStoresData();
  }, []);

  const handleCreate = () => {
    generalDispatch({
      type: 'CHECK_ERROR',
      callback: (state) => {
        if (!state.error.errorFlag) {
          storeData({
            payload: {
              ...state.general,
              descriptions: descriptionForm.state.data,
              filters: filterForm.state.data,
              stores: storeForm.state.data,
            },
          }).then((response) => {
            router.push(getParseRoute({ pathname: routes['route.catalog.categories.update'], query: { id: response.id } }));
          });
        }
      },
    });
  };

  const handleUpdate = () => {
    generalDispatch({
      type: 'CHECK_ERROR',
      callback: (state) => {
        if (!state.error.errorFlag) {
          updateData({
            id: id,
            payload: {
              ...state.general,
              id: id,
              descriptions: descriptionForm.state.data,
              filters: filterForm.state.data,
              stores: storeForm.state.data,
            },
          });
        }
      },
    });
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
        <Button href={getParseRoute({ pathname: routes['route.catalog.categories.index'], locale: lang })} rounded={'small'} size={'small'} color={'slate'} startAdornment={<RedoIcon />}>Return to List</Button>
        {id ? (
          <Button loading={updateLoading} disabled={updateLoading} onClick={handleUpdate} rounded={'small'} size={'small'} color={'indigo'} startAdornment={<SaveIcon />} className={'self-end w-36'}>Update</Button>
        ) : (
          <Button loading={storeLoading} disabled={storeLoading} onClick={handleCreate} rounded={'small'} size={'small'} color={'indigo'} startAdornment={<SaveIcon />} className={'self-end w-36'}>Submit</Button>
        )}
      </Div>
      <Div className={'justify-start w-full flex-col'}>
        <Header menu={Menu} handleChangeSection={handleChangeSection} section={section} />
        <SectionItem
          isActive={section === 'general'}>
          <General
            dispatch={generalDispatch}
            state={generalState}
          />
        </SectionItem>
        <SectionItem isActive={section === 'descriptions'}>
          <Description
            moduleForm={descriptionForm}
            languageData={languageData}
            loading={languageLoading}
            searchLanguage={(searchText) => getLanguageData({
              searchText: searchText,
            })}
          />
        </SectionItem>
        <SectionItem isActive={section === 'filters'}>
          <Filters
            moduleForm={filterForm}
            filterData={filterData}
            loading={filterLoading}
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

export default RefundDetails;
