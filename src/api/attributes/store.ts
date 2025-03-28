import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface AttributesStoreProps extends CacheProps{
  payload: object
}

const attributesStoreApi = ({ payload }: AttributesStoreProps) => {
  return fetchApi({
    method: 'POST',
    url: routes['api.catalog.attributes.index'],
    payload: payload,
    withToken: true,
  });
};

export default attributesStoreApi;
