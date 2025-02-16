import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface CurrenciesStoreProps extends CacheProps{
  payload: object
}

const currenciesStoreApi = ({ payload }: CurrenciesStoreProps) => {
  return fetchApi({
    method: 'POST',
    url: routes['api.localisations.currencies.index'],
    payload: payload,
    withToken: true,
  });
};

export default currenciesStoreApi;
