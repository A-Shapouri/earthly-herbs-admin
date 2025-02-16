import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface TaxRatesStoreProps extends CacheProps{
  payload: object
}

const taxRatesStoreApi = ({ payload }: TaxRatesStoreProps) => {
  return fetchApi({
    method: 'POST',
    url: routes['api.localisations.taxRates.index'],
    payload: payload,
    withToken: true,
  });
};

export default taxRatesStoreApi;
