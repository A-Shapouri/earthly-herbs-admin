import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface TaxRatesUpdateProps extends CacheProps{
  payload: object
  id: string
}

const taxRatesUpdateApi = ({ payload, id }: TaxRatesUpdateProps) => {
  return fetchApi({
    method: 'PUT',
    url: {
      pathname: routes['api.localisations.taxRates.show'],
      query: {
        id: id,
      },
    },
    payload: payload,
    withToken: true,
  });
};

export default taxRatesUpdateApi;
