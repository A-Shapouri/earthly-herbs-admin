import CatalogForm from '@modules/catalog-form';
import { columns, Description, header } from './descriptions-columns';
import { ColumnDef } from '@tanstack/react-table';
import Text from '@elements/text';
import { CatalogFormProps } from '@modules/catalog-form/catalog-form';
import { DescriptionType } from './store';

const Descriptions = ({ languageData, loading, moduleForm } : {languageData: Array<any>, loading: boolean, moduleForm: CatalogFormProps<DescriptionType>}) => {
  const dynamicColumns: ColumnDef<Description>[] = [
    {
      accessorFn: row => row.name,
      header: header.name,
      id: 'name',
      cell: info => <Text align='center' color={'grey.700'} typography={['xs', 'xs']}>{info.row.original.name || '-'}</Text>,
    },
    {
      accessorFn: row => row.languageId,
      header: header.language,
      id: 'language',
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
      loading={loading}
      itemIndex={moduleForm.itemIndex}
      mainLayout={2}
      subLayout={1}
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
              className: 'md:col-span-3 z-10',
            },
            {
              key: 'name',
              label: 'Name',
              type: 'text',
              errorMessage: 'Name is required',
              className: 'w-full col-span-1 md:col-span-3',
            },
            {
              key: 'description',
              label: 'Description',
              type: 'textarea',
              errorMessage: 'Description is required',
              className: 'w-full col-span-1 md:col-span-5',
            },
          ],
          sub: [
            { key: 'metaTitle', label: 'Meta Title', type: 'text', className: 'w-full' },
            { key: 'metaDescription', label: 'Meta Description', type: 'text', className: 'w-full' },
            { key: 'metaKeywords', label: 'Meta Keywords', type: 'text', className: 'w-full' },
          ],
          secondaryMain: [
            { key: 'sortOrder', label: 'SortOrder', type: 'text', className: 'w-full md:col-span-2' },
            {
              key: 'status',
              label: 'Status',
              type: 'select',
              className: 'w-full md:col-span-2',
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
export default Descriptions;

