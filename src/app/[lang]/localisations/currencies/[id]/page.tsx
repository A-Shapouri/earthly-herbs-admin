'use client';
import React from 'react';
import Breadcrumbs from '@elements/breadcrumbs';
import Div from '@elements/div';
import Text from '@elements/text';
import CurrencyDetails from '../components/currency-details';

const EditAttribute = () => {
  return (
    <Div className={'flex-col justify-center w-full gap-4 md:gap-8'}>
      <Div className={'w-full justify-between md:flex-row flex-col gap-4'}>
        <Breadcrumbs
          breadcrumbsData={[
            {
              label: 'Localisations',
            },
            {
              label: 'Currencies',
              path: '/en/localisations/currencies',
            },
            {
              label: 'Update',
            },
          ]}
        />
        <Text className='whitespace-nowrap' type={'bold'} typography={['xl', 'xl']}>Update Currency</Text>
      </Div>
      <CurrencyDetails />
    </Div>
  );
};

export default EditAttribute;
