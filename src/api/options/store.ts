import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface OptionsStoreProps extends CacheProps{
  payload: object
}

const optionsStoreApi = ({ payload }: OptionsStoreProps) => {
  return fetchApi({
    method: 'POST',
    url: routes['api.catalog.options.index'],
    payload: payload,
    withToken: true,
  });
};

export default optionsStoreApi;
