import CatalogForm from '@modules/catalog-form';
import { columns, Description, header } from './discounts-columns';
import { ColumnDef } from '@tanstack/react-table';
import Text from '@elements/text';
import { DiscountsProps } from './discounts.props';

const Discounts = ({ loading, moduleForm, customerGroupData, searchCustomerGroup }: DiscountsProps) => {
  const dynamicColumns: ColumnDef<Description>[] = [
    {
      accessorFn: row => row.customerGroupId,
      header: header.customerGroupId,
      id: 'customerGroupId',
      cell: info =>
        <Text
          align='center'
          color={'grey.700'}
          typography={['xs', 'xs']}>
          {info.row.original.customerGroupId ? customerGroupData.find((value) => value.id === info.row.original.customerGroupId)?.name || '-' : '-'}
        </Text>,
    },
  ];
  return (
    <CatalogForm
      mobileColumns={['price', 'customerGroupId', 'operations']}
      loading={loading}
      itemIndex={moduleForm.itemIndex}
      mainLayout={1}
      subLayout={0}
      title="Discounts"
      state={moduleForm.state}
      handleChange={moduleForm.handleChange}
      handleAdd={moduleForm.handleAdd}
      handleUpdate={moduleForm.handleUpdate}
      fields={
        {
          main: [
            {
              key: 'customerGroupId',
              label: 'Customer Group',
              type: 'autocomplete',
              errorMessage: 'Customer Group is required',
              options: customerGroupData,
              className: 'md:col-span-3',
              getSearchData: (searchText: string) => searchCustomerGroup(searchText),
            },
            {
              key: 'price',
              label: 'Price',
              type: 'text',
              errorMessage: 'Price is required',
              className: 'w-full col-span-1 md:col-span-3',
            },
            {
              key: 'quantity',
              label: 'Quantity',
              type: 'text',
              errorMessage: 'Quantity is required',
              className: 'w-full col-span-1 md:col-span-3',
            },
            { key: 'sortOrder', label: 'SortOrder', type: 'text', className: 'w-full md:col-span-3' },
            {
              key: 'status',
              label: 'Status',
              type: 'select',
              className: 'w-full md:col-span-3',
              options: [{ id: '1', title: 'Active' }, { id: '0', title: 'In Active' }],
            },
            {
              key: 'startAt',
              label: 'Start At',
              type: 'text',
              className: 'w-full md:col-span-3',
            },
            {
              key: 'endAt',
              label: 'End At',
              type: 'text',
              className: 'w-full md:col-span-3',
            },
          ],
        }
      }
      tableColumns={[...dynamicColumns, ...columns]}
      dataList={moduleForm.state.data}
    />
  );
};
export default Discounts;

