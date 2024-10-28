import React, { useState } from 'react';
import classNames from '@utils/helpers/class-names';
import Button from '@elements/button';
import Div from '@elements/div';
import Text from '@elements/text';
import Drawer from '@elements/drawer';
import ArrowDownIcon from '@icons-components/arrow-down';
import LogoImage from '../../../../../public/images/earthly-logo.png';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import HamburgerMenuIcon from '@icons-components/ham-menu';
import ProfileMenu from '@layouts/header/desktop/components/profile-menu';
import { MenuItemProps } from '@layouts/menu/menu-item.props';
import { MenuIcons } from '@layouts/menu/menu.data';
import routes from '@routes';

interface MobileHeaderProps {
  pageTitle?: string
}

const MobileHeader = ({ pageTitle }: MobileHeaderProps) => {
  const pathname = usePathname();
  const [drawer, setDrawer] = useState(false);
  const menuInfo = [];
  const handleClick = () => {
    setDrawer(false);
  };

  return (
    <Div className={'flex-col w-full gap-4 z-10'}>
      <Div className={'justify-between items-center w-full px-4'}>
        <ProfileMenu />
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
      </Div>

      <Drawer className={'!bg-control-800'} anchor={'start'} open={drawer} onClose={() => setDrawer(false)}>
        <Div className={'flex-col items-start bg-control-800 w-full h-[inherit] py-5 gap-8 px-4'}>
          <Div className={'relative w-16 h-16'}>
            <Image src={LogoImage} alt={'پزشک بوک'} />
          </Div>
          <Div className={'flex-col gap-2 w-full'}>
            {menuInfo.length && menuInfo.map((item: MenuItemProps, index: number) => (
              item.subRoutes && item.subRoutes.length > 0 ? (
                <details key={`menu_${index}`} className={'flex flex-col w-full transition-all duration-1000 open:transition-all open:duration-1000 select-none'}>
                  <summary className={'flex w-full justify-between list-none transition-all duration-1000 open:transition-all open:duration-1000 h-10 items-center'}>
                    <Div className={classNames(
                      'transition-all text-white duration-1000 open:transition-all open:duration-1000 cursor-pointer w-full self-center items-center justify-start gap-4',
                      // @ts-ignore
                      item.subRoutes.find(item => routes[item.route] === pathname) ? 'text-tertiary' : 'text-control-100'
                    )}>
                      {MenuIcons[item.key]}
                      <Text className={'!text-inherit'} type={'bold'} typography={['sm', 'sm']}>
                        {item.title}
                      </Text>
                    </Div>
                    <ArrowDownIcon className={'text-control-100'} />
                  </summary>
                  {item.subRoutes && item.subRoutes.length ? item.subRoutes.map((subItem, index) => (
                    <Div key={`subMenu_${index}`} className={'mr-7'}>
                      <Button
                        onClick={() => handleClick()}
                        variant={'text'}
                        className={classNames(
                          // @ts-ignore
                          pathname === routes[subItem.route] ? '!text-tertiary' : '!text-control-100')
                        }
                        // @ts-ignore
                        href={routes[subItem.route]}
                        prefetch={false}>
                        {subItem.title}
                      </Button>
                    </Div>
                  )) : null}
                </details>
              ) : (
                <Div key={`menu_${index}`} className={'flex-col w-full'}>
                  <Button
                    variant={'text'}
                    onClick={() => handleClick()}
                    // @ts-ignore
                    href={routes[item.route]}
                    startAdornment={MenuIcons[item.key]}
                    className={'cursor-pointer w-full self-center items-center !justify-start !gap-4 !px-0 !text-control-100'}>
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
