import { Sizes, Variants } from './switch-box.props';
import { Colors } from '@types';

export const LABEL_VARIANT_SIZES = ({ checked, color, variant, size }: { checked: boolean, color: Colors, variant: Variants, size: Sizes }) => {
  let className = CONTAINER_SIZES[size];
  if (variant === 'linear') {
    className = LINEAR_CONTAINER_SIZES[size];
  }
  if (checked) {
    className = `${className} ${COLORS[color]}`;
  } else {
    className = `${className} bg-control hover:bg-control-dark`;
  }

  return className;
};

export const CONTAINER_SIZES = {
  huge: 'w-20 h-[40px]',
  large: 'w-16 h-[34px]',
  medium: 'w-14 h-[28px]',
  small: 'w-12 h-[22px]',
  tiny: 'w-10 h-[18px]',
};

export const LINEAR_CONTAINER_SIZES = {
  huge: 'w-9 h-3',
  large: 'w-8 h-3',
  medium: 'w-7 h-3',
  small: 'w-6 h-3',
  tiny: 'w-5 h-3',
};

export const CHECKED = (checked: boolean, color: Colors) => {
  if (checked) {
    return `${COLORS[color]} translate-x-1/2`;
  }
  return ``;
};

export const COLORS = {
  primary: 'bg-primary hover:bg-primary-dark',
  danger: 'bg-danger hover:bg-danger-dark',
  warning: 'bg-warning hover:bg-warning-dark',
  secondary: 'bg-secondary hover:bg-secondary-dark',
  control: 'bg-control-700 hover:bg-control-900',
  tertiary: 'bg-tertiary hover:bg-tertiary-dark',
  success: 'bg-success hover:bg-success-dark',
  info: 'bg-info hover:bg-info-dark',
  inherit: 'bg-inherit hover:bg-inherit-dark',
  slate: 'bg-slate-500 hover:bg-slate-700',
  zinc: 'bg-zinc-500 hover:bg-zinc-700',
  neutral: 'bg-neutral-500 hover:bg-neutral-700',
  stone: 'bg-stone-500 hover:bg-stone-700',
  red: 'bg-red-500 hover:bg-red-700',
  orange: 'bg-orange-500 hover:bg-orange-700',
  amber: 'bg-amber-500 hover:bg-amber-700',
  yellow: 'bg-yellow-500 hover:bg-yellow-700',
  lime: 'bg-lime-500 hover:bg-lime-700',
  green: 'bg-green-500 hover:bg-green-700',
  emerald: 'bg-emerald-500 hover:bg-emerald-700',
  teal: 'bg-teal-500 hover:bg-teal-700',
  cyan: 'bg-cyan-500 hover:bg-cyan-700',
  sky: 'bg-sky-500 hover:bg-sky-700',
  blue: 'bg-blue-500 hover:bg-blue-700',
  indigo: 'bg-indigo-500 hover:bg-indigo-700',
  violet: 'bg-violet-500 hover:bg-violet-700',
  purple: 'bg-purple-500 hover:bg-purple-700',
  fuchsia: 'bg-fuchsia-500 hover:bg-fuchsia-700',
  pink: 'bg-pink-500 hover:bg-pink-700',
  rose: 'bg-rose-500 hover:bg-rose-700',
};

export const SIZES = {
  huge: 'before:h-7 before:w-7 rounded-[40px] shadow-2xl',
  large: 'before:h-6 before:w-6 rounded-[34px] shadow-2xl',
  medium: 'before:h-5 before:w-5 rounded-[28px]',
  small: 'before:h-4 before:w-4 rounded-[22px]',
  tiny: 'before:h-3 before:w-3 rounded-[18px]',
};

export const LABEL_SIZES = {
  huge: 'w-7 h-7',
  large: 'w-6 h-6',
  medium: 'w-5 h-5',
  small: 'w-4 h-4',
  tiny: 'w-3 h-3',
};

export const LABEL_VARIANT_ROUNDING = {
  default: 'rounded-lg',
  linear: 'rounded-full',
  rounded: 'rounded-full',
};
