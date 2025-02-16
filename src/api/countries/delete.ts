import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface CountriesDeleteProps extends CacheProps{
  id: string
}

const countriesDeleteApi = ({ id }: CountriesDeleteProps) => {
  return fetchApi({
    method: 'DELETE',
    url: {
      pathname: routes['api.localisations.countries.show'],
      query: {
        id: id,
      },
    },
    withToken: true,
  });
};

export default countriesDeleteApi;
