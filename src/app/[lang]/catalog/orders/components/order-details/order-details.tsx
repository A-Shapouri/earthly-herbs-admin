'use client';
import React, { useReducer, useEffect, useState } from 'react';
import { SaveIcon, RedoIcon } from '@icons';
import { initialStatusesState } from './sub-components/statuses/store';
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
import Statuses from './sub-components/statuses';
import useFetchDatatable from '@hooks/use-fetch-datatable';
import languagesListApi, { LanguagesListProps } from '@api/languages/list';
import useUpdate from '@hooks/use-update';
import ordersStoreApi, { OrdersStoreProps } from '@api/orders/store';
import { useModuleForm } from '@modules/catalog-form/catalog-store';
import useFetch from '@hooks/use-fetch';
import ordersShowApi from '@api/orders/show';
import ordersUpdateApi, { OrdersUpdateProps } from '@api/orders/update';
import { useRouter } from 'next-nprogress-bar';
import Histories from './sub-components/histories';
import { initialHistoriesState } from './sub-components/histories/store';
import Options from './sub-components/options';
import { initialOptionsState } from './sub-components/options/store';
import Products from './sub-components/products';
import { initialProductsState } from './sub-components/products/store';
import Recurrings from './sub-components/recurrings';
import { initialRecurringsState } from './sub-components/recurrings/store';
import Shipments from './sub-components/shipments';
import { initialShipmentsState } from './sub-components/shipments/store';
import Totals from './sub-components/totals';
import { initialTotalsState } from './sub-components/totals/store';
import Vouchers from './sub-components/vouchers';
import { initialVouchersState } from './sub-components/vouchers/store';

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
    id: 'histories',
    title: 'Histories',
  },
  {
    id: 'options',
    title: 'Options',
  },
  {
    id: 'products',
    title: 'Products',
  },
  {
    id: 'recurrings',
    title: 'Recurrings',
  },
  {
    id: 'shipments',
    title: 'Shipments',
  },
  {
    id: 'totals',
    title: 'Totals',
  },
  {
    id: 'vouchers',
    title: 'Vouchers',
  },
];

