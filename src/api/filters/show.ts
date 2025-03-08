import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface FiltersShowProps extends CacheProps{
  id: string
}

const filtersShowApi = ({ id }: FiltersShowProps) => {
  return fetchApi({
    method: 'GET',
    url: {
      pathname: routes['api.catalog.filters.show'],
      query: {
        id: id,
      },
    },
    withToken: true,
  });
};

export default filtersShowApi;
