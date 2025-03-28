import React from 'react';
import { ColumnDef } from '@tanstack/react-table';
import { Store, header, columns } from './store-columns';
import Text from '@elements/text';
import { StoreType } from './store';
import { CatalogFormProps } from '@modules/catalog-form/catalog-form';
import CatalogForm from '@modules/catalog-form';

const Stores = ({ storeData, loading, moduleForm, searchStores } : {storeData: Array<any>, loading: boolean, moduleForm: CatalogFormProps<StoreType>, searchStores: (searchText: string) => void}) => {
  const dynamicColumns: ColumnDef<Store>[] = [
    {
      accessorFn: row => row.storeId,
      header: header.storeId,
      id: 'storeId',
      cell: info =>
        <Text
          align='center'
          color={'grey.700'}
          typography={['xs', 'xs']}>
          {info.row.original.storeId ? storeData.find((value) => value.id === info.row.original.storeId)?.name || '-' : '-'}
        </Text>,
    },
  ];
  console.log(storeData);
  return (
    <CatalogForm
      loading={loading}
      itemIndex={moduleForm.itemIndex}
      mainLayout={1}
      subLayout={0}
      title="Stores"
      state={moduleForm.state}
      handleChange={moduleForm.handleChange}
      handleAdd={moduleForm.handleAdd}
      handleUpdate={moduleForm.handleUpdate}
      fields={
        {
          main: [
            {
              key: 'storeId',
              label: 'Stores',
              type: 'autocomplete',
              errorMessage: 'Store is required',
              options: storeData,
              className: 'md:row-span-1 md:col-span-2',
              getSearchData: (searchText) => searchStores(searchText),
            },
          ],
        }
      }
      tableColumns={[...dynamicColumns, ...columns]}
      dataList={moduleForm.state.data}
    />
  );
};

export default Stores;
