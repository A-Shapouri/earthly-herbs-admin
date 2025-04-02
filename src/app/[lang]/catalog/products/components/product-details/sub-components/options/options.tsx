import CatalogForm from '@modules/catalog-form';
import { columns, Options, header } from './options-columns';
import { ColumnDef } from '@tanstack/react-table';
import Text from '@elements/text';
import { OptionsProps } from './options.props';

const OptionsForm = ({ loading, moduleForm, optionData, searchOption }: OptionsProps) => {
  const dynamicColumns: ColumnDef<Options>[] = [
    {
      accessorFn: row => row.optionId,
      header: header.optionId,
      id: 'optionId',
      cell: info =>
        <Text
          align='center'
          color={'grey.700'}
          typography={['xs', 'xs']}>
          {info.row.original.optionId ? optionData.find((value) => value.id === info.row.original.optionId)?.name || '-' : '-'}
        </Text>,
    },
  ];
  return (
    <CatalogForm
      mobileColumns={['optionId', 'value', 'operations']}
      loading={loading}
      itemIndex={moduleForm.itemIndex}
      mainLayout={1}
      subLayout={0}
      title="Options"
      state={moduleForm.state}
      handleChange={moduleForm.handleChange}
      handleAdd={moduleForm.handleAdd}
      handleUpdate={moduleForm.handleUpdate}
      fields={
        {
          main: [
            {
              key: 'optionId',
              label: 'Option',
              type: 'autocomplete',
              errorMessage: 'Option is required',
              options: optionData,
              className: 'md:col-span-3',
              getSearchData: (searchText: string) => searchOption(searchText),
            },
            {
              key: 'value',
              label: 'Value',
              type: 'text',
              errorMessage: 'Value is required',
              className: 'w-full col-span-1 md:col-span-3',
            },
            {
              key: 'isRequired',
              label: 'Is Required',
              type: 'text',
              errorMessage: 'Is Required is required',
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
export default OptionsForm;

