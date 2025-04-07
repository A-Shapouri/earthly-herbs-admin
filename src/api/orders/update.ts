import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface OrdersUpdateProps extends CacheProps{
  payload: object
  id: string
}

const ordersUpdateApi = ({ payload, id }: OrdersUpdateProps) => {
  return fetchApi({
    method: 'PUT',
    url: {
      pathname: routes['api.catalog.orders.show'],
      query: {
        id: id,
      },
    },
    payload: payload,
    withToken: true,
  });
};

export default ordersUpdateApi;
