import React from 'react';
import { ListItemProps } from './list-item.props';
import classNames from '@utils/helpers/class-names';
import { BULLET_COLOR, BULLET_SHAPE, DIVIDER_COLOR } from './list-item.style';
import Text from '../text';

export const ListItem = (props: ListItemProps) => {
  const { children, dividerColor = 'primary', bulletColor = 'primary', divider = false, onClick, disablePadding = false, className, hasBullet = false, bulletShape = 'circle', ...rest } = props;

  return (
    <Text
      align={'start'}
      variant={'li'}
      className={classNames(
        'w-full flex items-baseline justify-start gap-1 direction-inherit',
        hasBullet ? `${BULLET_COLOR[bulletColor]} ${BULLET_SHAPE[bulletShape]} before:min-w-2 before:sm:min-w-2.5 before:md:min-w-3 before:w-2 sm:before:w-2.5 md:before:w-3 before:min-h-2 sm:before:min-h-2.5 md:min-before:h-3 before:h-2 sm:before:h-2.5 md:before:h-3` : '',
        divider ? `${DIVIDER_COLOR[dividerColor]} border-b` : 'border-none',
        disablePadding ? 'p-0' : 'px-4 py-2',
        className,
      )}
      onClick={onClick}
      {...rest}>
      {children}
    </Text>
  );
};

export default ListItem;

