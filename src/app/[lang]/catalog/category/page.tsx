'use client';
import React from 'react';
import DataTable from '@modules/data-table';
import Text from '@elements/text';
import Image from 'next/image';
import Button from '@elements/button';
import Div from '@elements/div';
import BagCrossIcon from '@icons-components/bag-cross';
import EditIcon from '@icons-components/edit';
import Breadcrumbs from '@elements/breadcrumbs';
import { AddIcon, SearchIcon } from '../../../../assets/pb-icons';
import {
  ColumnDef,
} from '@tanstack/react-table';
import Filter from './components/filter';
import { makeData, Person, header } from './components/make-data';
import useModal from '@hooks/use-modal';
import ConfirmationDialog from '@modules/confirmation-dialog';
import getParseRoute from '@utils/helpers/parse-route';
import routes from '@routes';
const Category = () => {
  //@ts-ignore
  // eslint-disable-next-line no-unused-vars
  const [data, _setData] = React.useState(() => makeData(30));
  const { isShow, showModal, closeModal } = useModal();
  const { isShow: isSearchShow, showModal: showSearchModal, closeModal: closeSearchModal } = useModal();

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
        cell: info => <Text color={'black'} typography={['xs', 'xs']}>{info.getValue()}</Text>,
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
        header: header.name,
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
            <Text className='w-full' color={'black'} typography={['xs', 'xs']}>{value}</Text>
          );
        },
      },
      {
        accessorFn: row => row.sortOrder,
        header: header.sortOrder,
        id: 'sortOrder',
        //@ts-ignore
        cell: info => <Text color={'black'} typography={['xs', 'xs']}>{info.getValue()}</Text>,
      },
      {
        id: 'operations',
        accessorKey: 'operations',
        header: header.operations,
        cell: (info) => {
          return (
            <Div className={'gap-2'}>
              <Button href={getParseRoute({ pathname: routes['route.catalog.category.update'], query: { id: info.row.original.name }, locale: 'en' })} size={'small'} variant={'filled'} className={'text-nowrap !bg-blue-500 !text-white hover:!bg-blue-700 active:!bg-blue-300'} rounded='small' shape='square' startAdornment={<EditIcon className={'h-4 w-4'} />} color={'frost'} />
              <Button onClick={showModal} size={'small'} variant={'filled'} className={'text-nowrap !bg-red-500 !text-white hover:!bg-red-700 active:!bg-red-300'} rounded='small' shape='square' startAdornment={<BagCrossIcon className={'h-4 w-4'} />} color={'frost'} />
            </Div>
          );
        },
        enableSorting: false,
      },
    ],
    []
  );

  return (
    <Div className={'flex-col justify-center w-full gap-4 md:gap-8'}>
      <Div className={'flex-col sm:flex-row w-full justify-between gap-4'}>
        <Breadcrumbs
          breadcrumbsData={[
            {
              label: 'Category',
            },
          ]}
        />
        <Text type={'bold'} typography={['xl', 'xl']} align={'start'}>Category</Text>
      </Div>
      <Div className={'self-end gap-x-4 justify-between w-full md:w-auto'}>
        <Button
          href={getParseRoute({ pathname: routes['route.catalog.category.create'], locale: 'en' })}
          className={'w-32'}
          rounded={'small'}
          size={'small'}
          color={'slate'}
          startAdornment={<AddIcon />}>
          Create
        </Button>
        <Button
          onClick={showSearchModal}
          className={'w-32'}
          rounded={'small'}
          size={'small'}
          variant={'outlined'}
          color={'indigo'}
          startAdornment={<SearchIcon />}>
          Search
        </Button>
      </Div>
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
        mobileColumns={['name', 'operations']}
      />
      <Filter
        isShow={isSearchShow}
        closeModal={closeSearchModal}
        loading={false}
        getSearchResult={() => { }}
      />
      <ConfirmationDialog
        onClose={closeModal}
        open={isShow}
        alertText={'Are you sure to delete this record?'}
        submitHandler={closeModal}
        cancelHandler={closeModal}
      />
    </Div>
  );
};

export default Category;
