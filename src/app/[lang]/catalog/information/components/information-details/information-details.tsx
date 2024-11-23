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
import Data from './sub-components/data';
import Seo from './sub-components/seo';
import Design from './sub-components/design';

const Menu = [
  {
    id: 'general',
    title: 'General',
  },
  {
    id: 'data',
    title: 'Data',
  },
  {
    id: 'seo',
    title: 'SEO',
  },
  {
    id: 'design',
    title: 'Design',
  },
];

const InformationDetails = ({ name }: { name?: string }) => {
  const { lang } = useParams<{ lang: DictionariesTypes }>();
  const [section, setSection] = useState<string>('general');
  const handleCreate = () => {
    // dispatch({ type: 'CHECK_ERROR' });
  };
  const handleUpdate = () => {
    // dispatch({ type: 'CHECK_ERROR' });
  };
  const handleChangeSection = (id: string) => {
    setSection(id);
  };

  return (
    <Div className='flex-col justify-center w-full gap-4 md:gap-8'>
      <Div className={'w-full gap-2 md:gap-4 md:justify-end justify-between'}>
        <Button href={getParseRoute({ pathname: routes['route.catalog.information.index'], locale: lang })} rounded={'small'} size={'small'} color={'slate'} startAdornment={<RedoIcon />}>Return to List</Button>
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
        <SectionItem isActive={section === 'data'}>
          <Data />
        </SectionItem>
        <SectionItem isActive={section === 'seo'}>
          <Seo />
        </SectionItem>
        <SectionItem isActive={section === 'design'}>
          <Design />
        </SectionItem>
      </Div>
    </Div>
  );
};

export default InformationDetails;
