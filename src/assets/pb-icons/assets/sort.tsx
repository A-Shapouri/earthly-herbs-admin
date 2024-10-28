import React from 'react';

const SortIcon = ({ direction } : { direction: string }) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g>
        <g>
          <path d="M9.00999 20.5L3.98999 15.49" stroke={direction === 'desc' ? 'currentColor' : '#A8A8A8'} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9.01001 3.5V20.5" stroke={direction === 'desc' ? 'currentColor' : '#A8A8A8'} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14.99 3.5L20.01 8.51" stroke={direction === 'asc' ? 'currentColor' : '#A8A8A8'} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14.99 20.5V3.5" stroke={direction === 'asc' ? 'currentColor' : '#A8A8A8'} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
      </g>
    </svg>
  );
};

export default SortIcon;
