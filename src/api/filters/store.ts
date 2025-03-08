import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface FiltersStoreProps extends CacheProps{
  payload: object
}

const filtersStoreApi = ({ payload }: FiltersStoreProps) => {
  return fetchApi({
    method: 'POST',
    url: routes['api.catalog.filters.index'],
    payload: payload,
    withToken: true,
  });
};

export default filtersStoreApi;
