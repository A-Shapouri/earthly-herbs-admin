import { IconsProps } from '@/icons/icons.props';

const ArrowCircleDownIcon = ({ fill = 'none', className = 'h-6 w-6' }: IconsProps) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill={fill} className={className} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8.46997 10.7402L12 14.2602L15.53 10.7402" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
        strokeLinejoin="round"/>
    </svg>

  );
};

export default ArrowCircleDownIcon;
