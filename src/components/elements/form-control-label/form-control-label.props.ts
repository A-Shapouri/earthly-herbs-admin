import { ReactNode, Ref } from 'react';
import { TextProps } from '../text/text.props';

export interface FormControlLabelProps {
  children?: ReactNode

  label: string

  className?: string

  containerRef?: Ref<HTMLLabelElement>

  textProps?: Omit<TextProps, 'children'>

  disabled?: boolean
}
