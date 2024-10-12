import { all, takeLatest } from 'redux-saga/effects';
import { AuthActionTypes } from '@store/auth/auth-actions';

function* getClientInfoWatcher() {
  try {
  } catch (error: any) {
  }
}

function* authMiddleware() {
  yield all([
    takeLatest(AuthActionTypes.GET_CLIENT_INFO, getClientInfoWatcher),
  ]);
}

export default authMiddleware;
