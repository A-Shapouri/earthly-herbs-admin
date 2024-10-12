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
        header: 'ID',
        //@ts-ignore
        cell: info => <Text color={'frost'} typography={['xs', 'xs']}>{info.getValue()}</Text>,
      },
      {
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
        accessorKey: 'age',
        //@ts-ignore
        cell: info => <Text color={'frost'} typography={['xs', 'xs']}>{info.getValue()}</Text>,
      },
      {
        accessorKey: 'visits',
        //@ts-ignore
        cell: info => <Text color={'frost'} typography={['xs', 'xs']}>{info.getValue()}</Text>,
      },
      {
        accessorKey: 'status',
        //@ts-ignore
        cell: info => <Text color={'frost'} typography={['xs', 'xs']}>{info.getValue()}</Text>,
      },
      {
        accessorKey: 'progress',
        //@ts-ignore
        cell: info => <Text color={'frost'} typography={['xs', 'xs']}>{info.getValue()}</Text>,
      },
      {
        accessorKey: 'createdAt',
        header: 'Created At',
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
