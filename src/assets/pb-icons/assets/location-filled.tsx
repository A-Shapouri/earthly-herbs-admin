import { IconsProps } from '@/icons/icons.props';

const LocationFilledIcon = ({ fill = 'none', className = 'h-6 w-6' }: IconsProps) => {
  return (
    <svg fill={fill} className={className} xmlns="http://www.w3.org/2000/svg" width="21.767" height="33.253" viewBox="0 0 21.767 33.253">
      <path fill="currentColor" d="M44.183,15.613a10.688,10.688,0,0,0-8.907-5.571c-.183-.008-.366-.012-.553-.012s-.37,0-.553.012a10.688,10.688,0,0,0-8.907,5.571,11.114,11.114,0,0,0,.021,10.921l9.44,16.749,9.44-16.749A11.114,11.114,0,0,0,44.183,15.613Zm-9.46,11.478A4.992,4.992,0,1,1,39.715,22.1,5,5,0,0,1,34.722,27.091ZM38.051,22.1a3.328,3.328,0,1,1-3.328-3.328A3.333,3.333,0,0,1,38.051,22.1Z" transform="translate(-23.839 -10.03)"/>
    </svg>
  );
};

export default LocationFilledIcon;
