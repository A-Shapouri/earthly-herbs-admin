import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface OrderShipmentDeleteProps extends CacheProps{
  id: string
}

const orderShipmentDeleteApi = ({ id }: OrderShipmentDeleteProps) => {
  return fetchApi({
    method: 'DELETE',
    url: {
      pathname: routes['api.catalog.order-shipment.delete'],
      query: {
        id: id,
      },
    },
    withToken: true,
  });
};

export default orderShipmentDeleteApi;
