import { Shape, Variant, ButtonColor } from './button.props';
import { Sizes } from '@types';

export const SIZES = {
  large: 'h-10 min-h-10 md:h-12 md:min-h-12 text-m-md md:text-d-sm md:gap-x-6 gap-x-2 md:px-6 px-2',
  medium: 'h-9 min-h-9 md:h-10 md:min-h-10 text-m-sm md:text-d-sm gap-x-3 px-4',
  small: 'h-[30px] min-h-[30px] md:h-9 md:min-h-9 text-m-sm md:text-d-xs gap-x-2 px-4',
};

export const SQUARE_SHAPE_SIZES = {
  large: 'min-w-10 max-w-10 w-10 md:min-w-12 md:max-w-12 md:w-12',
  medium: 'min-w-9 max-w-9 w-9 md:min-w-10 md:max-w-10 md:w-10',
  small: 'min-w-[30px] max-w-[30px] w-[30px] md:min-w-9 md:max-w-9 md:w-9',
};

export const ROUNDED = {
  full: 'rounded-full',
  huge: 'rounded-3xl',
  large: 'rounded-2xl',
  medium: 'rounded-lg',
  small: 'rounded',
  tiny: 'rounded-sm',
  none: 'rounded-none',
};

export const DISABLED_VARIANTS = {
  text: 'bg-transparent hover:bg-transparent inline text-grey-300',
  filled: 'bg-grey-100 border-none text-grey-700',
};

export const COLORS = {
  primary: 'bg-primary border-primary text-white hover:bg-primary-800 active:bg-primary-400',
  frost: 'bg-frost border-frost text-black active:text-black hover:bg-frost-800 active:bg-frost-400',
  secondary: 'bg-secondary border-secondary text-white hover:bg-secondary-700 active:bg-secondary-300',
  inherit: 'bg-transparent hover:bg-transparent',
};

export const TEXT_COLORS = {
  primary: 'text-primary hover:text-primary-700 active:text-primary-300',
  secondary: 'text-secondary hover:text-secondary-700 active:text-secondary-300',
  inherit: 'text-inherit',
  frost: 'text-black',
};

export const ICON_SIZES = {
  large: 'h-6 min-h-6 max-h-6 w-6 min-w-6 max-w-6 md:h-8 md:min-h-8 md:max-h-8 md:w-8 md:min-w-8 md:max-w-8',
  medium: 'h-5 min-h-5 max-h-5 w-5 min-w-5 max-w-5 md:h-6 md:min-h-6 md:max-h-6 md:w-6 md:min-w-6 md:max-w-6',
  small: 'h-4 min-h-4 max-h-4 w-4 min-w-4 max-w-4 md:h-5 md:min-h-5 md:max-h-5 md:w-5 md:min-w-5 md:max-w-5',
};

/**
 *
 * @param size
 * @param variant
 * @constructor
 */
export const COLOR_VARIANTS = ({ color, variant }: { color: ButtonColor, variant: Variant }) => {
  if (variant === 'filled') {
    return COLORS[color];
  }
  return TEXT_COLORS[color];
};

/**
 *
 * @param size
 * @param shape
 * @constructor
 */
export const SHAPES = ({ size, shape }: { size: Sizes, shape: Shape }) => {
  let className = '';

  if (shape === 'square') {
    className = `${SQUARE_SHAPE_SIZES[size]} ${className} whitespace-nowrap overflow-hidden text-ellipsis`;
  }
  return className;
};
