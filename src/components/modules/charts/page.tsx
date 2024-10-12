'use client';
import ChartOne from './chart-one';
import ChartTwo from './chart-two';
import dynamic from 'next/dynamic';
import React from 'react';

const ChartThree = dynamic(() => import('./chart-three'), {
  ssr: false,
});

const Chart: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
        <ChartOne />
        <ChartTwo />
        <ChartThree />
      </div>
    </>
  );
};

export default Chart;
