import React from 'react';
import Div from '@elements/div';
import Button from '@elements/button';
import Text from '@elements/text';
import Modal from '@elements/modal';
import { ConfirmationDialogProps } from './confirmation-dialog.props';

const ConfirmationDialog = ({ open, onClose, alertText, submitText = 'Confirm', cancelText = 'Cancel', submitHandler, cancelHandler, loading }: ConfirmationDialogProps) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Div className={'bg-white px-6 py-4 justify-between flex-col rounded-md w-11/12 max-w-[600px] md:min-w-96 min-h-40 gap-6 z-40'}>
        <Text align='center' color={'slate'}>{alertText}</Text>
        <Div className={'w-full gap-4'}>
          {submitHandler && typeof submitHandler === 'function' ? (
            <Button
              disabled={loading}
              loading={loading}
              color={'slate'}
              rounded={'small'}
              onClick={submitHandler}
              className={'w-1/2'}>
              {submitText}
            </Button>
          ) : null}
          <Button
            disabled={loading}
            loading={loading}
            onClick={cancelHandler && typeof cancelHandler === 'function' ? cancelHandler : onClose}
            color={'danger'}
            variant={'outlined'}
            rounded={'small'}
            className={'w-1/2'}>
            {cancelText}
          </Button>
        </Div>
      </Div>
    </Modal>
  );
};

export default ConfirmationDialog;
