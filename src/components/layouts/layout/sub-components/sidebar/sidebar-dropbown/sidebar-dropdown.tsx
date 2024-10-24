import React from 'react';
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import getParseRoute from '@utils/helpers/parse-route';
import { DictionariesTypes } from '@dictionaries';
import Text from '@elements/text';

const SidebarDropdown = ({ item }: any) => {
  const pathname = usePathname();
  const { lang } = useParams<{ lang: DictionariesTypes }>();

  return (
    <>
      <ul className="mb-5.5 mt-4 flex flex-col gap-2.5 pl-6">
        {item.map((item: any, index: number) => (
          <li key={index}>
            <Link
              href={getParseRoute({ pathname: item.route, locale: lang })}
              className={`group relative flex items-center gap-2.5 rounded-md px-4`}
            >
              <Text type={'medium'} typography={['xxs', 'xxs']} color={pathname === '/' + lang + item.route ? 'white' : 'grey.300'}>
                {item.label}
              </Text>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default SidebarDropdown;
