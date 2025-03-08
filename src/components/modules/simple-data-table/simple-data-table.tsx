import React, { Fragment, useEffect, useState } from 'react';
import { ColumnDef, flexRender, getCoreRowModel, RowData, useReactTable } from '@tanstack/react-table';
import useWindowDimensions from '@hooks/use-window-dimensions';

import classNames from '@utils/helpers/class-names';
import Button from '@elements/button';
import Checkbox from '@elements/checkbox';
import Div from '@elements/div';
import Skeleton from '@elements/skeleton';
import Text from '@elements/text';
import { AddIcon } from '@icons';
import { SimpleDataTableProps } from './simple-data-table.props';
import EarthlyLogo from '../../../../public/images/earthly-logo.png';
import Image from 'next/image';

declare module '@tanstack/react-table' {
  // eslint-disable-next-line no-unused-vars
  interface TableMeta<TData extends RowData> {
    updateData: (value: string, info?: any) => void
  }
}

const SimpleDataTable = ( { header,
  data,
  column,
  mobileColumns,
  isLoading = false,
  updateData,
  select,
  selectedRows,
} : SimpleDataTableProps) => {
  const [rowSelection, setRowSelection] = useState({});
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
  ];
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    state: {
      columnVisibility,
      rowSelection,
    },
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
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
    const obj: any = {};
    if (dimensions.width < 640) {
      columns.forEach((value) => {
        if (value.id) {
          obj[value.id] = mobileColumns?.includes(value.id);
        }
      });
      setColumnVisibility({ ...obj, mobileExpander: true, select: select });
    } else {
      columns.forEach((value) => {
        if (value.id) {
          obj[value.id] = true;
        }
      });
      setColumnVisibility({ ...obj, mobileExpander: false, select: select });
    }
  }, [dimensions.width]);
  return (
    <Div className={'w-full flex-col relative'}>
      {isLoading && data.length > 0 ? (
        <Div className={'absolute bg-control bg-opacity-25 w-full h-full items-center justify-center z-50 rounded-xl'}>
          <Div className={'w-14 h-14 relative'}>
            <Image fill={true} className={'animate-bounce'} src={EarthlyLogo} alt={'earthly herbs'} />
          </Div>
        </Div>
      ) : null}
      <Div className={'bg-white border w-full p-2 rounded-xl max-w-full flex-col relative rounded-lg shadow-md shadow-slate-500'}>
        <table
          className={'w-full table-auto'}>
          <thead className={'bg-control-50 h-8 sticky top-0 z-10'}>
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <th
                    className={'hover:cursor-pointer'}
                    key={header.id}>
                    <Div className={'justify-center items-center gap-1'}>
                      <Text color={'grey.800'} type={'medium'} typography={['xs', 'xs']}>
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
            <tbody>
              {[...new Array(5)].map((value, index) => (
                <tr key={`loadingItem_${index}`} className={'h-8 '}>
                  {table.getFlatHeaders().map(cell => {
                    return (
                      <td className={'px-1'} key={cell.id}>
                        <Skeleton color={'control'} className={'!max-w-full !min-w-full'}/>
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
                  <Text typography={['sm', 'sm']} type={'bold'}>اطلاعاتی برای نمایش وجود ندارد!</Text>
                </td>
              </tr>
            </tbody>
          ) : (
            <tbody>
              {table.getRowModel().rows.map((row) => {
                return (
                  <Fragment key={row.id}>
                    <tr className={classNames('h-12',
                      row.getIsSelected() && 'bg-slate-200')}>
                      {row.getVisibleCells().map(cell => {
                        return (
                          <td className={'px-1'} key={cell.id}>
                            {isLoading ? (
                              <Skeleton color={'control'} className={'!max-w-full !min-w-full'}/>
                            ) : <Div className={'flex-col items-center'}>
                              {
                                flexRender(
                                  cell.column.columnDef.cell,
                                  cell.getContext()
                                )
                              }
                            </Div>}
                          </td>
                        );
                      })}
                    </tr>
                    {rowExpander.indexOf(row.index) !== -1 && (
                      <tr className={classNames('bg-primary-50')}>
                        <td colSpan={row.getVisibleCells().length}>
                          <Div className={'flex-col'}>
                            {row.getAllCells().map((mobileCell) => {
                              if (mobileCell.column.getIsVisible() || mobileCell.column.id === 'expander') {
                                return null;
                              }
                              return (
                                <Div key={mobileCell.id} className={'gap-2 p-2 items-start'}>
                                  <Text typography={['sm', 'sm']} type={'bold'}>{header[mobileCell.column.id]}:</Text>
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
          )}
        </table>
      </Div>
    </Div>
  );
};

export default SimpleDataTable;
