import { IconsProps } from '../icons.props';

const KeyIcon = ({ fill = 'none', className = 'h-6 w-6' }: IconsProps) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill={fill} className={className} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M19.7899 14.9301C17.7299 16.9801 14.7799 17.6101 12.1899 16.8001L7.4799 21.5001C7.1399 21.8501 6.4699 22.0601 5.9899 21.9901L3.8099 21.6901C3.0899 21.5901 2.4199 20.9101 2.3099 20.1901L2.0099 18.0101C1.9399 17.5301 2.1699 16.8601 2.4999 16.5201L7.1999 11.8201C6.3999 9.22007 7.0199 6.27007 9.0799 4.22007C12.0299 1.27007 16.8199 1.27007 19.7799 4.22007C22.7399 7.17007 22.7399 11.9801 19.7899 14.9301Z"
        stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.88989 17.49L9.18989 19.79" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10"
        strokeLinecap="round" strokeLinejoin="round"/>
      <path
        d="M14.5 11C15.3284 11 16 10.3284 16 9.5C16 8.67157 15.3284 8 14.5 8C13.6716 8 13 8.67157 13 9.5C13 10.3284 13.6716 11 14.5 11Z"
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

export default KeyIcon;
