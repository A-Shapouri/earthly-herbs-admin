import { TypographyEnum } from '../text/text.props';

export const COLORS = {
  black: 'bg-black border-black text-white hover:bg-black',
  primary: 'bg-primary border-primary !text-white hover:bg-primary-dark',
  danger: 'bg-danger border-danger !text-white hover:bg-danger-dark',
  warning: 'bg-warning border-warning !text-white hover:bg-warning-dark',
  secondary: 'bg-secondary border-secondary !text-white hover:bg-secondary-dark',
  tertiary: 'bg-tertiary border-tertiary !text-white hover:bg-tertiary-dark',
  success: 'bg-success border-success !text-white hover:bg-success-dark',
  info: 'bg-info border-info !text-white hover:bg-info-dark',
  control: 'bg-control border-control !text-white hover:bg-control-dark',
  inherit: 'bg-inherit border-inherit !text-white',
  slate: 'bg-slate-500 border-slate-500 !text-white hover:bg-slate-700',
  zinc: 'bg-zinc-500 border-zinc-500 !text-white hover:bg-zinc-700',
  neutral: 'bg-neutral-500 border-neutral-500 !text-white hover:bg-neutral-700',
  stone: 'bg-stone-500 border-stone-500 !text-white hover:bg-stone-700',
  red: 'bg-red-500 border-red-500 !text-white hover:bg-red-700',
  orange: 'bg-orange-500 border-orange-500 !text-white hover:bg-orange-700',
  amber: 'bg-amber-500 border-amber-500 !text-white hover:bg-amber-700',
  yellow: 'bg-yellow-500 border-yellow-500 !text-white hover:bg-yellow-700',
  lime: 'bg-lime-500 border-lime-500 !text-white hover:bg-lime-700',
  green: 'bg-green-500 border-green-500 !text-white hover:bg-green-700',
  emerald: 'bg-emerald-500 border-emerald-500 !text-white hover:bg-emerald-700',
  teal: 'bg-teal-500 border-teal-500 !text-white hover:bg-teal-700',
  cyan: 'bg-cyan-500 border-cyan-500 !text-white hover:bg-cyan-700',
  sky: 'bg-sky-500 border-sky-500 !text-white hover:bg-sky-700',
  blue: 'bg-blue-500 border-blue-500 !text-white hover:bg-blue-700',
  indigo: 'bg-indigo-500 border-indigo-500 !text-white hover:bg-indigo-700',
  violet: 'bg-violet-500 border-violet-500 !text-white hover:bg-violet-700',
  purple: 'bg-purple-500 border-purple-500 !text-white hover:bg-purple-700',
  fuchsia: 'bg-fuchsia-500 border-fuchsia-500 !text-white hover:bg-fuchsia-700',
  pink: 'bg-pink-500 border-pink-500 !text-white hover:bg-pink-700',
  rose: 'bg-rose-500 border-rose-500 !text-white hover:bg-rose-700',
};

export const DOT = {
  xxs: 'min-w-2 w-2 h-2',
  xs: 'min-w-3 w-3 h-3',
  sm: 'min-w-3 w-3 h-3',
  base: 'min-w-4 w-4 h-4',
  lg: 'min-w-4 w-4 h-4',
  xl: 'min-w-5 w-5 h-5',
};

export const STANDARD = {
  xxs: 'min-w-3 w-3 h-3 px-2',
  xs: 'min-w-4 w-4 h-4 px-2',
  sm: 'min-w-5 w-5 h-5 px-2',
  base: 'min-w-6 w-6 h-6 px-2',
  lg: 'min-w-8 w-8 h-8 px-2',
  xl: 'min-w-9 w-9 h-9 px-2',
};

export const TYPOGRAPHY = {
  xl: TypographyEnum['sm'],
  lg: TypographyEnum['sm'],
  base: TypographyEnum['xs'],
  sm: TypographyEnum['xs'],
  xs: TypographyEnum['xxs'],
  xxs: TypographyEnum['xxs'],
};
