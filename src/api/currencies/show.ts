import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface CurrenciesShowProps extends CacheProps{
  id: string
}

const currenciesShowApi = ({ id }: CurrenciesShowProps) => {
  return fetchApi({
    method: 'GET',
    url: {
      pathname: routes['api.localisations.currencies.show'],
      query: {
        id: id,
      },
    },
    withToken: true,
  });
};

export default currenciesShowApi;
