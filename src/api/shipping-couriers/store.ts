import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface ShippingCouriersStoreProps extends CacheProps{
  payload: object
}

const shippingCouriersStoreApi = ({ payload }: ShippingCouriersStoreProps) => {
  return fetchApi({
    method: 'POST',
    url: routes['api.localisations.shippingCouriers.index'],
    payload: payload,
    withToken: true,
  });
};

export default shippingCouriersStoreApi;
