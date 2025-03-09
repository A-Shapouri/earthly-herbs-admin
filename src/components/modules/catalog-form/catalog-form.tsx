import React from 'react';
import Div from '@elements/div';
import AutoComplete from '@modules/auto-complete';
import MainSection from '@layouts/main-section';
import TextField from '@elements/text-field';
import SubSection from '@layouts/sub-section';
import Select from '@elements/select';
import Button from '@elements/button';
import { AddIcon } from '@icons';
import SimpleDataTable from '@modules/simple-data-table';
import { AnimatePresence, motion } from 'motion/react';

type FieldConfig = {
  key: string;
  label: string;
  type: 'text' | 'select' | 'autocomplete' | 'number' | 'textarea';
  options?: { id: string; title: string, name?: string }[];
  dataKey?: string;
  errorMessage?: string;
  className?: string;
};

export type CatalogFormProps<T> = {
  title: string;
  state: { data: T[]; error: Record<string, boolean> };
  handleChange: (key: string, value: any) => void;
  handleAdd: () => void;
  handleUpdate: (actionType: string, index: number) => void;
  fields: {
    main: FieldConfig[],
    secondaryMain?: FieldConfig[],
    sub: FieldConfig[]
  };
  tableColumns: any[];
  dataList: any[];
  loading?: boolean;
  mainLayout: number;
  subLayout: number;
  itemIndex: number
};

