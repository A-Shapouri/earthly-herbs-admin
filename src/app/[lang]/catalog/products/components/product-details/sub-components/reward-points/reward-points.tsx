import React from 'react';

import Div from '@elements/div';
import TextField from '@elements/text-field';
import Divider from '@elements/divider';
import MainSection from '../main-section';
import Text from '@elements/text';

const RewardPoints = () => {
  const handleChangeValue = ({ id, value }: { id: string, value: string }) => {

  };

  return (
    <Div className={'w-full gap-6 grid md:grid-cols-6 grid-cols-1 mt-4'}>
      <MainSection title='Primary Info' className='md:col-span-6'>
        <TextField
          onChange={(e) => handleChangeValue({ id: 'description', value: e.target.value })}
          className={'w-full md:col-span-6'}
          size='small'
          rounded='small'
          label={'Points'}
        />
        <Div className='md:col-span-6 w-full grid grid-cols-2 md:grid-cols-3 mt-8'>
          <Div className='flex-col gap-3 col-span-1'>
            <Text>Customer Group</Text>
            <Divider shade='dark' color='slate' />
            <Text typography={['sm', 'sm']}>default</Text>
          </Div>
          <Div className='flex-col gap-3 md:col-span-2'>
            <Text>Reward Points</Text>
            <Divider shade='dark' color='slate' />
            <TextField
              onChange={(e) => handleChangeValue({ id: 'description', value: e.target.value })}
              className={'w-full md:col-span-6'}
              size='small'
              rounded='small'
              label={'Points'}
            />
          </Div>
        </Div>
      </MainSection>
    </Div>
  );
};

export default RewardPoints;
