import React, { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import Div from '@elements/div';
import MainSection from '../main-section';
import Button from '@elements/button';
import { AddIcon } from '../../../../../../../../assets/pb-icons';
import Chip from '@elements/chip';
import TextField from '@elements/text-field';
import Uploader from '@modules/uploader';
import InitialImage from '../../../../../../../../../public/images/products/initial.png';

const Images = () => {
  const [list, setList] = useState([]);
  const [initial, setInitial] = useState(undefined);
  const handleChangeValue = ({ id, value }: { id: string, value: string }) => {
  };

  const handleAddRow = () => {
    const tempList = JSON.parse(JSON.stringify(list));
    tempList.push({
      image: null,
      sortOrder: '',
    });
    setList(tempList);
  };

  const handleRemoveRow = (index: number) => {
    const tempList = list.map(item => Array.isArray(item) ? tempList(item) : item);
    tempList.splice(index, 1);
    setList(tempList);
  };

  const handleUploadImage = (state, index) => {
    const tempList = JSON.parse(JSON.stringify(list));
    tempList[index].image = state;
    setList(tempList);
  };

  const handleUploadInitialImage = (state) => {
    setInitial(state);
  };

  return (
    <Div className={'w-full gap-6 grid grid-cols-2 mt-4'}>
      <MainSection title={`Default Image`} className=''>
        <Div className='w-full col-span-6'>
          <Uploader initial={initial ? null : InitialImage} file={initial} fileCallback={handleUploadInitialImage} title={'please click here to upload image'} />
        </Div>
      </MainSection>
      {list.map((item, index) => {
        return (
          <MainSection key={`item_${index}`} title={`Image ${index + 1}`} className='flex- flex-col'>
            <Div className='grid grid-cols-1 col-span-6 gap-6 items-center justify-center'>
              <Div className='justify-end'>
                <Chip size='small' onClick={() => handleRemoveRow(index)} onDelete={() => handleRemoveRow(index)} variant={'reverse'} className={'self-start'} color={'danger'} value={'Remove'} />
              </Div>
              <Div className='gap-4 flex-col'>
                <Uploader file={item.image} fileCallback={(state) => handleUploadImage(state, index)} title={'please click here to upload image'} />
                <TextField
                  size='small'
                  rounded='medium'
                  onChange={(e) => handleChangeValue({ id: 'parent_id', value: e.target.value })}
                  className={'w-full'}
                  label={'Sort Order'}
                />
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

export default Images;
