import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Div from '@elements/div';
import Text from '@elements/text';
import { MenuIcons } from '../../../menu/menu.data';
import ArrowDownIcon from '@icons-components/arrow-down';
import Button from '@elements/button';
import { usePathname } from 'next/navigation';
import classNames from '@utils/helpers/class-names';

const AnimatedDetail = ({ item, handleClick }: { item: any, handleClick: any }) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  // Toggle the details tag
  const toggleOpen = () => setIsOpen((prev) => !prev);
  return (
    <div className={'flex flex-col w-full transition-all duration-1000 open:transition-all open:duration-1000 select-none'}>
      <div onClick={toggleOpen} className={classNames(
        'flex w-full justify-between list-none transition-all duration-1000 open:transition-all open:duration-1000 h-9 mb-2 items-center px-2',
        item.subRoutes.find(item => pathname.includes(item.route)) ? 'bg-control-700' : '',
      )}>
        <Div className={classNames(
          'transition-all text-white h-9 duration-1000 open:transition-all open:duration-1000 cursor-pointer w-full self-center items-center justify-start gap-4',
          // @ts-ignore

        )}>
          {MenuIcons[item.key]}
          <Text className={'!text-inherit'} type={'bold'} typography={['sm', 'sm']}>
            {item.title}
          </Text>
        </Div>
        <ArrowDownIcon className={'text-control-100'} />
      </div>
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: 'auto',
              opacity: 1,
            }}
            exit={{ height: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            style={{
              overflow: 'hidden',
            }}
          >
            {item.subRoutes && item.subRoutes.length ? item.subRoutes.map((subItem, index) => (
              <Div key={`subMenu_${index}`} className={'mr-7 ml-7 items-end'}>
                <Button
                  onClick={() => handleClick()}
                  variant={'text'}
                  rounded='small'
                  className={classNames(
                    'w-full !justify-end',
                    // @ts-ignore
                    pathname.includes(subItem.route) ? '!text-white bg-control-700' : '!text-control-100')
                  }
                  // @ts-ignore
                  href={subItem.route}
                  prefetch={false}>
                  {subItem.title}
                </Button>
              </Div>
            )) : null}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
};

export default AnimatedDetail;
