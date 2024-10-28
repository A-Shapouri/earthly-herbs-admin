import { OverridableStringUnion, Colors } from '@types';

export interface SkeletonProps {
  className?: string

  size?: Size

  color?: OverridableStringUnion<Colors,
    SkeletonPropsColorOverrides>;

  shape?: Shape
}

export interface SkeletonPropsColorOverrides {

}

export type Size = 'tiny' | 'small' | 'medium' | 'large' | 'huge';
export type Shape = 'rectangular' | 'rounded' | 'circle'
