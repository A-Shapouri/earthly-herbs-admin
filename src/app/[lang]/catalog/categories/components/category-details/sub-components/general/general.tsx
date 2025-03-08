import React, { useState } from 'react';

import Div from '@elements/div';
import TextField from '@elements/text-field';
import MainSection from '@layouts/main-section';
import SubSection from '@layouts/sub-section';
import Uploader from '@modules/uploader';
import Select from '@elements/select';
import Checkbox from '@elements/checkbox';
import FormControlLabel from '@elements/form-control-label';
import { CategoryDetailsStore } from '../../store';

const General = ({ state, dispatch }: {state: CategoryDetailsStore, dispatch: any}) => {
  const [image, setImage] = useState<string | null>(null);

  const handleChangeValue = ({ id, value }: { id: string, value: string | boolean }) => {

  };

  return (
    <Div className={'w-full gap-6 grid md:grid-cols-3 grid-cols-1 mt-4 grid-flow-dense'}>
      <MainSection priority={2} title='General Info' className='md:row-span-1 md:col-span-2'>
        <TextField
          size='small'
          value={state.name}
          rounded='small'
          onChange={(e) => handleChangeValue({ id: 'name', value: e.target.value })}
          className={'w-full col-span-1 md:col-span-3'}
          label={'Category Name'}
        />
        <TextField
          value={state.languageId}
          size='small'
          rounded='small'
          onChange={(e) => handleChangeValue({ id: 'parentId', value: e.target.value })}
          className={'w-full md:col-span-3'}
          label={'Category Parent Id'}
        />
        <TextField
          size='small'
          rounded='small'
          onChange={(e) => handleChangeValue({ id: 'parent_id', value: e.target.value })}
          className={'w-full md:col-span-3'}
          label={'Product Tags'}
        />
        <TextField
          size='small'
          rounded='small'
          onChange={(e) => handleChangeValue({ id: 'slug', value: e.target.value })}
          className={'w-full md:col-span-3'}
          label={'Category Slug'}
        />
      </MainSection>
      <MainSection priority={3} title='Secondary Info' className='md:row-span-1 md:col-span-2'>
        <TextField
          size='small'
          rounded='small'
          onChange={(e) => handleChangeValue({ id: 'column', value: e.target.value })}
          className={'w-full md:col-span-3'}
          label={'Category Column'}
        />
        <TextField
          size='small'
          // disabled={loading || storeLoading || updateLoading}
          // value={state.data.sortOrder}
          rounded='small'
          type={'number'}
          onChange={(e) => handleChangeValue({ id: 'sortOrder', value: e.target.value })}
          className={'w-full md:col-span-2 md:col-start-1'}
          label={'Category Sort Order'}
        />
        <Select
          rounded='small'
          value={''}
          // value={state.data.status.toString()}
          size='small'
          className='w-full md:col-span-2'
          // disabled={loading || storeLoading || updateLoading}
          label={'Category Status'}
          optionsList={[{ id: '1', title: 'Active' }, { id: '0', title: 'In Active' }]}
          onChange={(newValue) => handleChangeValue({ id: 'status', value: newValue })}
          id={'id'}
          text={'title'}/>
        <FormControlLabel label={'Top'}>
          <Checkbox
            onChange={() => handleChangeValue({ id: 'postcodeRequired', value: false })}
            color={'slate'}
            checked={false}
          />
        </FormControlLabel>
      </MainSection>
      <SubSection priority={1} title='Image' className='md:row-span-3 md:col-span-1 md:h-fit'>
        <Uploader
          file={image}
          title={'Click to Upload Image'}
          fileCallback={(file) => setImage(file)}
        />
      </SubSection>
    </Div>
  );
};

export default General;
