import { spawn } from 'redux-saga/effects';
import authMiddleware from '@store/auth/auth-middleware';
import homeMiddleware from '@store/home/home-middleware';

export default function* rootSaga() {
  yield spawn(authMiddleware);
  yield spawn(homeMiddleware);
}
