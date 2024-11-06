import { OverridableStringUnion, Colors } from '@types';
import { ReactNode } from 'react';

export interface MultiSelectProps {
  optionsList: Lists[]

  value: number[]

  onChange: (newValue: number[]) => void

  id: number | string

  text: string

  placeholder?: string

  label?: string

  disabled?: boolean

  variant?: Variant

  color?: OverridableStringUnion<Colors,
    MultiSelectPropsColorOverrides>;

  size?: 'small' | 'medium' | 'large'

  error?: boolean

  startAdornment?: ReactNode

  helperText?: string

  rounded?: 'full' | 'huge' | 'large' | 'medium' | 'small' | 'tiny' | 'none'

  direction?: 'rtl' | 'ltr'
}

export type Variant = 'outlined' | 'filled';

export interface MultiSelectPropsColorOverrides {

}

export interface Lists {
  id: number | string
  name: string
}
