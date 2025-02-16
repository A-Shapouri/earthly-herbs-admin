import React from 'react';
import { AlertProps } from './alert.props';
import classNames from '@utils/helpers/class-names';
import { SEVERITY, VARIANT } from './alert.style';
import Button from '../button';
import Text from '../text';
import Div from '../div';

export const Alert = ({ title, description, severity = 'danger', variant = 'filled', className, onClose, ...rest }: AlertProps) => {
  return (
    <Div
      className={classNames(
        `justify-between items-start rounded-lg min-h-12 p-3 font-sans-regular text-m-tiny sm:text-t-tiny md:text-d-tiny`,
        SEVERITY[severity],
        VARIANT[variant],
        className,
      )}
      {...rest}>
      <Div className={'justify-between w-full gap-x-1.5'}>
        <Div className='w-8 h-8 items-center justify-center'>
          <Icon severity={severity}/>
        </Div>
        <Div className={'flex-col w-full gap-y-3'}>
          {title ? <Text color={'inherit'} type={'bold'} className={'mt-1 ml-2'} typography={['xs', 'xs']} align={'start'}>{title}</Text> : null}
          {description ? <Text color={'inherit'} className={'ml-2 !whitespace-pre-line'} typography={['xs', 'xs']} align={'start'}>{description}</Text> : null}
        </Div>
      </Div>
      <Button size={'small'} variant={'text'} color={'inherit'} shape={'square'} onClick={onClose}>
        <svg className={'h-3 w-3 min-h-3 min-w-3'} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.0202 1.68693C11.2155 1.49167 11.2155 1.17508 11.0202 0.979821C10.825 0.784558 10.5084 0.784558 10.3131 0.979821L5.99999 5.29294L1.68687 0.979823C1.4916 0.78456 1.17502 0.78456 0.97976 0.979823C0.784497 1.17508 0.784497 1.49167 0.97976 1.68693L5.29288 6.00005L0.979778 10.3132C0.784515 10.5084 0.784515 10.825 0.979778 11.0203C1.17504 11.2155 1.49162 11.2155 1.68688 11.0203L5.99999 6.70716L10.3131 11.0203C10.5084 11.2155 10.8249 11.2155 11.0202 11.0203C11.2155 10.825 11.2155 10.5084 11.0202 10.3132L6.70709 6.00005L11.0202 1.68693Z" fill="currentColor"/>
        </svg>
      </Button>
    </Div>
  );
};

