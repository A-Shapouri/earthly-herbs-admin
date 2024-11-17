import Button from '@elements/button';
import Div from '@elements/div';
import classNames from '@utils/helpers/class-names';
import React from 'react';
import { HeaderProps } from './header.props';

const Header = ({ handleChangeSection, section, menu }: HeaderProps) => {
  return (
    <Div className={'items-start gap-2 overflow-x-auto pb-2 sticky top-0'}>
      {menu.map((item, index) => (
        <Button
          key={`menu_${index}`}
          onClick={() => handleChangeSection(item.id)}
          color={section === item.id ? 'slate' : 'control'}
          variant={section === item.id ? 'filled' : 'text'}
          rounded={'small'}
          className={classNames('transition-all duration-500 px-4 min-w-fit scroll-mb-4',
          )}>
          {item.title}
        </Button>
      ))}
    </Div>
  );
};

export default Header;
