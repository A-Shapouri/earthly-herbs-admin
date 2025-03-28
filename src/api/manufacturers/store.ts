import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface ManufacturersStoreProps extends CacheProps{
  payload: object
}

const manufacturersStoreApi = ({ payload }: ManufacturersStoreProps) => {
  return fetchApi({
    method: 'POST',
    url: routes['api.catalog.manufacturers.index'],
    payload: payload,
    withToken: true,
  });
};

export default manufacturersStoreApi;
