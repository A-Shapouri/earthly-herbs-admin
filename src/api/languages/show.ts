import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface LanguagesShowProps extends CacheProps{
  id: string
}

const languagesShowApi = ({ id }: LanguagesShowProps) => {
  return fetchApi({
    method: 'GET',
    url: {
      pathname: routes['api.localisations.languages.show'],
      query: {
        id: id,
      },
    },
    withToken: true,
  });
};

export default languagesShowApi;
