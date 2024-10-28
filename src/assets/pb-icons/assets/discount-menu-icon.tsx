import { IconsProps } from '../icons.props';

const DiscountMenuIcon = ({ fill = 'none', className = 'h-6 w-6' }: IconsProps) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill={fill} className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M19.9702 10H3.97021V18C3.97021 21 4.97021 22 7.97021 22H15.9702C18.9702 22 19.9702 21 19.9702 18V10Z"
        stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path
        d="M21.5 7V8C21.5 9.1 20.97 10 19.5 10H4.5C2.97 10 2.5 9.1 2.5 8V7C2.5 5.9 2.97 5 4.5 5H19.5C20.97 5 21.5 5.9 21.5 7Z"
        stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path
        d="M11.6398 4.99994H6.11978C5.77978 4.62994 5.78978 4.05994 6.14978 3.69994L7.56978 2.27994C7.93978 1.90994 8.54978 1.90994 8.91978 2.27994L11.6398 4.99994Z"
        stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path
        d="M17.8701 4.99994H12.3501L15.0701 2.27994C15.4401 1.90994 16.0501 1.90994 16.4201 2.27994L17.8401 3.69994C18.2001 4.05994 18.2101 4.62994 17.8701 4.99994Z"
        stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path
        d="M8.93994 10V15.14C8.93994 15.94 9.81994 16.41 10.4899 15.98L11.4299 15.36C11.7699 15.14 12.1999 15.14 12.5299 15.36L13.4199 15.96C14.0799 16.4 14.9699 15.93 14.9699 15.13V10H8.93994Z"
        stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>

  );
};

export default DiscountMenuIcon;
