'use client';
import React from 'react';
import DataTable from '@modules/data-table';
import Text from '@elements/text';
import Image from 'next/image';
import Button from '@elements/button';
import Div from '@elements/div';
import BagCrossIcon from '@icons-components/bag-cross';
import EyeIcon from '@icons-components/eye';
import EditIcon from '@icons-components/edit';

import {
  ColumnDef,
} from '@tanstack/react-table';

import { makeData, Person, header } from './components/make-data';

const Category = () => {
  //@ts-ignore
  const [data, _setData] = React.useState(() => makeData(30));

  const getFullName = (currentValue: string, object: any) => {
    let newValue = currentValue;
    let newObject = object;
    if (object.parentId) {
      newObject = data.find((value) => value.id === object.parentId);
      newValue = newObject.name + ' > ' + newValue;
    }

    return { newValue, newObject };
  };

  const columns = React.useMemo<ColumnDef<Person>[]>(
    () => [
      {
        accessorKey: 'id',
        id: 'id',
        header: null,
        enableSorting: false,
        //@ts-ignore
        cell: info => <Text color={'frost'} typography={['xs', 'xs']}>{info.getValue()}</Text>,
      },
      {
        id: 'image',
        accessorKey: 'image',
        enableSorting: false,
        header: null,
        //@ts-ignore
        cell: info => <Image width={40} height={40} src={info.getValue()} alt='image' />,
      },
      {
        accessorFn: row => row.name,
        id: 'name',
        cell: info => {
          let flag = !!info.row.original.parentId;
          let object = info.row.original;
          let value = info.row.original.name;
          while (flag) {
            const { newValue, newObject } = getFullName(value, object);
            object = newObject;
            value = newValue;
            if (!newObject.parentId) {
              flag = false;
            }
          }
          return (
            //@ts-ignore
            <Text className='w-full' color={'frost'} typography={['xs', 'xs']}>{value}</Text>
          );
        },
      },
      {
        accessorFn: row => row.sortOrder,
        id: 'sortOrder',
        //@ts-ignore
        cell: info => <Text color={'frost'} typography={['xs', 'xs']}>{info.getValue()}</Text>,
      },
      {
        id: 'operations',
        accessorKey: 'operations',
        header: header.operations,
        cell: () => {
          return (
            <Div className={'gap-2'}>
              <Button size={'small'} variant={'filled'} className={'text-nowrap !bg-blue-500 !text-white hover:!bg-blue-700 active:!bg-blue-300'} rounded='small' shape='square' startAdornment={<EditIcon className={'h-4 w-4'} />} color={'frost'} />
              <Button size={'small'} variant={'filled'} className={'text-nowrap !bg-green-500 !text-white hover:!bg-green-700 active:!bg-green-300'} rounded='small' shape='square' startAdornment={<EyeIcon className={'h-4 w-4'} />} color={'frost'} />
              <Button size={'small'} variant={'filled'} className={'text-nowrap !bg-red-500 !text-white hover:!bg-red-700 active:!bg-red-300'} rounded='small' shape='square' startAdornment={<BagCrossIcon className={'h-4 w-4'} />} color={'frost'} />
            </Div>
          );
        },
        enableSorting: false,
      },
    ],
    []
  );

  return (
    <DataTable
      header={header}
      column={columns}
      data={data}
      currentPage={1}
      getCurrentPage={() => { }}
      lastPage={12}
      nextPage={2}
      perPage={10}
      previousPage={0}
      total={50}
      mobileColumns={['name', 'firstName', 'lastName']}
    />
  );
};

export default Category;
