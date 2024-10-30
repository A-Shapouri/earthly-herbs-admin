import { ReactNode, Ref } from 'react';
import { Colors, OverridableStringUnion, Rounded, Sizes } from '@types';

export interface TextFieldProps extends Omit<React.HTMLProps<HTMLInputElement | HTMLTextAreaElement>, 'size' | 'ref'> {
  inputId?: string

  variant?: 'outlined' | 'filled'

  className?: string

  placeholder?: string

  size?: Sizes

  color?: OverridableStringUnion<Colors,
    TextFieldPropsColorOverrides>;

  rounded?: Rounded

  error?: boolean

  helperText?: string | undefined

  disabled?: boolean

  multiline?: boolean

  maxRows?: number

  autoComplete?: string

  placeholderPosition?: 'center' | 'right' | 'left'

  textColor?: 'grey' | 'black'

  inputClassName?: string

  type?: 'button' | 'checkbox' | 'color' | 'date' | 'datetime-local' | 'email' | 'file' | 'hidden' | 'image' | 'month' | 'number' | 'password' | 'radio' | 'range' | 'reset' | 'search' | 'submit' | 'tel' | 'text' | 'time' | 'url' | 'week'

  inputMode?: 'none' | 'text' | 'decimal' | 'numeric' | 'tel' | 'search' | 'email' | 'url'

  maxLength?: number

  onChange?: (e: any) => void

  onKeyPress?: (e: any) => void

  value?: string

  startAdornment?: ReactNode

  startAdornmentClassName?: string

  endAdornment?: ReactNode

  endAdornmentClassName?: string

  containerRef?: Ref<HTMLDivElement>

  onFocus?: (e?: any) => void

  label?: string

  hasCounter?: boolean

  price?: boolean
}

export interface TextFieldPropsColorOverrides {

}

