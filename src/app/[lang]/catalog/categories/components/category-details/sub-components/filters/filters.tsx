import React from 'react';
import { ColumnDef } from '@tanstack/react-table';
import { columns, Filter, header } from './filter-columns';
import Text from '@elements/text';
import { FilterType } from './store';
import { CatalogFormProps } from '@modules/catalog-form/catalog-form';
import CatalogForm from '@modules/catalog-form';

const Filters = ({ filterData, loading, moduleForm } : {filterData: Array<any>, loading: boolean, moduleForm: CatalogFormProps<FilterType>}) => {
  const dynamicColumns: ColumnDef<Filter>[] = [
    {
      accessorFn: row => row.filterId,
      header: header.filter,
      id: 'filter',
      cell: info =>
        <Text
          align='center'
          color={'grey.700'}
          typography={['xs', 'xs']}>
          {info.row.original.filterId ? filterData.find((value) => value.id === info.row.original.filterId)?.name || '-' : '-'}
        </Text>,
    },
  ];

  return (
    <CatalogForm
      loading={loading}
      itemIndex={moduleForm.itemIndex}
      mainLayout={1}
      subLayout={0}
      title="Filter"
      state={moduleForm.state}
      handleChange={moduleForm.handleChange}
      handleAdd={moduleForm.handleAdd}
      handleUpdate={moduleForm.handleUpdate}
      fields={
        {
          main: [
            {
              key: 'filterId',
              label: 'Filters',
              type: 'autocomplete',
              errorMessage: 'Filter is required',
              options: filterData,
              className: 'md:row-span-1 md:col-span-2',
            },
          ],
        }
      }
      tableColumns={[...dynamicColumns, ...columns]}
      dataList={moduleForm.state.data}
    />
  );
};
export default Filters;
