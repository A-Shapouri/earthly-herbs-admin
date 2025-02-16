import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface LanguagesStoreProps extends CacheProps{
  payload: object
}

const languagesStoreApi = ({ payload }: LanguagesStoreProps) => {
  return fetchApi({
    method: 'POST',
    url: routes['api.localisations.languages.index'],
    payload: payload,
    withToken: true,
  });
};

export default languagesStoreApi;
