import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface LanguagesUpdateProps extends CacheProps{
  payload: object
  id: string
}

const languagesUpdateApi = ({ payload, id }: LanguagesUpdateProps) => {
  return fetchApi({
    method: 'PUT',
    url: {
      pathname: routes['api.localisations.languages.show'],
      query: {
        id: id,
      },
    },
    payload: payload,
    withToken: true,
  });
};

export default languagesUpdateApi;
