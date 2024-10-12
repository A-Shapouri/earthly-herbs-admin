const preType = 'AUTH_';

export const AuthActionTypes = {
  SAVE_TOKEN: `${preType}SAVE_TOKEN`,
  GET_CLIENT_INFO: `${preType}GET_CLIENT_INFO`,
};

const saveToken = (data: { accessToken: string, tokenType: string }) => ({ type: AuthActionTypes.SAVE_TOKEN, data: data });

export const AuthActions = {
  saveToken: saveToken,
};
