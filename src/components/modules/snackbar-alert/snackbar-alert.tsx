'use client';
import React from 'react';
import Snackbar from '@elements/snackbar';
import Alert from '@elements/alert';
import { AlertActions } from '@store/alert/alert-action';
import { RootState } from '@store/root-reducer';
import { useDispatch, useSelector } from 'react-redux';

function SnackbarAlert() {
  const alert = useSelector((state: RootState) => state.alert);
  const dispatch = useDispatch();

  function handleClose() {
    dispatch(AlertActions.hideAlert());
  }

  if (!alert) {
    return null;
  }

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={alert.isShow}
      onClose={handleClose}
      autoHideDuration={6000}
    >
      <Alert
        title={alert.text}
        description={alert.description}
        onClose={handleClose}
        severity={alert.severity}
      />
    </Snackbar>
  );
}

export default SnackbarAlert;
