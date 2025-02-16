import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface WeightClassesStoreProps extends CacheProps{
  payload: object
}

const weightClassesStoreApi = ({ payload }: WeightClassesStoreProps) => {
  return fetchApi({
    method: 'POST',
    url: routes['api.localisations.weightClasses.index'],
    payload: payload,
    withToken: true,
  });
};

export default weightClassesStoreApi;
