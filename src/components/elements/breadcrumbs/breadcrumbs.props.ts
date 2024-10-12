import { Colors } from '@types';

interface DataInterface {
  label: string;
  path?: string;
  params?: object
}

export interface BreadcrumbProps {
  breadcrumbsData: DataInterface[]

  className?: string

  homeTitle?: string

  homeTitleClassName?: string

  color?: Colors | 'grey.50' | 'grey.100' | 'grey.200' | 'grey.300' | 'grey.400' | 'grey.500' | 'grey.600' | 'grey.700' | 'grey.800' | 'grey.900' | 'grey.950' | 'black' | 'white'

  dir?: 'ltr' | 'rtl' | 'auto'
}
