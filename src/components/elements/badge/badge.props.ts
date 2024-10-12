import { ReactNode } from 'react';

export interface AnchorOriginProps {
  vertical: 'top' | 'bottom',
  horizontal: 'left' | 'right',
}

export interface BadgeProps {
  children: ReactNode

  badgeContent: number

  max?: number

  anchorOrigin?: AnchorOriginProps

  variant?: Variant;

  color?: 'primary' | 'secondary' | 'black' | 'inherit'

  size?: Size

  shape?: Shape

  className?: string
}

export type Variant = 'standard' | 'dot';
export type Size = 'tiny' | 'small' | 'medium' | 'large' | 'huge';
export type Shape = 'rectangle' | 'rounded'
