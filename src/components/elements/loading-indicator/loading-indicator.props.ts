import { Colors, OverridableStringUnion } from '@types';

export interface LoadingIndicatorProps {
  color?: OverridableStringUnion<Colors,
    LoadingIndicatorPropsColorOverrides>;

  className?: string

  size?: 'tiny' | 'small' | 'medium' | 'large' | 'huge'
}

export interface LoadingIndicatorPropsColorOverrides {

}
