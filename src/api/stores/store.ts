import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface StoresStoreProps extends CacheProps{
  payload: object
}

const storesStoreApi = ({ payload }: StoresStoreProps) => {
  return fetchApi({
    method: 'POST',
    url: routes['api.localisations.stores.index'],
    payload: payload,
    withToken: true,
  });
};

export default storesStoreApi;
