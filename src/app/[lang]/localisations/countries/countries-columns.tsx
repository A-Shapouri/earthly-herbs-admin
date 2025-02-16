import React from 'react';
import Text from '@elements/text';
import { ColumnDef } from '@tanstack/react-table';
import convertDate from '@utils/date/convert-date';
import Chip from '@elements/chip';
import Actions from './components/actions';

export const header = {
  name: 'Name',
  addressFormat: 'Address Format',
  postcodeRequired: 'Postcode Required',
  createdAt: 'Created At',
  updatedAt: 'Updated At',
  status: 'Status',
  operations: 'Operations',
};

type Person = {
  name: string,
  addressFormat: string,
  postcodeRequired: boolean,
  status: string,
  createdAt: string
  updatedAt: string
}

export const columns: ColumnDef<Person>[] = [
  {
    accessorFn: row => row.name,
    header: header.name,
    id: 'name',
    cell: info => <Text align='center' typography={['xs', 'xs']}>{info.row.original.name}</Text>,
  },
  {
    accessorFn: row => row.postcodeRequired,
    header: header.postcodeRequired,
    id: 'postcodeRequired',
    cell: info => {
      if (info.row.original.postcodeRequired) {
        return (
          <Chip size={'small'} textProps={{ type: 'bold' }} color={'success'} value={'Yes'}/>
        );
      }
      return (
        <Chip size={'small'} textProps={{ type: 'bold' }} color={'danger'} value={'No'}/>
      );
    },
  },
  {
    accessorFn: row => row.addressFormat,
    header: header.addressFormat,
    id: 'addressFormat',
    cell: info => <Text typography={['xs', 'xs']}>{info.row.original.addressFormat}</Text>,
  },
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
    accessorFn: row => row.createdAt,
    header: header.createdAt,
    id: 'createdAt',
    cell: info => <Text typography={['xs', 'xs']}>{convertDate(info.row.original.createdAt, 'MMMM Do YYYY  h:mm')}</Text>,
  },
  {
    accessorFn: row => row.updatedAt,
    header: header.updatedAt,
    id: 'updatedAt',
    cell: info => <Text typography={['xs', 'xs']}>{convertDate(info.row.original.updatedAt, 'MMMM Do YYYY  h:mm')}</Text>,
  },
  {
    id: 'operations',
    accessorKey: 'operations',
    header: header.operations,
    cell: (info) => {
      return (
        <Actions data={info}/>
      );
    },
    enableSorting: false,
  },
];
