import { ReactNode } from 'react';

export interface PopperProps {
  position?: 'bottom-left' | 'bottom' | 'bottom-right' | 'top-left' | 'top' | 'top-right' | 'left-start' | 'left' | 'left-end' | 'right-start' | 'right' | 'right-end';

  showPopper?: boolean;

  closeOnScroll?: boolean;

  closeOnClickOutside?: boolean;

  className?: string;

  handlePopper?: any;

  children: ReactNode;
}
