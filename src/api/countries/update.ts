import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface CountriesUpdateProps extends CacheProps{
  payload: object
  id: string
}

const countriesUpdateApi = ({ payload, id }: CountriesUpdateProps) => {
  return fetchApi({
    method: 'PUT',
    url: {
      pathname: routes['api.localisations.countries.show'],
      query: {
        id: id,
      },
    },
    payload: payload,
    withToken: true,
  });
};

export default countriesUpdateApi;
