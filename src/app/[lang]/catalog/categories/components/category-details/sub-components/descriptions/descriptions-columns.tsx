import React from 'react';
import Text from '@elements/text';
import { ColumnDef } from '@tanstack/react-table';
import Div from '@elements/div';
import Button from '@elements/button';
import { BagCrossIcon, EditIcon } from '@icons';

export const header = {
  name: 'Name',
  language: 'Language',
  category: 'Category',
  description: 'Description',
  status: 'Status',
  sortOrder: 'Sort Order',
  metaTitle: 'Meta Title',
  metaDescription: 'Meta Description',
  metaKeywords: 'Meta Keywords',
  operations: 'Operations',
};

type Description = {
  name: string
  languageId: string
  categoryId: string
  description: string
  status: string
  sortOrder: string
  metaTitle: string
  metaDescription: string
  metaKeywords: string
}

export const columns: ColumnDef<Description>[] = [
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
    cell: info => <Text align='center' color={'grey.700'} typography={['xs', 'xs']}>{info.row.original.languageId || '-'}</Text>,
  },
  {
    accessorFn: row => row.categoryId,
    header: header.category,
    id: 'category',
    cell: info => <Text align='center' color={'grey.700'} typography={['xs', 'xs']}>{info.row.original.categoryId || '-'}</Text>,
  },
  {
    accessorFn: row => row.description,
    header: header.description,
    id: 'description',
    cell: info => <Text align='center' color={'grey.700'} typography={['xs', 'xs']}>{info.row.original.description || '-'}</Text>,
  },
  {
    accessorFn: row => row.status,
    header: header.status,
    id: 'status',
    cell: info => <Text align='center' color={'grey.700'} typography={['xs', 'xs']}>{info.row.original.status || '-'}</Text>,
  },
  {
    accessorFn: row => row.sortOrder,
    header: header.sortOrder,
    id: 'sortOrder',
    cell: info => <Text align='center' color={'grey.700'} typography={['xs', 'xs']}>{info.row.original.sortOrder || '-'}</Text>,
  },
  {
    accessorFn: row => row.metaTitle,
    header: header.metaTitle,
    id: 'metaTitle',
    cell: info => <Text align='center' color={'grey.700'} typography={['xs', 'xs']}>{info.row.original.metaTitle || '-'}</Text>,
  },
  {
    accessorFn: row => row.metaDescription,
    header: header.metaDescription,
    id: 'metaDescription',
    cell: info => <Text align='center' color={'grey.700'} typography={['xs', 'xs']}>{info.row.original.metaDescription || '-'}</Text>,
  },
  {
    accessorFn: row => row.metaKeywords,
    header: header.metaKeywords,
    id: 'metaKeywords',
    cell: info => <Text align='center' color={'grey.700'} typography={['xs', 'xs']}>{info.row.original.metaKeywords || '-'}</Text>,
  },
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
