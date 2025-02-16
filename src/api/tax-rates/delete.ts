import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface TaxRatesDeleteProps extends CacheProps{
  id: string
}

const taxRatesDeleteApi = ({ id }: TaxRatesDeleteProps) => {
  return fetchApi({
    method: 'DELETE',
    url: {
      pathname: routes['api.localisations.taxRates.show'],
      query: {
        id: id,
      },
    },
    withToken: true,
  });
};

export default taxRatesDeleteApi;
