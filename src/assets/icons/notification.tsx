import { IconsProps } from '../pb-icons/icons.props';

const NotificationIcon = ({ fill = 'none', className = 'h-6 w-6' }: IconsProps) => {
  return (
    <svg width="19" height="18" viewBox="0 0 19 18" fill={fill} className={className} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M17.1667 7.875V11.625C17.1667 14.25 15.6667 15.375 13.4167 15.375H5.91675C3.66675 15.375 2.16675 14.25 2.16675 11.625V6.375C2.16675 3.75 3.66675 2.625 5.91675 2.625H11.1667"
        stroke="currentColor" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5.91675 6.75L8.26425 8.625C9.03675 9.24 10.3043 9.24 11.0768 8.625L11.9617 7.92" stroke="currentColor"
        strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M15.2917 6C16.3273 6 17.1667 5.16053 17.1667 4.125C17.1667 3.08947 16.3273 2.25 15.2917 2.25C14.2562 2.25 13.4167 3.08947 13.4167 4.125C13.4167 5.16053 14.2562 6 15.2917 6Z"
        stroke="currentColor" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export default NotificationIcon;
