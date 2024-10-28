import { IconsProps } from '../icons.props';

const ComplaintMenuIcon = ({ fill = 'none', className = 'h-6 w-6' }: IconsProps) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill={fill} className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M20.0101 18.5101L15.0601 13.5601" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10"
        strokeLinecap="round" strokeLinejoin="round"/>
      <path
        d="M15.0602 13.56L11.5202 17.1C10.7402 17.88 9.47024 17.88 8.69024 17.1L4.45023 12.86C3.67023 12.08 3.67023 10.81 4.45023 10.03L11.5202 2.96C12.3002 2.18 13.5702 2.18 14.3502 2.96L18.5902 7.20002C19.3702 7.98002 19.3702 9.25001 18.5902 10.03L15.0602 13.56Z"
        stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2 21H8" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"
        strokeLinejoin="round"/>
      <path d="M6.56006 7.91992L13.6301 14.9899" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10"
        strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

export default ComplaintMenuIcon;
