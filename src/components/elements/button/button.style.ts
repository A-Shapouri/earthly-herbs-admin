import { Shape, Variant, ButtonPropsColorOverrides } from './button.props';
import { Sizes, Colors, OverridableStringUnion } from '@types';

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
  text: 'bg-transparent hover:bg-transparent inline text-control-light',
  outlined: 'border-control-300 border text-control',
  filled: 'bg-control-100 border-none text-control-dark',
};

export const COLORS = {
  frost: 'bg-frost border-frost text-black active:text-black hover:bg-frost-dark active:bg-frost-light',
  inherit: 'bg-transparent hover:bg-transparent',
  primary: 'bg-primary border-primary text-white hover:bg-primary-dark',
  danger: 'bg-danger border-danger text-white hover:bg-danger-dark active:bg-danger-light',
  warning: 'bg-warning border-warning text-white hover:bg-warning-dark active:bg-warning-light',
  secondary: 'bg-secondary border-secondary text-white hover:bg-secondary-dark',
  tertiary: 'bg-tertiary border-tertiary text-white hover:bg-tertiary-dark active:bg-tertiary-light',
  success: 'bg-success border-success text-white hover:bg-success-dark active:bg-success-light',
  info: 'bg-info border-info text-white hover:bg-info-dark active:bg-info-light',
  control: 'bg-control border-control text-white hover:bg-control-dark active:bg-control-light',
  slate: 'bg-slate-500 border-slate-500 text-white hover:bg-slate-700 active:bg-slate-300',
  zinc: 'bg-zinc-500 border-zinc-500 text-white hover:bg-zinc-700 active:bg-zinc-300',
  neutral: 'bg-neutral-500 border-neutral-500 text-white hover:bg-neutral-700 active:bg-neutral-300',
  stone: 'bg-stone-500 border-stone-500 text-white hover:bg-stone-700 active:bg-stone-300',
  red: 'bg-red-500 border-red-500 text-white hover:bg-red-700 active:bg-red-300',
  orange: 'bg-orange-500 border-orange-500 text-white hover:bg-orange-700 active:bg-orange-300',
  amber: 'bg-amber-500 border-amber-500 text-white hover:bg-amber-700 active:bg-amber-300',
  yellow: 'bg-yellow-500 border-yellow-500 text-white hover:bg-yellow-700 active:bg-yellow-300',
  lime: 'bg-lime-500 border-lime-500 text-white hover:bg-lime-700 active:bg-lime-300',
  green: 'bg-green-500 border-green-500 text-white hover:bg-green-700 active:bg-green-300',
  emerald: 'bg-emerald-500 border-emerald-500 text-white hover:bg-emerald-700 active:bg-emerald-300',
  teal: 'bg-teal-500 border-teal-500 text-white hover:bg-teal-700 active:bg-teal-300',
  cyan: 'bg-cyan-500 border-cyan-500 text-white hover:bg-cyan-700 active:bg-cyan-300',
  sky: 'bg-sky-500 border-sky-500 text-white hover:bg-sky-700 active:bg-sky-300',
  blue: 'bg-blue-500 border-blue-500 text-white hover:bg-blue-700 active:bg-blue-300',
  indigo: 'bg-indigo-500 border-indigo-500 text-white hover:bg-indigo-700 active:bg-indigo-300',
  violet: 'bg-violet-500 border-violet-500 text-white hover:bg-violet-700 active:bg-violet-300',
  purple: 'bg-purple-500 border-purple-500 text-white hover:bg-purple-700 active:bg-purple-300',
  fuchsia: 'bg-fuchsia-500 border-fuchsia-500 text-white hover:bg-fuchsia-700 active:bg-fuchsia-300',
  pink: 'bg-pink-500 border-pink-500 text-white hover:bg-pink-700 active:bg-pink-300',
  rose: 'bg-rose-500 border-rose-500 text-white hover:bg-rose-700 active:bg-rose-300',
};

