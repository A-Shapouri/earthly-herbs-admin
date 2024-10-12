export interface PaginationProps {
  currentPage?: number

  perPage: number

  lastPage: number

  getCurrentPage: (number: number) => void

  getLimit?: (event: string) => void

  previousPage?: () => void

  nextPage?: () => void

  isLoading: boolean

  total?: number

  hasLimit?: boolean

  showTotal?: boolean

  color?: 'primary' | 'secondary' | 'frost'

  variant?: 'filled' | 'text'

  rounded?: 'tiny' | 'small' | 'medium' | 'large' | 'huge' | 'full' | 'none'

  type?: 'simple' | 'default'
}
