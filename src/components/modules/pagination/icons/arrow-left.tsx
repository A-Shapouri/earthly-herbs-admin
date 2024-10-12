import React from 'react';

const ArrowLeft = ({ fill = 'none', className = 'h-3 w-3' }: {fill?: string, className?: string}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="256"
      height="256"
      viewBox="0 0 256 256"
      className={className}
      fill={fill}
    >
      <path
        fill={'currentColor'}
        strokeMiterlimit="10"
        strokeWidth="0"
        d="M65.36 0L69.64 4.28 28.92 45 69.64 85.72 65.36 90 20.36 45z"
        transform="matrix(2.81 0 0 2.81 1.407 1.407)"
      />
    </svg>
  );
};

export default ArrowLeft;
