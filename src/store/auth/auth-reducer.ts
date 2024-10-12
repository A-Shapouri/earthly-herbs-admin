import { AuthActionTypes } from './auth-actions';

export const initialState = {
  isLoggedIn: false,
};

function authReducer(state = initialState, action: any) {
  switch (action.type) {
    case AuthActionTypes.SAVE_TOKEN:

      return {
        ...state,
        isLoggedIn: true,
      };

    default:
      return state;
  }
}

export default authReducer;
