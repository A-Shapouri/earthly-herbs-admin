import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface OrderOptionDeleteProps extends CacheProps{
  id: string
}

const orderOptionDeleteApi = ({ id }: OrderOptionDeleteProps) => {
  return fetchApi({
    method: 'DELETE',
    url: {
      pathname: routes['api.catalog.order-option.delete'],
      query: {
        id: id,
      },
    },
    withToken: true,
  });
};

export default orderOptionDeleteApi;
