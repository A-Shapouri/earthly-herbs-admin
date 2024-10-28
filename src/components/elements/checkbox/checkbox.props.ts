import { ChangeEvent } from 'react';
import { Colors, OverridableStringUnion } from '@types';

export interface CheckboxProps extends Omit<React.HTMLProps<HTMLInputElement>, 'size'> {
  color?: OverridableStringUnion<Colors,
    CheckboxPropsColorOverrides>;

  className?: string

  onChange?: (e: ChangeEvent<HTMLInputElement>) => void

  checked?: boolean

  disabled?: boolean

  size?: 'small' | 'medium' | 'large' | 'tiny' | 'huge'
}

export interface CheckboxPropsColorOverrides {
  black
}

