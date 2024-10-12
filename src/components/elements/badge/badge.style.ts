import { AnchorOriginProps, Shape, Size, Variant } from './badge.props';

export const COLORS = {
  primary: 'bg-primary border-primary text-white hover:bg-primary-700',
  black: 'bg-black border-black text-white hover:bg-black',
  secondary: 'bg-secondary border-secondary text-white hover:bg-secondary-700',
  inherit: 'bg-primary border-primary text-white hover:bg-primary-700 hover:text-primary',
};

/**
 *
 * @param size
 * @param shape
 * @param variant
 * @constructor
 */
export const SHAPES = ({ size, shape, variant }: { size: Size, shape: Shape, variant: Variant }) => {
  if (variant === 'dot') {
    return 'w-2 h-2 p-0 rounded-full';
  }
  let className = 'rounded-lg';
  if (shape === 'rounded') {
    className = 'rounded-full';
  }
  if (size === 'tiny') {
    className = `min-w-[12px] h-3 p-0 px-1 ${className}`;
  } else if (size === 'small') {
    className = `min-w-3 h-3 p-0 md:min-w-[16px] md:h-4 md:p-0 md:px-1 ${className}`;
  } else if (size === 'medium') {
    className = `min-w-[20px] h-5 p-0 px-1 ${className}`;
  } else if (size === 'large') {
    className = `min-w-[24px] h-6 p-0 px-1 ${className}`;
  } else if (size === 'huge') {
    className = `min-w-[32px] h-8 p-0 px-1 ${className}`;
  }

  return className;
};

/**
 *
 * @param vertical
 * @param horizontal
 * @constructor
 */
export const POSITIONS = ({ vertical, horizontal }: AnchorOriginProps) => {
  let translateYClassname = 'translate-y-0';
  let translateXClassname = 'translate-x-0';
  if (vertical === 'top') {
    translateYClassname = 'translate-y-0';
  }
  if (horizontal === 'left') {
    translateXClassname = 'translate-x-0';
  }
  return `${vertical}-0 ${horizontal}-0 ${translateYClassname} ${translateXClassname}`;
};
