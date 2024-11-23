'use client';
import React, { ReactNode, Suspense } from 'react';
import { Provider } from 'react-redux';
import store from '@store/store';
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

const ClientLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Provider store={store}>
      {/* <SnackbarAlert/> */}
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
