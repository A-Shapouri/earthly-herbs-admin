import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface LengthClassesStoreProps extends CacheProps{
  payload: object
}

const lengthClassesStoreApi = ({ payload }: LengthClassesStoreProps) => {
  return fetchApi({
    method: 'POST',
    url: routes['api.localisations.lengthClasses.index'],
    payload: payload,
    withToken: true,
  });
};

export default lengthClassesStoreApi;
