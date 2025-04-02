import React from 'react';
import Text from '@elements/text';
import { ColumnDef } from '@tanstack/react-table';
import Div from '@elements/div';
import Button from '@elements/button';
import { BagCrossIcon, EditIcon } from '@icons';
import Chip from '@elements/chip';
import useUpdate from '@hooks/use-update';
import attributeDescriptionDeleteApi, { AttributeDescriptionDeleteProps } from '@api/attributes/description-delete';

export const header = {
  text: 'Text',
  languageId: 'Language',
  attributeId: 'Attribute',
  status: 'Status',
  sortOrder: 'Sort Order',
  operations: 'Operations',
  customerGroupId: 'Customer Group',
  price: 'Price',
  quantity: 'Quantity',
};

export type Description = {
  id?: string
  text?: string
  languageId: string
  attributeId?: string
  status: string
  sortOrder: string
  customerGroupId: string
  price?: string
  quantity?: string
  priority?: string
  startAt?: string
  endAt?: string
}

export const columns: ColumnDef<Description>[] = [
  {
    accessorFn: row => row.status,
    header: header.status,
    id: 'status',
    cell: info => {
      if (info.row.original.status) {
        return (
          <Chip size={'small'} textProps={{ type: 'bold' }} color={'success'} value={'Active'}/>
        );
      }
      return (
        <Chip size={'small'} color={'danger'} value={'In Active'}/>
      );
    },
  },
  {
    accessorFn: row => row.sortOrder,
    header: header.sortOrder,
    id: 'sortOrder',
    cell: info => <Text align='center' color={'grey.700'} typography={['xs', 'xs']}>{info.row.original.sortOrder || '-'}</Text>,
  },
  {
    id: 'operations',
    accessorKey: 'operations',
    header: header.operations,
    cell: (info) => {
      const {
        loading: deleteLoading,
        setData: deleteData,
      } = useUpdate({
        getCallbackData: (props: AttributeDescriptionDeleteProps) => attributeDescriptionDeleteApi({ ...props }),
        apiMessageText: 'Store Succeeded',
        apiMessageDescription: 'A Attribute Description has been deleted successfully.',
      });

      const onDelete = () => {
        if (info.row.original?.id) {
          deleteData({
            id: info.row.original.id,
          }).then(() => {
            info.table.options.meta?.updateData('delete', info.row.original);
          });
        } else {
          info.table.options.meta?.updateData('delete', info.row.original);
        }
      };

      const onEdit = () => {
        info.table.options.meta?.updateData('edit', info.row.original);
      };

      return (
        <Div className={'gap-2 md:justify-between items-end'}>
          <Button
            shape={'square'}
            iconSize={'small'}
            color={'danger'}
            rounded={'small'}
            size={'small'}
            loading={deleteLoading}
            disabled={deleteLoading}
            onClick={onDelete}
            startAdornment={<BagCrossIcon />}
          />
          <Button
            shape={'square'}
            loading={deleteLoading}
            disabled={deleteLoading}
            iconSize={'small'}
            color={'success'}
            rounded={'small'}
            size={'small'}
            onClick={onEdit}
            startAdornment={<EditIcon />}
          />
        </Div>
      );
    },
    enableSorting: false,
  },
];
