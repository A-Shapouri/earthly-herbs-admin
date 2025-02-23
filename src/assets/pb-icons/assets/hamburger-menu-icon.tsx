import React from 'react';
import classNames from '@utils/helpers/class-names';

const HamburgerMenuIcon = ({ close, fill, className = 'h-6 w-6' }: { close: boolean, fill?: string, className?: string }) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill={fill} className={className} xmlns="http://www.w3.org/2000/svg">
      <path
        className={
          classNames(
            'transition-all duration-300',
            close ? 'opacity-0' : 'opacity-100 delay-500',)
        }
        d="M22.5 10.5H1.5C0.671578 10.5 0 11.1716 0 12C0 12.8284 0.671578 13.5 1.5 13.5H22.5C23.3284 13.5 24 12.8284 24 12C24 11.1716 23.3284 10.5 22.5 10.5Z"
        fill="currentColor" />
      <path
        className={
          classNames(
            'transition-all duration-500',
            close ? 'rotate-45 translate-x-1.5' : 'delay-500')}
        d="M1.5 6.50001H22.5C23.3284 6.50001 24 5.82843 24 5C24 4.17158 23.3284 3.5 22.5 3.5H1.5C0.671578 3.5 0 4.17158 0 5C0 5.82843 0.671578 6.50001 1.5 6.50001Z"
        fill="currentColor" />
      <path
        className={
          classNames(
            'transition-all duration-500',
            close ? '-rotate-45 translate-y-[7px] -translate-x-2.5' : 'delay-500')}
        d="M22.5 17.5H1.5C0.671578 17.5 0 18.1716 0 19C0 19.8284 0.671578 20.5 1.5 20.5H22.5C23.3284 20.5 24 19.8284 24 19C24 18.1716 23.3284 17.5 22.5 17.5Z" fill="currentColor" />
    </svg>
  );
};
export default HamburgerMenuIcon;
