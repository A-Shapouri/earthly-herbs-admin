import CatalogForm from '@modules/catalog-form';
import { columns } from './images-columns';
import { ImagesProps } from './images.props';

const Images = ({ loading, moduleForm }: ImagesProps) => {
  return (
    <CatalogForm
      mobileColumns={['image', 'sortOrder', 'status']}
      loading={loading}
      itemIndex={moduleForm.itemIndex}
      mainLayout={1}
      subLayout={0}
      title="Images"
      state={moduleForm.state}
      handleChange={moduleForm.handleChange}
      handleAdd={moduleForm.handleAdd}
      handleUpdate={moduleForm.handleUpdate}
      fields={
        {
          main: [
            {
              key: 'image',
              label: 'Image',
              type: 'text',
              errorMessage: 'Image is required',
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
      tableColumns={columns}
      dataList={moduleForm.state.data}
    />
  );
};
export default Images;

