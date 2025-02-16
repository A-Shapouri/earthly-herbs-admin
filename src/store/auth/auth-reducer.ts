import { AuthActionTypes } from './auth-actions';

export const initialState = {
  isLoggedIn: false,
  loginLoading: false,
  email: '',
  password: '',
};

function authReducer(state = initialState, action: any) {
  switch (action.type) {
    case AuthActionTypes.SET_USER_EMAIL:
      return {
        ...state,
        email: action.data.email,
      };

    case AuthActionTypes.SET_USER_PASSWORD:
      return {
        ...state,
        password: action.data.password,
      };

    case AuthActionTypes.LOGIN_WITH_PASSWORD:
      return {
        ...state,
        loginLoading: true,
      };

    case AuthActionTypes.SET_LOADING:
      return {
        ...state,
        loginLoading: action.data.loginLoading,
      };

    case AuthActionTypes.SET_IS_LOGGED_IN:
      return {
        ...state,
        isLoggedIn: action.data.isLoggedIn,
      };

    case AuthActionTypes.LOG_OUT:
      return {
        ...state,
        isLoggedIn: false,
      };

    default:
      return state;
  }
}

export default authReducer;
