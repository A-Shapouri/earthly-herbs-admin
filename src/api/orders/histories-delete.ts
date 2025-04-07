import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface OrderHistoryDeleteProps extends CacheProps{
  id: string
}

const orderHistoryDeleteApi = ({ id }: OrderHistoryDeleteProps) => {
  return fetchApi({
    method: 'DELETE',
    url: {
      pathname: routes['api.catalog.order-history.delete'],
      query: {
        id: id,
      },
    },
    withToken: true,
  });
};

export default orderHistoryDeleteApi;
