import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface OrdersDeleteProps extends CacheProps{
  id: string
}

const ordersDeleteApi = ({ id }: OrdersDeleteProps) => {
  return fetchApi({
    method: 'DELETE',
    url: {
      pathname: routes['api.catalog.orders.show'],
      query: {
        id: id,
      },
    },
    withToken: true,
  });
};

export default ordersDeleteApi;
