import React, {useState} from 'react';

import Div from '@elements/div';
import TextField from '@elements/text-field';
import MainSection from '@layouts/main-section';
import SubSection from '@layouts/sub-section';
import Uploader from "@modules/uploader";

const General = () => {
  const [image, setImage] = useState(null);
  const handleChangeValue = ({ id, value }: { id: string, value: string }) => {

  };

  const handleUploadImage = (state) => {
    setImage(state);
  };

  return (
    <Div className={'w-full gap-6 grid md:grid-cols-6 grid-cols-1 mt-4'}>
      <MainSection title='Primary Info' className='md:col-span-4'>
        <TextField
          size='small'
          rounded='small'
          onChange={(e) => handleChangeValue({ id: 'name', value: e.target.value })}
          className={'w-full col-span-1 md:col-span-4'}
          label={'Manufacturer Name'}
        />
        <TextField
          size='small'
          rounded='small'
          type={'number'}
          onChange={(e) => handleChangeValue({ id: 'parent_id', value: e.target.value })}
          className={'w-full md:col-span-4'}
          label={'Sort Order'}
        />
      </MainSection>
      <SubSection title='Image' className='md:col-span-2 h-fit'>
        <Uploader file={image} fileCallback={(state) => handleUploadImage(state)} title={'please click here to upload image'} />
      </SubSection>
    </Div>
  );
};

export default General;
