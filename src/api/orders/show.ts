import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface OrdersShowProps extends CacheProps{
  id: string
}

const ordersShowApi = ({ id }: OrdersShowProps) => {
  return fetchApi({
    method: 'GET',
    url: {
      pathname: routes['api.catalog.orders.show'],
      query: {
        id: id,
      },
    },
    withToken: true,
  });
};

export default ordersShowApi;
