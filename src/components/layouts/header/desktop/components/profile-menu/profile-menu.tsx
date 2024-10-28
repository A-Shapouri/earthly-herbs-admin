'use client';
import React, { useState } from 'react';
import Button from '@elements/button';
import Div from '@elements/div';
import Divider from '@elements/divider';
import LoadingIndicator from '@elements/loading-indicator';
import Popper from '@elements/popper';
import PopperContent from '@elements/popper/popper-content';
import PopperHandler from '@elements/popper/popper-handler';
import Image from 'next/image';
import { ArrowDownIcon, KeyIcon, LogoutIcon, ProfileIcon, SettingIcon } from '../../../../../../assets/pb-icons';
import { useSelector } from 'react-redux';
import { RootState } from '@store/root-reducer';

const ProfileMenu = () => {
  const { fullName, avatar, showInfoLoading } = useSelector((state: RootState) => state.auth);
  const [showProfilePopper, setShowProfilePopper] = useState(false);

  const popperProfileHandler = (e: boolean) => {
    setShowProfilePopper(!e);
  };

  const logout = async () => {

  };

  return (
    <Popper
      handlePopper={popperProfileHandler}
      showPopper={showProfilePopper}
    >
      <PopperHandler>
        {showInfoLoading ? (
          <LoadingIndicator color={'control'} />
        ) : (
          <Button
            variant={'text'}
            color={'control'}
            className={'whitespace-nowrap !p-0'}
            startAdornment={<Div className={'relative w-[44px] h-[44px]'}>
              <Image src={avatar} width={44} height={44} alt={'profile'} className={'border rounded-full'} />
            </Div>}
            startAdornmentClassName={'!w-12 !max-w-12'}
            endAdornment={<ArrowDownIcon />}>
            {fullName}
          </Button>
        )}
      </PopperHandler>
      <PopperContent className={'start-0 md:end-0 md:start-auto top-0'}>
        <Div className={'w-80 h-auto !flex flex-col gap-y-6 py-5 bg-white items-center z-50 relative border border-control-100 rounded-lg'}>
          <Div className={'flex-col w-full gap-y-4'}>
            <Button
              variant={'text'}
              color={'control'}
              className={'w-full !justify-start'}
              startAdornment={<ProfileIcon />}>
              پروفایل من
            </Button>
            <Button
              variant={'text'}
              color={'control'}
              className={'w-full !justify-start'}
              startAdornment={<KeyIcon />}>
              تغییر کلمه عبور
            </Button>
            <Button
              variant={'text'}
              color={'control'}
              className={'w-full !justify-start'}
              startAdornment={<SettingIcon />}>
              تنظیمات
            </Button>
          </Div>
          <Divider color={'control'} />
          <a className={'w-full'} onClick={() => logout()}>
            <Button
              variant={'text'}
              color={'danger'}
              className={'w-full !justify-start'}
              startAdornment={<LogoutIcon />}>
              خروج
            </Button>
          </a>
        </Div>
      </PopperContent>
    </Popper>
  );
};

export default ProfileMenu;
