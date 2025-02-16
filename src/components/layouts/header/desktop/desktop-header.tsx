import React, { useState } from 'react';
import Div from '@elements/div';
import Popper from '@elements/popper';
import PopperHandler from '@elements/popper/popper-handler';
import Button from '@elements/button';
import Image from 'next/image';
import ProfileImage from '../../../../../public/images/profile.png';
import PopperContent from '@elements/popper/popper-content';
import { removeFromCookie } from '@utils/cookie';
import routes from '@routes';
import { useRouter } from 'next-nprogress-bar';

const DesktopHeader = () => {
  const [profilePopper, setProfilePopper] = useState(false);
  const router = useRouter();

  const handleLogOut = () => {
    removeFromCookie('token');
    setProfilePopper(false);
    router.replace(routes['route.auth.login']);
  };
  return (
    <Div className={'items-center px-8 justify-start w-full flex-row-reverse'}>
      <Div className={'items-center gap-8'}>
        <Popper
          position='bottom-right'
          handlePopper={() => setProfilePopper(!profilePopper)}
          showPopper={profilePopper}>
          <PopperHandler>
            <Button variant={'text'} shape={'square'} size={'large'} startAdornment={
              <Div className='rounded-full !min-w-10 !min-h-10'>
                <Image className='rounded-full' src={ProfileImage} alt='Earthly Herbs' />
              </Div>
            }/>
          </PopperHandler>
          <PopperContent>
            <Div className={'py-4 px-2 bg-white w-40 mt-2 shadow'}>
              <Button size={'small'} onClick={handleLogOut} color={'slate'} className={'w-full'} rounded={'small'}>
                Log Out
              </Button>
            </Div>
          </PopperContent>
        </Popper>
      </Div>
    </Div>
  );
};

export default DesktopHeader;
