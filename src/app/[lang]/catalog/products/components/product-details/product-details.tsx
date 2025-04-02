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
import Attributes from './sub-components/attributes';
import useFetchDatatable from '@hooks/use-fetch-datatable';
import languagesListApi, { LanguagesListProps } from '@api/languages/list';
import locationsListApi, { LocationsListProps } from '@api/locations/list';
import stockStatusesListApi, { StockStatusesListProps } from '@api/stock-statuses/list';
import manufacturersListApi, { ManufacturersListProps } from '@api/manufacturers/list';
import taxClassesListApi, { TaxClassesListProps } from '@api/tax-classes/list';
import lengthClassesListApi, { LengthClassesListProps } from '@api/length-classes/list';
import weightClassesListApi, { WeightClassesListProps } from '@api/weight-classes/list';
import attributesListApi, { AttributesListProps } from '@api/attributes/list';
import customerGroupsListApi, { CustomerGroupsListProps } from '@api/customer-groups/list';
import useUpdate from '@hooks/use-update';
import attributesStoreApi, { AttributesStoreProps } from '@api/attributes/store';
import { useModuleForm } from '@modules/catalog-form/catalog-store';
import useFetch from '@hooks/use-fetch';
import attributesShowApi from '@api/attributes/show';
import attributesUpdateApi, { AttributesUpdateProps } from '@api/attributes/update';
import { useRouter } from 'next-nprogress-bar';
import Discounts from './sub-components/discounts';
import Filters from './sub-components/filters';
import { initialFilterState } from './sub-components/filters/store';
import { initialDiscountState } from './sub-components/discounts/store';
import filtersListApi, { FiltersListProps } from '@api/filters/list';
import Images from './sub-components/images';
import { initialImagesState } from './sub-components/images/store';
import OptionsForm from './sub-components/options';
import { initialOptionsState } from './sub-components/options/store';
import optionsListApi, { OptionsListProps } from '@api/options/list';

