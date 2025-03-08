import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface FiltersDeleteProps extends CacheProps{
  id: string
}

const filtersDeleteApi = ({ id }: FiltersDeleteProps) => {
  return fetchApi({
    method: 'DELETE',
    url: {
      pathname: routes['api.catalog.filters.show'],
      query: {
        id: id,
      },
    },
    withToken: true,
  });
};

export default filtersDeleteApi;
