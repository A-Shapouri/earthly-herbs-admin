import { IconsProps } from '../icons.props';

const RedoIcon = ({ fill = 'none', className = 'h-6 w-6' }: IconsProps) => {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill={fill} className={className} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14.0583 15.2584H7.39167C5.09167 15.2584 3.22501 13.3917 3.22501 11.0917C3.22501 8.79172 5.09167 6.92505 7.39167 6.92505H16.5583"
        stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14.6417 9.00837L16.775 6.87503L14.6417 4.7417" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
        strokeLinejoin="round"/>
    </svg>
  );
};

export default RedoIcon;
