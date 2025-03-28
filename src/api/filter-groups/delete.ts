import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface FilterGroupsDeleteProps extends CacheProps{
  id: string
}

const filterGroupsDeleteApi = ({ id }: FilterGroupsDeleteProps) => {
  return fetchApi({
    method: 'DELETE',
    url: {
      pathname: routes['api.catalog.filter-groups.show'],
      query: {
        id: id,
      },
    },
    withToken: true,
  });
};

export default filterGroupsDeleteApi;
