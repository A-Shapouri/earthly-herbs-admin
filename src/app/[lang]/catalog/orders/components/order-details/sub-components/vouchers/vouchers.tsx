import CatalogForm from '@modules/catalog-form';
import { columns, Voucher, header } from './vouchers-columns';
import { ColumnDef } from '@tanstack/react-table';
import Text from '@elements/text';
import { CatalogFormProps } from '@modules/catalog-form/catalog-form';
import { VoucherType } from './store';

const Vouchers = ({ languageData, loading, moduleForm, searchLanguage } : {languageData: Array<any>, loading: boolean, moduleForm: CatalogFormProps<VoucherType>, searchLanguage: (searchText: string) => void}) => {
  const dynamicColumns: ColumnDef<Voucher>[] = [
    {
      accessorFn: row => row.name,
      header: header.name,
      id: 'name',
      cell: info => <Text align='center' color={'grey.700'} typography={['xs', 'xs']}>{info.row.original.name || '-'}</Text>,
    },
    {
      accessorFn: row => row.languageId,
      header: header.languageId,
      id: 'languageId',
      cell: info =>
        <Text
          align='center'
          color={'grey.700'}
          typography={['xs', 'xs']}>
          {info.row.original.languageId ? languageData.find((value) => value.id === info.row.original.languageId)?.name || '-' : '-'}
        </Text>,
    },
  ];

  return (
    <CatalogForm
      mobileColumns={['name', 'languageId', 'operations']}
      loading={loading}
      itemIndex={moduleForm.itemIndex}
      mainLayout={1}
      subLayout={0}
      title="Description"
      state={moduleForm.state}
      handleChange={moduleForm.handleChange}
      handleAdd={moduleForm.handleAdd}
      handleUpdate={moduleForm.handleUpdate}
      fields={
        {
          main: [
            {
              key: 'languageId',
              label: 'Language',
              type: 'autocomplete',
              errorMessage: 'Category is required',
              options: languageData,
              className: 'md:col-span-3',
              getSearchData: (searchText: string) => searchLanguage(searchText),
            },
            {
              key: 'name',
              label: 'Name',
              type: 'text',
              errorMessage: 'Name is required',
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
          ],
        }
      }
      tableColumns={[...dynamicColumns, ...columns]}
      dataList={moduleForm.state.data}
    />
  );
};
export default Vouchers;

