import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface FilterGroupsUpdateProps extends CacheProps{
  payload: object
  id: string
}

const filterGroupsUpdateApi = ({ payload, id }: FilterGroupsUpdateProps) => {
  return fetchApi({
    method: 'PUT',
    url: {
      pathname: routes['api.catalog.filter-groups.show'],
      query: {
        id: id,
      },
    },
    payload: payload,
    withToken: true,
  });
};

export default filterGroupsUpdateApi;
