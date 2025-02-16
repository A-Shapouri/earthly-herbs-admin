export interface AlertProps {
  severity?: 'danger' | 'success' | 'info' | 'warning'

  variant?: 'filled' | 'outlined'

  title?: string

  description?: string

  className?: string

  onClose?: (event?: any) => void
}
