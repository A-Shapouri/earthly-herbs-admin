import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface OrderRecurringDeleteProps extends CacheProps{
  id: string
}

const orderRecurringDeleteApi = ({ id }: OrderRecurringDeleteProps) => {
  return fetchApi({
    method: 'DELETE',
    url: {
      pathname: routes['api.catalog.order-recurring.delete'],
      query: {
        id: id,
      },
    },
    withToken: true,
  });
};

export default orderRecurringDeleteApi;
