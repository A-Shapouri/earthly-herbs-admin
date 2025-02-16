import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface CurrenciesDeleteProps extends CacheProps{
  id: string
}

const currenciesDeleteApi = ({ id }: CurrenciesDeleteProps) => {
  return fetchApi({
    method: 'DELETE',
    url: {
      pathname: routes['api.localisations.currencies.show'],
      query: {
        id: id,
      },
    },
    withToken: true,
  });
};

export default currenciesDeleteApi;
