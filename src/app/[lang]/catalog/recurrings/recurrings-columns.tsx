import React from 'react';
import Text from '@elements/text';
import { ColumnDef } from '@tanstack/react-table';
import convertDate from '@utils/date/convert-date';
import Chip from '@elements/chip';
import Actions from './components/actions';

export const header = {
  cycle: 'Cycle',
  price: 'Price',
  trialCycle: 'Trial Cycle',
  trialPrice: 'Trial Price',
  createdAt: 'Created At',
  updatedAt: 'Updated At',
  status: 'Status',
  operations: 'Operations',
};

type Attribute = {
  cycle: string,
  price: string,
  trialCycle: string,
  trialPrice: string,
  status: string,
  createdAt: string
  updatedAt: string
}

export const columns: ColumnDef<Attribute>[] = [
  {
    accessorFn: row => row.cycle,
    header: header.cycle,
    id: 'cycle',
    cell: info => <Text align='center' typography={['xs', 'xs']}>{info.row.original.cycle}</Text>,
  },
  {
    accessorFn: row => row.price,
    header: header.price,
    id: 'price',
    cell: info => <Text typography={['xs', 'xs']}>{info.row.original.price}</Text>,
  },
  {
    accessorFn: row => row.trialCycle,
    header: header.trialCycle,
    id: 'trialCycle',
    cell: info => <Text typography={['xs', 'xs']}>{info.row.original.trialCycle}</Text>,
  },
  {
    accessorFn: row => row.trialPrice,
    header: header.trialPrice,
    id: 'trialPrice',
    cell: info => <Text typography={['xs', 'xs']}>{info.row.original.trialPrice}</Text>,
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
