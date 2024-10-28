import { Shape, Size } from './skeleton.props';

export const SIZES = {
  huge: 'h-14 md:h-16',
  large: 'h-12 md:h-14',
  medium: 'h-10 md:h-12',
  small: 'h-8 md:h-10',
  tiny: 'h-4 md:h-4',
};

export const COLORS = {
  primary: 'bg-primary-200 border-primary-200 text-primary-light',
  danger: 'bg-danger-200 border-danger-200 text-danger-light',
  warning: 'bg-warning-200 border-warning-200 text-warning-light',
  secondary: 'bg-secondary-200 border-secondary-200 text-secondary-light',
  control: 'bg-control-200 border-control-200 text-control-light',
  tertiary: 'bg-tertiary-200 border-tertiary-200 text-tertiary-light',
  success: 'bg-success-200 border-success-200 text-success-light',
  info: 'bg-info-200 border-info-200 text-info-light',
  inherit: 'bg-transparent border-transparent text-inherit',
  slate: 'bg-slate-200 border-slate-200 text-slate-300',
  zinc: 'bg-zinc-200 border-zinc-200 text-zinc-300',
  neutral: 'bg-neutral-200 border-neutral-200 text-neutral-300',
  stone: 'bg-stone-200 border-stone-200 text-stone-300',
  red: 'bg-red-200 border-red-200 text-red-300',
  orange: 'bg-orange-200 border-orange-200 text-orange-300',
  amber: 'bg-amber-200 border-amber-200 text-amber-300',
  yellow: 'bg-yellow-200 border-yellow-200 text-yellow-300',
  lime: 'bg-lime-200 border-lime-200 text-lime-300',
  green: 'bg-green-200 border-green-200 text-green-300',
  emerald: 'bg-emerald-200 border-emerald-200 text-emerald-300',
  teal: 'bg-teal-200 border-teal-200 text-teal-300',
  cyan: 'bg-cyan-200 border-cyan-200 text-cyan-300',
  sky: 'bg-sky-200 border-sky-200 text-sky-300',
  blue: 'bg-blue-200 border-blue-200 text-blue-300',
  indigo: 'bg-indigo-200 border-indigo-200 text-indigo-300',
  violet: 'bg-violet-200 border-violet-200 text-violet-300',
  purple: 'bg-purple-200 border-purple-200 text-purple-300',
  fuchsia: 'bg-fuchsia-200 border-fuchsia-200 text-fuchsia-300',
  pink: 'bg-pink-200 border-pink-200 text-pink-300',
  rose: 'bg-rose-200 border-rose-200 text-rose-300',
};

export const SHAPES = ({ size, shape }: { size: Size, shape: Shape }) => {
  let className = 'rounded';
  if (shape === 'rounded' || shape === 'circle') {
    className = 'rounded-full';
  }
  if (size === 'tiny') {
    className = `max-w-4 min-w-4 p-0 ${className}`;
  } else if (size === 'small') {
    className = `max-w-8 min-w-8 md:max-w-10 md:min-w-10 p-0 ${className}`;
  } else if (size === 'medium') {
    className = `max-w-10 min-w-10 md:max-w-12 md:min-w-12 p-0 ${className}`;
  } else if (size === 'large') {
    className = `max-w-12 min-w-12 md:max-w-14 md:min-w-14 p-0 ${className}`;
  } else if (size === 'huge') {
    className = `max-w-14 min-w-14 md:max-w-16 md:min-w-16 p-0 ${className}`;
  }
  return className;
};

