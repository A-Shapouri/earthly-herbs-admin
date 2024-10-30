'use client';
import React, { useReducer, KeyboardEvent, ChangeEvent, useEffect } from 'react';
import { AddIcon } from '../../../../../../assets/pb-icons';
import { initialState, reducer } from './store';
import Button from '@elements/button';
import Div from '@elements/div';
import Divider from '@elements/divider';
import Select from '@elements/select';
import Text from '@elements/text';
import TextField from '@elements/text-field';
import FormControlLabel from '@elements/form-control-label';
import Checkbox from '@elements/checkbox';
import pressEnterKey from '@utils/helpers/press-enter-key';
import Chip from '@elements/chip';
const CategoryDetails = ({ name }: { name?: string }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChangeValue = ({ id, value }: { id: string, value: any }) => {
    dispatch({
      type: 'SET_VALUE',
      id: id,
      value: value,
    });
  };

  const addSimilarName = () => {
    if (state.seo_value) {
      handleChangeValue({
        id: 'seo',
        value: [...state.seo, state.seo_value],
      });
      handleChangeValue({
        id: 'seo_value',
        value: '',
      });
    }
  };

  useEffect(() => {
    if (name) {
      handleChangeValue({ id: 'name', value: name });
    }
  }, [name]);

  const handleDeleteSimilar = (index: number) => {
    const tempSimilarNames = state.seo;
    tempSimilarNames.splice(index, 1);
    handleChangeValue({
      id: 'seo',
      value: tempSimilarNames,
    });
  };

  const handleSubmitSimilarName = (e: KeyboardEvent<HTMLInputElement>) => {
    pressEnterKey({ event: e, callBack: addSimilarName });
  };

  const handleSimilarValue = (e: ChangeEvent<HTMLInputElement>) => {
    handleChangeValue({
      id: 'seo_value',
      value: e.target.value,
    });
  };

  return (
    <Div className={'justify-center w-full'}>
      <Div className={'w-full grid md:grid-cols-3 grid-cols-1 md:gap-8 gap-4'}>
        <Div className={'flex-col gap-4 md:col-span-2 shadow-xl p-4 bg-white border border-control-100 rounded-xl'}>
          <Text align={'start'} typography={['lg', 'lg']} color={'black'} type={'bold'}>General</Text>
          <Divider color={'control'} />
          <Div className={'w-full gap-8 grid md:grid-cols-2 grid-cols-1 mt-4'}>
            <TextField
              size='small'
              onChange={(e) => handleChangeValue({ id: 'name', value: e.target.value })}
              className={'w-full'}
              value={state?.name}
              label={'Category Name'}
            />
            <TextField
              onChange={(e) => handleChangeValue({ id: 'last_name', value: e.target.value })}
              className={'w-full col-span-2'}
              multiline={true}
              maxRows={4}
              inputClassName={'!min-h-32'}
              value={state?.last_name}
              label={'Description'}
            />
            <TextField
              size='small'
              type={'number'}
              onChange={(e) => handleChangeValue({ id: 'mobile', value: e.target.value })}
              className={'w-full'}
              value={state?.mobile}
              label={'Sort Order'}
            />
            <TextField
              size='small'
              type={'number'}
              onChange={(e) => handleChangeValue({ id: 'mobile', value: e.target.value })}
              className={'w-full'}
              value={state?.mobile}
              label={'Columns'}
            />
            <TextField
              size='small'
              onChange={(e) => handleChangeValue({ id: 'mobile', value: e.target.value })}
              className={'w-full'}
              value={state?.mobile}
              label={'Parent'}
            />
            <Select
              size='small'
              label={'Status'}
              optionsList={[{ id: 1, title: 'Enabled' }, { id: 2, title: 'Disabled' }]}
              value={state?.gender}
              onChange={(newValue) => handleChangeValue({ id: 'gender', value: newValue })}
              id={'id'}
              text={'title'} />
            <FormControlLabel label={'Top'}>
              <Checkbox color={'slate'} />
            </FormControlLabel>
          </Div>
        </Div>
        <Div className={'flex-col md:gap-8 gap-4'}>
          <Div className={'flex-col gap-4 md:col-span-2 shadow-xl p-4 bg-white border border-control-100 rounded-xl'}>
            <Text align={'start'} typography={['lg', 'lg']} color={'black'} type={'bold'}>SEO</Text>
            <Divider color={'control'} />
            <Div className={'flex-col gap-8'}>
              <Div className={'flex-col gap-6'}>
                <TextField
                  size='small'
                  onKeyPress={handleSubmitSimilarName}
                  onChange={handleSimilarValue}
                  label={'Keyword'}
                  className={'w-full'}
                  value={state.seo_value}
                  endAdornment={<Button onClick={addSimilarName} variant={'text'} size={'large'} className={'ml-2 !p-0'} shape={'square'} startAdornment={<AddIcon />} />}
                />
                {state.seo && state.seo.length > 0 ? (
                  <Div className={'w-full rounded-lg flex-wrap gap-4 border p-4'}>
                    {state.seo.map((item: string, index: number) => {
                      return (
                        <Chip
                          size='small'
                          variant={'reverse'}
                          color={'black'}
                          onDelete={() => handleDeleteSimilar(index)}
                          key={`similar_Name_${index}`}
                          value={item}
                        />
                      );
                    })}
                  </Div>
                ) : null}
              </Div>
            </Div>
          </Div>
          <Div className={'flex-col gap-4 md:col-span-2 shadow-xl p-4 bg-white border border-control-100 rounded-xl'}>
            <Text align={'start'} typography={['lg', 'lg']} color={'black'} type={'bold'}>Meta Tags</Text>
            <Divider color={'control'} />
            <Div className={'flex-col gap-8'}>
              <TextField
                size='small'
                onChange={(e) => handleChangeValue({ id: 'password', value: e.target.value })}
                className={'w-full'}
                value={state?.password}
                label={'Meta Tag Title'}
              />
              <TextField
                size='small'
                onChange={(e) => handleChangeValue({ id: 'password', value: e.target.value })}
                className={'w-full'}
                value={state?.password}
                label={'Meta Tag Description'}
              />
              <TextField
                size='small'
                onChange={(e) => handleChangeValue({ id: 'password', value: e.target.value })}
                className={'w-full'}
                value={state?.password}
                label={'Meta Tag Keywords'}
              />
            </Div>
          </Div>
        </Div>
      </Div>
    </Div>
  );
};

export default CategoryDetails;
