import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface OrderStatusDeleteProps extends CacheProps{
  id: string
}

const orderStatusDeleteApi = ({ id }: OrderStatusDeleteProps) => {
  return fetchApi({
    method: 'DELETE',
    url: {
      pathname: routes['api.catalog.order-status.delete'],
      query: {
        id: id,
      },
    },
    withToken: true,
  });
};

export default orderStatusDeleteApi;
