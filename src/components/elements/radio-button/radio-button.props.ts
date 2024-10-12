import { ChangeEvent } from 'react';

export interface RadioButtonProps extends Omit<React.HTMLProps<HTMLInputElement>, 'size'> {
  color?: 'primary' | 'secondary'

  className?: string

  disabled?: boolean

  checked?: boolean

  value?: string | number

  name: string

  onChange?: (e: ChangeEvent<HTMLInputElement>) => void

  size?: 'small' | 'medium' | 'large' | 'tiny' | 'huge'

  id?: string
}
