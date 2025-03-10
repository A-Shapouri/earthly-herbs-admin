'use client';
import React from 'react';
import Breadcrumbs from '@elements/breadcrumbs';
import Div from '@elements/div';
import Text from '@elements/text';
import ShippingCourierDetails from '../components/shipping-courier-details';

const EditShippingCourier = () => {
  return (
    <Div className={'flex-col justify-center w-full gap-4 md:gap-8'}>
      <Div className={'w-full justify-between md:flex-row flex-col gap-4'}>
        <Breadcrumbs
          breadcrumbsData={[
            {
              label: 'Localisations',
            },
            {
              label: 'Shipping Couriers',
              path: '/en/localisations/shipping-couriers',
            },
            {
              label: 'Update',
            },
          ]}
        />
        <Text className='whitespace-nowrap' type={'bold'} typography={['xl', 'xl']}>Update Shipping Courier</Text>
      </Div>
      <ShippingCourierDetails />
    </Div>
  );
};

export default EditShippingCourier;
