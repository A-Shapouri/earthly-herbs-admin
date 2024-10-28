import { HomeActionTypes } from './home-actions';
import { HomeReducerTypes } from './home';
import { saveToCookie } from '@utils/cookie';

const initialState: HomeReducerTypes = {
  navigation: null,
  expandedMenu: undefined,
};

function homeReducer(state = initialState, action: any) {
  switch (action.type) {
    case HomeActionTypes.SET_NAVIGATION:
      return {
        ...state,
        navigation: action?.data?.navigation,
      };

    case HomeActionTypes.SET_EXPANDED_MENU:
      saveToCookie('expanded-menu', action?.data?.expandedMenu.toString());
      return {
        ...state,
        expandedMenu: action?.data?.expandedMenu,
      };

    default:
      return state;
  }
}

export default homeReducer;
