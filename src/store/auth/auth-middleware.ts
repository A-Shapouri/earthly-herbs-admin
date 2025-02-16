import { all, takeLatest, select, put } from 'redux-saga/effects';
import { AuthActionTypes } from '@store/auth/auth-actions';
import { authStore } from './auth-store';
import { homeStore } from '../home/home-store';
import routes from '@routes';
import { saveToCookie } from '@utils/cookie';
import { AlertActionType } from '@store/alert/alert-action';
import loginWithPasswordApi from '@api/auth/login-with-password';
import getParseRoute from '@utils/helpers/parse-route';

function* loginWithPasswordWatcher() {
  const { email, password } = yield select(authStore);
  const { navigation } = yield select(homeStore);
  try {
    const response: { id_token: string } = yield loginWithPasswordApi({ password: password, email: email });
    if (response?.id_token) {
      saveToCookie('token', response?.id_token);
      yield put({
        type: AuthActionTypes.SET_IS_LOGGED_IN,
        data: { isLoggedIn: true },
      });
      yield put({
        type: AlertActionType.SHOW_ALERT,
        text: 'Access Granted!',
        description: 'Welcome to Earthly Herbs admin panel',
        severity: 'info',
      });
      yield navigation.push(getParseRoute({
        pathname: routes['route.home.index'],
        locale: 'en',
      }));
    }
    yield put({
      type: AuthActionTypes.SET_LOADING,
      data: { loginLoading: false },
    });
  } catch (error) {
    console.log(error);
    yield put({
      type: AlertActionType.SHOW_ALERT,
      text: 'Access Denied!',
      description: 'Email or password is wrong! please try again',
      severity: 'danger',
    });
    yield put({
      type: AuthActionTypes.SET_LOADING,
      data: {
        loginLoading: false,
      },
    });
  }
}

function* authMiddleware() {
  yield all([
    takeLatest(AuthActionTypes.LOGIN_WITH_PASSWORD, loginWithPasswordWatcher),
  ]);
}

export default authMiddleware;
