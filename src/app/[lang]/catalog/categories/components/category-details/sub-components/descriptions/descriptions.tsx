import React, { useMemo } from 'react';

import Div from '@elements/div';
import AutoComplete from '@modules/auto-complete';
import MainSection from '@layouts/main-section';
import TextField from '@elements/text-field';
import SubSection from '@layouts/sub-section';
import Select from '@elements/select';
import Button from '@elements/button';
import { AddIcon } from '@icons';
import { DescriptionType } from '../../store';
import SimpleDataTable from '@modules/simple-data-table';
import { header, columns } from './descriptions-columns';

const data = [
  {
    id: '1',
    title: 'test 1',
  },
  {
    id: '2',
    title: 'test 2',
  },
  {
    id: '3',
    title: 'test 3',
  },
];

const Descriptions = ({ state, dispatch }: {state: Array<DescriptionType>, dispatch: any}) => {
  const [itemIndex, setItemIndex] = React.useState(state.length - 1);
  const handleChangeValue = ({ key, value }: { key: string, value: string }) => {
    dispatch({
      type: 'SET_DESCRIPTION_VALUE',
      key: key,
      value: value,
      index: itemIndex,
    });
  };
  console.log(state, itemIndex);
  const handleAddNewRow = () => {
    if (state[itemIndex].languageId && state[itemIndex].categoryId && state[itemIndex].name && state[itemIndex].description) {
      dispatch({ type: 'ADD_NEW_DESCRIPTION' });
      setItemIndex(prevIndex => prevIndex + 1);
    }
  };

  const handleUpdate = (value?: string, info?: object) => {
    if (value === 'editRecord') {
      const displayRow = state.findIndex((value) => {
        console.log(value);
        return value === info;
      });
      console.log(info, displayRow);
      // setItemIndex(displayRow);
    }
  };

  return (
    <Div className={'flex-col w-full'}>
      <Div className={'w-full'}>
        {state.length > 1 ? (
          <SimpleDataTable
            updateData={handleUpdate}
            data={state.filter((_, index) => index !== itemIndex)}
            header={header}
            column={columns} />
        ) : null}
      </Div>
      <Div className={'w-full gap-6 grid md:grid-cols-3 grid-cols-1 mt-4 relative'}>
        <MainSection priority={2} title='Description Info' className='md:col-span-2'>
          <AutoComplete
            SearchValue={data.find((value) => value.id === state[itemIndex].categoryId).title || ''}
            className='md:col-span-3'
            data={data}
            loading={false}
            keyValue={'title'}
            id={'id'}
            handleSelect={(value: any) => handleChangeValue({ key: 'categoryId', value: value.id })}
            getSearchData={() => console.log('search')}
            label='Category'
          />
          <AutoComplete
            SearchValue={data.find((value) => value.id === state[itemIndex].languageId).title || ''}
            className='md:col-span-3'
            data={data}
            loading={false}
            keyValue={'title'}
            id={'id'}
            handleSelect={(value: any) => handleChangeValue({ key: 'languageId', value: value.id })}
            getSearchData={() => console.log('search')}
            label='Language'
          />
          <TextField
            size='small'
            rounded='small'
            value={state[itemIndex].name}
            onChange={(e) => handleChangeValue({ key: 'name', value: e.target.value })}
            className={'w-full col-span-1 md:col-span-3'}
            label={'Name'}
          />
          <TextField
            multiline={true}
            maxRows={4}
            value={state[itemIndex].description}
            inputClassName={'min-h-24'}
            size='small'
            rounded='small'
            onChange={(e) => handleChangeValue({ key: 'description', value: e.target.value })}
            className={'w-full col-span-1 md:col-span-5'}
            label={'Description'}
          />
        </MainSection>
        <SubSection priority={1} title='Meta Info' className='md:col-span-1 md:h-fit'>
          <TextField
            size='small'
            rounded='small'
            onChange={(e) => handleChangeValue({ key: 'metaTitle', value: e.target.value })}
            className={'w-full'}
            label={'Meta Title'}
            value={state[itemIndex].metaTitle}

          />
          <TextField
            size='small'
            rounded='small'
            onChange={(e) => handleChangeValue({ key: 'metaDescription', value: e.target.value })}
            className={'w-full'}
            label={'Meta Description'}
            value={state[itemIndex].metaDescription}
          />
          <TextField
            size='small'
            rounded='small'
            onChange={(e) => handleChangeValue({ key: 'metaKeyword', value: e.target.value })}
            className={'w-full'}
            label={'meta Keywords'}
            value={state[itemIndex].metaKeyword}
          />
        </SubSection>
        <MainSection priority={3} title='Secondary Info' className='h-fit md:col-span-2'>
          <TextField
            size='small'
            // disabled={loading || storeLoading || updateLoading}
            // value={state.data.sortOrder}
            rounded='small'
            type={'number'}
            onChange={(e) => handleChangeValue({ key: 'sortOrder', value: e.target.value })}
            className={'w-full md:col-span-2'}
            label={'Sort Order'}
            value={state[itemIndex].sortOrder}
          />
          <Select
            rounded='small'
            value={state[itemIndex].status}
            size='small'
            className='w-full md:col-span-2'
            // disabled={loading || storeLoading || updateLoading}
            label={'Status'}
            optionsList={[{ id: '1', title: 'Active' }, { id: '0', title: 'In Active' }]}
            onChange={(newValue) => handleChangeValue({ key: 'status', value: newValue })}
            id={'id'}
            text={'title'}/>
        </MainSection>
        <SubSection priority={4} className='!py-2 md:col-span-1 !bg-transparent shadow-none !flex justify-start items-start'>
          <Button
            disabled={!state[itemIndex].languageId || !state[itemIndex].categoryId || !state[itemIndex].name || !state[itemIndex].description}
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
