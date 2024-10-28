import { Colors, OverridableStringUnion } from '@types';

export interface SwitchBoxProps {
  color?: OverridableStringUnion<Colors,
    SwitchBoxPropsColorOverrides>;

  size?: Sizes,

  variant?: Variants

  value: boolean

  disabled?: boolean

  onChange?: () => void
}

export interface SwitchBoxPropsColorOverrides {

}

export type Sizes = 'tiny' | 'small' | 'medium' | 'large' | 'huge'
export type Variants = 'default' | 'rounded' | 'linear'
