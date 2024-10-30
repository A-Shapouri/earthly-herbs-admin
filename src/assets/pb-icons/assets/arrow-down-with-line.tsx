import { IconsProps } from '../icons.props';

const ArrowDownWithLineIcon = ({ fill = 'none', className = 'h-6 w-6' }: IconsProps) => {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill={fill} className={className} xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_1014_4095)">
        <path
          d="M9.75302 12.1304L13.7773 8.10612L14.8381 9.16695L9.00279 15.0023L3.16748 9.16695L4.22831 8.10612L8.25256 12.1304V2.99854H9.75302V12.1304Z"
          fill="currentColor" />
      </g>
      <defs>
        <clipPath id="clip0_1014_4095">
          <rect width="18.0056" height="18.0056" fill="white" transform="translate(0 -0.00244141)" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ArrowDownWithLineIcon;
