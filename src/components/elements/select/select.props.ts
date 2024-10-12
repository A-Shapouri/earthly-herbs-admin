import { Sizes, Rounded } from '@types';
import { ReactNode } from 'react';

export interface SelectProps extends Omit<React.HTMLProps<HTMLSelectElement>, 'size' | 'autoComplete' | 'value'> {
  optionsList: Array<any>

  className?: string

  placeholder?: string

  label?: string

  value: string | null

  onChange: (newValue: any) => void

  id: string

  text: string

  disabled?: boolean

  variant?: Variant

  color?: 'primary' | 'secondary'

  size?: Sizes

  error?: boolean

  startAdornment?: ReactNode

  helperText?: string,

  rounded?: Rounded

  autoComplete?: boolean
}

export type Variant = 'outlined' | 'text';

export interface SelectPropsColorOverrides {

}
