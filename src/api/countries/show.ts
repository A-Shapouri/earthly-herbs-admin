import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface CountriesShowProps extends CacheProps{
  id: string
}

const countriesShowApi = ({ id }: CountriesShowProps) => {
  return fetchApi({
    method: 'GET',
    url: {
      pathname: routes['api.localisations.countries.show'],
      query: {
        id: id,
      },
    },
    withToken: true,
  });
};

export default countriesShowApi;
