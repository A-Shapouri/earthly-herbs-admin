import React from 'react';
import Div from '@elements/div';
import AutoComplete from '@modules/auto-complete';
import MainSection from '@layouts/main-section';
import TextField from '@elements/text-field';
import SubSection from '@layouts/sub-section';
import Select from '@elements/select';
import Button from '@elements/button';
import { AddIcon } from '@icons';
import SimpleDataTable from '@modules/simple-data-table';
import { header, Description, columns } from './descriptions-columns';
import { ColumnDef } from '@tanstack/react-table';
import Text from '@elements/text';
import { CategoryDescriptionsStore } from './store';
import { AnimatePresence, motion } from 'motion/react';

const Descriptions = ({ state, dispatch, categoryData, languageData, loading } : {state: CategoryDescriptionsStore, dispatch: any, categoryData: Array<any>, languageData: Array<any>, loading: boolean}) => {
  const [itemIndex, setItemIndex] = React.useState(state.description.length - 1);
  const dynamicColumns: ColumnDef<Description>[] = [
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
      cell: info =>
        <Text
          align='center'
          color={'grey.700'}
          typography={['xs', 'xs']}>
          {info.row.original.languageId ? languageData.find((value) => value.id === info.row.original.languageId).name || '-' : '-'}
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
    return (!state.description[itemIndex].name ||
      !state.description[itemIndex].languageId ||
      // !state.description[itemIndex].categoryId ||
      !state.description[itemIndex].description);
  };

  const handleChangeValue = ({ key, value }: { key: string, value: string }) => {
    dispatch({
      type: 'SET_DESCRIPTION_VALUE',
      key: key,
      value: value,
      index: itemIndex,
    });
  };

  const handleAddNewRow = () => {
    const validation = checkValidation();
    if (!validation) {
      dispatch({ type: 'ADD_NEW_DESCRIPTION' });
      setItemIndex(prevIndex => prevIndex + 1);
    } else {
      dispatch({ type: 'CHECK_ERROR', index: itemIndex });
    }
  };
  const handleUpdate = (value?: string, info?: object) => {
    const displayRow = state.description.findIndex((value) => {
      return value === info;
    });
    if (value === 'editRecord') {
      setItemIndex(displayRow);
      dispatch({ type: 'INITIAL_ERROR' });
    }
    if (value === 'deleteRecord') {
      dispatch({ type: 'DELETE_DESCRIPTION', key: displayRow });
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
            mobileColumns={['name', 'description', 'operations' ]}
            emptyLabel={'Add a new description'}
            updateData={handleUpdate}
            data={state.description.filter((_, index) => index !== itemIndex)}
            header={header}
            column={[...dynamicColumns, ...columns ]} />
        </motion.div>
      </AnimatePresence>
      <Div className={'w-full gap-6 grid md:grid-cols-3 grid-cols-1 mt-4 relative'}>
        <MainSection priority={3} title='Description Info' className='md:col-span-2'>
          {/*<AutoComplete*/}
          {/*  SearchValue={state.description[itemIndex]?.categoryId ? categoryData.find((value) => value.id === state.description[itemIndex].categoryId).name : ''}*/}
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
            SearchValue={state.description[itemIndex]?.languageId ? languageData.find((value) => value.id === state.description[itemIndex].languageId).name : ''}
            className='md:col-span-3 z-10'
            data={languageData}
            loading={loading}
            keyValue={'name'}
            id={'id'}
            handleSelect={(value: any) => handleChangeValue({ key: 'languageId', value: value.id })}
            getSearchData={() => console.log('search')}
            label='Language'
            error={state.error.languageId}
            helperText={state.error.languageId ? 'Language is required!' : undefined}
          />
          <TextField
            size='small'
            rounded='small'
            value={state.description[itemIndex].name}
            onChange={(e) => handleChangeValue({ key: 'name', value: e.target.value })}
            className={'w-full col-span-1 md:col-span-3'}
            label={'Name'}
            error={state.error.name}
            helperText={state.error.name ? 'Name is required!' : undefined}
          />
          <TextField
            multiline={true}
            maxRows={4}
            value={state.description[itemIndex].description}
            inputClassName={'min-h-24'}
            size='small'
            rounded='small'
            onChange={(e) => handleChangeValue({ key: 'description', value: e.target.value })}
            className={'w-full col-span-1 md:col-span-5'}
            label={'Description'}
            error={state.error.description}
            helperText={state.error.description ? 'Description is required!' : undefined}
          />
        </MainSection>
        <SubSection priority={2} title='Meta Info' className='md:col-span-1 md:h-fit'>
          <TextField
            size='small'
            rounded='small'
            onChange={(e) => handleChangeValue({ key: 'metaTitle', value: e.target.value })}
            className={'w-full'}
            label={'Meta Title'}
            value={state.description[itemIndex].metaTitle}

          />
          <TextField
            size='small'
            rounded='small'
            onChange={(e) => handleChangeValue({ key: 'metaDescription', value: e.target.value })}
            className={'w-full'}
            label={'Meta Description'}
            value={state.description[itemIndex].metaDescription}
          />
          <TextField
            size='small'
            rounded='small'
            onChange={(e) => handleChangeValue({ key: 'metaKeywords', value: e.target.value })}
            className={'w-full'}
            label={'meta Keywords'}
            value={state.description[itemIndex].metaKeywords}
          />
        </SubSection>
        <MainSection priority={4} title='Secondary Info' className='h-fit md:col-span-2'>
          <TextField
            size='small'
            disabled={loading}
            rounded='small'
            type={'number'}
            inputMode={'numeric'}
            onChange={(e) => handleChangeValue({ key: 'sortOrder', value: e.target.value })}
            className={'w-full md:col-span-2'}
            label={'Sort Order'}
            value={state.description[itemIndex].sortOrder}
          />
          <Select
            rounded='small'
            value={state.description[itemIndex].status}
            size='small'
            className='w-full md:col-span-2'
            disabled={loading}
            label={'Status'}
            optionsList={[{ id: '1', title: 'Active' }, { id: '0', title: 'In Active' }]}
            onChange={(newValue) => handleChangeValue({ key: 'status', value: newValue })}
            id={'id'}
            text={'title'}/>
        </MainSection>
        <SubSection priority={5} className='!py-2 md:col-span-1 !bg-transparent shadow-none !flex justify-start items-start'>
          <Button
            color='emerald'
            startAdornment={<AddIcon />}
            rounded='small'
            onClick={handleAddNewRow}
          >
          Add New Description
          </Button>
        </SubSection>
      </Div>
    </Div>
  );
};

export default Descriptions;
