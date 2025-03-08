import React from 'react';
import 'react-calendar/dist/Calendar.css';
import Div from '@elements/div';
import MainSection from '@layouts/main-section';
import AutoComplete from '@modules/auto-complete';
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
const Filters = () => {
  return (
    <Div className={'w-full gap-6 grid md:grid-cols-3 md:grid-rows-3 grid-cols-1 mt-4 grid-flow-dense'}>
      <MainSection priority={1} title='Filters Info' className='md:row-span-1 md:col-span-2'>
        <AutoComplete
          className='md:col-span-3'
          data={data}
          loading={false}
          keyValue={'title'}
          id={'id'}
          handleSelect={(value) => console.log(value)}
          getSearchData={() => console.log('search')}
          label='Category'
        />
        <AutoComplete
          className='md:col-span-3'
          data={data}
          loading={false}
          keyValue={'title'}
          id={'id'}
          handleSelect={(value) => console.log(value)}
          getSearchData={() => console.log('search')}
          label='Store'
        />
      </MainSection>
    </Div>
  );
};

export default Filters;