export const OUTLINED_COLORS = {
  frost: 'border border-frost text-frost hover:bg-frost-100 hover:border-frost-dark hover:text-frost-dark active:border-frost-light active:text-frost-light',
  primary: 'border border-primary text-primary hover:bg-primary-100 hover:border-primary-dark hover:text-primary-dark active:border-primary-light active:text-primary-light',
  danger: 'border border-danger text-danger hover:bg-danger-100 hover:border-danger-dark hover:text-danger-dark active:border-danger-light active:text-danger-light',
  warning: 'border border-warning text-warning hover:bg-warning-100 hover:border-warning-dark hover:text-warning-dark active:border-warning-light active:text-warning-light',
  secondary: 'border border-secondary text-secondary hover:bg-secondary-100 hover:border-secondary-dark hover:text-secondary-dark active:border-secondary-light active:text-secondary-light',
  tertiary: 'border border-tertiary text-tertiary hover:bg-tertiary-100 hover:border-tertiary-dark hover:text-tertiary-dark active:border-tertiary-light active:text-tertiary-light',
  success: 'border border-success text-success hover:bg-success-100 hover:border-success-dark hover:text-success-dark active:border-success-light active:text-success-light',
  info: 'border border-info text-info hover:bg-info-100 hover:border-info-dark hover:text-info-dark active:border-info-light active:text-info-light',
  control: 'border border-control text-control hover:bg-control-100 hover:border-control-dark hover:text-control-dark active:border-control-light active:text-control-light',
  inherit: 'bg-transparent hover:bg-transparent',
  slate: 'border border-slate-500 text-slate-500 hover:bg-slate-100 hover:border-slate-700 hover:text-slate-700 active:border-slate-300 active:text-slate-300',
  zinc: 'border border-zinc-500 text-zinc-500 hover:bg-zinc-100 hover:border-zinc-700 hover:text-zinc-700 active:border-zinc-300 active:text-zinc-300',
  neutral: 'border border-neutral-500 text-neutral-500 hover:bg-neutral-100 hover:border-neutral-700 hover:text-neutral-700 active:border-neutral-300 active:text-neutral-300',
  stone: 'border border-stone-500 text-stone-500 hover:bg-stone-100 hover:border-stone-700 hover:text-stone-700 active:border-stone-300 active:text-stone-300',
  red: 'border border-red-500 text-red-500 hover:bg-red-100 hover:border-red-700 hover:text-red-700 active:border-red-300 active:text-red-300',
  orange: 'border border-orange-500 text-orange-500 hover:bg-orange-100 hover:border-orange-700 hover:text-orange-700 active:border-orange-300 active:text-orange-300',
  amber: 'border border-amber-500 text-amber-500 hover:bg-amber-100 hover:border-amber-700 hover:text-amber-700 active:border-amber-300 active:text-amber-300',
  yellow: 'border border-yellow-500 text-yellow-500 hover:bg-yellow-100 hover:border-yellow-700 hover:text-yellow-700 active:border-yellow-300 active:text-yellow-300',
  lime: 'border border-lime-500 text-lime-500 hover:bg-lime-100 hover:border-lime-700 hover:text-lime-700 active:border-lime-300 active:text-lime-300',
  green: 'border border-green-500 text-green-500 hover:bg-green-100 hover:border-green-700 hover:text-green-700 active:border-green-300 active:text-green-300',
  emerald: 'border border-emerald-500 text-emerald-500 hover:bg-emerald-100 hover:border-emerald-700 hover:text-emerald-700 active:border-emerald-300 active:text-emerald-300',
  teal: 'border border-teal-500 text-teal-500 hover:bg-teal-100 hover:border-teal-700 hover:text-teal-700 active:border-teal-300 active:text-teal-300',
  cyan: 'border border-cyan-500 text-cyan-500 hover:bg-cyan-100 hover:border-cyan-700 hover:text-cyan-700 active:border-cyan-300 active:text-cyan-300',
  sky: 'border border-sky-500 text-sky-500 hover:bg-sky-100 hover:border-sky-700 hover:text-sky-700 active:border-sky-300 active:text-sky-300',
  blue: 'border border-blue-500 text-blue-500 hover:bg-blue-100 hover:border-blue-700 hover:text-blue-700 active:border-blue-300 active:text-blue-300',
  indigo: 'border border-indigo-500 text-indigo-500 hover:bg-indigo-100 hover:border-indigo-700 hover:text-indigo-700 active:border-indigo-300 active:text-indigo-300',
  violet: 'border border-violet-500 text-violet-500 hover:bg-violet-100 hover:border-violet-700 hover:text-violet-700 active:border-violet-300 active:text-violet-300',
  purple: 'border border-purple-500 text-purple-500 hover:bg-purple-100 hover:border-purple-700 hover:text-purple-700 active:border-purple-300 active:text-purple-300',
  fuchsia: 'border border-fuchsia-500 text-fuchsia-500 hover:bg-fuchsia-100 hover:border-fuchsia-700 hover:text-fuchsia-700 active:border-fuchsia-300 active:text-fuchsia-300',
  pink: 'border border-pink-500 text-pink-500 hover:bg-pink-100 hover:border-pink-700 hover:text-pink-700 active:border-pink-300 active:text-pink-300',
  rose: 'border border-rose-500 text-rose-500 hover:bg-rose-100 hover:border-rose-700 hover:text-rose-700 active:border-rose-300 active:text-rose-300',
};

