'use client';
import React, { useReducer, useEffect, useState } from 'react';
import { SaveIcon, RedoIcon } from '../../../../../../assets/pb-icons';
import { initialState, reducer } from './store';
import Button from '@elements/button';
import Div from '@elements/div';
import getParseRoute from '@utils/helpers/parse-route';
import routes from '@routes';
import { DictionariesTypes } from '@dictionaries';
import { useParams } from 'next/navigation';
import Header from '@layouts/section/sub-components/header';
import { AnimatePresence, motion } from 'motion/react';
import SectionItem from '@layouts/section/sub-components/section-item';
import General from './sub-components/general';
import Stores from './sub-components/stores';
import Filters from './sub-components/filters';
import Description from './sub-components/descriptions';

const Menu = [
  {
    id: 'general',
    title: 'General',
  },
  {
    id: 'descriptions',
    title: 'Descriptions',
  },
  {
    id: 'filters',
    title: 'Filters',
  },
  {
    id: 'stores',
    title: 'Stores',
  },
];

const CategoryDetails = ({ name }: { name?: string }) => {
  const { lang } = useParams<{ lang: DictionariesTypes }>();

  const [section, setSection] = useState<string>('general');
  const handleCreate = () => {
  };
  const handleUpdate = () => {
  };
  const handleChangeSection = (id: string) => {
    setSection(id);
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChangeValue = ({ id, value }: { id: string, value: any }) => {
    dispatch({
      type: 'SET_VALUE',
      id: id,
      value: value,
    });
  };

  useEffect(() => {
    if (name) {
      handleChangeValue({ id: 'name', value: name });
    }
  }, [name]);

  return (
    <Div className='flex-col justify-center w-full gap-4 md:gap-8'>
      <Div className={'w-full gap-2 md:gap-4 md:justify-end justify-between'}>
        <Button href={getParseRoute({ pathname: routes['route.catalog.category.index'], locale: lang })} rounded={'small'} size={'small'} color={'slate'} startAdornment={<RedoIcon />}>Return to List</Button>
        {name ? (
          <Button onClick={handleUpdate} rounded={'small'} size={'small'} color={'indigo'} startAdornment={<SaveIcon />} className={'self-end w-36'}>Update</Button>
        ) : (
          <Button onClick={handleCreate} rounded={'small'} size={'small'} color={'indigo'} startAdornment={<SaveIcon />} className={'self-end w-36'}>Submit</Button>
        )}
      </Div>
      <Div className={'justify-start w-full flex-col'}>
        <Header menu={Menu} handleChangeSection={handleChangeSection} section={section} />
        <SectionItem
          isActive={section === 'general'}>
          <General
            dispatch={dispatch}
            state={state}
          />
        </SectionItem>
        <SectionItem isActive={section === 'descriptions'}>
          <Description
            dispatch={dispatch}
            state={state.description}
          />
        </SectionItem>
        <SectionItem isActive={section === 'filters'}>
          <Filters />
        </SectionItem>
        <SectionItem isActive={section === 'stores'}>
          <Stores />
        </SectionItem>
      </Div>
    </Div>
  );
};

export default CategoryDetails;
