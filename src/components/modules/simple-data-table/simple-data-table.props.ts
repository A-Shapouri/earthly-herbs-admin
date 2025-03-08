import { ColumnDef } from '@tanstack/react-table';

export interface SimpleDataTableProps {
  data: Array<any>

  header: any

  column: Array<ColumnDef<any>>

  mobileColumns?: Array<string>

  isLoading?: boolean

  updateData?: (value: string, info?: any) => void

  select?: boolean

  selectedRows?: (rows: Array<ColumnDef<any>>) => void
}
