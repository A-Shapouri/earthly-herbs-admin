import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface CustomerGroupsListProps extends CacheProps{
  page?: number

  sort?: string

  perPage?: number
}

const customerGroupsListApi = ({ page = 0, sort = 'id', perPage = 10 }: CustomerGroupsListProps) => {
  return fetchApi({
    method: 'GET',
    url: {
      pathname: routes['api.catalog.customer-groups.index'],
      query: {
        page: page,
        sort: sort,
        size: perPage,
      },
    },
    withToken: true,
    withPagination: true,
  });
};

export default customerGroupsListApi;
