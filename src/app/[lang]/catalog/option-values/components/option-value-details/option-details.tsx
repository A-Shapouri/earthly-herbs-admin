'use client';
import React, { useReducer, useEffect, useState } from 'react';
import { SaveIcon, RedoIcon } from '@icons';
import { initialDescriptionState } from './sub-components/descriptions/store';
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
import Description from './sub-components/descriptions';
import useFetchDatatable from '@hooks/use-fetch-datatable';
import languagesListApi, { LanguagesListProps } from '@api/languages/list';
import optionsListApi, { OptionsListProps } from '@api/options/list';
import useUpdate from '@hooks/use-update';
import { useModuleForm } from '@modules/catalog-form/catalog-store';
import useFetch from '@hooks/use-fetch';
import optionValuesShowApi from '@api/option-values/show';
import optionValuesUpdateApi, { OptionValuesUpdateProps } from '@api/option-values/update';
import { useRouter } from 'next-nprogress-bar';
import optionValuesStoreApi, { OptionValuesStoreProps } from '@api/option-values/store';
const Menu = [
  {
    id: 'general',
    title: 'General',
  },
  {
    id: 'descriptions',
    title: 'Descriptions',
  },
];

const OptionValueDetails = () => {
  const { lang, id } = useParams<{ lang: DictionariesTypes, id: string }>();
  const [section, setSection] = useState<string>('general');
  const [generalState, generalDispatch] = useReducer(generalReducer, initialGeneralState);
  const router = useRouter();

  const descriptionForm: any = useModuleForm({
    data: initialDescriptionState.description,
    error: initialDescriptionState.error,
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
    data: optionData,
    loading: optionLoading,
    getData: getOptionData,
  } = useFetchDatatable({
    getCallbackData: (props: OptionsListProps) => optionsListApi({
      ...props,
    }),
  });

  const {
    loading: storeLoading,
    setData: storeData,
  } = useUpdate({
    getCallbackData: (props: OptionValuesStoreProps) => optionValuesStoreApi({ ...props }),
    apiMessageText: 'Store Succeeded',
    apiMessageDescription: 'A new Option Value has been added successfully.',
  });

  const {
    loading: updateLoading,
    setData: updateData,
  } = useUpdate({
    getCallbackData: (props: OptionValuesUpdateProps) => optionValuesUpdateApi({ ...props }),
    apiMessageText: 'Update Succeeded',
    apiMessageDescription: 'The Option Value has been updated successfully.',
  });

  const {
    loading,
    getData,
  } = useFetch({
    getCallbackData: () => optionValuesShowApi({ id: id }),
  });

  useEffect(() => {
    if (id) {
      getData().then((response) => {
        generalDispatch({
          type: 'SET_INITIAL_STATE',
          general: {
            type: response?.type,
            sortOrder: response?.sortOrder,
            status: response?.status,
          },
        });
        if (response?.descriptions?.length) {
          descriptionForm.handleInitial(response?.descriptions?.length
            ? response?.descriptions.map((
              { languageId, name, status, sortOrder, id }) =>
              ({ languageId, name, status, sortOrder, id }))
            : initialDescriptionState.description);
        }
      });
    }
  }, [id]);

  useEffect(() => {
    getLanguageData();
    getOptionData();
  }, []);

  const handleCreate = () => {
    const error = false;
    if (!error) {
      storeData({
        payload: {
          ...generalState.general,
          descriptions: descriptionForm.state.data,
        },
      }).then((response) => {
        router.push(getParseRoute({ pathname: routes['route.catalog.option-values.update'], query: { id: response.id } }));
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
          descriptions: descriptionForm.state.data,
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
  console.log(descriptionForm);
  return (
    <Div className='flex-col justify-center w-full gap-4 md:gap-8'>
      <Div className={'w-full gap-2 md:gap-4 md:justify-end justify-between'}>
        <Button href={getParseRoute({ pathname: routes['route.catalog.option-values.index'], locale: lang })} rounded={'small'} size={'small'} color={'slate'} startAdornment={<RedoIcon />}>Return to List</Button>
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
            optionData={optionData}
            loading={optionLoading}
            searchOption={(searchText) => getOptionData({
              searchText: searchText,
            })}
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
      </Div>
    </Div>
  );
};

export default OptionValueDetails;
