import React from 'react';
import Button from '@elements/button';
import Div from '@elements/div';
import { useSelector } from 'react-redux';
import { RootState } from '@store/root-reducer';
import store from '@store/store';
import { HomeActionTypes } from '@store/home/home-actions';
import HamburgerMenuIcon from '@icons-components/ham-menu';

const DesktopHeader = () => {
  const { expandedMenu } = useSelector((state: RootState) => state.home);

  const handleExpandedMenu = () => {
    store.dispatch({ type: HomeActionTypes.SET_EXPANDED_MENU, data: { expandedMenu: !expandedMenu } });
  };

  return (
    <Div className={'items-center px-8 justify-end w-full flex-row-reverse'}>
      <Div className={'items-center gap-8'}>
        {/* <Button
          onClick={handleExpandedMenu}
          variant={'outlined'}
          color={'control'}
          shape={'square'}
          startAdornment={<HamburgerMenuIcon close={expandedMenu} />}
        /> */}
      </Div>
    </Div>
  );
};

export default DesktopHeader;
