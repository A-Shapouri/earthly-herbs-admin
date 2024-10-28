import React from 'react';

const CurrentLocationIcon = ({ className }: {className?: string}) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25">
      <g data-name="Union 20" fill={'none'} strokeLinecap={'round'}>
        <path d="M11.046 25v-4.195a8.437 8.437 0 0 1-6.852-6.852H0v-2.907h4.195a8.437 8.437 0 0 1 6.852-6.852V0h2.907v4.195a8.437 8.437 0 0 1 6.852 6.852H25v2.907h-4.195a8.437 8.437 0 0 1-6.852 6.852V25z" stroke={'none'}/>
        <path d="m12.5 16.998.769-.134a4.427 4.427 0 0 0 3.595-3.595l.134-.769-.134-.769a4.427 4.427 0 0 0-3.595-3.595l-.769-.134-.769.134a4.427 4.427 0 0 0-3.595 3.595l-.134.77.134.768a4.427 4.427 0 0 0 3.595 3.595l.77.134M13.953 25h-2.908v-4.195a8.437 8.437 0 0 1-6.851-6.851H0v-2.908h4.195a8.437 8.437 0 0 1 6.851-6.851V0h2.908v4.195a8.437 8.437 0 0 1 6.851 6.851H25v2.908h-4.195a8.437 8.437 0 0 1-6.851 6.851V25z" fill="currentColor" stroke={'none'}/>
      </g>
    </svg>

  );
};

export default CurrentLocationIcon;
