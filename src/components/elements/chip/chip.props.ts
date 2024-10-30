import { CSSProperties, ReactNode } from 'react';
import { Colors, OverridableStringUnion, Rounded } from '@types';
import { TextProps } from '../text/text.props';

export interface ChipProps {
  value?: string

  variant?: 'outlined' | 'filled' | 'reverse'

  size?: Size

  color?: OverridableStringUnion<ChipColors, ChipPropsColorOverrides>;

  id?: string

  className?: string | undefined

  style?: CSSProperties | undefined;

  onClick?: (event?: any) => void

  onDelete?: (event?: any) => void

  textProps?: Omit<TextProps, 'children'>

  startAdornment?: ReactNode

  startAdornmentClassName?: string

  endAdornment?: ReactNode

  endAdornmentClassName?: string

  rounded?: Rounded
}

export interface ChipPropsColorOverrides {
}

export type ChipColors = Colors | 'black'

export type Size = 'small' | 'medium' | 'large';
