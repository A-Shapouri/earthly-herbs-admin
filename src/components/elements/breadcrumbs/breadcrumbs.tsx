'use client';
import React from 'react';
import { BreadcrumbProps } from './breadcrumbs.props';
import Div from '../div';
import Text from '../text';
import classNames from '@utils/helpers/class-names';
import Button from '../button';

export const Breadcrumbs = ({ breadcrumbsData, className, homeTitle = 'Home', homeTitleClassName, color = 'slate', dir = 'ltr' }: BreadcrumbProps) => {
  return (
    <Div className={className}>
      <Text align={'start'} aria-label="breadcrumb" dir={dir}>
        <Button variant={'text'} href="/" className={'contents !p-0 h-fit'}>
          <Text color='grey.700' variant={'span'} className={classNames(
            breadcrumbsData && breadcrumbsData.length ? "after:content-['/'] after:px-1" : '',
            homeTitleClassName
          )} typography={['sm', 'sm']}>
            <span className={classNames('md:mt-[9px] mt-1 pe-1',
              dir === 'rtl' ? 'float-right' : 'float-left')}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18.982" height="15.106" viewBox="0 0 18.982 15.106">
                <path data-name="Path 26704" d="M106.162 261.7v5.651a.764.764 0 0 1-.754.754h-4.521v-4.521h-3.014v4.521h-4.521a.764.764 0 0 1-.754-.754V261.7a.161.161 0 0 1 .006-.035.161.161 0 0 0 .006-.035l6.77-5.581 6.77 5.581a.164.164 0 0 1 .012.07zm2.626-.812-.73.871a.4.4 0 0 1-.247.13h-.035a.362.362 0 0 1-.247-.082l-8.147-6.793-8.147 6.793a.437.437 0 0 1-.283.082.4.4 0 0 1-.247-.13l-.73-.871a.382.382 0 0 1-.082-.277.342.342 0 0 1 .13-.253l8.465-7.052a1.461 1.461 0 0 1 1.79 0l2.873 2.4v-2.3a.363.363 0 0 1 .377-.377h2.261a.363.363 0 0 1 .377.377v4.8l2.578 2.143a.342.342 0 0 1 .13.253.382.382 0 0 1-.087.286z" transform="translate(-89.889 -253)" fill={'currentColor'} />
              </svg>
            </span>
            {homeTitle}
          </Text>
        </Button>

        {breadcrumbsData && breadcrumbsData.length > 0 && breadcrumbsData.map((item, index) => {
          if (index === breadcrumbsData.length - 1) {
            return (
              <Text key={`breadcrumb${index}`} variant={'span'} color={color} typography={['sm', 'sm']}>{item.label}</Text>
            );
          }

          return (
            <Button variant={'text'} className={'contents !p-0 h-fit'} key={`breadcrumb${index}`} href={{ pathname: item?.path, query: { ...item?.params } }}>
              <Text variant={'span'} className={"after:content-['/'] after:px-1"} color={'grey.700'} typography={['sm', 'sm']}>
                {item.label}
              </Text>
            </Button>
          );
        })}
      </Text>
    </Div>
  );
};

export default Breadcrumbs;
