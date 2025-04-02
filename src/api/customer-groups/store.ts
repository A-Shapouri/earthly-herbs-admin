import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface CustomerGroupsStoreProps extends CacheProps{
  payload: object
}

const customerGroupsStoreApi = ({ payload }: CustomerGroupsStoreProps) => {
  return fetchApi({
    method: 'POST',
    url: routes['api.catalog.customer-groups.index'],
    payload: payload,
    withToken: true,
  });
};

export default customerGroupsStoreApi;
