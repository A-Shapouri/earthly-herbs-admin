import { Colors } from "@types";

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

  color?: Colors

  dir?: 'ltr' | 'rtl' | 'auto'
}
