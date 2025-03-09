import React from 'react';
import { ColumnDef } from '@tanstack/react-table';
import Div from '@elements/div';
import Button from '@elements/button';
import { BagCrossIcon, EditIcon } from '@icons';

export const header = {
  storeId: 'Store',
  category: 'Category',
  operations: 'Operations',
};

export type Store = {
  storeId: string
  categoryId: string
}

export const columns: ColumnDef<Store>[] = [
  {
    id: 'operations',
    accessorKey: 'operations',
    header: header.operations,
    cell: (info) => {
      const onDelete = () => {
        info.table.options.meta?.updateData('deleteRecord', info.row.original);
      };

      const onEdit = () => {
        info.table.options.meta?.updateData('editRecord', info.row.original);
      };

      return (
        <Div className={'gap-2 md:justify-between items-end'}>
          <Button
            shape={'square'}
            iconSize={'small'}
            color={'danger'}
            rounded={'small'}
            size={'small'}
            onClick={onDelete}
            startAdornment={<BagCrossIcon />}
          />
          <Button
            shape={'square'}
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
