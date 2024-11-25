import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Div from '@elements/div';
import Text from '@elements/text';
import { MenuIcons } from '../menu.data';
import ArrowDownIcon from '@icons-components/arrow-down';
import Button from '@elements/button';
import { usePathname } from 'next/navigation';
import classNames from '@utils/helpers/class-names';

const AnimatedDetail = ({ item, expandedMenu }: { item: any, expandedMenu?: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  // Toggle the details tag
  const toggleOpen = () => setIsOpen((prev) => !prev);
  return (
    <div
      className={'flex flex-col w-full transition-all duration-1000 open:transition-all open:duration-1000 select-none [&_span]:open:rotate-180'}>
      <div
        onClick={toggleOpen}
        className={classNames('!text-control-100 !p-2 mb-1 !pr-4 flex w-full justify-between transition-all duration-1000 open:transition-all open:duration-1000 rounded-md h-10 md:h-10 items-center',
          // @ts-ignore
          item.subRoutes.find(item => pathname.includes(item.route)) && expandedMenu ? 'bg-control-700' : '',
          item.subRoutes.find(item => pathname.includes(item.route)) ? 'group-hover:bg-control-700' : ''
        )}>
        <Div
          className={'transition-all duration-1000 open:transition-all open:duration-1000 cursor-pointer w-full self-center items-center justify-start gap-4 flex-row'}>
          {MenuIcons[item.key]}
          <Text className={`whitespace-nowrap !text-inherit duration-500 transition-all ${expandedMenu ? '' : 'opacity-0 group-hover:opacity-100'}`} type={'bold'} typography={['sm', 'sm']}>
            {item.title}
          </Text>
        </Div>
        <span className={`flex cursor-pointer rotate-0 transform transition-all duration-500 ${expandedMenu ? '' : 'opacity-0 group-hover:opacity-100'}`}>
          <ArrowDownIcon />
        </span>
      </div >
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
            {item.subRoutes && item.subRoutes.length ? item.subRoutes.map((subItem, index) => {
              return (
                <Div key={`subMenu_${index}`} className={'ml-7 rounded-md mr-2 *:hover:text-white transition-all duration-300'}>
                  <Button
                    variant={'text'}
                    size='small'
                    fontType={'medium'}
                    href={subItem.route}
                    rounded='medium'
                    className={classNames(
                      'w-full !justify-end whitespace-nowrap mb-1 hover:translate-x-3 hover:bg-teal-800 transition-all duration-300',
                      pathname.includes(subItem.route) && expandedMenu ? '!text-white bg-control-700' : '!text-control-100',
                      pathname.includes(subItem.route) ? 'group-hover:bg-control-700' : '',
                      expandedMenu ? '' : 'hidden group-hover:flex'
                    )}>
                    {subItem.title}
                  </Button>
                </Div>
              );
            }) : null}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
};

export default AnimatedDetail;
