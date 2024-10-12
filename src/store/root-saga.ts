import { spawn } from 'redux-saga/effects';
import authMiddleware from '@store/auth/auth-middleware';

export default function* rootSaga() {
  yield spawn(authMiddleware);
}
