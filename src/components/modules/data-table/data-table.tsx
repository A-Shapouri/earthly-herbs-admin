'use client';
import React, { Fragment, useEffect, useState } from 'react';
import Div from '@elements/div';
import Text from '@elements/text';
import Button from '@elements/button';
import Checkbox from '@elements/checkbox';
import FormControlLabel from '@elements/form-control-label';
import classNames from '@utils/helpers/class-names';
import Pagination from '../pagination';
import { DataTableProps } from './data-table.props';
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  ColumnDef,
  getExpandedRowModel,
  SortingState,
  getSortedRowModel,
} from '@tanstack/react-table';

import useWindowDimensions from '@hooks/use-window-dimensions';
import ArrowDownIcon from '@icons-components/arrow-down';
import AddIcon from '@icons-components/add-icon';
import SortTableIcon from '@icons-components/sort-table';

const DataTable = (
  {
    header,
    data,
    column,
    mobileColumns,
    expandable = false,
    expandedComponent,
    serverSideSorting,
    isLoading = false,
    getCurrentPage,
    lastPage,
    perPage,
    currentPage,
    total,
    previousPage,
    nextPage,
    getLimit,
    columnOrder = false,
  }: DataTableProps) => {
  const [rowSelection, setRowSelection] = useState({});
  const [sorting, setSorting] = useState<SortingState>([]);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showGoTop, setShowGoTop] = useState(false);
  const [columnVisibility, setColumnVisibility] = useState<any>({});

  const dimensions = useWindowDimensions();

  const columns: ColumnDef<any>[] = [
    {
      id: 'mobileExpander',
      accessorKey: 'mobileExpander',
      header: () => null,
      cell: ({ row }) => {
        return row.getCanSelect() ? (
          <Div className={'relative justify-center items-center text-primary'}>
            <Checkbox
              className={'!p-0 absolute !border-none !bg-transparent z-[9]'}
              size={'tiny'}
              onChange={row.getToggleSelectedHandler()}
              checked={row.getIsSelected()}
            />
            <AddIcon className={classNames('absolute transition-all duration-500', row.getIsSelected() ? 'rotate-[225deg]' : '')} />
          </Div>
        ) : null;
      },
      enableSorting: false,
    },
    ...column,
    {
      id: 'expander',
      accessorKey: 'expander',
      header: () => null,
      cell: ({ row }) => {
        return row.getCanExpand() ? (
          <Button
            className={'!p-0'}
            variant={'text'}
            size={'small'}
            {...{
              onClick: row.getToggleExpandedHandler(),
              style: { cursor: 'pointer' },
            }}
          >
            <ArrowDownIcon className={classNames(
              'transition-all duration-300',
              row.getIsExpanded() ? 'rotate-180' : '')} />
          </Button>
        ) : null;
      },
      enableSorting: false,
    },
  ];
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getRowCanExpand: () => true,
    getExpandedRowModel: getExpandedRowModel(),
    state: {
      columnVisibility,
      rowSelection,
      sorting,
    },
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    manualSorting: !!serverSideSorting,
  });

  useEffect(() => {
    window.addEventListener('scroll', handleVisibleButton);
  });

  useEffect(() => {
    if (serverSideSorting && sorting.length > 0) {
      serverSideSorting(sorting);
    }
  }, [sorting]);

  useEffect(() => {
    const obj: any = {};
    if (dimensions.width < 640) {
      columns.forEach((value) => {
        if (value.id) {
          obj[value.id] = mobileColumns?.includes(value.id);
        }
      });
      setColumnVisibility({ ...obj, mobileExpander: true, expander: expandable });
    } else {
      columns.forEach((value) => {
        if (value.id) {
          obj[value.id] = true;
        }
      });
      setColumnVisibility({ ...obj, mobileExpander: false, expander: expandable });
    }
  }, [dimensions.width]);

  const handleVisibleButton = () => {
    const position = window.scrollY;
    setScrollPosition(position);

    if (scrollPosition > 150) {
      return setShowGoTop(true);
    } else if (scrollPosition < 150) {
      return setShowGoTop(false);
    }
  };

  const handleScrollUp = () => {
    window.scrollTo({ behavior: 'smooth', top: 0 });
  };

  return (
    <Div className={'w-full flex-col'}>
      <Div className={'gap-0 md:gap-4 flex-col md:flex-row'}>
        {columnOrder && table.getAllLeafColumns().map(column => {
          if (column.id === 'mobileExpander' || column.id === 'expander') {
            return null;
          }
          return (
            <FormControlLabel key={column.id} className={'p-2'} label={header[column.id]}>
              <Checkbox checked={column.getIsVisible()} onChange={column.getToggleVisibilityHandler()} />
            </FormControlLabel>
          );
        })}
      </Div>
      <Div className={'bg-white border w-full border-control-300 border-opacity-50 p-2 rounded-xl max-w-full flex-col relative'}>
        <table
          className={'w-full table-auto'}>
          <thead className={'bg-control-50 h-14 sticky top-0 z-[9]'}>
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <th
                    className={'hover:cursor-pointer'}
                    onClick={header.column.getToggleSortingHandler()}
                    key={header.id}>
                    <Div className={'justify-center items-center gap-1'}>
                      {header.column.getCanSort() ? (
                        <Div className={'text-control-800'}>
                          <SortTableIcon direction={header.column.getIsSorted() as string} />
                        </Div>
                      ) : null}
                      <Text color={header.column.getIsSorted() ? 'primary' : 'grey.800'} typography={['sm', 'sm']} type={'bold'}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                      </Text>
                    </Div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => {
              return (
                <Fragment key={row.id}>
                  <tr className={'h-16 hover:bg-primary-50 shadow-md'}>
                    {row.getVisibleCells().map(cell => {
                      return (
                        <td className={'px-1'} key={cell.id}>
                          <Div className={'flex-col items-center'}>
                            {
                              flexRender(
                                cell.column.columnDef.cell,
                                cell.getContext()
                              )
                            }
                          </Div>
                        </td>
                      );
                    })}
                  </tr>
                  {row.getIsExpanded() && (
                    <tr>
                      <td colSpan={row.getVisibleCells().length}>
                        {expandedComponent(row.original)}
                      </td>
                    </tr>
                  )}
                  {row.getIsSelected() && (
                    <tr className={classNames('bg-primary-50')}>
                      <td colSpan={row.getVisibleCells().length}>
                        <Div className={'flex-col'}>
                          {row.getAllCells().map((mobileCell) => {
                            if (mobileCell.column.getIsVisible() || mobileCell.column.id === 'expander') {
                              return null;
                            }
                            return (
                              <Div key={mobileCell.id} className={'gap-2 p-2 items-start'}>
                                {/*@ts-ignore*/}
                                <Text typography={'sm'} type={'bold'}>{header[mobileCell.column.id]}:</Text>
                                {flexRender(
                                  mobileCell.column.columnDef.cell,
                                  mobileCell.getContext()
                                )}
                              </Div>
                            );
                          })}
                        </Div>
                      </td>
                    </tr>
                  )}
                </Fragment>
              );
            })}
          </tbody>
        </table>
        <Button onClick={handleScrollUp} shape={'square'} size={'large'} rounded={'full'} className={classNames('rotate-180 sticky !p-0 bottom-1 self-center duration-500 transition',
          showGoTop ? 'opacity-100 translate-y-0 !h-auto !min-h-12' : 'translate-y-full opacity-0 !h-0 !min-h-[0px]'
        )}>
          <ArrowDownIcon />
        </Button>
        <Div className={'mt-4 bg-control-50 md:h-14 py-2 md:py-0 justify-center items-center rounded-b-xl flex-col'}>
          <Pagination
            color={'primary'}
            variant={'filled'}
            getCurrentPage={getCurrentPage}
            isLoading={isLoading}
            lastPage={lastPage}
            perPage={perPage}
            currentPage={currentPage}
            total={total}
            nextPage={nextPage}
            previousPage={previousPage}
            getLimit={getLimit}
          />
        </Div>
      </Div>
    </Div>
  );
};
export default DataTable;
