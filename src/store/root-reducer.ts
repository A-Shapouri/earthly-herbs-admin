import { combineReducers } from 'redux';
import authReducer from './auth/auth-reducer';
import homeReducer from './home/home-reducer';

const rootReducer: any = combineReducers({
  auth: authReducer,
  home: homeReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>
