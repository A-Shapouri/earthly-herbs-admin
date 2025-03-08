import React from 'react';
import 'react-calendar/dist/Calendar.css';
import Div from '@elements/div';
import MainSection from '@layouts/main-section';
import AutoComplete from '@modules/auto-complete';
import { ColumnDef } from '@tanstack/react-table';
import { Store, header, columns } from './store-columns';
import Text from '@elements/text';
import { CategoryStoresStore } from './store';
import { AnimatePresence, motion } from 'motion/react';
import SimpleDataTable from '@modules/simple-data-table';
import SubSection from '@layouts/sub-section';
import Button from '@elements/button';
import { AddIcon } from '@icons';

const Stores = ({ state, dispatch, categoryData, storeData, loading } : {state: CategoryStoresStore, dispatch: any, categoryData: Array<any>, storeData: Array<any>, loading: boolean}) => {
  const [itemIndex, setItemIndex] = React.useState(state.store.length - 1);
  const dynamicColumns: ColumnDef<Store>[] = [
    {
      accessorFn: row => row.storeId,
      header: header.store,
      id: 'store',
      cell: info =>
        <Text
          align='center'
          color={'grey.700'}
          typography={['xs', 'xs']}>
          {info.row.original.storeId ? storeData.find((value) => value.id === info.row.original.storeId).name || '-' : '-'}
        </Text>,
    },
    {
      accessorFn: row => row.categoryId,
      header: header.category,
      id: 'category',
      cell: info =>
        <Text
          align='center'
          color={'grey.700'}
          typography={['xs', 'xs']}>
          {info.row.original.categoryId ? categoryData?.find((value) => value.id === info.row.original.categoryId).name || '-' : '-'}
        </Text>,
    },
  ];

  const checkValidation = () => {
    return !state.store[itemIndex].storeId;
    // !state.store[itemIndex].categoryId;
  };

  const handleChangeValue = ({ key, value }: { key: string, value: string }) => {
    dispatch({
      type: 'SET_STORE_VALUE',
      key: key,
      value: value,
      index: itemIndex,
    });
  };

  const handleAddNewRow = () => {
    const validation = checkValidation();
    if (!validation) {
      dispatch({ type: 'ADD_NEW_STORE' });
      setItemIndex(prevIndex => prevIndex + 1);
    } else {
      dispatch({ type: 'CHECK_ERROR', index: itemIndex });
    }
  };

  const handleUpdate = (value?: string, info?: object) => {
    const displayRow = state.store.findIndex((value) => {
      return value === info;
    });
    if (value === 'editRecord') {
      setItemIndex(displayRow);
      dispatch({ type: 'INITIAL_ERROR' });
    }
    if (value === 'deleteRecord') {
      dispatch({ type: 'DELETE_STORE', key: displayRow });
      if (displayRow < itemIndex) {
        setItemIndex(prevIndex => prevIndex - 1);
      }
    }
  };
  return (
    <Div className={'flex-col w-full'}>
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={'w-full'}>
          <SimpleDataTable
            emptyLabel={'Add a new store'}
            updateData={handleUpdate}
            data={state.store.filter((_, index) => index !== itemIndex)}
            header={header}
            column={[...dynamicColumns, ...columns ]} />
        </motion.div>
      </AnimatePresence>
      <Div className={'w-full gap-6 grid md:grid-cols-3 md:grid-rows-3 grid-cols-1 mt-4 grid-flow-dense'}>
        <MainSection priority={2} title='Stores Info' className='md:row-span-1 md:col-span-2'>
          {/*<AutoComplete*/}
          {/*  SearchValue={state.store[itemIndex]?.categoryId ? categoryData.find((value) => value.id === state.store[itemIndex].categoryId).name : ''}*/}
          {/*  className='md:col-span-3 z-20'*/}
          {/*  data={categoryData}*/}
          {/*  loading={loading}*/}
          {/*  keyValue={'name'}*/}
          {/*  id={'id'}*/}
          {/*  handleSelect={(value: any) => handleChangeValue({ key: 'categoryId', value: value.id })}*/}
          {/*  getSearchData={() => console.log('search')}*/}
          {/*  label='Category'*/}
          {/*  error={state.error.categoryId}*/}
          {/*  helperText={state.error.categoryId ? 'Category is required!' : undefined}*/}
          {/*/>*/}
          <AutoComplete
            SearchValue={state.store[itemIndex]?.storeId ? storeData.find((value) => value.id === state.store[itemIndex].storeId).name : ''}
            className='md:col-span-3 z-10'
            data={storeData}
            loading={loading}
            keyValue={'name'}
            id={'id'}
            handleSelect={(value: any) => handleChangeValue({ key: 'storeId', value: value.id })}
            getSearchData={() => console.log('search')}
            label='Store'
            error={state.error.storeId}
            helperText={state.error.storeId ? 'Store is required!' : undefined}
          />
        </MainSection>
        <SubSection priority={3} className='!py-2 md:col-span-1 !bg-transparent shadow-none !flex justify-start items-start'>
          <Button
            color='emerald'
            startAdornment={<AddIcon />}
            rounded='small'
            onClick={handleAddNewRow}
          >
            Add New Store
          </Button>
        </SubSection>
      </Div>
    </Div>
  );
};

export default Stores;
