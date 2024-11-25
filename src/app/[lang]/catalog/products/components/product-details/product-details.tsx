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
import Links from './sub-components/links';
import Data from './sub-components/data';
import Attributes from './sub-components/attributes';
import Recurring from './sub-components/recurring';
import Discount from './sub-components/discount';
import Special from './sub-components/special';
import Images from './sub-components/images';
import RewardPoints from './sub-components/reward-points';
import Seo from './sub-components/seo';
import Design from './sub-components/design';
import { motion, AnimatePresence } from 'motion/react';

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
    id: 'links',
    title: 'Links',
  },
  {
    id: 'attributes',
    title: 'Attributes',
  },
  {
    id: 'recurring',
    title: 'Recurring',
  },
  {
    id: 'discount',
    title: 'Discount',
  },
  {
    id: 'special',
    title: 'Special',
  },
  {
    id: 'image',
    title: 'Image',
  },
  {
    id: 'reward_points',
    title: 'Reward Points',
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

const ProductDetails = ({ name }: { name?: string }) => {
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
        <AnimatePresence mode="wait">
          <motion.div
            key={section || 'empty'}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 50, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <SectionItem isActive={section === 'general'}>
              <General />
            </SectionItem>
            <SectionItem isActive={section === 'data'}>
              <Data />
            </SectionItem>
            <SectionItem isActive={section === 'links'}>
              <Links />
            </SectionItem>
            <SectionItem isActive={section === 'attributes'}>
              <Attributes />
            </SectionItem>
            <SectionItem isActive={section === 'recurring'}>
              <Recurring />
            </SectionItem>
            <SectionItem isActive={section === 'discount'}>
              <Discount />
            </SectionItem>
            <SectionItem isActive={section === 'special'}>
              <Special />
            </SectionItem>
            <SectionItem isActive={section === 'image'}>
              <Images />
            </SectionItem>
            <SectionItem isActive={section === 'reward_points'}>
              <RewardPoints />
            </SectionItem>
            <SectionItem isActive={section === 'seo'}>
              <Seo />
            </SectionItem>
            <SectionItem isActive={section === 'design'}>
              <Design />
            </SectionItem>
          </motion.div>
        </AnimatePresence>
      </Div>
    </Div>
  );
};

export default ProductDetails;
