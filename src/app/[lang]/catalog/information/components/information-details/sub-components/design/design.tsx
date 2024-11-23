import React from 'react';

import Div from '@elements/div';
import Select from '@elements/select';
import Divider from '@elements/divider';
import MainSection from '@layouts/main-section';
import Text from '@elements/text';

const Design = () => {
  const handleChangeValue = ({ id, value }: { id: string, value: string }) => {

  };

  return (
    <Div className={'w-full gap-6 grid md:grid-cols-6 grid-cols-1 mt-4'}>
      <MainSection title='Primary Info' className='md:col-span-6'>
        <Div className='md:col-span-6 w-full grid grid-cols-3 mt-8'>
          <Div className='flex-col gap-3 col-span-1'>
            <Text>Stores</Text>
            <Divider shade='dark' color='slate' />
            <Text typography={['sm', 'sm']}>Default</Text>
          </Div>
          <Div className='flex-col gap-3 col-span-2'>
            <Text>Layout Override</Text>
            <Divider shade='dark' color='slate' />
            <Select
              rounded='small'
              value={''}
              size='small'
              className='md:col-span-3 w-full'
              label={'Layout Override'}
              optionsList={[{ id: 1, title: 'Layout_1' }, { id: 2, title: 'Layout_2' }, { id: 3, title: 'Layout_3' }, { id: 4, title: 'Layout_4' }]}
              onChange={(newValue) => handleChangeValue({ id: 'status', value: newValue })}
              id={'id'}
              text={'title'} />
          </Div>
        </Div>
      </MainSection>

    </Div>
  );
};

export default Design;
