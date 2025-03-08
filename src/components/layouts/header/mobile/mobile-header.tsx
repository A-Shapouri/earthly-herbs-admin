import React, { useState } from 'react';
import Button from '@elements/button';
import Div from '@elements/div';
import Text from '@elements/text';
import Drawer from '@elements/drawer';
import LogoImage from '../../../../../public/images/earthly-logo.png';
import LogoImageDesktop from '../../../../../public/images/earthly-logo-desktop.png';
import { useParams } from 'next/navigation';
import ProfileImage from '../../../../../public/images/profile.png';
import HamburgerMenuIcon from '@icons-components/ham-menu';
import { MenuIcons } from '@layouts/menu/menu.data';
import routes from '@routes';
import getParseRoute from '@utils/helpers/parse-route';
import { DictionariesTypes } from '@dictionaries';
import Image from 'next/image';
import AnimatedDetail from './animated-detail';
import Popper from '@elements/popper';
import PopperHandler from '@elements/popper/popper-handler';
import PopperContent from '@elements/popper/popper-content';
import { removeFromCookie } from '@utils/cookie';
import { useRouter } from 'next-nprogress-bar';

const MobileHeader = () => {
  const [drawer, setDrawer] = useState(false);
  const [profilePopper, setProfilePopper] = useState(false);
  const router = useRouter();
  const { lang } = useParams<{ lang: DictionariesTypes }>();

  const menuInfo = [
    {
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
        route: getParseRoute({ pathname: routes['route.catalog.categories.index'], locale: lang }),
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
        title: 'Countries',
        route: getParseRoute({ pathname: routes['route.localisations.countries.index'], locale: lang }),
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
        title: 'Locations',
        route: getParseRoute({ pathname: routes['route.localisations.locations.index'], locale: lang }),
      },
      {
        title: 'Stores',
        route: getParseRoute({ pathname: routes['route.localisations.stores.index'], locale: lang }),
      },
      {
        title: 'Zones',
        route: getParseRoute({ pathname: routes['route.localisations.zones.index'], locale: lang }),
      },
      {
        title: 'Geo Zones',
        route: getParseRoute({ pathname: routes['route.localisations.geoZones.index'], locale: lang }),
      },
      {
        title: 'Length Classes',
        route: getParseRoute({ pathname: routes['route.localisations.lengthClasses.index'], locale: lang }),
      },
      {
        title: 'Length Class Descriptions',
        route: getParseRoute({ pathname: routes['route.localisations.lengthClassDescriptions.index'], locale: lang }),
      },
      {
        title: 'Weight Classes',
        route: getParseRoute({ pathname: routes['route.localisations.weightClasses.index'], locale: lang }),
      },
      {
        title: 'Weight Class Descriptions',
        route: getParseRoute({ pathname: routes['route.localisations.weightClassDescriptions.index'], locale: lang }),
      },
      {
        title: 'Stock Statuses',
        route: getParseRoute({ pathname: routes['route.localisations.stockStatuses.index'], locale: lang }),
      },
      {
        title: 'Tax Classes',
        route: getParseRoute({ pathname: routes['route.localisations.taxClasses.index'], locale: lang }),
      },
      {
        title: 'Tax Rates',
        route: getParseRoute({ pathname: routes['route.localisations.taxRates.index'], locale: lang }),
      },
      {
        title: 'Settings',
        route: getParseRoute({ pathname: routes['route.localisations.settings.index'], locale: lang }),
      },
      {
        title: 'Uploads',
        route: getParseRoute({ pathname: routes['route.localisations.uploads.index'], locale: lang }),
      },
      {
        title: 'Shipping Couriers',
        route: getParseRoute({ pathname: routes['route.localisations.shippingCouriers.index'], locale: lang }),
      },
      {
        title: 'Statistics',
        route: getParseRoute({ pathname: routes['route.localisations.statistics.index'], locale: lang }),
      },
      ],
    }];

  const handleClick = () => {
    setDrawer(false);
  };

  const handleLogOut = () => {
    removeFromCookie('token');
    setProfilePopper(false);
    router.replace(routes['route.auth.login']);
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
        <Popper
          position='bottom-right'
          handlePopper={() => setProfilePopper(!profilePopper)}
          showPopper={profilePopper}>
          <PopperHandler>
            <Button shape={'square'} size={'large'} startAdornment={
              <Div className='rounded-full !min-w-10 !min-h-10'>
                <Image className='rounded-full' src={ProfileImage} alt='Earthly Herbs' />
              </Div>
            }/>
          </PopperHandler>
          <PopperContent>
            <Div className={'py-4 px-2 bg-white w-40 mt-2 shadow'}>
              <Button onClick={handleLogOut} color={'slate'} className={'w-full'} rounded={'small'}>
                Log Out
              </Button>
            </Div>
          </PopperContent>
        </Popper>
      </Div>

      <Drawer className={'!bg-slate-800 !overflow-hidden'} anchor={'start'} open={drawer} onClose={() => setDrawer(false)}>
        <Div className={'flex-col items-start bg-slate-800 w-full h-[inherit] py-5 gap-8 px-4 !overflow-hidden'}>
          <Div className={'relative gap-4'}>
            <Image src={LogoImage} alt='logo' />
            <Text color={'white'} typography={['xl', 'xl']}>Earthly Herbs</Text>
          </Div>
          <Div className={'flex-col gap-2 w-full overflow-y-auto pb-14'}>
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
