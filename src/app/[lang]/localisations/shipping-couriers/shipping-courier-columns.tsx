import React from 'react';
import Text from '@elements/text';
import { ColumnDef } from '@tanstack/react-table';
import convertDate from '@utils/date/convert-date';
import Chip from '@elements/chip';
import Actions from './components/actions';

export const header = {
  shippingCourierCode: 'Shipping Courier Code',
  shippingCourierName: 'Shipping Courier Name',
  createdAt: 'Created At',
  updatedAt: 'Updated At',
  status: 'Status',
  operations: 'Operations',
};

type Person = {
  shippingCourierCode: string,
  shippingCourierName: string,
  status: string,
  createdAt: string
  updatedAt: string
}

export const columns: ColumnDef<Person>[] = [
  {
    accessorFn: row => row.shippingCourierCode,
    header: header.shippingCourierCode,
    id: 'shippingCourierCode',
    cell: info => <Text align='center' typography={['xs', 'xs']}>{info.row.original.shippingCourierCode}</Text>,
  },
  {
    accessorFn: row => row.shippingCourierName,
    header: header.shippingCourierName,
    id: 'shippingCourierName',
    cell: info => <Text align='center' typography={['xs', 'xs']}>{info.row.original.shippingCourierName}</Text>,
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
