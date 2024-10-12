import { ChangeEvent } from "react";

export interface CheckboxProps {
  color?: 'primary' | 'secondary' | 'inherit' | 'black'

  className?: string

  onChange?: (e: ChangeEvent<HTMLInputElement>) => void

  checked?: boolean

  disabled?: boolean

  size?: 'small' | 'medium' | 'tiny'

}

