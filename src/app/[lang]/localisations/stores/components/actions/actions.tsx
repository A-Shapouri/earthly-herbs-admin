'use client';
import React from 'react';
import { ActionsProps } from './actions.props';

import Button from '@elements/button';
import Div from '@elements/div';
import Popper from '@elements/popper';
import PopperContent from '@elements/popper/popper-content';
import PopperHandler from '@elements/popper/popper-handler';
import Media from '@elements/media';

import getParseRoute from '@utils/helpers/parse-route';
import classNames from '@utils/helpers/class-names';

import routes from '@routes';
import { EyeIcon, MoreIcon, BagCrossIcon } from '@icons';

const ActionData = ({ isColumn, data }: {isColumn: boolean, data: any}) => {
  const onDelete = () => {
    data.table.options.meta?.updateData('deleteRecord', data.row.original.id);
  };
  return (
    <Div className={classNames('gap-3', isColumn ? 'flex-col' : 'flex-row')}>
      <Button
        href={getParseRoute({
          pathname: routes['route.localisations.stores.update'],
          query: { id: data.row.original.id },
          locale: 'en',
        })}
        size={'small'}
        variant={'filled'}
        className={'text-nowrap'}
        rounded='small'
        shape='square'
        startAdornment={
          <EyeIcon className={'h-4 w-4'} />}
        color={'success'} />
      <Button
        size={'small'}
        variant={'filled'}
        className={'text-nowrap'}
        rounded='small'
        shape='square'
        onClick={onDelete}
        startAdornment={
          <BagCrossIcon className={'h-4 w-4'} />
        }
        color={'danger'} />
    </Div>
  );
};

const Actions = ({ data } : ActionsProps) => {
  const [popper, setPopper] = React.useState<boolean>(false);

  const handlePoppers = () => {
    setPopper(!popper);
  };

  return (
    <>
      <Media lessThan={'md'}>
        <Popper
          handlePopper={handlePoppers}
          showPopper={popper}
          position={'left'}
          className={'flex-1 shadow-2xl rounded-xl justify-center items-center z-[9]'}
        >
          <PopperHandler>
            <Button
              className={'!p-0 rotate-90'}
              variant={'text'}
              size={'small'}
              color={'slate'}
            >
              <MoreIcon/>
            </Button>
          </PopperHandler>
          <PopperContent>
            <Div className={'gap-2 items-start justify-center bg-white flex-col shadow-xl py-4 px-2 rounded-xl'}>
              <ActionData data={data} isColumn={true} />
            </Div>
          </PopperContent>
        </Popper>
      </Media>
      <Media greaterThan={'sm'}>
        <ActionData data={data} isColumn={false} />
      </Media>
    </>
  );
};

export default Actions;
