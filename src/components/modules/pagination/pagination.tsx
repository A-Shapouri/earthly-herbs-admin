import React, { useEffect, useState } from 'react';
import Button from '@elements/button';
import Div from '@elements/div';
import Text from '@elements/text';
import Select from '@elements/select';
import ArrowRightIcon from '@icons-components/arrow-right';
import { PaginationProps } from './pagination.props';
import usePagination from './use-pagination';

const Limits = [
  {
    id: '10',
    count: 10,
  },
  {
    id: '25',
    count: 25,
  },
  {
    id: '50',
    count: 50,
  },
  {
    id: '75',
    count: 75,
  },
  {
    id: '100',
    count: 100,
  },
];
export const Pagination = ({ isLoading, currentPage = 1, lastPage, getCurrentPage, previousPage, nextPage, perPage = 10, total = 0, getLimit, hasLimit = true, showTotal = true, color = 'primary', variant = 'filled', rounded = 'medium', type = 'default' }: PaginationProps) => {
  const pageNumbers = usePagination(currentPage, lastPage, type);
  const [limit, setLimit] = useState(perPage.toString());

  useEffect(() => {
    const position = Limits.find((value) => {
      return perPage <= value.count;
    });
    setLimit(prevState => position?.id ? position?.id : prevState);
  }, [perPage]);

  const limitHandler = (event: string) => {
    setLimit(event);
    if (getLimit && hasLimit) {
      getLimit(event);
    }
  };

  return (
    <Div className={'flex-col-reverse sm:flex-row w-full justify-between items-center gap-y-2 px-4'}>
      <Div className={'flex justify-start items-center'}>
        <Div className={'items-center gap-6 justify-start md:absolute'}>
          {showTotal ? (
            <Text color={'grey.500'} className={'text-ellipsis whitespace-nowrap'}>
              {`show ${(currentPage - 1) * parseInt(limit) + 1} to ${lastPage === currentPage ? total : parseInt(limit) * currentPage} from ${total}`}
            </Text>
          ) : null}
          {hasLimit ? (
            <Div className={'w-20'}>
              <Select
                disabled={isLoading}
                id={'id'}
                size={'small'}
                value={limit}
                onChange={limitHandler}
                text={'count'}
                optionsList={Limits}
                variant={'outlined'}
                color={'primary'}
              />
            </Div>
          ) : null}
        </Div>
      </Div>
      <ul dir={'rtl'} className={'flex flex-row gap-x-0.5 md:gap-x-2 items-center md:justify-start justify-center'}>
        <li>
          <Button
            disabled={currentPage === 1 || isLoading}
            variant={variant}
            shape={'square'}
            size={'small'}
            onClick={previousPage}
            ariaLabel={'previousPage'}
            loading={isLoading}
            color={color}
            rounded={rounded}
            className={'!px-0'}>
            <ArrowRightIcon />
          </Button>
        </li>
        {type === 'default' ? pageNumbers.map((number) => {
          return (
            <li key={`pagination_${number}`}>
              <Button
                disabled={number === currentPage || number === '...' || isLoading}
                variant={variant}
                shape={'square'}
                rounded={rounded}
                size={'small'}
                color={color}
                className={'!px-0'}
                ariaLabel={number.toString()}
                onClick={() => getCurrentPage(+number)}>
                {number}
              </Button>
            </li>
          );
        }) : null}
        <li>
          <Button
            disabled={lastPage === currentPage || isLoading}
            variant={variant}
            shape={'square'}
            size={'small'}
            rounded={rounded}
            onClick={nextPage}
            ariaLabel={'nextPage'}
            loading={isLoading}
            color={color}
            className={'!px-0 rotate-180'}>
            <ArrowRightIcon />
          </Button>
        </li>
        {type === 'simple' ? (
          <Div className={'gap-2'}>
            <Text typography={['sm', 'sm']}>{currentPage} / {lastPage}</Text>
            <Text typography={['sm', 'sm']}>Page</Text>
          </Div>
        ) : null}
      </ul>
    </Div>
  );
};

export default Pagination;
