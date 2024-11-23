'use client';
import React from 'react';
import Breadcrumbs from '@elements/breadcrumbs';
import Div from '@elements/div';
import Text from '@elements/text';
import AttributeGroupDetails from '../components/attribute-group-details';

const NewRecurringProfile = () => {
  return (
    <Div className={'flex-col justify-center w-full gap-4 md:gap-8'}>
      <Div className={'w-full justify-between md:flex-row flex-col gap-4'}>
        <Breadcrumbs
          breadcrumbsData={[
            {
              label: 'Attribute Groups',
              path: '/en/catalog/attribute-groups',
            },
            {
              label: 'Create',
            },
          ]}
        />
        <Text className='whitespace-nowrap' type={'bold'} typography={['xl', 'xl']}>Add New Attribute Group</Text>
      </Div>
      <AttributeGroupDetails />
    </Div>
  );
};

export default NewRecurringProfile;
