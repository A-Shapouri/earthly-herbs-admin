'use client';
import React, { ReactNode } from 'react';
import Layout from '@layouts/layout';

const Wrapper = ({ children }: { children: ReactNode }) => {
  return (
    <Layout>
      {children}
    </Layout>
  );
};

export default Wrapper;
