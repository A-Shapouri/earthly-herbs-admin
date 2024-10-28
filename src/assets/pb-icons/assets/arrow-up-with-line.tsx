import { IconsProps } from '@/icons/icons.props';

const ArrowUpWithLineIcon = ({ fill = 'none', className = 'h-6 w-6' }: IconsProps) => {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill={fill} className={className} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8.25259 5.86963L4.22834 9.89388L3.16751 8.83305L9.00282 2.99774L14.8381 8.83305L13.7773 9.89388L9.75306 5.86963L9.75306 15.0015L8.25259 15.0015L8.25259 5.86963Z"
        fill="currentColor"/>
    </svg>
  );
};

export default ArrowUpWithLineIcon;
