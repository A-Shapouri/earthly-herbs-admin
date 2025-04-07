import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface OrdersStoreProps extends CacheProps{
  payload: object
}

const ordersStoreApi = ({ payload }: OrdersStoreProps) => {
  return fetchApi({
    method: 'POST',
    url: routes['api.catalog.orders.index'],
    payload: payload,
    withToken: true,
  });
};

export default ordersStoreApi;
