'use client';
import React from 'react';
import Button from '@elements/button';
import classNames from '@utils/helpers/class-names';
import Div from '@elements/div';
import Text from '@elements/text';
import ArrowDownIcon from '@icons-components/arrow-down';
import { useParams, usePathname } from 'next/navigation';
import { useSelector } from 'react-redux';
import { RootState } from '@store/root-reducer';
import { MenuIcons } from './menu.data';
import routes from '@routes';
import { LockIcon } from 'assets/pb-icons';
import store from '@store/store';
import { HomeActionTypes } from '@store/home/home-actions';
import getParseRoute from '@utils/helpers/parse-route';
import { DictionariesTypes } from '@dictionaries';
import EaerthlyLogo from '../../../../public/images/earthly-logo.png';
import Image from 'next/image';

const Menu = () => {
  const pathname = usePathname();
  const { lang } = useParams<{ lang: DictionariesTypes }>();
  const { expandedMenu } = useSelector((state: RootState) => state.home);
  const menuInfo = [{
    title: 'Dashboard',
    key: 'Dashboard',
    route: getParseRoute({ pathname: routes['route.home.index'], locale: lang }),
  },
  {
    title: 'Catalog',
    key: 'Users',
    route: '/en/',
    subRoutes: [{
      title: 'Category',
      route: getParseRoute({ pathname: routes['route.catalog.category.index'], locale: lang }),
    },
    {
      title: 'Products',
      route: getParseRoute({ pathname: routes['route.catalog.products.index'], locale: lang }),
    },
    {
      title: 'Recurring Profiles',
      route: getParseRoute({ pathname: routes['route.catalog.recurring-profiles.index'], locale: lang }),
    },
    {
      title: 'Filters',
      route: getParseRoute({ pathname: routes['route.catalog.filters.index'], locale: lang }),
    },
    {
      title: 'Attributes',
      route: getParseRoute({ pathname: routes['route.catalog.attributes.index'], locale: lang }),
    },
    {
      title: 'Attribute Groups',
      route: getParseRoute({ pathname: routes['route.catalog.attribute-groups.index'], locale: lang }),
    },
    {
      title: 'Options',
      route: getParseRoute({ pathname: routes['route.catalog.options.index'], locale: lang }),
    },
    {
      title: 'Manufacturers',
      route: getParseRoute({ pathname: routes['route.catalog.manufacturers.index'], locale: lang }),
    },
    {
      title: 'Downloads',
      route: getParseRoute({ pathname: routes['route.catalog.downloads.index'], locale: lang }),
    },
    {
      title: 'Reviews',
      route: getParseRoute({ pathname: routes['route.catalog.reviews.index'], locale: lang }),
    },
    {
      title: 'Information',
      route: getParseRoute({ pathname: routes['route.catalog.information.index'], locale: lang }),
    },
    ],
  }];

  const handleExpandedMenu = () => {
    store.dispatch({ type: HomeActionTypes.SET_EXPANDED_MENU, data: { expandedMenu: !expandedMenu } });
  };
  return (
    <Div className={'z-10 bg-slate-800 min-h-screen pb-10 pt-4 px-4 rounded-tr-xl'}>
      <Div
        className={`flex-col gap-6 transition-all duration-500 ${expandedMenu ? 'w-[280px]' : 'group-hover:w-[280px] w-12'}`}>
        <Div className={'w-full gap-6 items-center justify-between'}>
          <Div className={'gap-2 pl-1'}>
            <Image width={30} height={24} alt={'logo'} src={EaerthlyLogo} />
            <Text className={classNames(
              'transition-all duration-500 w-full',
              expandedMenu ? 'opacity-100' : 'opacity-0 group-hover:opacity-100',
            )} align={'right'} type={'bold'} typography={['md', 'md']} color={'white'}>
              EARTHLY
            </Text>
          </Div>
          <Button size={'small'} color={'danger'} className={classNames(
            'transition-all group-hover:opacity-100 group-hover:duration-700',
            expandedMenu ? 'opacity-100 duration-500' : 'opacity-0 duration-300'
          )} variant={expandedMenu ? 'filled' : 'outlined'} shape={'square'} startAdornment={<LockIcon />} onClick={handleExpandedMenu} />
        </Div>

        <Div className={'flex-col gap-2 w-full'}>
          {menuInfo.length ? menuInfo.map((item: any, index: number) => (
            item.subRoutes && item.subRoutes.length > 0 ? (
              <details
                key={`menu_${index}`}
                // @ts-ignore
                open={expandedMenu ? !!item.subRoutes.find(item => pathname.includes(item.route)) : false}
                className={'flex flex-col w-full transition-all duration-1000 open:transition-all open:duration-1000 select-none [&_span]:open:rotate-180'}>
                <summary
                  className={classNames('!text-control-100 mb-4 !p-2 !pr-4 flex w-full justify-between transition-all duration-1000 open:transition-all open:duration-1000 rounded-sm h-10 md:h-10 items-center',
                    // @ts-ignore
                    item.subRoutes.find(item => pathname.includes(item.route)) && expandedMenu ? 'bg-control-700' : '',
                    item.subRoutes.find(item => pathname.includes(item.route)) ? 'group-hover:bg-control-700' : ''
                  )}>
                  <Div
                    className={'transition-all duration-1000 open:transition-all open:duration-1000 cursor-pointer w-full self-center items-center justify-start gap-4 flex-row'}>
                    {MenuIcons[item.key]}
                    <Text className={`whitespace-nowrap !text-inherit duration-500 transition-all ${expandedMenu ? '' : 'opacity-0 group-hover:opacity-100'}`} type={'bold'} typography={['sm', 'sm']}>
                      {item.title}
                    </Text>
                  </Div>
                  <span className={`flex cursor-pointer rotate-0 transform transition-all duration-500 ${expandedMenu ? '' : 'opacity-0 group-hover:opacity-100'}`}>
                    <ArrowDownIcon />
                  </span>
                </summary>
                {item.subRoutes && item.subRoutes.length ? item.subRoutes.map((subItem, index) => {
                  return (
                    <Div key={`subMenu_${index}`} className={'ml-7'}>
                      <Button
                        variant={'text'}
                        size='small'
                        fontType={'medium'}
                        href={subItem.route}
                        rounded='small'
                        className={classNames(
                          'w-full !justify-end whitespace-nowrap',
                          pathname.includes(subItem.route) && expandedMenu ? '!text-white bg-control-700' : '!text-control-100',
                          pathname.includes(subItem.route) ? 'group-hover:bg-control-700' : '',
                          expandedMenu ? '' : 'hidden group-hover:flex'
                        )}>
                        {subItem.title}
                      </Button>
                    </Div>
                  );
                }) : null}
              </details>
            ) : (
              <Div key={`menu_${index}`} className={'flex-col w-full'}>
                <Button
                  rounded='small'
                  variant={'text'}
                  href={item.route}
                  endAdornment={MenuIcons[item.key]}
                  className={classNames('cursor-pointer w-full self-center items-center !justify-end !gap-4 !p-2 !pr-4 !text-control-100',
                    item.route.startsWith(pathname) && expandedMenu ? 'bg-control-700' : '',
                    item.route.startsWith(pathname) ? 'group-hover:bg-control-700' : '',
                  )}>
                  <Text
                    className={classNames('duration-500 transition-all whitespace-nowrap',
                      expandedMenu ? '!min-w-full' : 'opacity-0 group-hover:opacity-100 !min-w-0 group-hover:!min-w-full'
                    )}
                    align={'start'}
                    type={'bold'}
                    color={'inherit'}
                    typography={['sm', 'sm']}>
                    {item.title}
                  </Text>
                </Button>
              </Div>
            )
          )) : null}
        </Div>
      </Div>
    </Div>
  );
};

export default Menu;
