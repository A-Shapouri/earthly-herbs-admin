import { CSSProperties, ReactNode } from 'react';
import { OverridableStringUnion, Colors } from '@types';

export interface TextProps {
  itemProp?: string

  children: string | ReactNode

  variant?: Variants

  className?: string

  /**
   * Typography
   * @property [Mobile, Desktop]
   * @param tiny M-7px | D-8xp
   * @param xxs M-10px | D-12px
   * @param xs M-11px | D-14px
   * @param sm M-12px | D-16px
   * @param base M-13px | D-18px
   * @param md M-14px | D-20px
   * @param lg M-16px | D-24px
   * @param xl M-20px | D-32px
   * @param xxl M-24px | D-40px
   * @param huge M-32px | D-48px
   */
  typography?: [Typography, Typography]

  color?: OverridableStringUnion<TextColors>;

  align?: Align

  /**
   * Font Weight
   * @property light - 300
   * @property medium - 400
   * @property normal - 500
   * @property bold - 600
   * @property black - 700
   */
  type?: Types

  style?: CSSProperties

  disabled?: boolean

  /**
  * Direction
  * @param rtl
  * @param ltr
  * @param auto
  */
  dir?: 'rtl' | 'ltr' | 'auto'

  onClick?: () => void
}

export type Variants = 'p' | 'body' | 'caption' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'li'
export type Typography = 'tiny' | 'xxs' | 'xs' | 'sm' | 'base' | 'md' | 'lg' | 'xl' | 'xxl' | 'huge'
export type TextColors = Colors | 'brown' | 'grey.50' | 'grey.100' | 'grey.200' | 'grey.300' | 'grey.400' | 'grey.500' | 'grey.600' | 'grey.700' | 'grey.800' | 'grey.900' | 'grey.950' | 'black' | 'white'
export type Align = 'right' | 'left' | 'center' | 'justify' | 'start' | 'end' | 'inherit'
export type Types = 'medium' | 'bold' | 'light' | 'normal' | 'black'

export enum TypographyEnum {
  'xxs' = 'xxs',
  'xs' = 'xs',
  'sm' = 'sm',
  'base' = 'base',
  'lg' = 'lg',
  'md' = 'md',
  'xl' = 'xl',
  'xxl' = 'xxl',
  'tiny' = 'tiny',
  'huge' = 'huge',
  'inherit' = 'inherit',
}
