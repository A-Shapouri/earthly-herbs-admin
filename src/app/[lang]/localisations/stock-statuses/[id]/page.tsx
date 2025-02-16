'use client';
import React from 'react';
import Breadcrumbs from '@elements/breadcrumbs';
import Div from '@elements/div';
import Text from '@elements/text';
import StockStatusDetails from '../components/stock-status-details';

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
              label: 'Stock Statuses',
              path: '/en/localisations/stock-statuses',
            },
            {
              label: 'Update',
            },
          ]}
        />
        <Text className='whitespace-nowrap' type={'bold'} typography={['xl', 'xl']}>Update Stock Status</Text>
      </Div>
      <StockStatusDetails />
    </Div>
  );
};

export default EditAttribute;