const CatalogForm = <T, >({
  title,
  state,
  handleChange,
  handleAdd,
  handleUpdate,
  fields,
  tableColumns,
  dataList,
  loading,
  mainLayout,
  subLayout,
  itemIndex,
}: CatalogFormProps<T>) => {
  return (
    <Div className="flex-col w-full">
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="w-full">
          <SimpleDataTable
            mobileColumns={['name', 'description', 'operations']}
            emptyLabel={`Add a new ${title}`}
            updateData={(value, info) => handleUpdate(value, dataList.indexOf(info))}
            data={state.data.filter((_, index) => index !== itemIndex)}
            header={{ name: title }}
            column={tableColumns}
          />
        </motion.div>
      </AnimatePresence>

      <Div className="w-full gap-6 grid md:grid-cols-3 grid-cols-1 mt-4 relative">
        {mainLayout >= 1 && (
          <MainSection priority={3} title={`${title} Info`} className="md:col-span-2">
            {fields.main.map((field) => {
              if (field.type === 'autocomplete') {
                console.log(field.key, state.data[itemIndex]);
                return (
                  <AutoComplete
                    key={field.key}
                    SearchValue={state.data[itemIndex]?.[field.key] ? field.options.find((value) => value.id === state.data[itemIndex]?.[field.key]).name || '' : ''}
                    className={field.className}
                    data={field.options}
                    loading={loading}
                    handleSelect={(value: any) => handleChange(field.key, value.id)}
                    label={field.label}
                    error={state.error[field.key]}
                    helperText={state.error[field.key] ? field.errorMessage : undefined} getSearchData={undefined}
                    keyValue={'name'}
                    id={'id'}
                  />
                );
              }
              if (field.type === 'select') {
                return (
                  <Select
                    key={field.key}
                    rounded="small"
                    value={state.data[itemIndex]?.[field.key]}
                    size="small"
                    className={field.className}
                    disabled={loading}
                    label={field.label}
                    optionsList={field.options}
                    onChange={(value) => handleChange(field.key, value)}
                    id={'id'}
                    text={'title'}
                  />
                );
              }
              return (
                <TextField
                  key={field.key}
                  size="small"
                  rounded="small"
                  multiline={field.type === 'textarea'}
                  inputClassName={field.type === 'textarea' ? 'min-h-24' : ''}
                  value={state.data[itemIndex]?.[field.key]}
                  onChange={(e) => handleChange(field.key, e.target.value)}
                  className={field.className}
                  label={field.label}
                  error={state.error[field.key]}
                  helperText={state.error[field.key] ? field.errorMessage : undefined}
                />
              );
            })}
          </MainSection>
        )}
        {subLayout >= 1 && (
          <SubSection priority={2} className='md:col-span-1 md:h-fit' title={`Meta Info`}>
            {fields.sub.map((field) => {
              if (field.type === 'autocomplete') {
                return (
                  <AutoComplete
                    key={field.key}
                    SearchValue={state.data[itemIndex]?.[field.key] ? field.options.find((value) => value.id === state.data[itemIndex]?.[field.key]).name || '' : ''}
                    className={field.className}
                    data={field.options}
                    loading={loading}
                    handleSelect={(value: any) => handleChange(field.key, value.id)}
                    label={field.label}
                    error={state.error[field.key]}
                    helperText={state.error[field.key] ? field.errorMessage : undefined} getSearchData={undefined}
                    keyValue={'name'}
                    id={'id'}
                  />
                );
              }
              if (field.type === 'select') {
                return (
                  <Select
                    key={field.key}
                    rounded="small"
                    value={state.data[itemIndex]?.[field.key]}
                    size="small"
                    className={field.className}
                    disabled={loading}
                    label={field.label}
                    optionsList={field.options}
                    onChange={(value) => handleChange(field.key, value)}
                    id={'id'}
                    text={'title'}
                  />
                );
              }
              return (
                <TextField
                  key={field.key}
                  size="small"
                  rounded="small"
                  multiline={field.type === 'textarea'}
                  inputClassName={field.type === 'textarea' ? 'min-h-24' : ''}
                  value={state.data[itemIndex]?.[field.key]}
                  onChange={(e) => handleChange(field.key, e.target.value)}
                  className={field.className}
                  label={field.label}
                  error={state.error[field.key]}
                  helperText={state.error[field.key] ? field.errorMessage : undefined}
                />
              );
            })}
          </SubSection>
        )}
        {mainLayout >= 2 && (
          <MainSection priority={4} title={`${title} Info`} className="md:col-span-2">
            {fields.secondaryMain.map((field) => {
              if (field.type === 'autocomplete') {
                return (
                  <AutoComplete
                    key={field.key}
                    SearchValue={state.data[itemIndex]?.[field.key] ? field.options.find((value) => value.id === state.data[itemIndex]?.[field.key]).name || '' : ''}
                    className={field.className}
                    data={field.options}
                    loading={loading}
                    handleSelect={(value: any) => handleChange(field.key, value.id)}
                    label={field.label}
                    error={state.error[field.key]}
                    helperText={state.error[field.key] ? field.errorMessage : undefined} getSearchData={undefined}
                    keyValue={'name'}
                    id={'id'}
                  />
                );
              }
              if (field.type === 'select') {
                return (
                  <Select
                    key={field.key}
                    rounded="small"
                    value={state.data[itemIndex]?.[field.key]}
                    size="small"
                    className={field.className}
                    disabled={loading}
                    label={field.label}
                    optionsList={field.options}
                    onChange={(value) => handleChange(field.key, value)}
                    id={'id'}
                    text={'title'}
                  />
                );
              }
              return (
                <TextField
                  key={field.key}
                  size="small"
                  rounded="small"
                  multiline={field.type === 'textarea'}
                  inputClassName={field.type === 'textarea' ? 'min-h-24' : ''}
                  value={state.data[itemIndex]?.[field.key]}
                  onChange={(e) => handleChange(field.key, e.target.value)}
                  className={field.className}
                  label={field.label}
                  error={state.error[field.key]}
                  helperText={state.error[field.key] ? field.errorMessage : undefined}
                />
              );
            })}
          </MainSection>
        )}
        <SubSection priority={5} className='!py-2 md:col-span-1 !bg-transparent shadow-none !flex justify-start items-start'>
          <Button color="emerald" startAdornment={<AddIcon />} rounded="small" onClick={handleAdd}>
            Add New {title}
          </Button>
        </SubSection>
      </Div>
    </Div>
  );
};

export default CatalogForm;
