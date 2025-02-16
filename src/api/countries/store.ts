import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface CountriesStoreProps extends CacheProps{
  payload: object
}

const countriesStoreApi = ({ payload }: CountriesStoreProps) => {
  return fetchApi({
    method: 'POST',
    url: routes['api.localisations.countries.index'],
    payload: payload,
    withToken: true,
  });
};

export default countriesStoreApi;
