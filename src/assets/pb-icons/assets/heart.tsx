import { IconsProps } from '../icons.props';

const HeartIcon = ({ fill = 'none', className = 'h-6 w-6' }: IconsProps) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill={fill} className={className} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M19 8.77673C18.7932 8.10613 18.4228 7.47603 17.8547 6.91284C17.4075 6.46941 16.9433 6.17698 16.4776 6M10.3993 4.14593C8.72567 3.08425 6.02273 2.08032 3.68853 4.46071C-1.85248 10.1114 7.64984 21 12 21C16.3501 21 25.8525 10.1114 20.3115 4.46072C17.9773 2.08035 15.2744 3.08427 13.6007 4.14593C12.655 4.74582 11.345 4.74582 10.3993 4.14593Z"
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
};

export default HeartIcon;
