import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface ShippingCouriersShowProps extends CacheProps{
  id: string
}

const shippingCouriersShowApi = ({ id }: ShippingCouriersShowProps) => {
  return fetchApi({
    method: 'GET',
    url: {
      pathname: routes['api.localisations.shippingCouriers.show'],
      query: {
        id: id,
      },
    },
    withToken: true,
  });
};

export default shippingCouriersShowApi;
