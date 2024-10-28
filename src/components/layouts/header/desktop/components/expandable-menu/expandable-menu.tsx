import React, { useState } from 'react';
import Button from '@elements/button';
import classNames from '@utils/helpers/class-names';
import Div from '@elements/div';
import Popper from '@elements/popper';
import PopperContent from '@elements/popper/popper-content';
import PopperHandler from '@elements/popper/popper-handler';
import { OrderMenuIcon } from '../../../../../../assets/pb-icons';

const ExpandableMenu = ({ children, menuItems, className }: any) => {
  const [showPopper, setShowPopper] = useState(false);

  if (menuItems && menuItems.length > 0) {
    return (
      <Popper
        handlePopper={(e: boolean) => setShowPopper(!e)}
        showPopper={showPopper}
        className={classNames('w-full', className)}
      >
        <PopperHandler>
          {children}
        </PopperHandler>
        <PopperContent className={'right-0 top-0 -translate-x-full !translate-y-0'}>
          <Div className={'w-80 h-auto !flex flex-col gap-y-4 py-5 bg-white items-center z-50 relative border border-control-100 rounded-lg'}>
            {menuItems.map((menuItem: any, index: number) => (
              <Button
                key={`menu_item_${index}`}
                variant={'text'}
                color={'control'}
                className={'w-full !justify-start'}
                startAdornment={menuItem.icon || <OrderMenuIcon />}>
                {menuItem.title}
              </Button>
            ))}
          </Div>
        </PopperContent>
      </Popper>
    );
  }

  return children;
};

export default ExpandableMenu;
