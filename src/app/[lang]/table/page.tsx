'use client';
import React from 'react';
import DataTable from '@modules/data-table';
import Text from '@elements/text';

import {
  ColumnDef,
} from '@tanstack/react-table';

import { makeData, Person, header } from './components/make-data';

const Table = () => {
  const columns = React.useMemo<ColumnDef<Person>[]>(
    () => [
      {
        accessorKey: 'id',
        id: 'id',
        //@ts-ignore
        cell: info => <Text color={'frost'} typography={['xs', 'xs']}>{info.getValue()}</Text>,
      },
      {
        id: 'firstName',
        accessorKey: 'firstName',
        //@ts-ignore
        cell: info => <Text color={'frost'} typography={['xs', 'xs']}>{info.getValue()}</Text>,
      },
      {
        accessorFn: row => row.lastName,
        id: 'lastName',
        //@ts-ignore
        cell: info => <Text color={'frost'} typography={['xs', 'xs']}>{info.getValue()}</Text>,
      },
      {
        id: 'age',
        accessorKey: 'age',
        //@ts-ignore
        cell: info => <Text color={'frost'} typography={['xs', 'xs']}>{info.getValue()}</Text>,
      },
      {
        id: 'visits',
        accessorKey: 'visits',
        //@ts-ignore
        cell: info => <Text color={'frost'} typography={['xs', 'xs']}>{info.getValue()}</Text>,
      },
      {
        id: 'status',
        accessorKey: 'status',
        //@ts-ignore
        cell: info => <Text color={'frost'} typography={['xs', 'xs']}>{info.getValue()}</Text>,
      },
      {
        id: 'progress',
        accessorKey: 'progress',
        //@ts-ignore
        cell: info => <Text color={'frost'} typography={['xs', 'xs']}>{info.getValue()}</Text>,
      },
      {
        id: 'createdAt',
        accessorKey: 'createdAt',
        //@ts-ignore
        cell: info => <Text color={'frost'} typography={['xs', 'xs']}>{info.getValue<Date>().toLocaleString()}</Text>,
      },
    ],
    []
  );
  //@ts-ignore
  const [data, _setData] = React.useState(() => makeData(30));
  return (
    <DataTable
      header={header}
      column={columns}
      data={data}
      currentPage={1}
      getCurrentPage={() => { }}
      lastPage={10}
      nextPage={2}
      perPage={30}
      previousPage={0}
      total={300}
      mobileColumns={['id', 'firstName', 'lastName']}
    />
  );
};

export default Table;
