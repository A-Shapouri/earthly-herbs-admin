'use client';
import React, { ReactNode, useEffect, useRef, useState } from 'react';
import Text from '../text';
interface IProps {
  open?: boolean;
  header: string | React.ReactNode;
  children: ReactNode
}
import ArrowUpIcon from '@icons-components/arrow-up';
import classNames from '@utils/helpers/class-names';

const Collapsible: React.FC<IProps> = ({
  open,
  children,
  header,
}) => {
  const [isOpen, setIsOpen] = useState(open);
  const [height, setHeight] = useState<number | undefined>(
    open ? undefined : 0
  );
  const ref = useRef<HTMLDivElement>(null);
  const handleFilterOpening = () => {
    setIsOpen((prev) => !prev);
  };
  useEffect(() => {
    if (!height || !isOpen || !ref.current) { return undefined; }
    const resizeObserver = new ResizeObserver((el) => {
      setHeight(el[0].contentRect.height);
    });
    resizeObserver.observe(ref.current);
    return () => {
      resizeObserver.disconnect();
    };
  }, [height, isOpen]);
  useEffect(() => {
    if (isOpen) { setHeight(ref.current?.getBoundingClientRect().height); } else { setHeight(0); }
  }, [isOpen]);
  return (
    <div className={'transition duration-300'}>
      <div>
        <label className={'flex justify-between py-1.5 hover:cursor-pointer'}>
          <Text className={'select-none'}>{header}</Text>
          <button
            className={classNames('transition duration-300', !isOpen ? 'rotate-180' : 'rotate-0')}
            onClick={handleFilterOpening}
          >
            <ArrowUpIcon />
          </button>
        </label>
      </div>
      <div className={'overflow-hidden transition-all duration-300 ease-in-out'} style={{ height }}>
        <div ref={ref}>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Collapsible;
