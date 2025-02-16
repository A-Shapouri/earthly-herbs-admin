import React from 'react';
import Div from '@elements/div';
import MainSection from '@layouts/main-section';
import SubSection from '@layouts/sub-section';
import Skeleton from '@elements/skeleton';

const Loading = () => {
  return (
    <Div className={'w-full gap-6 grid md:grid-cols-3 md:grid-rows-3 grid-cols-1 mt-4 grid-flow-dense'}>
      <MainSection className='md:row-span-1 md:col-span-2' title='Primary Details'>
        <Skeleton
          size={'small'}
          color={'slate'}
          className={'max-w-full min-w-full md:max-w-full md:min-w-full p-0 md:col-span-3'} />
        <Skeleton
          size={'small'}
          color={'slate'}
          className={'max-w-full min-w-full md:max-w-full md:min-w-full p-0 md:col-span-3'} />
        <Skeleton
          size={'small'}
          color={'slate'}
          className={'max-w-full min-w-full md:max-w-full md:min-w-full p-0 md:col-span-3'} />
        <Skeleton
          size={'small'}
          color={'slate'}
          className={'max-w-full min-w-full md:max-w-full md:min-w-full p-0 md:col-span-3'} />
        <Skeleton
          size={'small'}
          color={'slate'}
          className={'max-w-full min-w-full md:max-w-full md:min-w-full p-0 md:col-span-3'} />
        <Skeleton
          size={'small'}
          color={'slate'}
          className={'max-w-full min-w-full md:max-w-full md:min-w-full p-0 md:col-span-3'} />
      </MainSection>
      <SubSection title='Secondary Details' className='md:row-span-3 md:col-span-1 md:h-fit'>
        <Skeleton
          size={'small'}
          color={'slate'}
          className={'max-w-full min-w-full md:max-w-full md:min-w-full p-0'} />
        <Skeleton
          size={'small'}
          color={'slate'}
          className={'max-w-full min-w-full md:max-w-full md:min-w-full p-0'} />
      </SubSection>
    </Div>
  );
};

export default Loading;
