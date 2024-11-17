import React, { useState } from 'react';

import Div from '@elements/div';
import MainSection from '../main-section';
import Button from '@elements/button';
import { AddIcon } from '../../../../../../../../assets/pb-icons';
import Select from '@elements/select';
import Chip from '@elements/chip';

const Recurring = () => {
  const [list, setList] = useState<Array<{
    profile?: string
    group?: string
  }>>([{
    profile: '',
    group: '',
  }]);

  const handleChangeValue = ({ id, value }: { id: string, value: string }) => {

  };

  const handleAddRow = () => {
    setList([...list, {
      profile: '',
      group: '',
    }]);
  };

  const handleRemoveRow = (index: number) => {
    const tempList = JSON.parse(JSON.stringify(list));
    tempList.splice(index, 1);
    setList(tempList);
  };

  return (
    <Div className={'w-full gap-6 grid grid-cols-2 mt-4'}>
      {list.map((item, index) => {
        return (
          <MainSection key={index} title={`Recuuring ${index + 1}`} className='flex- flex-col col-span-1'>
            <Div className='grid grid-cols-2 col-span-6 gap-6 items-center justify-center'>
              <Div className='col-span-3 justify-end'>
                <Chip size='small' onClick={() => handleRemoveRow(index)} onDelete={() => handleRemoveRow(index)} variant={'reverse'} className={'self-start'} color={'danger'} value={'Remove'} />
              </Div>
              <Div>
                <Select
                  rounded='medium'
                  value={''}
                  size='small'
                  className='col-span-3 w-full'
                  label={'Recurring Profile'}
                  optionsList={[{ id: 1, title: 'Profile_1' }, { id: 2, title: 'Profile_2' }, { id: 3, title: 'Profile_3' }, { id: 4, title: 'Profile_4' }]}
                  onChange={(newValue) => handleChangeValue({ id: 'status', value: newValue })}
                  id={'id'}
                  text={'title'} />
              </Div>
              <Div>
                <Select
                  rounded='medium'
                  value={''}
                  size='small'
                  className='col-span-3 w-full'
                  label={'Customer Group'}
                  optionsList={[{ id: 1, title: 'Group_1' }, { id: 2, title: 'Group_2' }, { id: 3, title: 'Group_3' }, { id: 4, title: 'Group_4' }]}
                  onChange={(newValue) => handleChangeValue({ id: 'status', value: newValue })}
                  id={'id'}
                  text={'title'} />
              </Div>
            </Div>
          </MainSection>
        );
      })}
      <Div className='justify-start items-start col-span-1'>
        <Button onClick={handleAddRow} color={'emerald'} shape='square' startAdornment={<AddIcon />} />
      </Div>
    </Div>
  );
};

export default Recurring;
