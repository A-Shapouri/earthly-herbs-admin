import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface FilterGroupsShowProps extends CacheProps{
  id: string
}

const filterGroupsShowApi = ({ id }: FilterGroupsShowProps) => {
  return fetchApi({
    method: 'GET',
    url: {
      pathname: routes['api.catalog.filter-groups.show'],
      query: {
        id: id,
      },
    },
    withToken: true,
  });
};

export default filterGroupsShowApi;
