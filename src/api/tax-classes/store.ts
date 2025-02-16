import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface TaxClassesStoreProps extends CacheProps{
  payload: object
}

const taxClassesStoreApi = ({ payload }: TaxClassesStoreProps) => {
  return fetchApi({
    method: 'POST',
    url: routes['api.localisations.taxClasses.index'],
    payload: payload,
    withToken: true,
  });
};

export default taxClassesStoreApi;
