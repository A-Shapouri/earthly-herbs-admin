import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface CurrenciesUpdateProps extends CacheProps{
  payload: object
  id: string
}

const currenciesUpdateApi = ({ payload, id }: CurrenciesUpdateProps) => {
  return fetchApi({
    method: 'PUT',
    url: {
      pathname: routes['api.localisations.currencies.show'],
      query: {
        id: id,
      },
    },
    payload: payload,
    withToken: true,
  });
};

export default currenciesUpdateApi;
