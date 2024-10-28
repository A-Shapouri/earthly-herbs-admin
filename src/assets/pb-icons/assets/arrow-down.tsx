import { IconsProps } from '@/icons/icons.props';

const ArrowDownIcon = ({ fill = 'none', className = 'h-6 w-6' }: IconsProps) => {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill={fill} className={className} xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd"
        d="M4.4107 6.91073C4.73614 6.5853 5.26378 6.5853 5.58922 6.91073L9.99996 11.3215L14.4107 6.91074C14.7361 6.5853 15.2638 6.5853 15.5892 6.91074C15.9147 7.23617 15.9147 7.76381 15.5892 8.08925L10.5892 13.0892C10.2638 13.4147 9.73614 13.4147 9.4107 13.0892L4.4107 8.08925C4.08527 7.76381 4.08527 7.23617 4.4107 6.91073Z"
        fill="currentColor"/>
    </svg>
  );
};

export default ArrowDownIcon;
