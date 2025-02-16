const preType = 'AUTH_';

export const AuthActionTypes = {
  GET_USER_INFO: `${preType}GET_USER_INFO`,
  SET_USER_EMAIL: `${preType}SET_USER_EMAIL`,
  SET_USER_PASSWORD: `${preType}SET_USER_PASSWORD`,
  LOGIN_WITH_PASSWORD: `${preType}LOGIN_WITH_PASSWORD`,
  SET_LOADING: `${preType}SET_LOADING`,
  SET_IS_LOGGED_IN: `${preType}SET_IS_LOGGED_IN`,
  LOG_OUT: `${preType}LOG_OUT`,
};

const setUserEmailAction = (data: {email: string}) => ({ type: AuthActionTypes.SET_USER_EMAIL, data: data });
const setUserPasswordAction = (data: {password: string}) => ({ type: AuthActionTypes.SET_USER_PASSWORD, data: data });
const loginWithPasswordAction = () => ({ type: AuthActionTypes.LOGIN_WITH_PASSWORD });
const logOutAction = () => ({ type: AuthActionTypes.LOG_OUT });

export const AuthActions = {
  setUserEmailAction: setUserEmailAction,
  setUserPasswordAction: setUserPasswordAction,
  loginWithPasswordAction: loginWithPasswordAction,
  logOutAction: logOutAction,
};
