import React from 'react';
import { ColumnDef } from '@tanstack/react-table';
import Div from '@elements/div';
import Button from '@elements/button';
import { BagCrossIcon, EditIcon } from '@icons';

export const header = {
  filter: 'Filter',
  category: 'Category',
  operations: 'Operations',
};

export type Filter = {
  filterId: string
  categoryId: string
}

export const columns: ColumnDef<Filter>[] = [
  {
    id: 'operations',
    accessorKey: 'operations',
    header: header.operations,
    cell: (info) => {
      const onDelete = () => {
        info.table.options.meta?.updateData('delete', info.row.original);
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
