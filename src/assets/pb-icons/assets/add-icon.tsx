import React from 'react';

const AddIcon = ({ className }: {className?: string}) => {
  return (
    <svg className={className} width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M8 12H16' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
      <path d='M12 16V8' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    </svg>
  );
};

export default AddIcon;
