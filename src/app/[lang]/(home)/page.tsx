'use client';
import React from 'react';
import Div from '@elements/div';
import Button from '@elements/button';
import Text from '@elements/text';

const Home = () => {
  return (
    <Div className='w-full p-6 flex-col'>
      {/* Top Row Cards */}
      <Div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-6'>
        {/* Recent Customers */}
        <Div className='bg-white rounded-lg shadow-lg shadow-control-200 p-5 flex-col justify-between'>
          <Div className='flex justify-between items-center mb-4'>
            <Text variant='h2' typography={['lg', 'lg']} type='bold' color='grey.700'>Recent Customers</Text>
            <Button variant='text' color='slate' rounded='small' size='small'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
              </svg>
            </Button>
          </Div>
          <Div className='flex justify-between'>
            {['Amber', 'Nate', 'John', 'Disha', 'Shakir'].map((name, idx) => (
              <Div key={idx} className='flex flex-col gap-2 items-center'>
                <Div className={`w-12 h-12 rounded-full mb-2 flex items-center justify-center ${['bg-teal-100', 'bg-pink-100', 'bg-blue-100', 'bg-purple-100', 'bg-yellow-100'][idx]}`}>
                  <Text className='text-sm'>{name.charAt(0)}</Text>
                </Div>
                <Text typography={['sm', 'sm']} color='grey.700'>{name}</Text>
                <Text typography={['sm', 'sm']} className='bg-slate-700 px-2 py-1 rounded-lg shadow-md' color='white'>$50.99</Text>
              </Div>
            ))}
          </Div>
        </Div>

        {/* Weekly Sales */}
        <Div className='bg-white rounded-lg shadow-lg shadow-control-200 p-5 flex-col'>
          <Div className='flex justify-between items-center mb-4'>
            <Text variant='h2' typography={['lg', 'lg']} type='bold' color='grey.700'>Weekly Sales</Text>
            <Button variant='text' color='slate' rounded='small' size='small'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
              </svg>
            </Button>
          </Div>
          <Div className='flex-col'>
            <Text typography={['sm', 'sm']} color='grey.500'>Mon 06 - Sat 12</Text>
            <Text typography={['huge', 'huge']} color='grey.800' type='black'>$84,920.54</Text>
            <Text typography={['sm', 'sm']} className='text-sm' color='success'>14% increase</Text>

            <Div className='mt-3 flex items-end h-24'>
              {Array(7).fill(0).map((_, idx) => (
                <Div key={idx}
                  className='w-full bg-slate-600 mx-0.5 rounded-sm'
                  style={{ height: `${Math.random() * 50 + 50}%` }}></Div>
              ))}
            </Div>
          </Div>
        </Div>

        {/* Store Overview */}
        <Div className='bg-white rounded-lg shadow-lg shadow-control-200 p-5 flex-col'>
          <Div className='flex justify-between items-center mb-4'>
            <Text variant='h2' typography={['lg', 'lg']} type='bold' color='grey.700'>Store Overview</Text>
          </Div>
          <Div className='flex-col justify-between h-full'>
            <Text color='grey.500' className='mb-2'>Total Products in Store</Text>
            <Text variant='h3' typography={['huge', 'huge']} type='black' className='mb-4'>368</Text>

            <Button color='indigo' variant='outlined' rounded='small' size='small'>
              Add New Product
            </Button>
          </Div>
        </Div>
      </Div>

      {/* Middle Row Statistics */}
      <Div className='grid grid-cols-1 md:grid-cols-5 gap-6 mb-6'>
        {/* Today&apos;s Orders */}
        <Div className='bg-gradient-to-r from-pink-500 col-span-2 to-pink-400 rounded-lg p-5 flex-col text-white shadow-lg shadow-control-200 hover:scale-105 transition-all duration-300'>
          <Text variant='h2' type='bold' typography={['lg', 'lg']} className='mb-1 text-white'>Today&apos;s Orders</Text>
          <Text color='grey.100' typography={['sm', 'sm']} className='mb-4'>Monday 28th Nov, 2022</Text>
          <Text variant='h3' typography={['huge', 'huge']} type='black' className='mb-6 text-white'>$14,920.54</Text>

          <Div className='w-full border-t border-control-100'/>
          <Div className='grid grid-cols-4 text-center mt-4 divide divide-x divide-control-200'>
            <Div className='flex-col px-4 items-center'>
              <Text type='light' color='grey.100'>Sold</Text>
              <Text color='white' type='bold'>224</Text>
            </Div>
            <Div className='flex-col px-4 items-center'>
              <Text type='light' color='grey.100'>Returns</Text>
              <Text color='white' type='bold'>12</Text>
            </Div>
            <Div className='flex-col px-4 items-center'>
              <Text type='light' color='grey.100'>Picked</Text>
              <Text color='white' type='bold'>210</Text>
            </Div>
            <Div className='flex-col px-4 items-center'>
              <Text type='light' color='grey.100'>In Transit</Text>
              <Text color='white' type='bold'>112</Text>
            </Div>
          </Div>
        </Div>

        {/* Online Users */}
        <Div className='bg-gradient-to-r justify-end items-center from-cyan-500 to-cyan-400 rounded-lg p-2 relative shadow-lg shadow-control-200 hover:scale-110 transition-all duration-300'>
          <Text color='white' className='-rotate-90 w-fit h-12 absolute -left-6'>Online Users</Text>
          <Div style={{ boxShadow: '5px 0 15px -3px rgba(0, 0, 0, 0.4)' }} className='w-16 absolute left-0 h-full rounded-l-lg'/>
          <Div className='flex flex-col justify-between h-full w-full ml-20'>
            <Div className='flex-col'>
              <Text variant='h2' typography={['md', 'md']} color='white'>Last 30 Min</Text>
              <Text variant='h3' typography={['huge', 'huge']} color='white' type='black'>96</Text>
            </Div>

            <Div className='flex h-12 items-end mt-2 mb-6'>
              {Array(12).fill(0).map((_, idx) => (
                <Div key={idx}
                  className='w-full bg-white/30 mx-0.5 rounded-sm'
                  style={{ height: `${Math.random() * 60 + 40}%` }}></Div>
              ))}
            </Div>

            <Div className='flex-col mt-4'>
              <Text variant='h2' typography={['md', 'md']} color='white'>Right Now</Text>
              <Text variant='h3' typography={['huge', 'huge']} color='white' type='black'>12</Text>
            </Div>
          </Div>
        </Div>

        <Div className='bg-gradient-to-r justify-end items-center from-red-400 to-orange-300 rounded-lg p-2 relative shadow-lg shadow-control-200 hover:scale-110 transition-all duration-300'>
          <Text color='white' className='-rotate-90 w-fit h-12 absolute -left-12'>New Vs Returning</Text>
          <Div style={{ boxShadow: '5px 0 15px -3px rgba(0, 0, 0, 0.4)' }} className='w-16 absolute left-0 h-full rounded-l-lg'/>
          <Div className='flex flex-col justify-between h-full w-full ml-20 gap-4 divide divide-y divide-grey-100'>
            <Div className='flex-col'>
              <Text variant='h2' typography={['lg', 'lg']} className='text-white'>Returning</Text>
              <Text variant='h3' typography={['huge', 'huge']} type='black' className='text-white'>13.3k</Text>
              <Text typography={['sm', 'sm']} className='text-sm text-white/80'>+146%</Text>
            </Div>
            <Div className='flex-col pt-4'>
              <Text typography={['lg', 'lg']} className='text-white'>New</Text>
              <Text typography={['huge', 'huge']} type='black' className='text-white'>21.4k</Text>
              <Text typography={['sm', 'sm']} color='grey.50'>+216%</Text>
            </Div>
          </Div>
        </Div>

        <Div className='bg-gradient-to-r justify-end items-center from-indigo-400 to-indigo-300 rounded-lg p-2 relative shadow-lg shadow-control-200 hover:scale-110 transition-all duration-300'>
          <Text color='white' className='-rotate-90 w-fit h-12 absolute -left-10'>Checkout Status</Text>
          <Div style={{ boxShadow: '5px 0 15px -3px rgba(0, 0, 0, 0.4)' }} className='w-16 absolute left-0 h-full rounded-l-lg'/>
          <Div className='flex flex-col justify-between h-full w-full ml-20 gap-4 divide divide-y divide-grey-100'>
            <Div className='flex-col'>
              <Text variant='h2' typography={['lg', 'lg']} className='text-white'>Completed</Text>
              <Text variant='h3' typography={['huge', 'huge']} type='black' className='text-white'>981</Text>
              <Text typography={['sm', 'sm']} className='text-sm text-white/80'>+14%</Text>
            </Div>
            <Div className='flex-col pt-4'>
              <Text typography={['lg', 'lg']} className='text-white'>Abandoned</Text>
              <Text typography={['huge', 'huge']} type='black' className='text-white'>654</Text>
              <Text typography={['sm', 'sm']} color='grey.50'>+21%</Text>
            </Div>
          </Div>
        </Div>
      </Div>

      {/* Bottom Row Charts */}
      <Div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {/* Historical Sales */}
        <Div className='bg-white rounded-lg shadow p-5 border flex-col'>
          <Text variant='h2' typography={['lg', 'lg']} type='medium' color='grey.800'>Historical Sales Stat</Text>
          <Text className='text-sm mb-6' color='grey.500'>Since Jan 2022</Text>

          <Div className='h-64 relative'>
            {/* Simplified line chart representation */}
            <Div className='absolute inset-0 flex items-center'>
              <Div className='w-full h-px bg-gray-200'></Div>
            </Div>
            <Div className='absolute inset-0 flex items-center' style={{ top: '25%' }}>
              <Div className='w-full h-px bg-gray-200'></Div>
            </Div>
            <Div className='absolute inset-0 flex items-center' style={{ top: '50%' }}>
              <Div className='w-full h-px bg-gray-200'></Div>
            </Div>
            <Div className='absolute inset-0 flex items-center' style={{ top: '75%' }}>
              <Div className='w-full h-px bg-gray-200'></Div>
            </Div>

            <svg className='w-full h-full' viewBox='0 0 400 150' preserveAspectRatio='none'>
              {/* Purple line */}
              <path
                d='M0,100 C50,80 100,120 150,90 C200,60 250,90 300,70 C350,50 400,70 400,60'
                fill='none'
                stroke='#8b5cf6'
                strokeWidth='3'
              />
              {/* Pink line */}
              <path
                d='M0,90 C50,70 100,90 150,110 C200,130 250,110 300,130 C350,120 400,90 400,100'
                fill='none'
                stroke='#ec4899'
                strokeWidth='3'
              />
            </svg>

            <Div className='absolute bottom-0 w-full flex justify-between text-xs text-gray-500'>
              {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month) => (
                <Text key={month} className='text-xs' color='grey.500'>{month}</Text>
              ))}
            </Div>

            <Div className='absolute left-0 h-full flex flex-col justify-between text-xs text-gray-500'>
              <Text className='text-xs' color='grey.500'>130k</Text>
              <Text className='text-xs' color='grey.500'>110k</Text>
              <Text className='text-xs' color='grey.500'>90k</Text>
              <Text className='text-xs' color='grey.500'>70k</Text>
              <Text className='text-xs' color='grey.500'>50k</Text>
              <Text className='text-xs' color='grey.500'>0</Text>
            </Div>
          </Div>
        </Div>

        {/* Daily Sales Summary */}
        <Div className='bg-white rounded-lg shadow p-5 border flex-col'>
          <Div className='flex justify-between items-center mb-4'>
            <Div className='flex-col'>
              <Text variant='h2' typography={['lg', 'lg']} type='medium' color='grey.800'>Daily Sales Summary</Text>
              <Text className='text-sm' color='grey.500'>From 12 Oct - 24 Nov</Text>
            </Div>
            <Button variant='text' color='slate' rounded='full' size='small' className='bg-gray-100 p-2'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
            </Button>
          </Div>

          <Div className='h-48 flex items-end mt-8 mb-8'>
            {Array(11).fill(0).map((_, idx) => (
              <Div key={idx} className='flex flex-col items-center flex-1'>
                <Div
                  className='w-full bg-indigo-200 mx-1 rounded-sm'
                  style={{ height: `${Math.random() * 60 + 20}%` }}></Div>
                <Text className='text-xs mt-2' color='grey.500'>{idx + 12}</Text>
                <Text className='text-xs' color='grey.500'>Nov</Text>
              </Div>
            ))}
          </Div>

          <Div className='grid grid-cols-3 gap-4 mt-4'>
            <Div className='flex items-center'>
              <Div className='w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center mr-3'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
              </Div>
              <Div className='flex-col'>
                <Text className='text-xs' color='grey.500'>Minimum</Text>
                <Text type='medium'>14,170</Text>
              </Div>
            </Div>

            <Div className='flex items-center'>
              <Div className='w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center mr-3'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
              </Div>
              <Div className='flex-col'>
                <Text className='text-xs' color='grey.500'>Maximum</Text>
                <Text type='medium'>28,770</Text>
              </Div>
            </Div>

            <Div className='flex items-center'>
              <Div className='w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center mr-3'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
              </Div>
              <Div className='flex-col'>
                <Text className='text-xs' color='grey.500'>Average</Text>
                <Text type='medium'>21,518</Text>
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
    </Div>
  );
};

export default Home;
