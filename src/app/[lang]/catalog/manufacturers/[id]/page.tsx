'use client';
import React from 'react';
import Breadcrumbs from '@elements/breadcrumbs';
import Div from '@elements/div';
import Text from '@elements/text';
import ManufacturerDetails from '../components/manufacturer-details';
import { useParams } from 'next/navigation';
import { DictionariesTypes } from '@dictionaries';
const EditManufacturer = () => {
  const { id } = useParams<{ id: string, lang: DictionariesTypes }>();
  return (
    <Div className={'flex-col justify-center w-full gap-4 md:gap-8'}>
      <Div className={'w-full justify-between md:flex-row flex-col gap-4'}>
        <Breadcrumbs
          breadcrumbsData={[
            {
              label: 'Manufacturers',
              path: '/en/catalog/manufacturers',
            },
            {
              label: 'Update',
            },
          ]}
        />
        <Text className='whitespace-nowrap' type={'bold'} typography={['xl', 'xl']}>Update Manufacturer</Text>
      </Div>
      <ManufacturerDetails name={id} />
    </Div>
  );
};

export default EditManufacturer;
