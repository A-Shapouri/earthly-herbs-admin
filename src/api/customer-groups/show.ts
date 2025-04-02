import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface CustomerGroupsShowProps extends CacheProps{
  id: string
}

const customerGroupsShowApi = ({ id }: CustomerGroupsShowProps) => {
  return fetchApi({
    method: 'GET',
    url: {
      pathname: routes['api.catalog.customer-groups.show'],
      query: {
        id: id,
      },
    },
    withToken: true,
  });
};

export default customerGroupsShowApi;
