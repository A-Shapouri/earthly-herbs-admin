'use client';
import React from 'react';
import Breadcrumbs from '@elements/breadcrumbs';
import Div from '@elements/div';
import Text from '@elements/text';
import LengthClassDescriptionDetails from '../components/length-class-description-details';

const NewLengthClass = () => {
  return (
    <Div className={'flex-col justify-center w-full gap-4 md:gap-8'}>
      <Div className={'w-full justify-between md:flex-row flex-col gap-4'}>
        <Breadcrumbs
          breadcrumbsData={[
            {
              label: 'localisations',
            },
            {
              label: 'length Classes',
              path: '/en/localisations/length-class-descriptions',
            },
            {
              label: 'Create',
            },
          ]}
        />
        <Text className='whitespace-nowrap' type={'bold'} typography={['xl', 'xl']}>Add New Length Class Description</Text>
      </Div>
      <LengthClassDescriptionDetails />
    </Div>
  );
};

export default NewLengthClass;
