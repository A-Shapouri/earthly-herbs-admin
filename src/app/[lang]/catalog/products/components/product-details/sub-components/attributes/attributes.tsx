import CatalogForm from '@modules/catalog-form';
import { columns, Description, header } from './attributes-columns';
import { ColumnDef } from '@tanstack/react-table';
import Text from '@elements/text';
import { CatalogFormProps } from '@modules/catalog-form/catalog-form';
import { AttributeType } from './store';

const Descriptions = ({ languageData, loading, moduleForm, searchLanguage, searchAttribute, attributeData } : {languageData: Array<any>, loading: boolean, moduleForm: CatalogFormProps<AttributeType>, searchLanguage: (searchText: string) => void, searchAttribute: (searchText: string) => void, attributeData: Array<any>}) => {
  const dynamicColumns: ColumnDef<Description>[] = [
    {
      accessorFn: row => row.text,
      header: header.text,
      id: 'text',
      cell: info => <Text align='center' color={'grey.700'} typography={['xs', 'xs']}>{info.row.original.text || '-'}</Text>,
    },
    {
      accessorFn: row => row.attributeId,
      header: header.attributeId,
      id: 'attributeId',
      cell: info =>
        <Text
          align='center'
          color={'grey.700'}
          typography={['xs', 'xs']}>
          {info.row.original.attributeId ? attributeData.find((value) => value.id === info.row.original.attributeId)?.name || '-' : '-'}
        </Text>,
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
      title="Attributes"
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
              errorMessage: 'Language is required',
              options: languageData,
              className: 'md:col-span-3',
              getSearchData: (searchText: string) => searchLanguage(searchText),
            },
            {
              key: 'attributeId',
              label: 'Attribute',
              type: 'autocomplete',
              errorMessage: 'Attribute is required',
              options: attributeData,
              className: 'md:col-span-3',
              getSearchData: (searchText: string) => searchAttribute(searchText),
            },
            {
              key: 'text',
              label: 'Text',
              type: 'text',
              errorMessage: 'Text is required',
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
export default Descriptions;

