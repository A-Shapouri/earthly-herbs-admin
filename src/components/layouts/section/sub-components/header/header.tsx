import Button from '@elements/button';
import Div from '@elements/div';
import Divider from '@elements/divider';
import classNames from '@utils/helpers/class-names';
import React from 'react';
import { HeaderProps } from './header.props';

const Header = ({ handleChangeSection, section, menu }: HeaderProps) => {
  return (
    <Div className={'items-start h-fit relative rounded-t-lg'}>
      {menu.map((item, index) => (
        <Button
          key={`menu_${index}`}
          onClick={() => handleChangeSection(item.id)}
          color={section === item.id ? 'slate' : 'control'}
          variant={section === item.id ? 'filled' : 'text'}
          rounded={'none'}
          className={classNames('whitespace-nowrap transition-all !rounded-b-none duration-500 !justify-start px-8',
          )}>
          {item.title}
        </Button>
      ))}
    </Div>
  );
};

export default Header;
