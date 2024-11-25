import React, { useReducer } from 'react';
import Button from '@elements/button';
import Checkbox from '@elements/checkbox';
import Chip from '@elements/chip';
import FormControlLabel from '@elements/form-control-label';
import Modal from '@elements/modal';
import Select from '@elements/select';
import TextField from '@elements/text-field';
import Div from '@elements/div';
import { RedoIcon, SearchIcon } from '../../../../../../assets/pb-icons';
import { initialState, reducer } from './store';
import { motion, AnimatePresence } from 'motion/react';


const Filter = ({ getSearchResult, loading, isShow, closeModal }: { getSearchResult: any, loading: boolean, isShow: boolean, closeModal: () => void }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChangeValue = ({ id, value }: { id: string, value: any }) => {
    dispatch({
      type: 'SET_VALUE',
      id: id,
      value: value,
    });
  };

  const handleSearchResult = () => {
    getSearchResult(state.data);
    closeModal();
  };

  const handleInitialStore = () => {
    dispatch({ type: 'SET_INITIAL' });
  };

  return (
    <Modal open={isShow} onClose={closeModal}>
      <Div
        className={`flex relative w-11/12 md:w-2/3 md:h-auto bg-white z-40 rounded-3xl md:p-4 pt-2 px-2 pb-0 flex-col justify-center items-center self-center gap-8`}>
        <Chip onClick={closeModal} onDelete={closeModal} variant={'outlined'} className={'self-start'} color={'danger'} value={'Close'} />
        <Div className={'grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8 w-11/12 md:w-2/3'}>
          <TextField
            label={'Name'}
            size={'small'}
            className={'w-full'}
            value={state.data.name}
            onChange={(e) => handleChangeValue({ id: 'name', value: e.target.value })}
          />
          <Select
            size={'small'}
            label={'Status'}
            optionsList={[{ id: 1, title: 'Enabled' }, { id: 2, title: 'Disabled' }]}
            value={state.data.status}
            onChange={(newValue) => handleChangeValue({ id: 'status', value: newValue })}
            id={'id'}
            text={'title'} />
          <TextField
            label={'Parent'}
            size={'small'}
            className={'w-full'}
            value={state.data.unit}
            onChange={(e) => handleChangeValue({ id: 'unit', value: e.target.value })}
          />
          <FormControlLabel disabled={loading} label={'Top'}>
            <Checkbox
              onChange={() => handleChangeValue({ id: 'vipClient', value: state.data.vipClient ? null : '1' })}
              color={'slate'}
              checked={state.data.vipClient === '1'} />
          </FormControlLabel>
        </Div>
        <Div className={'w-11/12 md:w-2/3 justify-center gap-8 mb-4'}>
          <Button
            color={'slate'}
            disabled={loading}
            loading={loading}
            rounded='small'
            startAdornment={<SearchIcon />}
            onClick={handleSearchResult}
            className={'w-full'}>
            Apply Filter
          </Button>
          <Button
            color={'danger'}
            variant={'outlined'}
            disabled={loading}
            loading={loading}
            rounded='small'
            startAdornment={<RedoIcon />}
            onClick={handleInitialStore}
            className={'w-full'}>
            Refresh
          </Button>
        </Div>
      </Div>
    </Modal>
  );
};

export default Filter;
