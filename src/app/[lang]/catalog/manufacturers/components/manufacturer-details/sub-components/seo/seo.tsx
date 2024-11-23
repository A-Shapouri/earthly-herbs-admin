import React from 'react';

import Div from '@elements/div';
import TextField from '@elements/text-field';
import Divider from '@elements/divider';
import MainSection from '@layouts/main-section';
import Text from '@elements/text';

const Seo = () => {
  const handleChangeValue = ({ id, value }: { id: string, value: string }) => {

  };

  return (
    <Div className={'w-full gap-6 grid md:grid-cols-6 grid-cols-1 mt-4'}>
      <MainSection title='Primary Info' className='md:col-span-6'>
        <Div className='md:col-span-6 w-full grid grid-cols-3 md:mt-8 mt-2'>
          <Div className='flex-col gap-3 col-span-1'>
            <Text>Stores</Text>
            <Divider shade='dark' color='slate' />
            <Text typography={['sm', 'sm']}>Default</Text>
          </Div>
          <Div className='flex-col gap-3 col-span-2'>
            <Text>Keyword</Text>
            <Divider shade='dark' color='slate' />
            <TextField
              onChange={(e) => handleChangeValue({ id: 'description', value: e.target.value })}
              className={'w-full md:col-span-6'}
              size='small'
              rounded='small'
              label={'Keyword'}
            />
          </Div>
        </Div>
      </MainSection>

    </Div>
  );
};

export default Seo;
