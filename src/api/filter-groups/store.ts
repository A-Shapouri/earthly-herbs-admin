import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface FilterGroupsStoreProps extends CacheProps{
  payload: object
}

const filterGroupsStoreApi = ({ payload }: FilterGroupsStoreProps) => {
  return fetchApi({
    method: 'POST',
    url: routes['api.catalog.filter-groups.index'],
    payload: payload,
    withToken: true,
  });
};

export default filterGroupsStoreApi;
