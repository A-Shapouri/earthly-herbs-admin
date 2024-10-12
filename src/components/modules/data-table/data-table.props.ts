import { ColumnDef } from '@tanstack/react-table';

export interface DataTableProps {
  data: Array<any>

  header: any

  column: Array<ColumnDef<any>>

  mobileColumns?: Array<string>

  expandable?: boolean

  expandedComponent?: any

  serverSideSorting?: (sort: any) => void

  isLoading?: boolean

  getCurrentPage: (n: number) => void

  lastPage: number

  perPage: number

  currentPage: number

  total: number

  nextPage: any

  previousPage: any

  getLimit?: (event: string) => void

  columnOrder?:boolean
}
