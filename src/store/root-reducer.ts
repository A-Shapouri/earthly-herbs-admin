import { combineReducers } from 'redux';
import authReducer from '@store/auth/auth-reducer';
import homeReducer from '@store/home/home-reducer';
import alertReducer from '@store/alert/alert-reducer';

const rootReducer: any = combineReducers({
  auth: authReducer,
  home: homeReducer,
  alert: alertReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>
