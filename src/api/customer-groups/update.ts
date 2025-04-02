import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface CustomerGroupsUpdateProps extends CacheProps{
  payload: object
  id: string
}

const customerGroupsUpdateApi = ({ payload, id }: CustomerGroupsUpdateProps) => {
  return fetchApi({
    method: 'PUT',
    url: {
      pathname: routes['api.catalog.customer-groups.show'],
      query: {
        id: id,
      },
    },
    payload: payload,
    withToken: true,
  });
};

export default customerGroupsUpdateApi;