const OrderDetails = () => {
  const { lang, id } = useParams<{ lang: DictionariesTypes, id: string }>();
  const [section, setSection] = useState<string>('general');
  const [generalState, generalDispatch] = useReducer(generalReducer, initialGeneralState);
  const router = useRouter();

  const statusesForm: any = useModuleForm({
    data: initialStatusesState.status,
    error: initialStatusesState.error,
  });

  const historiesForm: any = useModuleForm({
    data: initialHistoriesState.history,
    error: initialHistoriesState.error,
  });

  const optionsForm: any = useModuleForm({
    data: initialOptionsState.option,
    error: initialOptionsState.error,
  });

  const productsForm: any = useModuleForm({
    data: initialProductsState.product,
    error: initialProductsState.error,
  });

  const recurringsForm: any = useModuleForm({
    data: initialRecurringsState.recurring,
    error: initialRecurringsState.error,
  });

  const shipmentsForm: any = useModuleForm({
    data: initialShipmentsState.shipment,
    error: initialShipmentsState.error,
  });

  const totalsForm: any = useModuleForm({
    data: initialTotalsState.total,
    error: initialTotalsState.error,
  });

  const vouchersForm: any = useModuleForm({
    data: initialVouchersState.voucher,
    error: initialVouchersState.error,
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
    loading: storeLoading,
    setData: storeData,
  } = useUpdate({
    getCallbackData: (props: OrdersStoreProps) => ordersStoreApi({ ...props }),
    apiMessageText: 'Store Succeeded',
    apiMessageDescription: 'A new Order has been added successfully.',
  });

  const {
    loading: updateLoading,
    setData: updateData,
  } = useUpdate({
    getCallbackData: (props: OrdersUpdateProps) => ordersUpdateApi({ ...props }),
    apiMessageText: 'Update Succeeded',
    apiMessageDescription: 'The Order has been updated successfully.',
  });

  const {
    loading,
    getData,
  } = useFetch({
    getCallbackData: () => ordersShowApi({ id: id }),
  });

  useEffect(() => {
    if (id) {
      getData().then((response) => {
        generalDispatch({
          type: 'SET_INITIAL_STATE',
          general: {
            name: response?.name,
            sortOrder: response?.sortOrder,
            status: response?.status,
          },
        });
        if (response.statuses.length) {
          statusesForm.handleInitial(response?.statuses.length
            ? response?.statuses.map((
              { languageId, name, status, sortOrder, id }) =>
              ({ languageId, name, status, sortOrder, id }))
            : initialStatusesState.status);
        }
        if (response.histories.length) {
          historiesForm.handleInitial(response?.histories.length
            ? response?.histories.map((
              { languageId, name, status, sortOrder, id }) =>
              ({ languageId, name, status, sortOrder, id }))
            : initialHistoriesState.history);
        }
        if (response.options.length) {
          optionsForm.handleInitial(response?.options.length
            ? response?.options.map((
              { languageId, name, status, sortOrder, id }) =>
              ({ languageId, name, status, sortOrder, id }))
            : initialOptionsState.option);
        }
        if (response.products.length) {
          productsForm.handleInitial(response?.products.length
            ? response?.products.map((
              { languageId, name, status, sortOrder, id }) =>
              ({ languageId, name, status, sortOrder, id }))
            : initialProductsState.product);
        }
        if (response.recurrings.length) {
          recurringsForm.handleInitial(response?.recurrings.length
            ? response?.recurrings.map((
              { languageId, name, status, sortOrder, id }) =>
              ({ languageId, name, status, sortOrder, id }))
            : initialRecurringsState.recurring);
        }
        if (response.shipments.length) {
          shipmentsForm.handleInitial(response?.shipments.length
            ? response?.shipments.map((
              { languageId, name, status, sortOrder, id }) =>
              ({ languageId, name, status, sortOrder, id }))
            : initialShipmentsState.shipment);
        }
        if (response.totals.length) {
          totalsForm.handleInitial(response?.totals.length
            ? response?.totals.map((
              { languageId, name, status, sortOrder, id }) =>
              ({ languageId, name, status, sortOrder, id }))
            : initialTotalsState.total);
        }
        if (response.vouchers.length) {
          vouchersForm.handleInitial(response?.vouchers.length
            ? response?.vouchers.map((
              { languageId, name, status, sortOrder, id }) =>
              ({ languageId, name, status, sortOrder, id }))
            : initialVouchersState.voucher);
        }
      });
    }
  }, [id]);

  useEffect(() => {
    getLanguageData();
  }, []);

  const handleCreate = () => {
    const error = false;
    if (!error) {
      storeData({
        payload: {
          ...generalState.general,
          statuses: statusesForm.state.data,
          histories: historiesForm.state.data,
          options: optionsForm.state.data,
          products: productsForm.state.data,
          recurrings: recurringsForm.state.data,
          shipments: shipmentsForm.state.data,
          totals: totalsForm.state.data,
          vouchers: vouchersForm.state.data,
        },
      }).then((response) => {
        router.push(getParseRoute({ pathname: routes['route.catalog.orders.update'], query: { id: response.id } }));
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
          statuses: statusesForm.state.data,
          histories: historiesForm.state.data,
          options: optionsForm.state.data,
          products: productsForm.state.data,
          recurrings: recurringsForm.state.data,
          shipments: shipmentsForm.state.data,
          totals: totalsForm.state.data,
          vouchers: vouchersForm.state.data,
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
            dispatch={generalDispatch}
            state={generalState}
          />
        </SectionItem>
        <SectionItem isActive={section === 'descriptions'}>
          <Statuses
            moduleForm={statusesForm}
            languageData={languageData}
            loading={languageLoading}
            searchLanguage={(searchText) => getLanguageData({
              searchText: searchText,
            })}
          />
        </SectionItem>
        <SectionItem isActive={section === 'histories'}>
          <Histories
            moduleForm={historiesForm}
            languageData={languageData}
            loading={languageLoading}
            searchLanguage={(searchText) => getLanguageData({
              searchText: searchText,
            })}
          />
        </SectionItem>
        <SectionItem isActive={section === 'options'}>
          <Options
            moduleForm={optionsForm}
            languageData={languageData}
            loading={languageLoading}
            searchLanguage={(searchText) => getLanguageData({
              searchText: searchText,
            })}
          />
        </SectionItem>
        <SectionItem isActive={section === 'products'}>
          <Products
            moduleForm={productsForm}
            languageData={languageData}
            loading={languageLoading}
            searchLanguage={(searchText) => getLanguageData({
              searchText: searchText,
            })}
          />
        </SectionItem>
        <SectionItem isActive={section === 'recurrings'}>
          <Recurrings
            moduleForm={recurringsForm}
            languageData={languageData}
            loading={languageLoading}
            searchLanguage={(searchText) => getLanguageData({
              searchText: searchText,
            })}
          />
        </SectionItem>
        <SectionItem isActive={section === 'shipments'}>
          <Shipments
            moduleForm={shipmentsForm}
            languageData={languageData}
            loading={languageLoading}
            searchLanguage={(searchText) => getLanguageData({
              searchText: searchText,
            })}
          />
        </SectionItem>
        <SectionItem isActive={section === 'totals'}>
          <Totals
            moduleForm={totalsForm}
            languageData={languageData}
            loading={languageLoading}
            searchLanguage={(searchText) => getLanguageData({
              searchText: searchText,
            })}
          />
        </SectionItem>
        <SectionItem isActive={section === 'vouchers'}>
          <Vouchers
            moduleForm={vouchersForm}
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

export default OrderDetails;
