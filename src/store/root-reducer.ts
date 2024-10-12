import { combineReducers } from 'redux';
import authReducer from './auth/auth-reducer';

const rootReducer: any = combineReducers({
  auth: authReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>
