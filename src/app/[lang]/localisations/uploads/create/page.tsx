'use client';
import React from 'react';
import Breadcrumbs from '@elements/breadcrumbs';
import Div from '@elements/div';
import Text from '@elements/text';
import UploadDetails from '../components/upload-details';

const NewUpload = () => {
  return (
    <Div className={'flex-col justify-center w-full gap-4 md:gap-8'}>
      <Div className={'w-full justify-between md:flex-row flex-col gap-4'}>
        <Breadcrumbs
          breadcrumbsData={[
            {
              label: 'localisations',
            },
            {
              label: 'uploads',
              path: '/en/localisations/uploads',
            },
            {
              label: 'Create',
            },
          ]}
        />
        <Text className='whitespace-nowrap' type={'bold'} typography={['xl', 'xl']}>Add New Upload</Text>
      </Div>
      <UploadDetails />
    </Div>
  );
};

export default NewUpload;
