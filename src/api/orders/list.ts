import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface OrdersListProps extends CacheProps{
  page?: number

  sort?: string

  perPage?: number
}

const ordersListApi = ({ page = 0, sort = 'id', perPage = 10 }: OrdersListProps) => {
  return fetchApi({
    method: 'GET',
    url: {
      pathname: routes['api.catalog.orders.index'],
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

export default ordersListApi;
