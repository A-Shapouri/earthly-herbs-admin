import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface CustomerGroupsDeleteProps extends CacheProps{
  id: string
}

const customerGroupsDeleteApi = ({ id }: CustomerGroupsDeleteProps) => {
  return fetchApi({
    method: 'DELETE',
    url: {
      pathname: routes['api.catalog.customer-groups.show'],
      query: {
        id: id,
      },
    },
    withToken: true,
  });
};

export default customerGroupsDeleteApi;
