'use client';
import React, { useState } from 'react';
import { SaveIcon, RedoIcon } from '../../../../../../assets/pb-icons';
import Button from '@elements/button';
import Div from '@elements/div';
import getParseRoute from '@utils/helpers/parse-route';
import routes from '@routes';
import { DictionariesTypes } from '@dictionaries';
import { useParams } from 'next/navigation';
import Header from '@layouts/section/sub-components/header';
import SectionItem from '@layouts/section/sub-components/section-item';
import General from './sub-components/general';
import Seo from './sub-components/seo';

const Menu = [
  {
    id: 'general',
    title: 'General',
  },
  {
    id: 'seo',
    title: 'SEO',
  },
];

const ManufacturerDetails = ({ name }: { name?: string }) => {
  const { lang } = useParams<{ lang: DictionariesTypes }>();
  const [section, setSection] = useState<string>('general');
  const handleCreate = () => {

  };
  const handleUpdate = () => {

  };
  const handleChangeSection = (id: string) => {
    setSection(id);
  };

  return (
    <Div className='flex-col justify-center w-full gap-4 md:gap-8'>
      <Div className={'w-full gap-2 md:gap-4 md:justify-end justify-between'}>
        <Button href={getParseRoute({ pathname: routes['route.catalog.products.index'], locale: lang })} rounded={'small'} size={'small'} color={'slate'} startAdornment={<RedoIcon />}>Return to List</Button>
        {name ? (
          <Button onClick={handleUpdate} rounded={'small'} size={'small'} color={'indigo'} startAdornment={<SaveIcon />} className={'self-end w-36'}>Update</Button>
        ) : (
          <Button onClick={handleCreate} rounded={'small'} size={'small'} color={'indigo'} startAdornment={<SaveIcon />} className={'self-end w-36'}>Submit</Button>
        )}
      </Div>
      <Div className={'justify-start w-full flex-col'}>
        <Header menu={Menu} handleChangeSection={handleChangeSection} section={section} />
        <SectionItem isActive={section === 'general'}>
          <General />
        </SectionItem>
        <SectionItem isActive={section === 'seo'}>
          <Seo />
        </SectionItem>
      </Div>
    </Div>
  );
};

export default ManufacturerDetails;
