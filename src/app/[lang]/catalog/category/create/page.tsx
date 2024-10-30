'use client';
import React from 'react';
import { SaveIcon, RedoIcon } from '../../../../../assets/pb-icons';
import Breadcrumbs from '@elements/breadcrumbs';
import Button from '@elements/button';
import Div from '@elements/div';
import Text from '@elements/text';
import CategoryDetails from '../components/category-details';
import { useParams } from 'next/navigation';
import { DictionariesTypes } from '@dictionaries';
import getParseRoute from '@utils/helpers/parse-route';
import routes from '@routes';
const NewClient = () => {
  const { lang } = useParams<{ lang: DictionariesTypes }>();
  const handleCreate = () => {

  };
  return (
    <Div className={'flex-col justify-center w-full gap-4 md:gap-8'}>
      <Div className={'w-full justify-between'}>
        <Breadcrumbs
          breadcrumbsData={[
            {
              label: 'Category',
              path: '/en/catalog/category',
            },
            {
              label: 'Create',
            },
          ]}
        />
        <Text className='whitespace-nowrap' type={'bold'} typography={['xl', 'xl']}>Add New Category</Text>
      </Div>
      <Div className={'w-full gap-2 md:gap-4 justify-end'}>
        <Button href={getParseRoute({ pathname: routes['route.catalog.category.index'], locale: lang })} rounded={'small'} size={'small'} color={'slate'} startAdornment={<RedoIcon />}>Return to List</Button>
        <Button onClick={handleCreate} rounded={'small'} size={'small'} color={'indigo'} startAdornment={<SaveIcon />} className={'self-end w-36'}>Submit</Button>
      </Div>
      <CategoryDetails />
    </Div>
  );
};

export default NewClient;