const Icon = ({ severity }: { severity: 'danger' | 'success' | 'info' | 'warning' }) => {
  if (severity === 'success') {
    return (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.5588 8.50027C16.8351 8.19167 16.8089 7.71752 16.5003 7.44123C16.1917 7.16493 15.7175 7.19113 15.4412 7.49973L12.0721 11.2629C11.3894 12.0254 10.9296 12.5363 10.5365 12.8667C10.1621 13.1814 9.94213 13.25 9.75 13.25C9.55787 13.25 9.33794 13.1814 8.96348 12.8667C8.5704 12.5363 8.11064 12.0254 7.42794 11.2629L6.55877 10.2921C6.28248 9.98349 5.80833 9.9573 5.49973 10.2336C5.19113 10.5099 5.16493 10.984 5.44123 11.2926L6.34751 12.3049C6.98337 13.0152 7.51374 13.6076 7.99835 14.0149C8.51099 14.4458 9.06393 14.75 9.75 14.75C10.4361 14.75 10.989 14.4458 11.5016 14.0149C11.9862 13.6076 12.5166 13.0152 13.1524 12.305L16.5588 8.50027Z" fill="currentColor"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M11 0.25C5.06294 0.25 0.25 5.06294 0.25 11C0.25 16.9371 5.06294 21.75 11 21.75C16.9371 21.75 21.75 16.9371 21.75 11C21.75 5.06294 16.9371 0.25 11 0.25ZM1.75 11C1.75 5.89137 5.89137 1.75 11 1.75C16.1086 1.75 20.25 5.89137 20.25 11C20.25 16.1086 16.1086 20.25 11 20.25C5.89137 20.25 1.75 16.1086 1.75 11Z" fill="currentColor"/>
      </svg>

    );
  }

  if (severity === 'warning') {
    return (
      <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.7499 6C11.7499 5.58579 11.4141 5.25 10.9999 5.25C10.5857 5.25 10.2499 5.58579 10.2499 6V12C10.2499 12.4142 10.5857 12.75 10.9999 12.75C11.4141 12.75 11.7499 12.4142 11.7499 12V6Z" fill="currentColor"/>
        <path fillRule="evenodd" clipRule="evenodd"
          d="M13.3387 0.747113C11.8499 0.0842957 10.1499 0.0842957 8.66118 0.747113C7.73036 1.16154 6.9787 1.95575 6.20247 3.05442C5.42869 4.14963 4.56214 5.65055 3.44265 7.58957L3.40174 7.66043C2.28224 9.59944 1.41568 11.1004 0.854096 12.3181C0.290734 13.5396 -0.0212427 14.5877 0.085263 15.601C0.255603 17.2217 1.10562 18.694 2.424 19.6518C3.24832 20.2507 4.31195 20.5046 5.65154 20.6275C6.98689 20.75 8.71999 20.75 10.9589 20.75H11.0408C13.2798 20.75 15.0129 20.75 16.3483 20.6275C17.6879 20.5046 18.7515 20.2507 19.5758 19.6518C20.8942 18.694 21.7442 17.2217 21.9146 15.601C22.0211 14.5877 21.7091 13.5396 21.1457 12.3181C20.5841 11.1004 19.7176 9.59942 18.5981 7.66037L18.5571 7.58948C17.4377 5.65051 16.5711 4.14961 15.7974 3.05442C15.0211 1.95575 14.2695 1.16154 13.3387 0.747113ZM9.27129 2.11743C10.3716 1.62752 11.6282 1.62752 12.7285 2.11743C13.2819 2.36379 13.8407 2.88446 14.5723 3.91996C15.3016 4.95228 16.1344 6.39321 17.2786 8.375C18.4228 10.3568 19.2543 11.7985 19.7836 12.9463C20.3146 14.0976 20.4861 14.8419 20.4228 15.4442C20.2969 16.6421 19.6686 17.7303 18.6942 18.4383C18.2041 18.7943 17.4738 19.0179 16.2113 19.1338C14.9526 19.2492 13.2883 19.25 10.9999 19.25C8.71155 19.25 7.04726 19.2492 5.78858 19.1338C4.526 19.0179 3.79569 18.7943 3.30568 18.4383C2.33123 17.7303 1.70295 16.6421 1.57705 15.4442C1.51373 14.8419 1.68524 14.0976 2.21622 12.9463C2.74556 11.7985 3.57705 10.3568 4.72123 8.375C5.86542 6.39321 6.69821 4.95228 7.42756 3.91997C8.15916 2.88446 8.71797 2.36379 9.27129 2.11743Z"
          fill="currentColor"/>
        <path d="M12 15C12 15.5523 11.5522 16 11 16C10.4477 16 9.99996 15.5523 9.99996 15C9.99996 14.4477 10.4477 14 11 14C11.5522 14 12 14.4477 12 15Z" fill="currentColor"/>
      </svg>
    );
  }

  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 15C12 15.5523 11.5523 16 11 16C10.4477 16 10 15.5523 10 15C10 14.4477 10.4477 14 11 14C11.5523 14 12 14.4477 12 15Z" fill="currentColor"/>
      <path d="M11.75 6C11.75 5.58579 11.4142 5.25 11 5.25C10.5858 5.25 10.25 5.58579 10.25 6V12C10.25 12.4142 10.5858 12.75 11 12.75C11.4142 12.75 11.75 12.4142 11.75 12V6Z" fill="currentColor"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M11 0.25C5.06294 0.25 0.25 5.06294 0.25 11C0.25 16.9371 5.06294 21.75 11 21.75C16.9371 21.75 21.75 16.9371 21.75 11C21.75 5.06294 16.9371 0.25 11 0.25ZM1.75 11C1.75 5.89137 5.89137 1.75 11 1.75C16.1086 1.75 20.25 5.89137 20.25 11C20.25 16.1086 16.1086 20.25 11 20.25C5.89137 20.25 1.75 16.1086 1.75 11Z" fill="currentColor"/>
    </svg>
  );
};
export default Alert;
