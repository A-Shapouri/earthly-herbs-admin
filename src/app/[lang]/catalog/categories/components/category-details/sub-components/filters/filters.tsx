import React from 'react';
import 'react-calendar/dist/Calendar.css';
import Div from '@elements/div';
import MainSection from '@layouts/main-section';
import AutoComplete from '@modules/auto-complete';
import { ColumnDef } from '@tanstack/react-table';
import { Filter, header, columns } from './filter-columns';
import Text from '@elements/text';
import { CategoryFiltersStore } from './store';
import { AnimatePresence, motion } from 'motion/react';
import SimpleDataTable from '@modules/simple-data-table';
import SubSection from '@layouts/sub-section';
import Button from '@elements/button';
import { AddIcon } from '@icons';
import { CatalogFormProps } from '@modules/catalog-form/catalog-form';
import { DescriptionType } from '../descriptions/store';
import { FilterType } from './store';
import { Description } from '../descriptions/descriptions-columns';
import CatalogForm from '@modules/catalog-form';

// const Filters = ({ state, dispatch, categoryData, filterData, loading } : {state: CategoryFiltersStore, dispatch: any, categoryData: Array<any>, filterData: Array<any>, loading: boolean}) => {
//   const [itemIndex, setItemIndex] = React.useState(state.filter.length - 1);
//   const dynamicColumns: ColumnDef<Filter>[] = [
//     {
//       accessorFn: row => row.filterId,
//       header: header.filter,
//       id: 'filter',
//       cell: info =>
//         <Text
//           align='center'
//           color={'grey.700'}
//           typography={['xs', 'xs']}>
//           {info.row.original.filterId ? filterData.find((value) => value.id === info.row.original.filterId).name || '-' : '-'}
//         </Text>,
//     },
//     {
//       accessorFn: row => row.categoryId,
//       header: header.category,
//       id: 'category',
//       cell: info =>
//         <Text
//           align='center'
//           color={'grey.700'}
//           typography={['xs', 'xs']}>
//           {info.row.original.categoryId ? categoryData?.find((value) => value.id === info.row.original.categoryId).name || '-' : '-'}
//         </Text>,
//     },
//   ];
//
//   const checkValidation = () => {
//     return !state.filter[itemIndex].filterId;
//     // !state.filter[itemIndex].categoryId;
//   };
//
//   const handleChangeValue = ({ key, value }: { key: string, value: string }) => {
//     dispatch({
//       type: 'SET_FILTER_VALUE',
//       key: key,
//       value: value,
//       index: itemIndex,
//     });
//   };
//
//   const handleAddNewRow = () => {
//     const validation = checkValidation();
//     if (!validation) {
//       dispatch({ type: 'ADD_NEW_FILTER' });
//       setItemIndex(prevIndex => prevIndex + 1);
//     } else {
//       dispatch({ type: 'CHECK_ERROR', index: itemIndex });
//     }
//   };
//
//   const handleUpdate = (value?: string, info?: object) => {
//     const displayRow = state.filter.findIndex((value) => {
//       return value === info;
//     });
//     if (value === 'editRecord') {
//       setItemIndex(displayRow);
//       dispatch({ type: 'INITIAL_ERROR' });
//     }
//     if (value === 'deleteRecord') {
//       dispatch({ type: 'DELETE_FILTER', key: displayRow });
//       if (displayRow < itemIndex) {
//         setItemIndex(prevIndex => prevIndex - 1);
//       }
//     }
//   };
//   return (
//     <Div className={'flex-col w-full'}>
//       <AnimatePresence mode="wait">
//         <motion.div
//           initial={{ x: -100, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           exit={{ x: 100, opacity: 0 }}
//           transition={{ duration: 0.3 }}
//           className={'w-full'}>
//           <SimpleDataTable
//             emptyLabel={'Add a new filter'}
//             updateData={handleUpdate}
//             data={state.filter.filter((_, index) => index !== itemIndex)}
//             header={header}
//             column={[...dynamicColumns, ...columns ]} />
//         </motion.div>
//       </AnimatePresence>
//       <Div className={'w-full gap-6 grid md:grid-cols-3 md:grid-rows-3 grid-cols-1 mt-4 grid-flow-dense'}>
//         <MainSection priority={2} title='Filters Info' className='md:row-span-1 md:col-span-2'>
//           {/*<AutoComplete*/}
//           {/*  SearchValue={state.filter[itemIndex]?.categoryId ? categoryData.find((value) => value.id === state.filter[itemIndex].categoryId).name : ''}*/}
//           {/*  className='md:col-span-3 z-20'*/}
//           {/*  data={categoryData}*/}
//           {/*  loading={loading}*/}
//           {/*  keyValue={'name'}*/}
//           {/*  id={'id'}*/}
//           {/*  handleSelect={(value: any) => handleChangeValue({ key: 'categoryId', value: value.id })}*/}
//           {/*  getSearchData={() => console.log('search')}*/}
//           {/*  label='Category'*/}
//           {/*  error={state.error.categoryId}*/}
//           {/*  helperText={state.error.categoryId ? 'Category is required!' : undefined}*/}
//           {/*/>*/}
//           <AutoComplete
//             SearchValue={state.filter[itemIndex]?.filterId ? filterData.find((value) => value.id === state.filter[itemIndex].filterId).name : ''}
//             className='md:col-span-3 z-10'
//             data={filterData}
//             loading={loading}
//             keyValue={'name'}
//             id={'id'}
//             handleSelect={(value: any) => handleChangeValue({ key: 'filterId', value: value.id })}
//             getSearchData={() => console.log('search')}
//             label='Filter'
//             error={state.error.filterId}
//             helperText={state.error.filterId ? 'Filter is required!' : undefined}
//           />
//         </MainSection>
//         <SubSection priority={3} className='!py-2 md:col-span-1 !bg-transparent shadow-none !flex justify-start items-start'>
//           <Button
//             color='emerald'
//             startAdornment={<AddIcon />}
//             rounded='small'
//             onClick={handleAddNewRow}
//           >
//             Add New Filter
//           </Button>
//         </SubSection>
//       </Div>
//     </Div>
//   );
// };

const Filters = ({ filterData, loading, moduleForm } : {filterData: Array<any>, loading: boolean, moduleForm: CatalogFormProps<FilterType>}) => {
    const dynamicColumns: ColumnDef<Filter>[] = [
    {
      accessorFn: row => row.filterId,
      header: header.filter,
      id: 'filter',
      cell: info =>
        <Text
          align='center'
          color={'grey.700'}
          typography={['xs', 'xs']}>
          {info.row.original.filterId ? filterData.find((value) => value.id === info.row.original.filterId).name || '-' : '-'}
        </Text>,
    },
  ];

  priority={2} title='Filters Info' className='md:row-span-1 md:col-span-2'
  return (
    <CatalogForm
      loading={loading}
      itemIndex={moduleForm.itemIndex}
      mainLayout={1}
      subLayout={0}
      title="Filter"
      state={moduleForm.state}
      handleChange={moduleForm.handleChange}
      handleAdd={moduleForm.handleAdd}
      handleUpdate={moduleForm.handleUpdate}
      fields={
        {
          main: [
            {
              key: 'languageId',
              label: 'Language',
              type: 'autocomplete',
              errorMessage: 'Category is required',
              options: languageData,
              className: 'md:row-span-1 md:col-span-2',
            },
          ],
        }
      }
      tableColumns={[...dynamicColumns, ...columns]}
      dataList={moduleForm.state.data}
    />
  );
};
export default Filters;
