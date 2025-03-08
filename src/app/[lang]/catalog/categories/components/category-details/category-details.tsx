'use client';
import React, { useReducer, useEffect, useState } from 'react';
import { SaveIcon, RedoIcon } from '@icons';
import { initialDescriptionState, descriptionReducer } from './sub-components/descriptions/store';
import { initialFilterState, filterReducer } from './sub-components/filters/store';
import { initialStoreState, storeReducer } from './sub-components/stores/store';
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
import languagesListApi from '@api/languages/list';
import categoriesListApi from '@api/categories/list';
import filtersListApi from '@api/filters/list';
import storesListApi from '@api/stores/list';
import useUpdate from '@hooks/use-update';
import categoriesStoreApi, { CategoriesStoreProps } from '@api/categories/store';

const Menu = [
  {
    id: 'general',
    title: 'General',
  },
  {
    id: 'descriptions',
    title: 'Descriptions',
  },
  {
    id: 'filters',
    title: 'Filters',
  },
  {
    id: 'stores',
    title: 'Stores',
  },
];

const CategoryDetails = ({ name }: { name?: string }) => {
  const { lang } = useParams<{ lang: DictionariesTypes }>();

  const {
    data: languageData,
    loading: languageLoading,
    getData: getLanguageData,
  } = useFetchDatatable({
    getCallbackData: () => languagesListApi({
      perPage: 100,
    }),
  });

  const {
    data: storesData,
    loading: storesLoading,
    getData: getStoresData,
  } = useFetchDatatable({
    getCallbackData: () => storesListApi({
      perPage: 100,
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
    data: categoryData,
    loading: categoryLoading,
    getData: getCategoryData,
  } = useFetchDatatable({
    getCallbackData: () => categoriesListApi({
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

  useEffect(() => {
    getLanguageData();
    getCategoryData();
    getFilterData();
    getStoresData();
  }, []);

  const [section, setSection] = useState<string>('general');

  const handleCreate = () => {
    const error = false;
    if (!error) {
      storeData({
        payload: {
          ...generalState.general,
          descriptions: descriptionState.description,
          filters: filterState.filter,
          stores: storeState.store,
        },
      }).then((response) => {
        console.log(response);
      });
    }
  };

  const handleUpdate = () => {
  };
  const handleChangeSection = (id: string) => {
    setSection(id);
  };

  const [descriptionState, descriptionDispatch] = useReducer(descriptionReducer, initialDescriptionState);
  const [filterState, filterDispatch] = useReducer(filterReducer, initialFilterState);
  const [storeState, storeDispatch] = useReducer(storeReducer, initialStoreState);
  const [generalState, generalDispatch] = useReducer(generalReducer, initialGeneralState);

  console.log(descriptionState, filterState, storeState, generalState);

  return (
    <Div className='flex-col justify-center w-full gap-4 md:gap-8'>
      <Div className={'w-full gap-2 md:gap-4 md:justify-end justify-between'}>
        <Button href={getParseRoute({ pathname: routes['route.catalog.category.index'], locale: lang })} rounded={'small'} size={'small'} color={'slate'} startAdornment={<RedoIcon />}>Return to List</Button>
        {name ? (
          <Button onClick={handleUpdate} rounded={'small'} size={'small'} color={'indigo'} startAdornment={<SaveIcon />} className={'self-end w-36'}>Update</Button>
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
            dispatch={descriptionDispatch}
            state={descriptionState}
            categoryData={categoryData}
            languageData={languageData}
            loading={languageLoading || categoryLoading}
          />
        </SectionItem>
        <SectionItem isActive={section === 'filters'}>
          <Filters
            dispatch={filterDispatch}
            state={filterState}
            categoryData={categoryData}
            filterData={filterData}
            loading={filterLoading || categoryLoading}
          />
        </SectionItem>
        <SectionItem isActive={section === 'stores'}>
          <Stores
            dispatch={storeDispatch}
            state={storeState}
            categoryData={categoryData}
            storeData={storesData}
            loading={storesLoading || categoryLoading}
          />
        </SectionItem>
      </Div>
    </Div>
  );
};

export default CategoryDetails;
