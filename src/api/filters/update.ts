import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface FiltersUpdateProps extends CacheProps{
  payload: object
  id: string
}

const filtersUpdateApi = ({ payload, id }: FiltersUpdateProps) => {
  return fetchApi({
    method: 'PUT',
    url: {
      pathname: routes['api.catalog.filters.show'],
      query: {
        id: id,
      },
    },
    payload: payload,
    withToken: true,
  });
};

export default filtersUpdateApi;
