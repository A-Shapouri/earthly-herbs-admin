import React, { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import Div from '@elements/div';
import MainSection from '../main-section';
import Button from '@elements/button';
import { AddIcon, CalendarIcon } from '../../../../../../../../assets/pb-icons';
import Select from '@elements/select';
import Chip from '@elements/chip';
import TextField from '@elements/text-field';
import Calendar from 'react-calendar';
import Popper from '@elements/popper';
import PopperContent from '@elements/popper/popper-content';
import PopperHandler from '@elements/popper/popper-handler';
import convertDate from '@utils/date/convert-date';

const Special = () => {
  const [list, setList] = useState([{
    group: '',
    price: '',
    priority: '',
    startDatePopper: false,
    endDatePopper: false,
    startDate: '',
    endDate: '',
  }]);
  const handleChangeValue = ({ id, value }: { id: string, value: string }) => {
  };

  const handleAddRow = () => {
    const tempList = JSON.parse(JSON.stringify(list));
    tempList.push({
      group: '',
      price: '',
      priority: '',
      startDatePopper: false,
      endDatePopper: false,
      startDate: '',
      endDate: '',
    });
    setList(tempList);
  };

  const handleStartPopper = (index, open) => {
    const tempList = JSON.parse(JSON.stringify(list));
    tempList[index].startDatePopper = !open;
    setList(tempList);
  };

  const handleStartDate = (value: any, index: number) => {
    const tempList = list.map(item => Array.isArray(item) ? tempList(item) : item);
    tempList[index].startDate = convertDate(value);
    tempList[index].startDatePopper = !tempList[index].startDatePopper;
    setList(tempList);
  };

  const handleEndPopper = (index) => {
    const tempList = list.map(item => Array.isArray(item) ? tempList(item) : item);
    tempList[index].endDatePopper = !tempList[index].endDatePopper;
    setList(tempList);
  };

  const handleEndDate = (value: any, index: number) => {
    const tempList = list.map(item => Array.isArray(item) ? tempList(item) : item);
    tempList[index].endDate = convertDate(value);
    tempList[index].endDatePopper = !tempList[index].endDatePopper;
    setList(tempList);
  };

  const handleRemoveRow = (index: number) => {
    const tempList = list.map(item => Array.isArray(item) ? tempList(item) : item);
    tempList.splice(index, 1);
    setList(tempList);
  };

  return (
    <Div className={'w-full gap-6 grid grid-cols-2 mt-4'}>
      {list.map((item, index) => {
        return (
          <MainSection key={`item_${index}`} title={`Special ${index + 1}`} className='flex- flex-col col-span-2'>
            <Div className='grid grid-cols-1 col-span-6 gap-6 items-center justify-center'>
              <Div className='justify-end'>
                <Chip size='small' onClick={() => handleRemoveRow(index)} onDelete={() => handleRemoveRow(index)} variant={'reverse'} className={'self-start'} color={'danger'} value={'Remove'} />
              </Div>
              <Div className='gap-4'>
                <Select
                  rounded='medium'
                  value={''}
                  size='small'
                  className='w-full'
                  label={'Customer Group'}
                  optionsList={[{ id: 1, title: 'Group_1' }, { id: 2, title: 'Group_2' }, { id: 3, title: 'Group_3' }, { id: 4, title: 'Group_4' }]}
                  onChange={(newValue) => handleChangeValue({ id: 'status', value: newValue })}
                  id={'id'}
                  text={'title'} />
                <TextField
                  size='small'
                  rounded='medium'
                  onChange={(e) => handleChangeValue({ id: 'parent_id', value: e.target.value })}
                  className={'w-full'}
                  label={'Priority'}
                />
                <TextField
                  size='small'
                  rounded='medium'
                  onChange={(e) => handleChangeValue({ id: 'parent_id', value: e.target.value })}
                  className={'w-full'}
                  label={'Price'}
                />
                <Popper position='bottom-right' className='w-full' showPopper={item.startDatePopper} handlePopper={(open) => handleStartPopper(index, open)}>
                  <PopperHandler>
                    <TextField
                      value={item.startDate}
                      size='small'
                      rounded='medium'
                      className={'w-full'}
                      label={'Date Start'}
                      endAdornment={<Button variant='text' size='small' startAdornment={<CalendarIcon />} />}
                    />
                  </PopperHandler>
                  <PopperContent>
                    <Div className='p-4'>
                      <Calendar
                        onChange={(value) => handleStartDate(value, index)}
                        value={item.startDate}
                      />
                    </Div>
                  </PopperContent>
                </Popper>
                <Popper position='bottom-right' className='w-full' showPopper={item.endDatePopper} handlePopper={() => handleEndPopper(index)}>
                  <PopperHandler>
                    <TextField
                      value={item.endDate}
                      size='small'
                      rounded='medium'
                      className={'w-full'}
                      label={'Date End'}
                      endAdornment={<Button variant='text' size='small' startAdornment={<CalendarIcon />} />}
                    />
                  </PopperHandler>
                  <PopperContent>
                    <Div className='p-4'>
                      <Calendar
                        onChange={(value) => handleEndDate(value, index)}
                        value={item.endDate}
                      />
                    </Div>
                  </PopperContent>
                </Popper>
              </Div>
            </Div>
          </MainSection>
        );
      })}
      <Div className='justify-end items-end col-span-1'>
        <Button onClick={handleAddRow} color={'emerald'} shape='square' startAdornment={<AddIcon />} />
      </Div>
    </Div>
  );
};

export default Special;
