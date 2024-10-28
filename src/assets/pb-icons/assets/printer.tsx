import { IconsProps } from '../icons.props';

const PrinterIcon = ({ fill = 'none', className = 'h-6 w-6' }: IconsProps) => {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill={fill} className={className} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6.04169 5.83341H13.9584V4.16675C13.9584 2.50008 13.3334 1.66675 11.4584 1.66675H8.54169C6.66669 1.66675 6.04169 2.50008 6.04169 4.16675V5.83341Z"
        fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"
        strokeLinejoin="round"/>
      <path
        d="M13.3334 12.5V15.8333C13.3334 17.5 12.5 18.3333 10.8334 18.3333H9.16669C7.50002 18.3333 6.66669 17.5 6.66669 15.8333V12.5H13.3334Z"
        stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path
        d="M17.5 8.33325V12.4999C17.5 14.1666 16.6667 14.9999 15 14.9999H13.3333V12.4999H6.66667V14.9999H5C3.33333 14.9999 2.5 14.1666 2.5 12.4999V8.33325C2.5 6.66659 3.33333 5.83325 5 5.83325H15C16.6667 5.83325 17.5 6.66659 17.5 8.33325Z"
        stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14.1666 12.5H13.1583H5.83331" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10"
        strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.83331 9.16675H8.33331" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10"
        strokeLinecap="round" strokeLinejoin="round"/>
    </svg>

  );
};

export default PrinterIcon;
