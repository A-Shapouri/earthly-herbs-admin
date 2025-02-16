import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface ShippingCouriersDeleteProps extends CacheProps{
  id: string
}

const shippingCouriersDeleteApi = ({ id }: ShippingCouriersDeleteProps) => {
  return fetchApi({
    method: 'DELETE',
    url: {
      pathname: routes['api.localisations.shippingCouriers.show'],
      query: {
        id: id,
      },
    },
    withToken: true,
  });
};

export default shippingCouriersDeleteApi;