export const TEXT_COLORS = {
  frost: 'text-frost hover:text-frost-dark active:text-frost-light',
  primary: 'text-primary hover:text-primary-dark active:text-primary-light',
  danger: 'text-danger hover:text-danger-dark active:text-danger-light',
  warning: 'text-warning hover:text-warning-dark active:text-warning-light',
  secondary: 'text-secondary hover:text-secondary-dark active:text-secondary-light',
  tertiary: 'text-tertiary hover:text-tertiary-dark active:text-tertiary-light',
  success: 'text-success hover:text-success-dark active:text-success-light',
  info: 'text-info hover:text-info-dark active:text-info-light',
  control: 'text-control hover:text-control-dark active:text-control-light',
  inherit: 'text-inherit',
  slate: 'text-slate-500 hover:text-slate-700 active:text-slate-300',
  zinc: 'text-zinc-500 hover:text-zinc-700 active:text-zinc-300',
  neutral: 'text-neutral-500 hover:text-neutral-700 active:text-neutral-300',
  stone: 'text-stone-500 hover:text-stone-700 active:text-stone-300',
  red: 'text-red-500 hover:text-red-700 active:text-red-300',
  orange: 'text-orange-500 hover:text-orange-700 active:text-orange-300',
  amber: 'text-amber-500 hover:text-amber-700 active:text-amber-300',
  yellow: 'text-yellow-500 hover:text-yellow-700 active:text-yellow-300',
  lime: 'text-lime-500 hover:text-lime-700 active:text-lime-300',
  green: 'text-green-500 hover:text-green-700 active:text-green-300',
  emerald: 'text-emerald-500 hover:text-emerald-700 active:text-emerald-300',
  teal: 'text-teal-500 hover:text-teal-700 active:text-teal-300',
  cyan: 'text-cyan-500 hover:text-cyan-700 active:text-cyan-300',
  sky: 'text-sky-500 hover:text-sky-700 active:text-sky-300',
  blue: 'text-blue-500 hover:text-blue-700 active:text-blue-300',
  indigo: 'text-indigo-500 hover:text-indigo-700 active:text-indigo-300',
  violet: 'text-violet-500 hover:text-violet-700 active:text-violet-300',
  purple: 'text-purple-500 hover:text-purple-700 active:text-purple-300',
  fuchsia: 'text-fuchsia-500 hover:text-fuchsia-700 active:text-fuchsia-300',
  pink: 'text-pink-500 hover:text-pink-700 active:text-pink-300',
  rose: 'text-rose-500 hover:text-rose-700 active:text-rose-300',
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
export const COLOR_VARIANTS = ({ color, variant }: { color: OverridableStringUnion<Colors, ButtonPropsColorOverrides>, variant: Variant }) => {
  if (variant === 'filled') {
    return COLORS[color];
  } else if (variant === 'outlined') {
    return OUTLINED_COLORS[color];
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
