import React from 'react';

import Div from '@elements/div';
import TextField from '@elements/text-field';
import MainSection from '@layouts/main-section';
import SubSection from '@layouts/sub-section';

const General = () => {
  const handleChangeValue = ({ id, value }: { id: string, value: string }) => {

  };

  return (
    <Div className={'w-full gap-6 grid md:grid-cols-6 grid-cols-1 mt-4'}>
      <MainSection title='Primary Info' className='md:col-span-4'>
        <TextField
          size='small'
          rounded='small'
          onChange={(e) => handleChangeValue({ id: 'name', value: e.target.value })}
          className={'w-full col-span-1 md:col-span-4'}
          label={'Information Title'}
        />
        <TextField
          onChange={(e) => handleChangeValue({ id: 'description', value: e.target.value })}
          className={'w-full md:col-span-6'}
          rounded='small'
          multiline={true}
          maxRows={4}
          inputClassName={'!min-h-32'}
          label={'Description'}
        />
      </MainSection>
      <SubSection title='Meta Info' className='md:col-span-2 h-fit'>
        <TextField
          size='small'
          rounded='small'
          onChange={(e) => handleChangeValue({ id: 'sort_order', value: e.target.value })}
          className={'w-full'}
          label={'Meta Tag Title'}

        />
        <TextField
          size='small'
          rounded='small'
          onChange={(e) => handleChangeValue({ id: 'columns', value: e.target.value })}
          className={'w-full'}
          label={'Meta Tag description'}
        />
        <TextField
          size='small'
          rounded='small'
          onChange={(e) => handleChangeValue({ id: 'parent_id', value: e.target.value })}
          className={'w-full'}
          label={'meta Tag Keywords'}
        />
      </SubSection>
    </Div>
  );
};

export default General;