const Menu = [
  {
    id: 'general',
    title: 'General',
  },
  {
    id: 'attributes',
    title: 'Attributes',
  },
  {
    id: 'descriptions',
    title: 'Descriptions',
  },
  {
    id: 'discounts',
    title: 'Discounts',
  },
  {
    id: 'filters',
    title: 'Filters',
  },
  {
    id: 'images',
    title: 'Images',
  },
  {
    id: 'options',
    title: 'Options',
  },
  {
    id: 'recurring',
    title: 'Recurring',
  },
  {
    id: 'relateds',
    title: 'Relateds',
  },
  {
    id: 'rewards',
    title: 'Rewards',
  },
  {
    id: 'specials',
    title: 'Specials',
  },
  {
    id: 'categories',
    title: 'Categories',
  },
  {
    id: 'downloads',
    title: 'Downloads',
  },
  {
    id: 'layouts',
    title: 'Layouts',
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

  const descriptionForm: any = useModuleForm({
    data: initialDescriptionState.description,
    error: initialDescriptionState.error,
  });

  const filterForm: any = useModuleForm({
    data: initialFilterState.filter,
    error: initialFilterState.error,
  });

  const discountForm: any = useModuleForm({
    data: initialDiscountState.discount,
    error: initialDiscountState.error,
  });

  const imagesForm: any = useModuleForm({
    data: initialImagesState.image,
    error: initialImagesState.error,
  });

  const optionForm: any = useModuleForm({
    data: initialOptionsState.options,
    error: initialOptionsState.error,
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
    data: locationData,
    loading: locationLoading,
    getData: getLocationData,
  } = useFetchDatatable({
    getCallbackData: (props: LocationsListProps) => locationsListApi({
      ...props,
    }),
  });

  const {
    data: manufacturerData,
    loading: manufacturerLoading,
    getData: getManufacturerData,
  } = useFetchDatatable({
    getCallbackData: (props: ManufacturersListProps) => manufacturersListApi({
      ...props,
    }),
  });

  const {
    data: taxClassData,
    loading: taxClassLoading,
    getData: getTaxClassData,
  } = useFetchDatatable({
    getCallbackData: (props: TaxClassesListProps) => taxClassesListApi({
      ...props,
    }),
  });

  const {
    data: lengthClassData,
    loading: lengthClassLoading,
    getData: getLengthClassData,
  } = useFetchDatatable({
    getCallbackData: (props: LengthClassesListProps) => lengthClassesListApi({
      ...props,
    }),
  });

  const {
    data: weightClassData,
    loading: weightClassLoading,
    getData: getWeightClassData,
  } = useFetchDatatable({
    getCallbackData: (props: WeightClassesListProps) => weightClassesListApi({
      ...props,
    }),
  });

  const {
    data: stockStatusData,
    loading: stockStatusLoading,
    getData: getStockStatusData,
  } = useFetchDatatable({
    getCallbackData: (props: StockStatusesListProps) => stockStatusesListApi({
      ...props,
    }),
  });

  const {
    data: customerGroupData,
    loading: customerGroupLoading,
    getData: getCustomerGroupData,
  } = useFetchDatatable({
    getCallbackData: (props: CustomerGroupsListProps) => customerGroupsListApi({
      ...props,
    }),
  });

  const {
    data: attributesData,
    loading: attributesLoading,
    getData: getAttributesData,
  } = useFetchDatatable({
    getCallbackData: (props: AttributesListProps) => attributesListApi({
      ...props,
    }),
  });

  const {
    data: filterData,
    loading: filterLoading,
    getData: getFilterData,
  } = useFetchDatatable({
    getCallbackData: (props: FiltersListProps) => filtersListApi({
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
    getCallbackData: (props: AttributesStoreProps) => attributesStoreApi({ ...props }),
    apiMessageText: 'Store Succeeded',
    apiMessageDescription: 'A new Attribute has been added successfully.',
  });

  const {
    loading: updateLoading,
    setData: updateData,
  } = useUpdate({
    getCallbackData: (props: AttributesUpdateProps) => attributesUpdateApi({ ...props }),
    apiMessageText: 'Update Succeeded',
    apiMessageDescription: 'The Attribute has been updated successfully.',
  });

  const {
    loading,
    getData,
  } = useFetch({
    getCallbackData: () => attributesShowApi({ id: id }),
  });

  useEffect(() => {
    if (id) {
      getData().then((response) => {
        generalDispatch({
          type: 'SET_INITIAL_STATE',
          general: {
            name: response?.name,
            attributeGroupId: response?.attributeGroupId,
            sortOrder: response?.sortOrder,
            status: response?.status,
          },
        });
        if (response.descriptions.length) {
          descriptionForm.handleInitial(response?.descriptions.length
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
    getLocationData();
    getStockStatusData();
    getManufacturerData();
    getTaxClassData();
    getLengthClassData();
    getWeightClassData();
    getAttributesData();
    getCustomerGroupData();
    getFilterData();
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
        router.push(getParseRoute({ pathname: routes['route.catalog.attributes.update'], query: { id: response.id } }));
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

  return (
    <Div className='flex-col justify-center w-full gap-4 md:gap-8'>
      <Div className={'w-full gap-2 md:gap-4 md:justify-end justify-between'}>
        <Button href={getParseRoute({ pathname: routes['route.catalog.attributes.index'], locale: lang })} rounded={'small'} size={'small'} color={'slate'} startAdornment={<RedoIcon />}>Return to List</Button>
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
            lengthClassData={lengthClassData}
            searchLengthClass={(searchText) => getLengthClassData({
              searchText: searchText,
            })}
            weightClassData={weightClassData}
            searchWeightClass={(searchText) => getWeightClassData({
              searchText: searchText,
            })}
            manufacturerData={manufacturerData}
            searchManufacturer={(searchText) => getManufacturerData({
              searchText: searchText,
            })}
            taxClassData={taxClassData}
            searchTaxClass={(searchText) => getTaxClassData({
              searchText: searchText,
            })}
            locationData={locationData}
            searchLocation={(searchText) => getLocationData({
              searchText: searchText,
            })}
            stockStatusData={stockStatusData}
            searchStockStatus={(searchText) => getStockStatusData({
              searchText: searchText,
            })}
            loading={locationLoading || stockStatusLoading || taxClassLoading || lengthClassLoading || weightClassLoading || manufacturerLoading || attributesLoading}
            dispatch={generalDispatch}
            // @ts-ignore
            state={generalState}
          />
        </SectionItem>
        <SectionItem isActive={section === 'attributes'}>
          <Attributes
            attributeData={attributesData}
            searchAttribute={(searchText) => getAttributesData({
              searchText: searchText,
            })}
            moduleForm={descriptionForm}
            languageData={languageData}
            loading={languageLoading}
            searchLanguage={(searchText) => getLanguageData({
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
        <SectionItem isActive={section === 'discounts'}>
          <Discounts
            customerGroupData={customerGroupData}
            loading={customerGroupLoading}
            moduleForm={discountForm}
            searchCustomerGroup={(searchText) => getCustomerGroupData({
              searchText: searchText,
            })}
          />
        </SectionItem>
        <SectionItem isActive={section === 'filters'}>
          <Filters
            filterData={filterData}
            loading={filterLoading}
            moduleForm={filterForm}
          />
        </SectionItem>
        <SectionItem isActive={section === 'images'}>
          <Images
            loading={filterLoading}
            moduleForm={imagesForm}
          />
        </SectionItem>
        <SectionItem isActive={section === 'options'}>
          <OptionsForm
            optionData={optionData}
            loading={optionLoading}
            moduleForm={optionForm}
            searchOption={(searchText) => getOptionData({
              searchText: searchText,
            })}
          />
        </SectionItem>
      </Div>
    </Div>
  );
};

export default AttributeDetails;
