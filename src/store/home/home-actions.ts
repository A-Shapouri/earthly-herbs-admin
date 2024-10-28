const preType = 'HOME_';

export const HomeActionTypes = {
  SET_EXPANDED_MENU: `${preType}SET_EXPANDED_MENU`,
  SET_NAVIGATION: `${preType}SET_NAVIGATION`,
};

const setNavigation = (data: { navigation: any }) => ({ type: HomeActionTypes.SET_NAVIGATION, data: data });
const setExpandedMenu = (data: { expandedMenu: boolean }) => ({ type: HomeActionTypes.SET_EXPANDED_MENU, data: data });

export const HomeActions = {
  setNavigation: setNavigation,
  setExpandedMenu: setExpandedMenu,
};
