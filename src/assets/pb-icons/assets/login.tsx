import { IconsProps } from '../icons.props';

const LoginIcon = ({ fill = 'none', className = 'h-6 w-6' }: IconsProps) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" className={className} fill={fill}
      xmlns="http://www.w3.org/2000/svg">
      <path d="M11.68 14.62L14.24 12.06L11.68 9.5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10"
        strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4 12.06H14.17" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"
        strokeLinejoin="round"/>
      <path d="M12 4C16.42 4 20 7 20 12C20 17 16.42 20 12 20" stroke="currentColor" strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

export default LoginIcon;
