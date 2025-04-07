import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface OrderTotalDeleteProps extends CacheProps{
  id: string
}

const orderTotalDeleteApi = ({ id }: OrderTotalDeleteProps) => {
  return fetchApi({
    method: 'DELETE',
    url: {
      pathname: routes['api.catalog.order-total.delete'],
      query: {
        id: id,
      },
    },
    withToken: true,
  });
};

export default orderTotalDeleteApi;
