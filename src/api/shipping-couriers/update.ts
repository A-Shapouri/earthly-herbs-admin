import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface ShippingCouriersUpdateProps extends CacheProps{
  payload: object
  id: string
}

const shippingCouriersUpdateApi = ({ payload, id }: ShippingCouriersUpdateProps) => {
  return fetchApi({
    method: 'PUT',
    url: {
      pathname: routes['api.localisations.shippingCouriers.show'],
      query: {
        id: id,
      },
    },
    payload: payload,
    withToken: true,
  });
};

export default shippingCouriersUpdateApi;
