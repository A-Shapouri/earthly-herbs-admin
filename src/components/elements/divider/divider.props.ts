import { Colors, OverridableStringUnion } from '@types';

export interface DividerProps {

  color?: OverridableStringUnion<Colors,
    DividerPropsColorOverrides>;

  type?: 'solid' | 'dashed' | 'dotted';

  className?: string | undefined;

  shade?: 'light' | 'normal' | 'dark'

}

export interface DividerPropsColorOverrides {

}
