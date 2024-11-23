'use client';
import React, {useReducer, useEffect, ChangeEvent, useState} from 'react';
import {SaveIcon, RedoIcon, CalendarIcon} from '../../../../../../assets/pb-icons';
import {initialState, reducer} from './store';
import Button from '@elements/button';
import Div from '@elements/div';
import Select from '@elements/select';
import TextField from '@elements/text-field';
import getParseRoute from '@utils/helpers/parse-route';
import routes from '@routes';
import {DictionariesTypes} from '@dictionaries';
import {useParams} from 'next/navigation';
import MainSection from '@layouts/main-section';
import AutoComplete from "@elements/auto-complete";
import FormControlLabel from "@elements/form-control-label";
import RadioButton from "@elements/radio-button";
import Text from '@elements/text'
import Popper from "@elements/popper";
import PopperHandler from "@elements/popper/popper-handler";
import PopperContent from "@elements/popper/popper-content";
import Calendar from "react-calendar";
import convertDate from "@utils/date/convert-date";
import 'react-calendar/dist/Calendar.css';


const ReviewDetails = ({name}: { name?: string }) => {
  const {lang} = useParams<{ lang: DictionariesTypes }>();
  const [popper, setPopper] = useState<boolean>(false);
  const handleCreate = () => {
    dispatch({type: 'CHECK_ERROR'});
  };
  const handleUpdate = () => {
    dispatch({type: 'CHECK_ERROR'});
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChangeValue = ({id, value}: { id: string, value: any }) => {
    dispatch({
      type: 'SET_VALUE',
      id: id,
      value: value,
    });
  };

  useEffect(() => {
    if (name) {
      handleChangeValue({id: 'name', value: name});
    }
  }, [name]);

  const handleRatingChange = (event: ChangeEvent<HTMLInputElement>) => {
    handleChangeValue({id: 'rating', value: event.target.value});
  }

  const handleDate = (value: any) => {
    handleChangeValue({id: 'date', value: convertDate(value)});
    setPopper(false);
  };
  console.log(popper)
  return (
    <Div className='flex-col justify-center w-full gap-4 md:gap-8'>
      <Div className={'w-full gap-2 md:gap-4 md:justify-end justify-between'}>
        <Button href={getParseRoute({pathname: routes['route.catalog.recurring-profiles.index'], locale: lang})} rounded={'small'} size={'small'} color={'slate'} startAdornment={<RedoIcon/>}>Return to List</Button>
        {name ? (
          <Button onClick={handleUpdate} rounded={'small'} size={'small'} color={'indigo'} startAdornment={<SaveIcon/>} className={'self-end w-36'}>Update</Button>
        ) : (
          <Button onClick={handleCreate} rounded={'small'} size={'small'} color={'indigo'} startAdornment={<SaveIcon/>} className={'self-end w-36'}>Submit</Button>
        )}
      </Div>
      <MainSection title='Primary Info'>
        <TextField
          size='small'
          rounded={'small'}
          onChange={(e) => handleChangeValue({id: 'name', value: e.target.value})}
          className={'w-full md:col-span-3'}
          error={state.nameError}
          value={state?.name}
          label={'Author Name'}
          helperText={state.nameError ? 'Author Name is required!' : undefined}
        />
        <AutoComplete
          className='md:col-span-3'
          searchList={['-- None --', 'Apple', 'Canon', 'HTC', 'Hewlett-Packard', 'Palm']}
          label='Product'
          emptyLabel='No Result'
        />
        <TextField
          rounded={'small'}
          onChange={(e) => handleChangeValue({id: 'description', value: e.target.value})}
          className={'w-full md:col-span-6'}
          multiline={true}
          maxRows={4}
          inputClassName={'!min-h-32'}
          value={state?.description}
          label={'Description'}
        />
      </MainSection>
      <MainSection title='Secondary Info'>
        <Select
          rounded={'small'}
          size='small'
          className={'md:col-span-3'}
          label={'Status'}
          optionsList={[{id: 1, title: 'Enabled'}, {id: 2, title: 'Disabled'}]}
          value={state?.status}
          error={state.statusError}
          onChange={(newValue) => handleChangeValue({id: 'status', value: newValue})}
          id={'id'}
          helperText={state.statusError ? 'status is required!' : undefined}
          text={'title'}/>
        <Div className='items-center gap-4 md:col-span-3 md:col-start-1'>
          <Text typography={['xs', 'xs']}>
            Rating:
          </Text>
          <Div className='w-full justify-between'>
            <FormControlLabel label={'1'}>
              <RadioButton onChange={handleRatingChange} checked={state.rating === '1'} value={'1'} name={'1'}/>
            </FormControlLabel>
            <FormControlLabel label={'2'}>
              <RadioButton onChange={handleRatingChange} checked={state.rating === '2'} value={'2'} name={'2'}/>
            </FormControlLabel>
            <FormControlLabel label={'3'}>
              <RadioButton onChange={handleRatingChange} checked={state.rating === '3'} value={'3'} name={'3'}/>
            </FormControlLabel>
            <FormControlLabel label={'4'}>
              <RadioButton onChange={handleRatingChange} checked={state.rating === '4'} value={'4'} name={'4'}/>
            </FormControlLabel>
            <FormControlLabel label={'5'}>
              <RadioButton onChange={handleRatingChange} checked={state.rating === '5'} value={'5'} name={'5'}/>
            </FormControlLabel>
          </Div>
        </Div>
        <Div className={'md:col-span-3 w-full'}>
          <Popper position='bottom-right' className='w-full' showPopper={popper} handlePopper={(open) => setPopper(!open)}>
            <PopperHandler>
              <TextField
                value={state.date}
                size='small'
                rounded='medium'
                className={'w-full'}
                label={'Date Start'}
                endAdornment={<Button variant='text' size='small' startAdornment={<CalendarIcon/>}/>}
              />
            </PopperHandler>
            <PopperContent>
              <Div className='p-4'>
                <Calendar
                  onChange={(value) => handleDate(value)}
                  value={state.date}
                />
              </Div>
            </PopperContent>
          </Popper>
        </Div>
      </MainSection>
    </Div>
  );
};

export default ReviewDetails;
