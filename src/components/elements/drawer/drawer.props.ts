import { ReactNode } from 'react';

export interface DrawerProps {
  anchor?: 'start' | 'end' | 'bottom' | 'top'

  open: boolean

  onClose: () => void

  children: ReactNode

  className?: string
}
