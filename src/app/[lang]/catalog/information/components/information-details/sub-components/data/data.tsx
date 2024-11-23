import React from 'react';

import Div from '@elements/div';
import TextField from '@elements/text-field';
import Select from '@elements/select';
import MainSection from '@layouts/main-section';
import Checkbox from '@elements/checkbox';
import FormControlLabel from '@elements/form-control-label';

const Data = () => {
  const handleChangeValue = ({ id, value }: { id: string, value: string }) => {

  };
  return (
    <Div className={'w-full gap-6 grid md:grid-cols-3 md:grid-rows-3 grid-cols-1 mt-4 grid-flow-dense'}>
      <MainSection title='Primary Info' className='md:row-span-2 md:col-span-2 h-fit'>
        <Select
          className=' col-span-2'
          size='small'
          rounded='small'
          label={'Status'}
          optionsList={[{ id: 1, title: 'Enabled' }, { id: 2, title: 'Disabled' }]}
          value={''}
          onChange={(newValue) => handleChangeValue({ id: 'status', value: newValue })}
          id={'id'}
          text={'title'} />
        <TextField
          size='small'
          rounded='small'
          onChange={(e) => handleChangeValue({ id: 'parent_id', value: e.target.value })}
          className={'w-full md:col-span-3'}
          label={'Sort Order'}
        />
        <FormControlLabel label={'Bottom'}>
          <Checkbox checked={false} color={'slate'} />
        </FormControlLabel>
      </MainSection>
    </Div>
  );
};

export default Data;
