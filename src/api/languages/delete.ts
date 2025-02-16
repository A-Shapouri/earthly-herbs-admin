import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface LanguagesDeleteProps extends CacheProps{
  id: string
}

const languagesDeleteApi = ({ id }: LanguagesDeleteProps) => {
  return fetchApi({
    method: 'DELETE',
    url: {
      pathname: routes['api.localisations.languages.show'],
      query: {
        id: id,
      },
    },
    withToken: true,
  });
};

export default languagesDeleteApi;
