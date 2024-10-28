import { IconsProps } from '@/icons/icons.props';

const ArrowLeftIcon = ({ fill = 'none', className = 'h-6 w-6' }: IconsProps) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill={fill} className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M15.0001 19.9201L8.48009 13.4001C7.71009 12.6301 7.71009 11.3701 8.48009 10.6001L15.0001 4.08008"
        stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

export default ArrowLeftIcon;
