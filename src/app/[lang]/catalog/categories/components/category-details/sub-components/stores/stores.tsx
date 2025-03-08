import React from 'react';

import Div from '@elements/div';
import Select from '@elements/select';
import Divider from '@elements/divider';
import MainSection from '@layouts/main-section';
import Text from '@elements/text';
import TextField from '@elements/text-field';
import FormControlLabel from '@elements/form-control-label';
import Checkbox from '@elements/checkbox';
import SubSection from '@layouts/sub-section';
import Uploader from '@modules/uploader';
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
const Stores = () => {
  const handleChangeValue = ({ id, value }: { id: string, value: string }) => {

  };

  return (
    <Div className={'w-full gap-6 grid md:grid-cols-3 md:grid-rows-3 grid-cols-1 mt-4 grid-flow-dense'}>
      <MainSection priority={1} title='Stores Info' className='md:row-span-1 md:col-span-2'>
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

export default Stores;
