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
import { AnimatePresence, motion } from 'motion/react';
import EarthlyLogo from '../../../../public/images/earthly-logo.png';
import Image from 'next/image';
import Skeleton from '@elements/skeleton';
import NoDataImage from '@images-components/no-data';

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
    updateData,
    select,
    selectedRows,
  }: DataTableProps) => {
  const [rowSelection, setRowSelection] = useState({});
  const [sorting, setSorting] = useState<SortingState>([]);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showGoTop, setShowGoTop] = useState(false);
  const [columnVisibility, setColumnVisibility] = useState<any>({});
  const [rowExpander, setRowExpander] = useState<Array<any>>([]);

  const dimensions = useWindowDimensions();

  const handleMobileExpander = (row: { index: number }) => {
    if (rowExpander.indexOf(row.index) === -1) {
      setRowExpander([...rowExpander, row.index]);
    } else {
      setRowExpander(value => value.filter(item => item !== row.index));
    }
  };

  const columns: ColumnDef<any>[] = [
    {
      id: 'mobileExpander',
      accessorKey: 'mobileExpander',
      header: () => null,
      cell: ({ row }) => {
        return (
          <Button
            onClick={() => handleMobileExpander(row)}
            startAdornment={
              <AddIcon
                className={classNames(
                  'absolute transition-all duration-500',
                  rowExpander.indexOf(row.index) !== -1 ? 'rotate-[225deg]' : ''
                )}
              />
            }
            variant={'text'}
            color={'slate'}
            size={'small'}
            className={'!p-0'}
          />
        );
      },
      enableSorting: false,
    },
    {
      id: 'select',
      accessorKey: 'select',
      header: ({ table }) => {
        return select ? (
          <Checkbox
            size={'small'}
            checked={table.getIsAllRowsSelected()}
            onChange={table.getToggleAllRowsSelectedHandler()}
          />
        ) : null;
      },
      cell: ({ row }) => {
        return row.getCanSelect() && select ? (
          <Checkbox
            size={'small'}
            onChange={row.getToggleSelectedHandler()}
            checked={row.getIsSelected()}
          />
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
              row.getIsExpanded() ? 'rotate-180' : '')}/>
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
    meta: {
      updateData: (value, info) => {
        if (updateData) {
          updateData(value, info);
        }
      },
    },
  });

  useEffect(() => {
    if (selectedRows) {
      selectedRows(table.getSelectedRowModel().rows.map((row) => {
        return row.original;
      }));
    }
  }, [rowSelection]);

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
    <Div className={'w-full flex-col shadow-[0_0.1875rem_0.75rem_0_rgba(47,43,61,.14)] rounded-lg relative'}>
      {isLoading && data.length > 0 ? (
        <Div className={'absolute bg-control bg-opacity-25 w-full h-full items-center justify-center z-50 rounded-xl'}>
          <Div className={'w-14 h-14 relative'}>
            <Image fill={true} className={'animate-bounce'} src={EarthlyLogo} alt={'earthly herbs'}/>
          </Div>
        </Div>
      ) : null}
      <Div className={'gap-0 md:gap-4 flex-col md:flex-row'}>
        {columnOrder && table.getAllLeafColumns().map(column => {
          if (column.id === 'mobileExpander' || column.id === 'expander') {
            return null;
          }
          return (
            <FormControlLabel key={column.id} className={'p-2'} label={header[column.id]}>
              <Checkbox checked={column.getIsVisible()} onChange={column.getToggleVisibilityHandler()}/>
            </FormControlLabel>
          );
        })}
      </Div>
      <Div className={'bg-white md:border w-full border-control-300 border-opacity-50 p-2 rounded-xl max-w-full flex-col relative'}>
        <table
          className={'w-full rounded-xl table-auto'}>
          <thead className={'bg-control-50 h-14 sticky top-0 z-[9] rounded-t-lg'}>
            {table.getHeaderGroups().map(headerGroup => (
              <tr className='rounded-t-xl' key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <th
                    className={'hover:cursor-pointer hover:-translate-y-2 transition-all duration-300'}
                    onClick={header.column.getToggleSortingHandler()}
                    key={header.id}>
                    <Div className={'justify-center items-center'}>
                      {header.column.getCanSort() ? (
                        <Div className={'text-control-800'}>
                          <SortTableIcon direction={header.column.getIsSorted() as string}/>
                        </Div>
                      ) : null}
                      <Text type={'medium'} color={header.column.getIsSorted() ? 'slate' : 'grey.800'} typography={['sm', 'sm']}>
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
          {isLoading && !data.length ? (
            <tbody className={'w-full'}>
              {[...new Array(5)].map((value, index) => (
                <tr key={`loadingItem_${index}`} className={'h-16 h-full'}>
                  {table.getFlatHeaders().map(cell => {
                    return (
                      <td className={'px-1'} key={cell.id}>
                        <Skeleton color={'control'} className={'!max-w-full !min-w-full my-1'}/>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          ) : !isLoading && !data.length ? (
            <tbody>
              <tr className={'h-48'}>
                <td colSpan={table.getFlatHeaders().length}>
                  <Div className={'flex-col w-full items-center justify-center gap-4 py-4'}>
                    <NoDataImage />
                    <Text align={'center'} color={'grey.600'} typography={['xl', 'xl']} type={'bold'}>No Data</Text>
                    <Text align={'center'} color={'grey.600'} typography={['base', 'base']} type={'normal'}>There is no data to show you right now!</Text>
                  </Div>
                </td>
              </tr>
            </tbody>
          ) : (
            <tbody>
              {table.getRowModel().rows.map((row, index) => {
                return (
                  <Fragment key={row.id}>
                    <AnimatePresence mode="wait">
                      <motion.tr
                        key={row ? row.id : 'empty'}
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -100, opacity: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className={classNames('h-16 hover:bg-slate-100 hover:shadow-2xl group',
                          row.getIsSelected() && 'bg-slate-200')}>
                        {row.getVisibleCells().map(cell => {
                          return (
                            <td className={'px-1'} key={cell.id}>
                              <Div className={'flex-col items-center w-full *:transition-all *:duration-300 *:group-hover:scale-110 *:group-hover:-translate-y-1 text-center'}>
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
                      </motion.tr>
                    </AnimatePresence>
                    <AnimatePresence>
                      {row.getIsExpanded() && (
                        <motion.tr
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.5, ease: 'easeInOut' }}
                        >
                          <td colSpan={row.getVisibleCells().length}>
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: row.getIsExpanded() ? 'auto' : 0, opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.5, ease: 'easeInOut' }}
                              className={'flex flex-col overflow-hidden'}>
                              {expandedComponent(row.original)}
                            </motion.div>
                          </td>
                        </motion.tr>
                      )}
                    </AnimatePresence>
                    <AnimatePresence>
                      {rowExpander.indexOf(row.index) !== -1 && (
                        <motion.tr
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.5, ease: 'easeInOut' }}
                          className={classNames('bg-slate-50')}>
                          <td colSpan={row.getVisibleCells().length}>
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: row.getVisibleCells().length ? 'auto' : 0, opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.5, ease: 'easeInOut' }}
                              className={'flex flex-col overflow-hidden px-4 gap-4'}>
                              {row.getAllCells().map((mobileCell, mobileIndex) => {
                                if (!mobileCell.column.getIsVisible() && mobileCell.column.id !== 'expander' && header[mobileCell.column.id]) {
                                  return (
                                    <Div
                                      key={mobileCell.id}
                                      className={'gap-2 p-2 items-center w-full justify-between !text-center'}>
                                      {/*@ts-ignore*/}
                                      <Text typography={['sm', 'sm']} type={'normal'}>{header[mobileCell.column.id]}:</Text>
                                      {flexRender(
                                        mobileCell.column.columnDef.cell,
                                        mobileCell.getContext()
                                      )}
                                    </Div>
                                  );
                                }
                                return null;
                              })}
                            </motion.div>
                          </td>
                        </motion.tr>
                      )}
                    </AnimatePresence>
                  </Fragment>
                );
              })}
            </tbody>
          )}
        </table>
        <Button onClick={handleScrollUp} shape={'square'} color={'slate'} rounded={'full'} className={classNames('rotate-180 sticky !p-0 bottom-1 self-center duration-500 transition',
          showGoTop ? 'opacity-100 translate-y-0 !h-auto' : 'translate-y-full opacity-0 !h-0 !min-h-[0px]'
        )}>
          <ArrowDownIcon/>
        </Button>
        <Div className={'bg-control-50 md:h-14 py-2 md:py-4 justify-center items-center rounded-b-xl flex-col'}>
          <Pagination
            color={'slate'}
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

