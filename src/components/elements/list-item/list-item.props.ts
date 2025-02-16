import { ReactNode } from 'react';
import { Colors, OverridableStringUnion } from '@types';
import { TextProps } from '../text/text.props';

export interface ListItemProps extends TextProps {
  children: ReactNode

  divider?: boolean

  dividerColor?: OverridableStringUnion<Colors,
    ListItemPropsColorOverrides>;

  className?: string

  disablePadding?: boolean

  hasBullet?: boolean

  bulletColor?: OverridableStringUnion<Colors,
    ListItemPropsColorOverrides>;

  bulletShape?: 'circle' | 'square'
}

export interface ListItemPropsColorOverrides {

}
