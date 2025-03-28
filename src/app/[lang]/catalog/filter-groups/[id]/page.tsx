'use client';
import React from 'react';
import Breadcrumbs from '@elements/breadcrumbs';
import Div from '@elements/div';
import Text from '@elements/text';
import FilterGroupDetails from '../components/filter-group-details';

const EditFilterGroup = () => {
  return (
    <Div className={'flex-col justify-center w-full gap-4 md:gap-8'}>
      <Div className={'w-full justify-between md:flex-row flex-col gap-4'}>
        <Breadcrumbs
          breadcrumbsData={[
            {
              label: 'Filter Groups',
              path: '/en/catalog/filter-groups',
            },
            {
              label: 'Update',
            },
          ]}
        />
        <Text className='whitespace-nowrap' type={'bold'} typography={['xl', 'xl']}>Update Filter Group</Text>
      </Div>
      <FilterGroupDetails />
    </Div>
  );
};

export default EditFilterGroup;
