import { IconsProps } from '../icons.props';

const VersionMenuIcon = ({ fill = 'none', className = 'h-6 w-6' }: IconsProps) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill={fill} className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor"
        strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path
        d="M18.3801 15.2702V7.58023C18.3801 6.81023 17.7601 6.25024 17.0001 6.31024H16.9601C15.6201 6.42024 13.5901 7.11025 12.4501 7.82025L12.3401 7.89026C12.1601 8.00026 11.8501 8.00026 11.6601 7.89026L11.5001 7.79025C10.3701 7.08025 8.34012 6.41023 7.00012 6.30023C6.24012 6.24023 5.62012 6.81025 5.62012 7.57025V15.2702C5.62012 15.8802 6.1201 16.4602 6.7301 16.5302L6.9101 16.5602C8.2901 16.7402 10.4301 17.4502 11.6501 18.1202L11.6801 18.1302C11.8501 18.2302 12.1301 18.2302 12.2901 18.1302C13.5101 17.4502 15.6601 16.7502 17.0501 16.5602L17.2601 16.5302C17.8801 16.4602 18.3801 15.8902 18.3801 15.2702Z"
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 8.1001V17.6601" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

export default VersionMenuIcon;
