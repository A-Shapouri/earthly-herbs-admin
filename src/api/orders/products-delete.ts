import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface OrderProductDeleteProps extends CacheProps{
  id: string
}

const orderProductDeleteApi = ({ id }: OrderProductDeleteProps) => {
  return fetchApi({
    method: 'DELETE',
    url: {
      pathname: routes['api.catalog.order-product.delete'],
      query: {
        id: id,
      },
    },
    withToken: true,
  });
};

export default orderProductDeleteApi;
