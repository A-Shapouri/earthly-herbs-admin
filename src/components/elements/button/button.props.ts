import { LegacyRef, ReactNode } from 'react';
import { OverridableStringUnion, Rounded, Sizes, Colors } from '@types';
import { Types } from '../text/text.props';

export interface ButtonProps extends Omit<React.HTMLProps<HTMLButtonElement | HTMLAnchorElement>, 'size' | 'ref'> {
  buttonId?: string

  children?: ReactNode

  color?: OverridableStringUnion<Colors, ButtonPropsColorOverrides>;

  size?: Sizes

  variant?: Variant

  shape?: OverridableStringUnion<Shape, ButtonPropsShapeOverrides>

  rounded?: Rounded

  className?: string

  onClick?: (event?: any) => void

  onTouchStart?: (event?: any) => void

  onTouchEnd?: (event?: any) => void

  onMouseDown?: (event?: any) => void

  onMouseUp?: (event?: any) => void

  type?: 'button' | 'submit' | 'reset'

  disabled?: boolean

  loading?: boolean

  style?: any

  startAdornment?: ReactNode

  startAdornmentClassName?: string

  endAdornment?: ReactNode

  endAdornmentClassName?: string

  fontType?: Types

  href?: any

  dataTestId?: string

  prefetch?: boolean

  ariaLabel?: string

  ref?: LegacyRef<HTMLButtonElement>

  iconSize?: Sizes
}

export interface ButtonPropsColorOverrides {
  frost
}

export interface ButtonPropsShapeOverrides {
}

export type Variant = 'text' | 'outlined' | 'filled';
export type Shape = 'square' | 'rectangle'
export type FontColor = 'white' | 'black'
