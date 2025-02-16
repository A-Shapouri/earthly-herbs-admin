import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface TaxRatesShowProps extends CacheProps{
  id: string
}

const taxRatesShowApi = ({ id }: TaxRatesShowProps) => {
  return fetchApi({
    method: 'GET',
    url: {
      pathname: routes['api.localisations.taxRates.show'],
      query: {
        id: id,
      },
    },
    withToken: true,
  });
};

export default taxRatesShowApi;
