import React, { useState } from 'react';
import Button from '@elements/button';
import Div from '@elements/div';
import Text from '@elements/text';
import Drawer from '@elements/drawer';
import LogoImage from '../../../../../public/images/earthly-logo.png';
import LogoImageDesktop from '../../../../../public/images/earthly-logo-desktop.png';
import { usePathname, useParams } from 'next/navigation';
import ProfileImage from '../../../../../public/images/profile.png';
import HamburgerMenuIcon from '@icons-components/ham-menu';
import { MenuIcons } from '@layouts/menu/menu.data';
import routes from '@routes';
import getParseRoute from '@utils/helpers/parse-route';
import { DictionariesTypes } from '@dictionaries';
import Image from 'next/image'
import AnimatedDetail from './animated-detail'

const MobileHeader = () => {
  const pathname = usePathname();
  const [drawer, setDrawer] = useState(false);
  const { lang } = useParams<{ lang: DictionariesTypes }>();

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
  }, {
    title: 'Localisation',
    key: 'Settings',
    route: '/en/',
    subRoutes: [{
      title: 'Store Location',
      route: getParseRoute({ pathname: routes['route.localisations.store-location.index'], locale: lang }),
    },
    {
      title: 'Languages',
      route: getParseRoute({ pathname: routes['route.localisations.languages.index'], locale: lang }),
    },
    {
      title: 'Currencies',
      route: getParseRoute({ pathname: routes['route.localisations.currencies.index'], locale: lang }),
    },
    {
      title: 'Zones',
      route: getParseRoute({ pathname: routes['route.localisations.zones.index'], locale: lang }),
    },
    {
      title: 'Geo Zones',
      route: getParseRoute({ pathname: routes['route.localisations.geo-zones.index'], locale: lang }),
    },
    {
      title: 'Length Classes',
      route: getParseRoute({ pathname: routes['route.localisations.length-classes.index'], locale: lang }),
    },
    {
      title: 'Weight Classes',
      route: getParseRoute({ pathname: routes['route.localisations.weight-classes.index'], locale: lang }),
    },
    ],
  }];

  const handleClick = () => {
    setDrawer(false);
  };

  return (
    <Div className={'flex-col w-full gap-4 z-40'}>
      <Div className={'justify-between items-center w-full px-4 gap-6'}>
        <Button
          className={'!px-0 !justify-end'}
          size={'large'}
          shape={'square'}
          variant={'text'}
          color={'control'}
          onClick={() => setDrawer(true)}
        >
          <HamburgerMenuIcon className={'w-6 h-6'} close={drawer} />
        </Button>
        <Div className=''>
          <Image src={LogoImageDesktop} alt='Earthly Herbs' />
        </Div>
        <Div className='rounded-full !min-w-10 !min-h-10'>
          <Image className='rounded-full' src={ProfileImage} alt='Earthly Herbs' />
        </Div>
      </Div>

      <Drawer className={'!bg-slate-800 !overflow-hidden'} anchor={'start'} open={drawer} onClose={() => setDrawer(false)}>
        <Div className={'flex-col items-start bg-slate-800 w-full h-[inherit] py-5 gap-8 px-4 !overflow-hidden'}>
          <Div className={'relative gap-4'}>
            <Image src={LogoImage} alt='logo' />
            <Text color={'white'} typography={['xl', 'xl']}>Earthly Herbs</Text>
          </Div>
          <Div className={'flex-col gap-2 w-full'}>
            {menuInfo.length && menuInfo.map((item: any, index: number) => (
              item.subRoutes && item.subRoutes.length > 0 ? (
                <AnimatedDetail item={item} key={`menu_${index}`} handleClick={handleClick} />
              ) : (
                <Div key={`menu_${index}`} className={'flex-col w-full px-2'}>
                  <Button
                    variant={'text'}
                    onClick={() => handleClick()}
                    // @ts-ignore
                    href={item.route}
                    endAdornment={MenuIcons[item.key]}
                    className={'cursor-pointer w-full self-center items-center !justify-end !gap-4 !px-0 py-1 !text-control-100'}>
                    {item.title}
                  </Button>
                </Div>
              )
            ))}
          </Div>
        </Div>
      </Drawer>
    </Div>
  );
};

export default MobileHeader;
