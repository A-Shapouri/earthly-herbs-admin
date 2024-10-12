import { TypographyEnum } from '../text/text.props';

export const VARIANTS = {
  outlined: '!bg-white border hover:bg-white',
  filled: 'border',
};

export const SIZES = {
  large: 'md:h-9 md:min-w-9 h-8 min-w-8',
  medium: 'h-8 min-w-8',
  small: 'h-6 min-w-6',
};

export const COLORS = {
  primary: 'bg-primary-600 border-primary-600 text-white',
  secondary: 'bg-secondary-600 border-secondary-600 text-white',
  brown: 'bg-brown-600 border-brown-600 text-white',
  black: 'bg-black border-black text-white',
  inherit: 'bg-transparent hover:bg-transparent',
};

export const OUTLINED_COLORS = {
  primary: 'bg-white border border-primary text-primary',
  secondary: 'bg-white border border-secondary text-secondary',
  brown: 'bg-white border border-brown text-brown',
  black: 'bg-white border border-black text-black',
  inherit: 'bg-transparent hover:bg-transparent',
};

export const REVERSE_COLORS = {
  primary: 'bg-primary-100 border-primary-100 text-primary-800',
  secondary: 'bg-secondary-100 border-secondary-100 text-secondary-800',
  brown: 'bg-brown-100 border-brown-100 text-brown-800',
  black: 'bg-control-100 border-control-100 text-black',
  inherit: 'bg-transparent hover:bg-transparent',
};

export const HOVER_COLORS = {
  primary: 'hover:bg-primary-700 hover:border-primary-700 active:bg-primary-300',
  secondary: 'hover:bg-secondary-70 hover:border-secondary-700 active:bg-secondary-300',
  brown: 'hover:bg-brown-700 hover:border-brown-700 active:bg-tertiary-300',
  black: 'hover:bg-primary-700 hover:border-primary-700 active:bg-primary-300',
  inherit: 'bg-transparent hover:bg-transparent',
};

export const OUTLINED_HOVER_COLORS = {
  primary: 'hover:bg-primary-50 hover:border-primary-700 hover:text-primary-700 active:border-primary-300 active:text-primary-300',
  secondary: 'hover:bg-secondary-50 hover:border-secondary-700 hover:text-secondary-700 active:border-secondary-300 active:text-secondary-300',
  brown: 'hover:bg-brown-50 hover:border-brown-700 hover:text-brown-700 active:border-brown-300 active:text-brown-300',
  black: 'hover:bg-control-100 hover:border-control-700 active:border-control-300 active:text-control-300',
  inherit: 'bg-transparent hover:bg-transparent',
};

export const REVERSE_HOVER_COLORS = {
  primary: 'hover:bg-primary-400 hover:border-primary-400 hover:text-primary-900 active:border-primary-700 active:text-primary-700',
  secondary: 'hover:bg-secondary-400 hover:border-secondary-400 hover:text-secondary-900 active:border-secondary-700 active:text-secondary-700',
  brown: 'hover:bg-brown-400 hover:border-brown-400 hover:text-brown-900 active:border-brown-700 active:text-brown-700',
  black: 'hover:bg-black-400 hover:border-black-400 hover:text-black-900 active:border-black-700 active:text-black-700',
  inherit: 'bg-transparent hover:bg-transparent',
};

export const ROUNDED = {
  full: 'rounded-full',
  huge: 'rounded-2xl',
  large: 'rounded-md',
  medium: 'rounded-lg',
  small: 'rounded',
  tiny: 'rounded-sm',
  none: 'rounded-none',
};

export const ICON_SIZE = {
  small: 18,
  medium: 22,
  large: 22,
};
