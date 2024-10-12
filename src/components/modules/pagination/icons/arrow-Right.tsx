import React from 'react';

const ArrowRight = ({ fill = 'none', className = 'h-3 w-3' }: {fill?: string, className?: string}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="256"
      height="256"
      viewBox="0 0 256 256"
      fill={fill}
      className={className}
    >
      <path
        fill={'currentColor'}
        strokeMiterlimit="10"
        strokeWidth="0"
        d="M24.64 90L20.36 85.72 61.08 45 20.36 4.28 24.64 0 69.64 45z"
        transform="matrix(2.81 0 0 2.81 1.407 1.407)"
      />
    </svg>
  );
};

export default ArrowRight;
