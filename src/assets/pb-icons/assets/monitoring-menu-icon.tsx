import { IconsProps } from '../icons.props';

const MonitoringMenuIcon = ({ fill = 'none', className = 'h-6 w-6' }: IconsProps) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill={fill} className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M10 17.5H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2 17.5V7.5C2 3.5 3 2.5 7 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
        strokeLinejoin="round"/>
      <path d="M22 17.5V7.5C22 3.5 21 2.5 17 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
        strokeLinejoin="round"/>
      <path
        d="M10 15.9099V19.1999C10 21.1999 9.2 21.9999 7.2 21.9999H4.8C2.8 21.9999 2 21.1999 2 19.1999V15.9099C2 13.9099 2.8 13.1099 4.8 13.1099H7.2C9.2 13.1099 10 13.9099 10 15.9099Z"
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path
        d="M22 15.9099V19.1999C22 21.1999 21.2 21.9999 19.2 21.9999H16.8C14.8 21.9999 14 21.1999 14 19.1999V15.9099C14 13.9099 14.8 13.1099 16.8 13.1099H19.2C21.2 13.1099 22 13.9099 22 15.9099Z"
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

export default MonitoringMenuIcon;
