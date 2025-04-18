import { IconsProps } from '../icons.props';

const ArrowRightIcon = ({ fill = 'none', className = 'h-6 w-6' }: IconsProps) => {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill={fill} className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M5.93994 13.28L10.2866 8.93333C10.7999 8.42 10.7999 7.58 10.2866 7.06667L5.93994 2.72" stroke="currentColor"
        strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    </svg>

  );
};

export default ArrowRightIcon;
