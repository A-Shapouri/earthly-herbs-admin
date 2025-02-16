'use client';
import React, { ReactNode, Suspense, useEffect } from 'react';
import { Provider } from 'react-redux';
import store from '@store/store';
import { AppProgressBar as ProgressBar, useRouter } from 'next-nprogress-bar';
// import { getFromCookie } from '@utils/cookie';
import { HomeActionTypes } from '@store/home/home-actions';
import SnackbarAlert from '@modules/snackbar-alert';
// import {AuthActionTypes} from "@store/auth/auth-actions";

const ClientLayout = ({ children }: { children: ReactNode }) => {
  // const token = getFromCookie('token');
  const router = useRouter();

  useEffect(() => {
    store.dispatch({ type: HomeActionTypes.SET_NAVIGATION, data: { navigation: router } });
    // if (token) {
    //   store.dispatch({ type: AuthActionTypes.GET_USER_INFO });
    // }
  }, []);
  return (
    <Provider store={store}>
      <SnackbarAlert/>
      <Suspense>
        <ProgressBar
          height={'6px'}
          color={'#64748b'}
          options={{ showSpinner: false }}
          shallowRouting
        />
      </Suspense>
      {children}
    </Provider>
  );
};

export default ClientLayout;
